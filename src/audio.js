// All audio is synthesized at runtime — no external samples.
export class AudioEngine {
  constructor() {
    this.ctx = null;
    this.master = null;
    this.noiseBuffer = null;
    this.ambient = null;
    this.staticLoop = null;
    this.heartbeatTimer = 0;
    this.musicTimer = 0;
    this.enabled = true;
    this.started = false;
  }

  ensure() {
    if (this.ctx) return this.ctx;
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) return null;
    this.ctx = new Ctx();
    this.master = this.ctx.createGain();
    this.master.gain.value = 0.62;
    this.master.connect(this.ctx.destination);
    this.noiseBuffer = this.makeNoiseBuffer(2.5);
    return this.ctx;
  }

  async unlock() {
    const ctx = this.ensure();
    if (!ctx) return;
    if (ctx.state === 'suspended') await ctx.resume();
    this.started = true;
  }

  makeNoiseBuffer(seconds = 2, brown = false) {
    const ctx = this.ensure();
    const length = Math.floor(ctx.sampleRate * seconds);
    const buffer = ctx.createBuffer(1, length, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    let last = 0;
    for (let i = 0; i < length; i++) {
      const white = Math.random() * 2 - 1;
      if (brown) {
        last = (last + .02 * white) / 1.02;
        data[i] = last * 3.5;
      } else data[i] = white;
    }
    return buffer;
  }

  noiseSource({ brown = false, loop = true } = {}) {
    const ctx = this.ensure();
    const source = ctx.createBufferSource();
    source.buffer = brown ? this.makeNoiseBuffer(3, true) : this.noiseBuffer;
    source.loop = loop;
    return source;
  }

  tone(freq, duration, { type = 'sine', gain = .08, attack = .005, decay = null, slide = 0, delay = 0, filter = null } = {}) {
    const ctx = this.ensure();
    if (!ctx) return;
    const t0 = ctx.currentTime + delay;
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, t0);
    if (slide) osc.frequency.exponentialRampToValueAtTime(Math.max(20, freq + slide), t0 + duration);
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(Math.max(0.0002, gain), t0 + attack);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + duration);
    let node = osc;
    if (filter) {
      const f = ctx.createBiquadFilter();
      f.type = filter.type || 'lowpass';
      f.frequency.value = filter.frequency || 800;
      f.Q.value = filter.q || .7;
      node.connect(f);
      f.connect(g);
    } else node.connect(g);
    g.connect(this.master);
    osc.start(t0);
    osc.stop(t0 + duration + .04);
  }

  noiseBurst(duration = .2, { gain = .12, filter = 900, type = 'lowpass', brown = false, q = 1, delay = 0, sweep = 0 } = {}) {
    const ctx = this.ensure();
    if (!ctx) return;
    const t0 = ctx.currentTime + delay;
    const source = ctx.createBufferSource();
    source.buffer = brown ? this.makeNoiseBuffer(Math.max(1, duration + .1), true) : this.noiseBuffer;
    const f = ctx.createBiquadFilter();
    f.type = type;
    f.frequency.setValueAtTime(filter, t0);
    if (sweep) f.frequency.exponentialRampToValueAtTime(Math.max(30, filter + sweep), t0 + duration);
    f.Q.value = q;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(gain, t0 + Math.min(.02, duration * .15));
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + duration);
    source.connect(f);
    f.connect(g);
    g.connect(this.master);
    source.start(t0, Math.random() * .2);
    source.stop(t0 + duration + .03);
  }

  startMenu() {
    const ctx = this.ensure();
    if (!ctx || this.ambient) return;
    const source = this.noiseSource({ brown: true });
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 170;
    const gain = ctx.createGain();
    gain.gain.value = .035;
    source.connect(filter);
    filter.connect(gain);
    gain.connect(this.master);
    source.start();
    const drone = ctx.createOscillator();
    const droneGain = ctx.createGain();
    drone.type = 'sine';
    drone.frequency.value = 43;
    droneGain.gain.value = .018;
    drone.connect(droneGain);
    droneGain.connect(this.master);
    drone.start();
    this.ambient = { source, filter, gain, drone, droneGain };
    // Distant, out-of-tune music box.
    this.musicBox();
  }

  startShift() {
    const ctx = this.ensure();
    if (!ctx || this.fan) return;
    if (this.ambient) {
      this.ambient.gain.gain.setTargetAtTime(.018, ctx.currentTime, 1.5);
    }
    if (!this.ambient) this.startMenu();
    // Ceiling fan and fluorescent hum.
    const fanSource = this.noiseSource();
    const fanFilter = ctx.createBiquadFilter();
    fanFilter.type = 'lowpass';
    fanFilter.frequency.value = 500;
    const fanGain = ctx.createGain();
    fanGain.gain.value = .018;
    fanSource.connect(fanFilter); fanFilter.connect(fanGain); fanGain.connect(this.master);
    fanSource.start();
    const hum = ctx.createOscillator();
    const humGain = ctx.createGain();
    hum.type = 'sawtooth';
    hum.frequency.value = 120;
    humGain.gain.value = .0035;
    const humFilter = ctx.createBiquadFilter();
    humFilter.type = 'lowpass';
    humFilter.frequency.value = 300;
    hum.connect(humFilter); humFilter.connect(humGain); humGain.connect(this.master);
    hum.start();
    this.fan = { fanSource, fanGain, hum, humGain };
  }

  stopAmbient() {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    for (const obj of [this.ambient, this.fan, this.staticLoop]) {
      if (!obj) continue;
      for (const key of ['gain', 'fanGain', 'humGain', 'droneGain']) {
        if (obj[key]) obj[key].gain.setTargetAtTime(0.0001, t, .15);
      }
      setTimeout(() => {
        try {
          obj.source?.stop();
          obj.fanSource?.stop();
          obj.drone?.stop();
          obj.hum?.stop();
        } catch {}
      }, 500);
    }
    this.ambient = null;
    this.fan = null;
    this.staticLoop = null;
  }

  click() {
    this.tone(1100, .035, { type: 'square', gain: .025, filter: { frequency: 1800 } });
  }

  doorClose() {
    this.noiseBurst(.32, { gain: .12, filter: 280, brown: true });
    this.tone(65, .28, { type: 'sawtooth', gain: .09, slide: -28, filter: { frequency: 200 } });
    this.noiseBurst(.06, { gain: .08, filter: 2400, type: 'highpass', delay: .03 });
  }

  doorOpen() {
    this.noiseBurst(.28, { gain: .07, filter: 400, brown: true });
    this.tone(90, .2, { type: 'sawtooth', gain: .035, slide: 45, filter: { frequency: 260 } });
  }

  lightClick(on = true) {
    this.noiseBurst(.03, { gain: .06, filter: 2400, type: 'highpass' });
    if (on) this.tone(210, .12, { type: 'sawtooth', gain: .012, filter: { frequency: 1400 } });
  }

  cameraOn() {
    this.noiseBurst(.45, { gain: .06, filter: 1600, type: 'bandpass', q: 1.4 });
    this.tone(55, .4, { type: 'sine', gain: .035, slide: -15 });
    this.startStatic();
  }

  cameraOff() {
    this.noiseBurst(.12, { gain: .04, filter: 1000 });
    this.stopStatic();
  }

  cameraSwitch() {
    this.noiseBurst(.18, { gain: .06, filter: 2200, type: 'bandpass', q: 2 });
    this.tone(880, .06, { type: 'square', gain: .018 });
  }

  startStatic() {
    const ctx = this.ensure();
    if (!ctx || this.staticLoop) return;
    const source = this.noiseSource();
    const filter = ctx.createBiquadFilter();
    filter.type = 'highpass';
    filter.frequency.value = 1600;
    const gain = ctx.createGain();
    gain.gain.value = .016;
    source.connect(filter); filter.connect(gain); gain.connect(this.master);
    source.start();
    this.staticLoop = { source, gain, filter };
  }

  stopStatic() {
    if (!this.staticLoop || !this.ctx) return;
    const t = this.ctx.currentTime;
    this.staticLoop.gain.gain.setTargetAtTime(0.0001, t, .12);
    const loop = this.staticLoop;
    this.staticLoop = null;
    setTimeout(() => { try { loop.source.stop(); } catch {} }, 400);
  }

  footstep(pan = 0) {
    const ctx = this.ensure();
    if (!ctx) return;
    const source = this.noiseSource({ brown: true });
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 380;
    const gain = ctx.createGain();
    const panNode = ctx.createStereoPanner();
    panNode.pan.value = Math.max(-1, Math.min(1, pan));
    gain.gain.setValueAtTime(.0001, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(.06, ctx.currentTime + .012);
    gain.gain.exponentialRampToValueAtTime(.0001, ctx.currentTime + .28);
    source.connect(filter); filter.connect(gain); gain.connect(panNode); panNode.connect(this.master);
    source.start();
    source.stop(ctx.currentTime + .32);
  }

  knock(side = 0) {
    const ctx = this.ensure();
    if (!ctx) return;
    const pan = ctx.createStereoPanner();
    pan.pan.value = side;
    pan.connect(this.master);
    for (let i = 0; i < 3; i++) {
      const osc = ctx.createOscillator();
      const g = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(82, ctx.currentTime + i * .15);
      g.gain.setValueAtTime(.0001, ctx.currentTime + i * .15);
      g.gain.exponentialRampToValueAtTime(.09, ctx.currentTime + i * .15 + .006);
      g.gain.exponentialRampToValueAtTime(.0001, ctx.currentTime + i * .15 + .16);
      osc.connect(g); g.connect(pan);
      osc.start(ctx.currentTime + i * .15);
      osc.stop(ctx.currentTime + i * .15 + .18);
    }
  }

  breathing() {
    const ctx = this.ensure();
    if (!ctx) return;
    const source = this.noiseSource({ brown: true });
    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 420;
    filter.Q.value = .7;
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(.0001, ctx.currentTime);
    gain.gain.linearRampToValueAtTime(.03, ctx.currentTime + .5);
    gain.gain.linearRampToValueAtTime(.0001, ctx.currentTime + 1.3);
    source.connect(filter); filter.connect(gain); gain.connect(this.master);
    source.start();
    source.stop(ctx.currentTime + 1.4);
  }

  foxyRun() {
    this.noiseBurst(.8, { gain: .05, filter: 170, brown: true, sweep: -90 });
    this.tone(94, .45, { type: 'sawtooth', gain: .02, slide: -25, filter: { frequency: 260 } });
    for (let i = 0; i < 4; i++) this.footstep(i % 2 ? .8 : -.8);
  }

  foxyBlocked() {
    this.noiseBurst(.4, { gain: .17, filter: 280, brown: true });
    this.tone(58, .45, { type: 'square', gain: .06, slide: -22, filter: { frequency: 160 } });
  }

  cameraWarning() {
    this.tone(740, .13, { type: 'square', gain: .035 });
    this.tone(740, .13, { type: 'square', gain: .035, delay: .19 });
  }

  powerDown() {
    this.tone(140, 1.8, { type: 'sawtooth', gain: .09, slide: -120, filter: { frequency: 500 } });
    this.noiseBurst(1.3, { gain: .08, filter: 500, brown: true, sweep: -400 });
    this.stopFan();
  }

  stopFan() {
    if (!this.ctx || !this.fan) return;
    const fan = this.fan;
    this.fan = null;
    fan.fanGain.gain.setTargetAtTime(0.0001, this.ctx.currentTime, .3);
    fan.humGain.gain.setTargetAtTime(0.0001, this.ctx.currentTime, .3);
    setTimeout(() => { try { fan.fanSource.stop(); fan.hum.stop(); } catch {} }, 1200);
  }

  jumpscare() {
    const ctx = this.ensure();
    if (!ctx) return;
    this.stopStatic();
    const t = ctx.currentTime;
    this.noiseBurst(1.15, { gain: .28, filter: 3200, type: 'highpass' });
    this.noiseBurst(1.0, { gain: .18, filter: 180, brown: true });
    for (const freq of [58, 73, 91, 116, 147]) {
      const osc = ctx.createOscillator();
      const g = ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(freq * 2.4, t);
      osc.frequency.exponentialRampToValueAtTime(freq, t + .9);
      g.gain.setValueAtTime(.0001, t);
      g.gain.exponentialRampToValueAtTime(.06 + Math.random() * .03, t + .012);
      g.gain.exponentialRampToValueAtTime(.0001, t + 1.1);
      const f = ctx.createBiquadFilter();
      f.type = 'lowpass'; f.frequency.value = 1400;
      osc.connect(f); f.connect(g); g.connect(this.master);
      osc.start(t + Math.random() * .04); osc.stop(t + 1.2);
    }
    // Metal scream.
    for (let i = 0; i < 4; i++) {
      this.tone(1200 + i * 410, .6, { type: 'square', gain: .02, slide: -900, delay: i * .03 });
    }
  }

  chime() {
    const notes = [523.25, 659.25, 783.99, 1046.5];
    notes.forEach((f, i) => this.tone(f, 1.2, { type: 'sine', gain: .09, delay: i * .18, attack: .01 }));
    this.tone(261.63, 2, { type: 'triangle', gain: .04, delay: .1 });
  }

  powerOutMusic() {
    if (this.musicTimer) return;
    const melody = [659.25, 587.33, 523.25, 392, 523.25, 659.25, 783.99];
    let step = 0;
    const play = () => {
      if (!this.ctx) return;
      const f = melody[step % melody.length];
      this.tone(f, .34, { type: 'sine', gain: .04, attack: .005 });
      step++;
      if (step < 18) this.musicTimer = setTimeout(play, 420);
      else this.musicTimer = 0;
    };
    play();
  }

  musicBox() {
    // Slow, distant, deliberately imperfect.
    const melody = [523.25, 659.25, 587.33, 392, 440, 523.25, 349.23, 392];
    let step = 0;
    const play = () => {
      if (!this.ctx) return;
      if (!this.ambient) return;
      const f = melody[step % melody.length] * (0.997 + Math.random() * .006);
      this.tone(f, 1.0, { type: 'triangle', gain: .014, attack: .008 });
      step++;
      this.musicTimer = setTimeout(play, 850);
    };
    setTimeout(play, 2000);
  }

  stopMusic() {
    if (this.musicTimer) clearTimeout(this.musicTimer);
    this.musicTimer = 0;
  }

  heartbeat(rate = 1) {
    if (!this.ctx) return;
    const now = performance.now();
    if (now - this.heartbeatTimer < 700 / rate) return;
    this.heartbeatTimer = now;
    this.tone(56, .14, { type: 'sine', gain: .07, slide: -18 });
    this.tone(48, .18, { type: 'sine', gain: .055, slide: -12, delay: .17 });
  }

  staticCrackle() {
    this.noiseBurst(.06, { gain: .02, filter: 3400, type: 'highpass' });
  }
}
