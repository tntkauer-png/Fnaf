import * as THREE from 'three';
import { AudioEngine } from './audio.js';
import { setEyeGlow } from './models.js';

const NIGHT_CONFIGS = [
  {
    night: 1, duration: 84, baseDrain: .30, doorDrain: .80, lightDrain: .92, camDrain: .15,
    bonnie: { start: [17, 22], step: [15, 20], grace: 7.4 },
    chica: { start: [22, 27], step: [17, 22], grace: 7.0 },
    foxy: { first: 30, interval: 24, grace: 3.5 },
    flavor: 'The doors are yours. Keep them out until 6 AM.'
  },
  {
    night: 2, duration: 84, baseDrain: .33, doorDrain: .84, lightDrain: .94, camDrain: .16,
    bonnie: { start: [14, 19], step: [12, 17], grace: 6.5 },
    chica: { start: [18, 23], step: [14, 19], grace: 6.2 },
    foxy: { first: 26, interval: 21, grace: 3.2 },
    flavor: 'They know the building better than you do.'
  },
  {
    night: 3, duration: 82, baseDrain: .36, doorDrain: .88, lightDrain: .96, camDrain: .17,
    bonnie: { start: [11, 15], step: [10, 14], grace: 5.8 },
    chica: { start: [14, 18], step: [11, 15], grace: 5.6 },
    foxy: { first: 22, interval: 18, grace: 2.9 },
    flavor: 'The cameras are lying to you. The halls are not.'
  },
  {
    night: 4, duration: 80, baseDrain: .40, doorDrain: .92, lightDrain: .98, camDrain: .18,
    bonnie: { start: [9, 12], step: [8, 11], grace: 5.2 },
    chica: { start: [11, 14], step: [9, 12], grace: 5.0 },
    foxy: { first: 18, interval: 15, grace: 2.6 },
    flavor: 'The music is louder tonight. So are the footsteps.'
  },
  {
    night: 5, duration: 78, baseDrain: .44, doorDrain: .96, lightDrain: 1.0, camDrain: .19,
    bonnie: { start: [7.5, 10], step: [6.5, 9], grace: 4.6 },
    chica: { start: [9, 11.5], step: [7, 9.5], grace: 4.5 },
    foxy: { first: 15, interval: 12.5, grace: 2.3 },
    flavor: 'This is the night they stop pretending to be machines.'
  },
  {
    night: 6, duration: 78, baseDrain: .48, doorDrain: 1.0, lightDrain: 1.05, camDrain: .20,
    bonnie: { start: [6, 8], step: [5, 7], grace: 4.0 },
    chica: { start: [7, 9], step: [5.2, 7.4], grace: 3.9 },
    foxy: { first: 12, interval: 10, grace: 2.0 },
    flavor: 'There is no paycheck for this one. Only the shift.'
  }
];

const PAY = [0, 120.5, 120.5, 120.5, 120.5, 120.5, 200];
const STORAGE_KEY = 'fnaf-nightshift-v3';
const QUALITY_DPR = { performance: 1, balanced: 1.4, high: 2 };

const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const rand = (a, b) => a + Math.random() * (b - a);

function defaultSave() {
  const coarse = window.matchMedia?.('(pointer: coarse)').matches;
  return {
    unlocked: 1,
    current: 1,
    quality: coarse || (navigator.maxTouchPoints || 0) > 0 ? 'high' : 'balanced',
    haptics: true,
    shake: true,
    wins: 0
  };
}

function loadSave() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null');
    return { ...defaultSave(), ...(parsed || {}) };
  } catch {
    return defaultSave();
  }
}

function timeLabel(seconds, duration) {
  const hours = clamp(Math.floor((seconds / duration) * 6), 0, 6);
  const hourNames = ['12', '1', '2', '3', '4', '5', '6'];
  return { hour: hours, label: `${hourNames[hours]} AM`, value: hourNames[hours], ampm: 'AM' };
}

function fullTimeLabel(seconds, duration) {
  const total = clamp(seconds / duration, 0, 1) * 360;
  const h = Math.floor(total / 60);
  const m = Math.floor(total % 60);
  const s = Math.floor((total * 60) % 60);
  const hn = ['12', '1', '2', '3', '4', '5', '6'][Math.min(6, h)];
  return `${hn}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')} AM`;
}

export class Game {
  constructor({ renderer, scene, world }) {
    this.renderer = renderer;
    this.scene = scene;
    this.world = world;
    this.audio = new AudioEngine();
    this.save = loadSave();
    this.selectedNight = clamp(this.save.current || this.save.unlocked, 1, 6);
    this.state = 'menu';
    this.doors = { left: false, right: false };
    this.lights = { left: false, right: false };
    this.doorAmounts = [0, 0];
    this.hallLights = [0, 0];
    this.power = 100;
    this.elapsed = 0;
    this.powerOut = false;
    this.blackoutTimer = 0;
    this.camId = '1';
    this.camOpen = false;
    this.coveWatch = 0;
    this.drag = null;
    this.hasDragged = false;
    this.keys = new Set();
    this.toastTimer = 0;
    this.hints = [];
    this.camAlert = { text: '', time: 0 };
    this.jump = null;
    this.deathReason = '';
    this.menuTime = 0;
    this.fpsSample = { time: 0, frames: 0, adjusted: false };
    this.dom = this.findDom();
    this.noiseUrl = this.makeNoiseTexture();
    document.documentElement.style.setProperty('--noise', `url(${this.noiseUrl})`);
    this.scene.add(this.world.officeCamera);
    this.scareLight = new THREE.PointLight(0xffe7c6, 0, 4.2, 2);
    this.scareLight.position.set(0, .12, .25);
    this.world.officeCamera.add(this.scareLight);
    this.tmpTarget = new THREE.Vector3();
    this.tmpVec = new THREE.Vector3();
    this.look = { yaw: 0, pitch: -.055, targetYaw: 0, targetPitch: -.055 };
    this.bindUI();
    this.bindInput();
    this.applyQuality(this.save.quality);
    this.updateMenuCopy();
    this.resize();
    this.setStateCamera('menu');
    this.dom.boot.classList.add('gone');
    setTimeout(() => {
      this.dom.boot?.remove();
      if (this.state === 'menu') this.dom.menu?.classList.remove('hidden');
    }, 900);
    this.clock = new THREE.Clock();
    this.running = true;
    this.animate = this.animate.bind(this);
    requestAnimationFrame(this.animate);
  }

  findDom() {
    const $ = (id) => document.getElementById(id);
    return {
      boot: $('boot'), menu: $('menu'), hud: $('hud'), tablet: $('tablet'),
      startBtn: $('startBtn'), nightsBtn: $('nightsBtn'), howBtn: $('howBtn'),
      settingsBtn: $('settingsBtn'), settingsModal: $('settingsModal'),
      nightSelect: $('nightSelect'), howModal: $('howModal'), nightGrid: $('nightGrid'),
      nightPlayBtn: $('nightPlayBtn'), menuNight: $('menuNight'), menuNightSub: $('menuNightSub'),
      startSub: $('startSub'), hudNight: $('hudNight'), hudHour: $('hudHour'),
      clock: $('clock'), clockAm: document.querySelector('.clock-am'), clockFill: $('clockFill'),
      powerPct: $('powerPct'), powerFill: $('powerFill'), powerBox: document.querySelector('.power-box'),
      usageBars: $('usageBars'),
      leftDoorBtn: $('leftDoorBtn'), rightDoorBtn: $('rightDoorBtn'),
      leftLightBtn: $('leftLightBtn'), rightLightBtn: $('rightLightBtn'),
      camBtn: $('camBtn'), camExit: $('camExit'), camMap: $('camMap'),
      camName: $('camName'), camLabel: $('camLabel'), camPower: $('camPower'),
      camPowerFill: $('camPowerFill'), camWarning: $('camWarning'), camTime: $('camTime'),
      camChannel: $('camChannel'), camViewport: $('camViewport'),
      toast: $('toast'), threatHint: $('threatHint'), lookHint: $('lookHint'),
      leftIndicator: $('leftIndicator'), rightIndicator: $('rightIndicator'),
      doorAlert: $('doorAlert'),
      briefing: $('briefing'), briefNight: $('briefNight'), briefTime: $('briefTime'),
      briefCopy: $('briefCopy'), briefTip: $('briefTip'),
      foxyWarning: $('foxyWarning'), powerOut: $('powerOut'),
      scareFx: $('scareFx'), gameOver: $('gameOver'), deathCopy: $('deathCopy'),
      endStats: $('endStats'), retryBtn: $('retryBtn'), quitBtn: $('quitBtn'),
      deathTip: $('deathTip'), winScreen: $('winScreen'), winKicker: $('winKicker'),
      winTitle: $('winTitle'), winCopy: $('winCopy'), checkNight: $('checkNight'),
      checkAmount: $('checkAmount'), nextBtn: $('nextBtn'), winMenuBtn: $('winMenuBtn'),
      winTip: $('winTip'), qualityControl: $('qualityControl'),
      hapticsToggle: $('hapticsToggle'), shakeToggle: $('shakeToggle'), resetBtn: $('resetBtn'),
      rotateNotice: $('rotateNotice'), lookZone: $('lookZone')
    };
  }

  makeNoiseTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 128; canvas.height = 128;
    const ctx = canvas.getContext('2d');
    const image = ctx.createImageData(128, 128);
    for (let i = 0; i < image.data.length; i += 4) {
      const v = Math.random() * 255;
      image.data[i] = image.data[i + 1] = image.data[i + 2] = v;
      image.data[i + 3] = 110;
    }
    ctx.putImageData(image, 0, 0);
    return canvas.toDataURL('image/png');
  }

  bindUI() {
    const click = (el, fn) => el?.addEventListener('click', (e) => { e.preventDefault(); fn(e); });
    click(this.dom.startBtn, () => this.startNight(this.selectedNight));
    click(this.dom.nightsBtn, () => this.openModal('nightSelect'));
    click(this.dom.howBtn, () => this.openModal('howModal'));
    click(this.dom.settingsBtn, () => this.openModal('settingsModal'));
    click(this.dom.nightPlayBtn, () => {
      this.closeModal('nightSelect');
      this.startNight(this.selectedNight);
    });
    click(this.dom.leftDoorBtn, () => this.toggleDoor('left'));
    click(this.dom.rightDoorBtn, () => this.toggleDoor('right'));
    click(this.dom.leftLightBtn, () => this.toggleLight('left'));
    click(this.dom.rightLightBtn, () => this.toggleLight('right'));
    click(this.dom.camBtn, () => this.toggleCamera());
    click(this.dom.camExit, () => this.toggleCamera(false));
    click(this.dom.retryBtn, () => this.startNight(this.night));
    click(this.dom.quitBtn, () => this.quitToMenu());
    click(this.dom.nextBtn, () => {
      if (this.night >= 6) this.quitToMenu();
      else this.startNight(this.night + 1);
    });
    click(this.dom.winMenuBtn, () => this.quitToMenu());
    click(this.dom.resetBtn, () => {
      if (!confirm('Reset all unlocked nights and settings?')) return;
      localStorage.removeItem(STORAGE_KEY);
      this.save = defaultSave();
      this.selectedNight = 1;
      this.applyQuality(this.save.quality);
      this.bindSettingsState();
      this.updateMenuCopy();
      this.buildNightGrid();
    });

    for (const button of this.dom.qualityControl.querySelectorAll('button')) {
      click(button, () => {
        this.save.quality = button.dataset.quality;
        this.applyQuality(button.dataset.quality);
        this.persist();
      });
    }
    click(this.dom.hapticsToggle, () => {
      this.save.haptics = !this.save.haptics;
      this.bindSettingsState();
      this.persist();
    });
    click(this.dom.shakeToggle, () => {
      this.save.shake = !this.save.shake;
      this.bindSettingsState();
      this.persist();
    });

    document.querySelectorAll('.modal-close, [data-close]').forEach((el) => {
      el.addEventListener('click', () => this.closeModal(el.dataset.close || el.closest('.modal')?.id));
    });
    this.dom.nightGrid.addEventListener('click', (e) => {
      const btn = e.target.closest('.night-btn');
      if (!btn || btn.disabled) return;
      this.selectedNight = Number(btn.dataset.night);
      this.buildNightGrid();
    });
    this.dom.camMap.addEventListener('click', (e) => {
      const btn = e.target.closest('.cam-map-btn');
      if (!btn) return;
      this.switchCamera(btn.dataset.cam);
    });
    this.bindSettingsState();
    this.buildNightGrid();
  }

  bindSettingsState() {
    for (const b of this.dom.qualityControl.querySelectorAll('button')) {
      b.classList.toggle('active', b.dataset.quality === this.save.quality);
    }
    const setToggle = (el, value) => {
      el.setAttribute('aria-checked', String(Boolean(value)));
      el.querySelector('span').textContent = value ? 'ON' : 'OFF';
    };
    setToggle(this.dom.hapticsToggle, this.save.haptics);
    setToggle(this.dom.shakeToggle, this.save.shake);
  }

  persist() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(this.save)); } catch {}
  }

  openModal(id) {
    this.dom[id]?.classList.remove('hidden');
    if (id === 'nightSelect') this.buildNightGrid();
  }

  closeModal(id) {
    if (id) this.dom[id]?.classList.add('hidden');
    else document.querySelectorAll('.modal:not(.hidden)').forEach((m) => m.classList.add('hidden'));
  }

  buildNightGrid() {
    if (!this.dom.nightGrid) return;
    this.dom.nightGrid.innerHTML = '';
    for (let n = 1; n <= 6; n++) {
      const unlocked = n <= this.save.unlocked;
      const button = document.createElement('button');
      button.className = `night-btn${n === this.selectedNight ? ' selected' : ''}`;
      button.dataset.night = n;
      button.disabled = !unlocked;
      const labels = ['', 'THE BEGINNING', 'THE HALLS', 'THE CAMERAS', 'THE MUSIC', 'THE FINALE', 'OVERTIME'];
      button.innerHTML = `<span>NIGHT</span><strong>${String(n).padStart(2, '0')}</strong><small>${unlocked ? labels[n] : 'LOCKED'}</small>`;
      this.dom.nightGrid.appendChild(button);
    }
    this.dom.nightPlayBtn.textContent = `PLAY NIGHT ${this.selectedNight}`;
    this.updateMenuCopy();
  }

  updateMenuCopy() {
    const n = clamp(this.selectedNight, 1, 6);
    this.dom.menuNight.textContent = `NIGHT ${String(n).padStart(2, '0')}`;
    this.dom.menuNightSub.textContent = n === 6 ? 'OVERTIME — NO SECOND CHANCES' : '12 AM — 6 AM';
    this.dom.startSub.textContent = n === 1 ? 'BEGIN YOUR SHIFT' : this.save.unlocked >= n ? 'RETURN TO THE OFFICE' : 'LOCKED';
    this.dom.checkNight.textContent = String(n).padStart(2, '0');
  }

  applyQuality(quality) {
    this.quality = QUALITY_DPR[quality] ? quality : 'high';
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, QUALITY_DPR[this.quality]));
    const shadows = this.quality !== 'performance';
    this.renderer.shadowMap.enabled = shadows;
    const mapSize = this.quality === 'high' ? 2048 : this.quality === 'balanced' ? 1024 : 512;
    const spot = this.world.lights.stageSpot;
    if (spot) {
      if (spot.shadow.map) {
        spot.shadow.map.dispose();
        spot.shadow.map = null;
      }
      spot.shadow.mapSize.set(mapSize, mapSize);
    }
    this.bindSettingsState();
    this.resize();
  }

  bindInput() {
    const canvas = document.getElementById('game-canvas');
    canvas.addEventListener('pointerdown', (e) => {
      if (this.state !== 'playing' && this.state !== 'briefing') return;
      this.drag = { x: e.clientX, y: e.clientY, yaw: this.look.targetYaw, pitch: this.look.targetPitch, id: e.pointerId };
      canvas.setPointerCapture?.(e.pointerId);
      this.dom.lookHint?.classList.add('hide');
      this.hasDragged = true;
    });
    canvas.addEventListener('pointermove', (e) => {
      if (!this.drag || e.pointerId !== this.drag.id) return;
      const dx = e.clientX - this.drag.x;
      const dy = e.clientY - this.drag.y;
      this.look.targetYaw = clamp(this.drag.yaw - dx * .0042, -1.42, 1.42);
      this.look.targetPitch = clamp(this.drag.pitch - dy * .0028, -.24, .13);
      this.look.yaw = THREE.MathUtils.lerp(this.look.yaw, this.look.targetYaw, .5);
      this.look.pitch = THREE.MathUtils.lerp(this.look.pitch, this.look.targetPitch, .5);
    });
    const endDrag = (e) => {
      if (this.drag && e.pointerId === this.drag.id) this.drag = null;
    };
    canvas.addEventListener('pointerup', endDrag);
    canvas.addEventListener('pointercancel', endDrag);

    // Camera feed swipe.
    let camSwipe = null;
    this.dom.camViewport.addEventListener('pointerdown', (e) => {
      if (this.state !== 'camera') return;
      camSwipe = { x: e.clientX, id: e.pointerId };
      this.dom.camViewport.setPointerCapture?.(e.pointerId);
    });
    this.dom.camViewport.addEventListener('pointerup', (e) => {
      if (!camSwipe || e.pointerId !== camSwipe.id) return;
      const dx = e.clientX - camSwipe.x;
      camSwipe = null;
      if (Math.abs(dx) < 42) return;
      const ids = ['1', '2', '3', '4', '5'];
      const i = ids.indexOf(this.camId);
      const next = (i + (dx < 0 ? 1 : -1) + ids.length) % ids.length;
      this.switchCamera(ids[next]);
    });

    window.addEventListener('keydown', (e) => {
      this.keys.add(e.key.toLowerCase());
      if (e.key === 'Escape') {
        if (this.state === 'camera') this.toggleCamera(false);
        else if (!this.dom.settingsModal.classList.contains('hidden')) this.closeModal('settingsModal');
        else if (!this.dom.nightSelect.classList.contains('hidden')) this.closeModal('nightSelect');
        else if (!this.dom.howModal.classList.contains('hidden')) this.closeModal('howModal');
      }
      if (this.state === 'playing' || this.state === 'camera') {
        const k = e.key.toLowerCase();
        if (k === 'q') this.toggleDoor('left');
        if (k === 'e') this.toggleDoor('right');
        if (k === 'f') this.toggleLight('left');
        if (k === 'g') this.toggleLight('right');
        if (k === 'c') this.toggleCamera();
      }
      if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', ' '].includes(e.key) && this.state === 'playing') e.preventDefault();
    });
    window.addEventListener('keyup', (e) => this.keys.delete(e.key.toLowerCase()));

    document.addEventListener('pointerdown', () => {
      this.audio.unlock().then(() => {
        if (this.state === 'menu' && !this.audio.ambient) this.audio.startMenu();
      });
    }, { once: true });
    window.addEventListener('resize', () => this.resize());
    window.addEventListener('orientationchange', () => setTimeout(() => this.resize(), 250));
    window.addEventListener('blur', () => {
      this.keys.clear();
      if (this.state === 'playing') this.audio.stopStatic();
    });
  }

  resize() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    this.renderer.setSize(w, h, false);
    const aspect = w / h;
    this.world.officeCamera.aspect = aspect;
    this.world.officeCamera.fov = h > w ? 67 : 58;
    this.world.officeCamera.updateProjectionMatrix();
    this.world.menuCamera.aspect = aspect;
    this.world.menuCamera.fov = h > w ? 51 : 40;
    this.world.menuCamera.updateProjectionMatrix();
    for (const cam of Object.values(this.world.cams)) {
      cam.camera.aspect = aspect;
      cam.camera.fov = h > w ? 63 : 55;
      cam.camera.updateProjectionMatrix();
    }
    this.dom.rotateNotice?.classList.toggle('hidden', true);
  }

  startNight(n) {
    const night = clamp(Number(n) || 1, 1, Math.max(1, this.save.unlocked));
    this.night = night;
    this.cfg = NIGHT_CONFIGS[night - 1];
    this.state = 'briefing';
    this.power = 100;
    this.elapsed = 0;
    this.powerOut = false;
    this.blackoutTimer = 0;
    this.doors = { left: false, right: false };
    this.lights = { left: false, right: false };
    this.doorAmounts = [0, 0];
    this.hallLights = [0, 0];
    this.camOpen = false;
    this.camId = '1';
    this.coveWatch = 0;
    this.camAlert = { text: '', time: 0 };
    this.deathReason = '';
    this.hintsShown = new Set();
    this.briefingTimer = 0;
    this.jump = null;
    this.selectedNight = night;
    this.save.current = night;
    this.persist();
    this.resetCharacters();
    this.scene.add(this.world.officeCamera);
    this.scareLight.intensity = 0;
    this.look = { yaw: 0, pitch: -.055, targetYaw: 0, targetPitch: -.055 };
    this.audio.unlock().then(() => this.audio.startShift());
    this.audio.stopMusic();
    this.audio.stopStatic();
    this.ai = {
      bonnie: { loc: 'stage', timer: rand(...this.cfg.bonnie.start), atDoor: false, doorTimer: 0, retreat: 0, warned: false },
      chica: { loc: 'stage', timer: rand(...this.cfg.chica.start), atDoor: false, doorTimer: 0, retreat: 0, warned: false },
      foxy: { progress: 0, timer: this.cfg.foxy.first, running: 0, blocked: false }
    };
    this.placeAnimatronic('bonnie', 'stage');
    this.placeAnimatronic('chica', 'stage');
    this.placeAnimatronic('foxy', 'cove');
    this.world.characters.freddy.visible = true;
    this.placeAnimatronic('freddy', 'stage');
    setEyeGlow(this.world.characters.freddy, .5);
    setEyeGlow(this.world.characters.bonnie, .5);
    setEyeGlow(this.world.characters.chica, .5);
    setEyeGlow(this.world.characters.foxy, .5);

    this.dom.menu.classList.add('hidden');
    this.dom.hud.classList.remove('hidden');
    this.dom.gameOver.classList.add('hidden');
    this.dom.winScreen.classList.add('hidden');
    this.dom.scareFx.classList.remove('show');
    this.dom.powerOut.classList.remove('show');
    this.dom.foxyWarning.classList.remove('show');
    this.dom.tablet.classList.add('hidden');
    this.dom.settingsModal.classList.add('hidden');
    this.dom.nightSelect.classList.add('hidden');
    this.dom.howModal.classList.add('hidden');
    this.dom.briefing.classList.remove('hidden', 'out');
    this.dom.hud.classList.add('hidden');
    document.body.classList.remove('camera-open', 'scare', 'power-out');
    this.dom.lookHint.classList.remove('hide');
    this.dom.briefNight.textContent = `NIGHT ${String(night).padStart(2, '0')}`;
    this.dom.briefTime.textContent = '12:00 AM';
    this.dom.briefCopy.textContent = this.cfg.flavor;
    this.dom.briefTip.textContent = this.briefTip(night);
    this.dom.hudNight.textContent = `NIGHT ${String(night).padStart(2, '0')}`;
    this.dom.checkNight.textContent = String(night).padStart(2, '0');
    this.setStateCamera('office');
    this.audio.heartbeatTimer = 0;
    this.updateHUD();
  }

  briefTip(night) {
    if (night === 1) return 'TIP: Drag the screen to look at both doors.';
    if (night === 2) return 'TIP: A dark hall can hide a very large problem.';
    if (night === 3) return 'TIP: Watch CAM 05. Foxy does not wait for an invitation.';
    if (night === 4) return 'TIP: Every second with a door sealed is a second of power gone.';
    if (night === 5) return 'TIP: The lights reveal them. The doors only delay them.';
    return 'TIP: There is no trick left to teach you.';
  }

  setStateCamera(kind) {
    this.cameraMode = kind;
  }

  toggleDoor(side) {
    if (this.state !== 'playing' || this.powerOut) return;
    this.doors[side] = !this.doors[side];
    if (this.doors[side]) this.audio.doorClose(); else this.audio.doorOpen();
    this.vibrate(this.doors[side] ? [18, 20, 12] : 10);
    this.dom[side + 'DoorBtn'].classList.toggle('active', this.doors[side]);
    this.dom[side + 'DoorBtn'].setAttribute('aria-pressed', String(this.doors[side]));
    if (this.doors[side]) {
      const threat = this.threatAtDoor(side);
      if (threat) this.flashDoorAlert(side);
    }
  }

  toggleLight(side) {
    if (this.state !== 'playing' || this.powerOut) return;
    this.lights[side] = !this.lights[side];
    this.audio.lightClick(this.lights[side]);
    this.vibrate(8);
    this.dom[side + 'LightBtn'].classList.toggle('active', this.lights[side]);
    this.dom[side + 'LightBtn'].setAttribute('aria-pressed', String(this.lights[side]));
    if (this.lights[side]) {
      const char = this.threatAtDoor(side);
      if (char) {
        this.showToast(`Something is standing in the ${side === 'left' ? 'west' : 'east'} doorway.`, { danger: true, duration: 1800 });
        this.audio.breathing();
        this.vibrate([16, 35, 22]);
      }
    }
  }

  threatAtDoor(side) {
    if (!this.ai) return null;
    if (side === 'left' && this.ai.bonnie.atDoor) return 'bonnie';
    if (side === 'right' && this.ai.chica.atDoor) return 'chica';
    if (side === 'left' && this.ai.foxy.running > 0) return 'foxy';
    return null;
  }

  flashDoorAlert(side) {
    this.dom.doorAlert.classList.add('show');
    setTimeout(() => this.dom.doorAlert.classList.remove('show'), 600);
  }

  toggleCamera(force) {
    if (this.state === 'camera') {
      if (force === true) return;
      this.closeCamera();
    } else if (this.state === 'playing' && !this.powerOut) {
      if (force === false) return;
      this.openCamera();
    }
  }

  openCamera() {
    if (this.powerOut || this.state !== 'playing') return;
    this.state = 'camera';
    this.camOpen = true;
    this.coveWatch = 0;
    document.body.classList.add('camera-open');
    this.dom.tablet.classList.remove('hidden');
    this.dom.hud.classList.add('hidden');
    this.audio.cameraOn();
    this.vibrate(12);
    this.switchCamera(this.camId, true);
  }

  closeCamera() {
    if (this.state !== 'camera') return;
    this.state = 'playing';
    this.camOpen = false;
    document.body.classList.remove('camera-open');
    this.dom.tablet.classList.add('hidden');
    this.dom.hud.classList.remove('hidden');
    this.audio.cameraOff();
    this.coveWatch = 0;
    this.vibrate(9);
  }

  switchCamera(id, silent = false) {
    if (!this.world.cams[id]) return;
    this.camId = String(id);
    for (const btn of this.dom.camMap.querySelectorAll('.cam-map-btn')) {
      const active = btn.dataset.cam === this.camId;
      btn.classList.toggle('active', active);
      btn.setAttribute('aria-selected', String(active));
    }
    const cam = this.world.cams[this.camId];
    this.dom.camName.textContent = cam.name;
    this.dom.camLabel.textContent = cam.label;
    this.dom.camChannel.textContent = `CH ${this.camId.padStart(2, '0')}`;
    if (!silent) {
      this.audio.cameraSwitch();
      this.vibrate(7);
    }
    this.coveWatch = 0;
  }

  resetCharacters() {
    if (!this.world?.characters) return;
    for (const [type, char] of Object.entries(this.world.characters)) {
      if (char.parent !== this.scene) this.scene.add(char);
      const home = char.userData.home;
      char.position.set(home.x, home.y, home.z);
      char.rotation.set(0, home.ry, 0);
      char.scale.setScalar(char.userData.baseScale || 1);
      char.userData.mode = 'stage';
      char.visible = true;
    }
  }

  placeAnimatronic(type, loc) {
    const char = this.world.characters[type];
    if (!char) return;
    const side = type === 'bonnie' ? -1 : type === 'chica' ? 1 : 0;
    let pos, rot = 0, mode = 'idle';
    if (type === 'freddy') {
      if (loc === 'stage') {
        pos = [-0, .55, -14.6]; rot = 0; mode = 'stage';
      } else {
        pos = [0, 0, 12.55]; rot = 0; mode = 'door';
      }
    } else if (type === 'foxy') {
      if (loc === 'cove') {
        pos = [-11.4, .5, -9.1]; rot = 0; mode = 'stage';
      } else {
        pos = [-5.38, 0, 11.85]; rot = Math.PI / 2; mode = 'run';
      }
    } else if (loc === 'stage') {
      const x = type === 'bonnie' ? -2.85 : 2.85;
      pos = [x, .55, -14.85]; rot = 0; mode = 'stage';
    } else if (loc === 'mid') {
      pos = [side * 7.1, 0, -3.7]; rot = side * -.72; mode = 'idle';
    } else if (loc === 'hall') {
      pos = [side * 5.95, 0, 9.7]; rot = 0; mode = 'idle';
    } else {
      pos = [side * 5.28, 0, 11.85]; rot = -side * Math.PI / 2; mode = 'door';
    }
    char.position.set(...pos);
    char.rotation.set(0, rot, 0);
    char.userData.mode = mode;
    char.userData.location = loc;
  }

  updateAI(dt, progress) {
    for (const side of ['left', 'right']) {
      const key = side === 'left' ? 'bonnie' : 'chica';
      const ai = this.ai[key];
      if (!ai || this.powerOut) continue;
      if (ai.atDoor) {
        ai.doorTimer -= dt;
        if (this.doors[side]) {
          ai.retreat += dt;
          if (ai.retreat > 1.35) {
            ai.atDoor = false;
            ai.retreat = 0;
            ai.doorTimer = 0;
            ai.loc = 'hall';
            ai.timer = rand(...this.cfg[key].step) * .8;
            this.placeAnimatronic(key, 'hall');
            this.audio.footstep(side === 'left' ? -.6 : .6);
            this.updateIndicators();
          }
        } else {
          ai.retreat = 0;
          if (ai.doorTimer <= 0) {
            this.startScare(key, side);
            return;
          }
        }
        continue;
      }
      ai.timer -= dt * (1 + progress * .22);
      if (ai.timer > 0) continue;
      const doorClosed = this.doors[side];
      if (ai.loc === 'stage') {
        ai.loc = 'mid';
        this.placeAnimatronic(key, 'mid');
        ai.timer = rand(...this.cfg[key].step);
        if (Math.random() < .3) this.audio.footstep(side === 'left' ? -.7 : .7);
      } else if (ai.loc === 'mid') {
        ai.loc = 'hall';
        this.placeAnimatronic(key, 'hall');
        ai.timer = rand(...this.cfg[key].step) * .92;
        this.audio.footstep(side === 'left' ? -.5 : .5);
      } else if (ai.loc === 'hall') {
        if (doorClosed) {
          ai.timer = 2.4;
          this.audio.knock(side === 'left' ? -.55 : .55);
        } else {
          ai.loc = 'door';
          ai.atDoor = true;
          ai.doorTimer = this.cfg[key].grace;
          ai.retreat = 0;
          ai.warned = false;
          this.placeAnimatronic(key, 'door');
          this.audio.knock(side === 'left' ? -.7 : .7);
          this.audio.breathing();
          this.vibrate([18, 30, 18]);
          this.camAlert = { text: `PROXIMITY ALERT — ${side === 'left' ? 'WEST' : 'EAST'} HALL`, time: 4 };
          if (this.state !== 'camera') {
            this.showToast(`Heavy footsteps outside the ${side} door.`, { danger: true, duration: 2400 });
          }
          this.updateIndicators();
        }
      }
    }
  }

  updateFoxy(dt, progress) {
    if (this.powerOut) return;
    const foxy = this.ai.foxy;
    if (!foxy) return;
    if (foxy.running > 0) {
      foxy.running -= dt;
      this.dom.foxyWarning.classList.add('show');
      this.world.characters.foxy.userData.mode = 'run';
      if (foxy.running <= 0) {
        this.dom.foxyWarning.classList.remove('show');
        if (this.doors.left) {
          foxy.running = 0;
          foxy.progress = 0;
          foxy.timer = this.cfg.foxy.interval;
          this.placeAnimatronic('foxy', 'cove');
          this.audio.foxyBlocked();
          this.vibrate([70, 40, 90]);
          this.power = Math.max(0, this.power - 3.2);
          this.camAlert = { text: 'IMPACT DETECTED — WEST DOOR HELD', time: 3.5 };
          if (this.state !== 'camera') this.showToast('Foxy hit the west door. The shutter held.', { duration: 2400 });
        } else {
          this.startScare('foxy', 'left');
          return;
        }
      }
      return;
    }
    if (this.camOpen && this.camId === '5') {
      this.coveWatch += dt;
      if (this.coveWatch > .9 && foxy.progress > 0) {
        foxy.progress = 0;
        foxy.timer = this.cfg.foxy.first * .72;
        this.coveWatch = 0;
        this.camAlert = { text: 'PIRATE COVE SECURE — FOXY RETREATED', time: 2.8 };
        this.audio.footstep(-.2);
      }
      this.world.characters.foxy.userData.mode = 'stage';
      return;
    }
    this.coveWatch = 0;
    foxy.timer -= dt * (1 + progress * .25);
    if (foxy.timer > 0) return;
    foxy.progress = Math.min(3, foxy.progress + 1);
    foxy.timer = this.cfg.foxy.interval;
    if (foxy.progress === 1) {
      this.camAlert = { text: 'PIRATE COVE CURTAIN MOVED', time: 3 };
      if (this.state !== 'camera') this.showToast('A curtain shifted somewhere in the dark.', { duration: 2100 });
    } else if (foxy.progress === 2) {
      this.camAlert = { text: 'CAM 05 — CURTAIN OPEN', time: 4 };
      if (this.state !== 'camera') this.showToast('Pirate Cove is open. Check CAM 05.', { danger: true, duration: 2500 });
      this.audio.footstep(-.8);
    } else if (foxy.progress >= 3) {
      foxy.running = this.cfg.foxy.grace;
      this.placeAnimatronic('foxy', 'hall');
      this.world.characters.foxy.userData.mode = 'run';
      this.audio.foxyRun();
      this.vibrate([50, 30, 50, 30, 80]);
      this.camAlert = { text: 'WEST HALL BREACH — SEAL DOOR', time: 4 };
      this.dom.foxyWarning.classList.add('show');
    }
  }

  triggerPowerOut() {
    if (this.powerOut) return;
    this.powerOut = true;
    this.power = 0;
    this.doors = { left: false, right: false };
    this.lights = { left: false, right: false };
    this.doorAmounts = [0, 0];
    this.hallLights = [0, 0];
    this.blackoutTimer = 0;
    this.audio.powerDown();
    setTimeout(() => this.audio.powerOutMusic(), 1800);
    this.audio.stopStatic();
    if (this.state === 'camera') this.closeCamera();
    this.state = 'playing';
    this.dom.hud.classList.add('blackout');
    this.dom.foxyWarning.classList.remove('show');
    this.dom.lookHint.classList.add('hide');
    setTimeout(() => this.dom.powerOut.classList.add('show'), 600);
    this.placeAnimatronic('freddy', 'office');
    this.world.characters.freddy.visible = true;
    this.world.characters.freddy.userData.mode = 'door';
    setEyeGlow(this.world.characters.freddy, 3);
    this.look.targetYaw = 0;
    this.look.targetPitch = -.03;
    this.dom.leftDoorBtn.classList.remove('active');
    this.dom.rightDoorBtn.classList.remove('active');
    this.dom.leftLightBtn.classList.remove('active');
    this.dom.rightLightBtn.classList.remove('active');
    this.camAlert = { text: '', time: 0 };
    this.vibrate([100, 100, 100, 200]);
    this.updateIndicators();
  }

  startScare(type, side) {
    if (this.state === 'jumpscare' || this.state === 'gameover' || this.state === 'win') return;
    this.state = 'jumpscare';
    this.deathReason = type;
    this.jump = { type, t: 0, char: this.world.characters[type], done: false };
    this.jumpOriginal = {
      parent: this.jump.char.parent,
      position: this.jump.char.position.clone(),
      rotation: this.jump.char.rotation.clone(),
      scale: this.jump.char.scale.clone()
    };
    if (this.dom.tablet && !this.dom.tablet.classList.contains('hidden')) {
      this.dom.tablet.classList.add('hidden');
      document.body.classList.remove('camera-open');
    }
    this.dom.hud.classList.add('hidden');
    this.dom.foxyWarning.classList.remove('show');
    this.dom.powerOut.classList.remove('show');
    this.dom.briefing.classList.add('hidden');
    this.dom.toast.classList.remove('show');
    document.body.classList.add('scare');
    this.dom.scareFx.classList.add('show');
    const char = this.jump.char;
    this.world.officeCamera.add(char);
    const scareScale = type === 'freddy' ? 1.31 : 1.25;
    const headHeight = char.userData.parts?.head?.position.y || 2.19;
    char.position.set(0, -headHeight * scareScale - .14, -1.5);
    char.rotation.set(-.04, 0, 0);
    char.scale.setScalar(scareScale);
    char.userData.mode = 'scare';
    char.visible = true;
    setEyeGlow(char, 4);
    this.scareLight.intensity = 9.5;
    this.world.officeCamera.rotation.set(0, 0, 0);
    this.audio.jumpscare();
    this.audio.stopMusic();
    this.vibrate([120, 40, 140, 40, 180]);
  }

  endScare() {
    if (this.jump && !this.jump.done) {
      this.jump.done = true;
      const char = this.jump.char;
      if (this.jumpOriginal) {
        this.scene.add(char);
        char.position.copy(this.jumpOriginal.position);
        char.rotation.copy(this.jumpOriginal.rotation);
        char.scale.copy(this.jumpOriginal.scale);
        char.userData.mode = 'stage';
      }
      setEyeGlow(char, .5);
    }
    this.scareLight.intensity = 0;
    this.dom.scareFx.classList.remove('show');
    document.body.classList.remove('scare');
    this.state = 'gameover';
    this.showGameOver();
    this.updateHUD();
  }

  showGameOver() {
    const time = timeLabel(this.elapsed, this.cfg?.duration || 80);
    this.dom.gameOver.classList.remove('hidden');
    this.dom.hud.classList.add('hidden');
    this.dom.powerOut.classList.remove('show');
    this.dom.endStats.innerHTML = `
      <div class="end-stat"><span>TIME REACHED</span><strong>${time.label}</strong></div>
      <div class="end-stat"><span>POWER LEFT</span><strong>${Math.max(0, Math.floor(this.power))}%</strong></div>
      <div class="end-stat"><span>NIGHT</span><strong>${String(this.night).padStart(2, '0')}</strong></div>`;
    const reasons = {
      bonnie: ['Bonnie was already inside the west doorway.', 'The west hall light came on one second too late.'],
      chica: ['Chica made it through the east door.', 'You checked the camera. She checked you.'],
      foxy: ['Foxy came down the west hall like a bullet.', 'The cove was empty. The hallway was not.'],
      freddy: ['The power failed, and Freddy found you in the dark.', 'You heard the music box. Then you heard him.']
    };
    const tips = {
      bonnie: 'Keep the west hall lit when you hear footsteps. A closed door makes him leave.',
      chica: 'The east door is not a wall. Close it before the breathing stops.',
      foxy: 'Watch CAM 05 regularly. If the curtain opens, seal the west door immediately.',
      freddy: 'Power is the real enemy. Do not leave doors or lights on longer than you need.'
    };
    const list = reasons[this.deathReason] || reasons.freddy;
    this.dom.deathCopy.textContent = list[Math.floor(Math.random() * list.length)];
    this.dom.deathTip.textContent = tips[this.deathReason] || tips.freddy;
    this.audio.stopStatic();
    this.vibrate([80, 50, 120]);
  }

  completeNight() {
    if (this.state === 'win' || this.state === 'gameover') return;
    this.state = 'win';
    this.audio.chime();
    this.audio.stopStatic();
    this.audio.stopMusic();
    this.dom.hud.classList.add('hidden');
    this.dom.powerOut.classList.remove('show');
    this.dom.foxyWarning.classList.remove('show');
    this.dom.tablet.classList.add('hidden');
    document.body.classList.remove('camera-open', 'power-out');
    this.save.wins = (this.save.wins || 0) + 1;
    this.save.unlocked = Math.max(this.save.unlocked || 1, Math.min(6, this.night + 1));
    this.save.current = Math.min(6, this.night + 1);
    this.persist();
    this.buildNightGrid();
    const final = this.night >= 6;
    this.dom.winKicker.textContent = final ? 'TRUE ENDING' : '6:00 AM';
    this.dom.winTitle.textContent = final ? 'YOU OWN THE NIGHT' : this.night === 5 ? 'WEEK COMPLETE' : 'SHIFT COMPLETE';
    this.dom.winCopy.textContent = final
      ? 'Six nights. No witnesses. The animatronics power down at dawn — and the office is finally quiet.'
      : this.night === 5
        ? 'Five shifts survived. There is one more name on the roster. It does not have a paycheck.'
        : 'You made it to 6 AM. The morning crew is not here yet. Neither is anyone else.';
    this.dom.checkNight.textContent = String(this.night).padStart(2, '0');
    this.dom.checkAmount.textContent = `$${PAY[this.night].toFixed(2)}`;
    this.dom.winTip.textContent = final
      ? 'The next shift starts at midnight. It always does.'
      : 'A sealed door buys seconds. A dark hall buys nothing.';
    this.dom.nextBtn.textContent = final ? 'MAIN MENU' : 'NEXT NIGHT';
    this.dom.winScreen.classList.remove('hidden');
    this.vibrate([35, 30, 35, 30, 90]);
    setTimeout(() => this.audio.startMenu(), 800);
  }

  quitToMenu() {
    this.state = 'menu';
    this.audio.stopStatic();
    this.audio.stopMusic();
    this.audio.stopFan?.();
    this.dom.hud.classList.add('hidden');
    this.dom.hud.classList.remove('blackout');
    this.dom.tablet.classList.add('hidden');
    this.dom.gameOver.classList.add('hidden');
    this.dom.winScreen.classList.add('hidden');
    this.dom.powerOut.classList.remove('show');
    this.dom.foxyWarning.classList.remove('show');
    this.dom.scareFx.classList.remove('show');
    this.dom.briefing.classList.add('hidden');
    this.dom.menu.classList.remove('hidden');
    document.body.classList.remove('camera-open', 'scare', 'power-out');
    this.scareLight.intensity = 0;
    this.powerOut = false;
    this.doors = { left: false, right: false };
    this.lights = { left: false, right: false };
    this.doorAmounts = [0, 0];
    this.hallLights = [0, 0];
    this.resetCharacters();
    this.selectedNight = clamp(this.save.current || 1, 1, this.save.unlocked || 1);
    this.updateMenuCopy();
    this.buildNightGrid();
    this.look = { yaw: 0, pitch: -.055, targetYaw: 0, targetPitch: -.055 };
    this.setStateCamera('menu');
    if (!this.audio.ambient) this.audio.startMenu();
  }

  showToast(text, { danger = false, duration = 3000 } = {}) {
    if (!this.dom.toast) return;
    this.dom.toast.textContent = text;
    this.dom.toast.classList.toggle('danger', danger);
    this.dom.toast.classList.add('show');
    clearTimeout(this.toastTimeout);
    this.toastTimeout = setTimeout(() => this.dom.toast.classList.remove('show'), duration);
  }

  updateIndicators() {
    if (!this.ai) return;
    const left = Boolean(this.ai.bonnie?.atDoor || this.ai.foxy?.running > 0);
    const right = Boolean(this.ai.chica?.atDoor);
    this.dom.leftIndicator.classList.toggle('show', left);
    this.dom.rightIndicator.classList.toggle('show', right);
  }

  vibrate(pattern) {
    if (!this.save.haptics) return;
    try { navigator.vibrate?.(pattern); } catch {}
  }

  updateMenu(dt, time) {
    const cam = this.world.menuCamera;
    cam.position.set(Math.sin(time * .055) * .5, 2.38 + Math.sin(time * .12) * .035, -3.0 + Math.cos(time * .045) * .22);
    cam.lookAt(0, 1.78, -14.62);
    this.world.update(time, dt, {
      doorAmounts: [0, 0], hallLights: [0, 0], powerOut: false, mode: 'menu', foxyProgress: 0
    });
    setEyeGlow(this.world.characters.freddy, .55);
    setEyeGlow(this.world.characters.bonnie, .4);
    setEyeGlow(this.world.characters.chica, .4);
    setEyeGlow(this.world.characters.foxy, .4);
    this.renderer.toneMappingExposure = THREE.MathUtils.lerp(this.renderer.toneMappingExposure, 1.13, .03);
  }

  updateOfficeCamera(dt, time) {
    if (this.state === 'jumpscare') {
      const t = this.jump?.t || 0;
      this.world.officeCamera.position.set(Math.sin(t * 30) * .006, 1.62 + Math.cos(t * 41) * .005, 15.55);
      this.world.officeCamera.rotation.set(Math.sin(t * 29) * .012, Math.cos(t * 23) * .015, Math.sin(t * 33) * .016);
      this.scareLight.intensity = 9.2 + Math.sin(t * 54) * 1.6;
      if (this.jump?.char) {
        const lunge = Math.max(0, Math.min(1, t * 1.4));
        this.jump.char.position.z = -1.5 + lunge * .2;
      }
      return;
    }
    const isBrief = this.state === 'briefing' || this.state === 'gameover' || this.state === 'win';
    const blackout = this.powerOut;
    if (blackout) {
      this.look.targetYaw = 0;
      this.look.targetPitch = -.02;
    }
    // Keyboard look.
    if (!isBrief && this.state === 'playing' && !blackout) {
      const speed = dt * 1.45;
      if (this.keys.has('a') || this.keys.has('arrowleft')) this.look.targetYaw = clamp(this.look.targetYaw + speed, -1.42, 1.42);
      if (this.keys.has('d') || this.keys.has('arrowright')) this.look.targetYaw = clamp(this.look.targetYaw - speed, -1.42, 1.42);
      if (this.keys.has('w') || this.keys.has('arrowup')) this.look.targetPitch = clamp(this.look.targetPitch + speed * .5, -.24, .13);
      if (this.keys.has('s') || this.keys.has('arrowdown')) this.look.targetPitch = clamp(this.look.targetPitch - speed * .5, -.24, .13);
    }
    const lerp = Math.min(1, dt * (blackout ? 2.2 : 9.5));
    this.look.yaw += (this.look.targetYaw - this.look.yaw) * lerp;
    this.look.pitch += (this.look.targetPitch - this.look.pitch) * lerp;
    const breath = Math.sin(time * 1.35) * .0018;
    const jitter = this.powerOut ? Math.sin(time * 7.1) * .002 : 0;
    this.world.officeCamera.position.set(jitter, 1.62 + breath, 15.55);
    this.world.officeCamera.rotation.set(this.look.pitch + breath * 2, this.look.yaw + jitter, 0);
  }

  updateShift(dt) {
    const cfg = this.cfg;
    this.elapsed += dt;
    if (!this.powerOut) {
      const time = timeLabel(this.elapsed, cfg.duration);
      if (this.elapsed >= cfg.duration) {
        this.completeNight();
        return;
      }
      let drain = cfg.baseDrain;
      if (this.doors.left) drain += cfg.doorDrain;
      if (this.doors.right) drain += cfg.doorDrain;
      if (this.lights.left) drain += cfg.lightDrain;
      if (this.lights.right) drain += cfg.lightDrain;
      if (this.camOpen) drain += cfg.camDrain;
      this.power = Math.max(0, this.power - drain * dt);
      if (this.power <= 0) {
        this.triggerPowerOut();
        return;
      }
      const progress = this.elapsed / cfg.duration;
      this.doorAmounts[0] += ((this.doors.left ? 1 : 0) - this.doorAmounts[0]) * Math.min(1, dt * 9);
      this.doorAmounts[1] += ((this.doors.right ? 1 : 0) - this.doorAmounts[1]) * Math.min(1, dt * 9);
      this.hallLights[0] += ((this.lights.left ? 1 : 0) - this.hallLights[0]) * Math.min(1, dt * 18);
      this.hallLights[1] += ((this.lights.right ? 1 : 0) - this.hallLights[1]) * Math.min(1, dt * 18);
      this.updateFoxy(dt, progress);
      if (this.state === 'jumpscare') return;
      this.updateAI(dt, progress);
      if (this.state === 'jumpscare') return;
      this.updateTutorial();
      // Threat heartbeat.
      if (this.ai && (this.ai.bonnie.atDoor || this.ai.chica.atDoor || this.ai.foxy.running > 0)) {
        this.audio.heartbeat(1.1);
      } else if (this.ai && this.ai.foxy.progress >= 2) {
        this.audio.heartbeat(.8);
      }
    } else {
      this.blackoutTimer += dt;
      if (this.elapsed >= cfg.duration) {
        this.completeNight();
        return;
      }
      if (this.blackoutTimer > 4.7) this.startScare('freddy', 'office');
      if (this.blackoutTimer > 1.2) this.updateIndicators();
    }
  }

  updateTutorial() {
    if (this.night !== 1 || !this.ai) return;
    const points = [
      { at: 1.8, key: 'look', text: 'Drag anywhere to look around the office.' },
      { at: 7, key: 'light', text: 'Tap LIGHT to reveal a hall. Eyes glow in the dark.' },
      { at: 13, key: 'door', text: 'Tap DOOR to seal it. Doors and lights eat power.' },
      { at: 20, key: 'cam', text: 'Open CAMERAS and check CAM 05 before Foxy moves.' }
    ];
    for (const p of points) {
      if (this.elapsed > p.at && !this.hintsShown.has(p.key)) {
        this.hintsShown.add(p.key);
        this.showToast(p.text, { duration: 3900 });
        break;
      }
    }
  }

  updateHUD() {
    if (!this.dom.hud) return;
    const cfg = this.cfg || NIGHT_CONFIGS[0];
    const t = timeLabel(this.elapsed, cfg.duration);
    this.dom.hudHour.textContent = t.label;
    this.dom.clock.textContent = t.value;
    this.dom.clockAm.textContent = t.ampm;
    this.dom.clockFill.style.width = `${clamp(this.elapsed / cfg.duration, 0, 1) * 100}%`;
    const power = clamp(this.power, 0, 100);
    this.dom.powerPct.textContent = `${Math.ceil(power)}%`;
    this.dom.powerFill.style.width = `${power}%`;
    this.dom.powerBox.classList.toggle('warn', power <= 38 && power > 18);
    this.dom.powerBox.classList.toggle('danger', power <= 18);
    let usage = 1;
    if (this.doors.left) usage++;
    if (this.doors.right) usage++;
    if (this.lights.left) usage++;
    if (this.lights.right) usage++;
    if (this.camOpen) usage++;
    const bars = this.dom.usageBars.children;
    for (let i = 0; i < bars.length; i++) {
      bars[i].classList.toggle('on', i < usage && usage < 4);
      bars[i].classList.toggle('hot', i < usage && usage >= 4);
      bars[i].style.opacity = i < usage ? 1 : .25;
    }
    this.dom.leftDoorBtn.classList.toggle('active', this.doors.left);
    this.dom.rightDoorBtn.classList.toggle('active', this.doors.right);
    this.dom.leftLightBtn.classList.toggle('active', this.lights.left);
    this.dom.rightLightBtn.classList.toggle('active', this.lights.right);
    this.dom.leftDoorBtn.setAttribute('aria-pressed', String(this.doors.left));
    this.dom.rightDoorBtn.setAttribute('aria-pressed', String(this.doors.right));
    this.dom.leftLightBtn.setAttribute('aria-pressed', String(this.lights.left));
    this.dom.rightLightBtn.setAttribute('aria-pressed', String(this.lights.right));
    const atDoor = this.threatAtDoor('left') || this.threatAtDoor('right');
    const hint = this.dom.threatHint;
    if (this.powerOut) {
      hint.textContent = 'THE POWER IS GONE.';
      hint.className = 'threat-hint danger';
    } else if (this.ai?.foxy.running > 0) {
      hint.textContent = 'WEST HALL BREACH — CLOSE THE DOOR.';
      hint.className = 'threat-hint danger';
    } else if (atDoor) {
      const side = this.ai.bonnie.atDoor ? 'WEST' : this.ai.chica.atDoor ? 'EAST' : 'WEST';
      hint.textContent = `MOVEMENT AT THE ${side} DOOR.`;
      hint.className = 'threat-hint danger';
    } else if (this.ai?.foxy.progress >= 2) {
      hint.textContent = 'PIRATE COVE IS OPEN. CHECK CAM 05.';
      hint.className = 'threat-hint warn';
    } else {
      hint.textContent = 'THE HALLS ARE QUIET.';
      hint.className = 'threat-hint';
    }
    this.updateIndicators();
    this.dom.camPower.textContent = `${Math.ceil(power)}%`;
    this.dom.camPowerFill.style.width = `${power}%`;
    if (this.dom.camPowerFill.style.background !== undefined) {
      this.dom.camPowerFill.style.background = power < 20 ? '#f14035' : power < 40 ? '#e0a83f' : '#69d99a';
    }
    this.dom.camTime.textContent = fullTimeLabel(this.elapsed, cfg.duration);
    if (this.camAlert.time > 0) {
      this.camAlert.time -= 1 / 60;
      this.dom.camWarning.textContent = this.camAlert.text;
      this.dom.camWarning.classList.add('show');
    } else {
      this.dom.camWarning.classList.remove('show');
    }
    this.dom.hud.classList.toggle('blackout', this.powerOut);
  }

  updateCameraFeed(time) {
    const cam = this.world.cams[this.camId]?.camera;
    if (!cam) return;
    const target = cam.userData.target;
    this.tmpTarget.copy(target);
    this.tmpTarget.x += Math.sin(time * .9) * .035;
    this.tmpTarget.y += Math.cos(time * .72) * .02;
    cam.lookAt(this.tmpTarget);
    cam.rotation.z += Math.sin(time * 1.7) * .0015;
    this.renderer.toneMappingExposure = THREE.MathUtils.lerp(this.renderer.toneMappingExposure, 1.72, .05);
  }

  animate() {
    if (!this.running) return;
    requestAnimationFrame(this.animate);
    const dt = Math.min(.05, this.clock.getDelta());
    const time = this.clock.elapsedTime;
    this.fpsSample.time += dt;
    this.fpsSample.frames++;
    if (this.fpsSample.time > 2) {
      const fps = this.fpsSample.frames / this.fpsSample.time;
      if (fps < 32 && !this.fpsSample.adjusted && this.quality === 'high' && this.save.quality === 'high') {
        // Protect the frame rate on lower-powered devices without changing the user's setting.
        const pr = Math.max(1.15, this.renderer.getPixelRatio() * .82);
        this.renderer.setPixelRatio(pr);
        this.fpsSample.adjusted = true;
      }
      this.fpsSample.time = 0;
      this.fpsSample.frames = 0;
    }

    if (this.state === 'menu') {
      this.updateMenu(dt, time);
      this.renderer.render(this.scene, this.world.menuCamera);
      return;
    }

    if (this.state === 'briefing' || this.state === 'playing' || this.state === 'camera' || this.state === 'jumpscare' || this.state === 'gameover' || this.state === 'win') {
      if (this.state === 'briefing') {
        this.briefingTimer += dt;
        this.updateOfficeCamera(dt, time);
        if (this.briefingTimer > 3.3) {
          this.state = 'playing';
          this.dom.briefing.classList.add('out');
          setTimeout(() => this.dom.briefing.classList.add('hidden'), 700);
          this.dom.hud.classList.remove('hidden');
          this.showToast('12:00 AM. The shift has started. Do not let them in.', { duration: 3400 });
        }
      } else if (this.state === 'playing') {
        this.updateShift(dt);
        this.updateOfficeCamera(dt, time);
      } else if (this.state === 'camera') {
        this.updateShift(dt);
        if (this.state === 'jumpscare') return;
        this.updateCameraFeed(time);
      } else if (this.state === 'jumpscare') {
        this.jump.t += dt;
        this.updateOfficeCamera(dt, time);
        if (this.jump.t > 1.95) this.endScare();
      } else {
        this.updateOfficeCamera(dt, time);
        this.renderer.toneMappingExposure = THREE.MathUtils.lerp(this.renderer.toneMappingExposure, .92, .03);
      }
      this.world.update(time, dt, {
        doorAmounts: this.powerOut ? [0, 0] : this.doorAmounts,
        hallLights: this.powerOut ? [0, 0] : this.hallLights,
        powerOut: this.powerOut || this.state === 'gameover',
        mode: this.state,
        foxyProgress: this.ai?.foxy?.progress || 0
      });
      // Camera shake after power loss and during normal idle tension.
      if (this.state === 'playing' && this.powerOut) {
        this.world.officeCamera.rotation.z = Math.sin(time * 12) * .0015;
      }
      const renderCam = this.state === 'camera' ? this.world.cams[this.camId]?.camera : this.world.officeCamera;
      if (this.state !== 'camera') {
        this.renderer.toneMappingExposure = THREE.MathUtils.lerp(this.renderer.toneMappingExposure, this.powerOut ? .72 : 1.06, .04);
      }
      this.updateHUD();
      this.renderer.render(this.scene, renderCam || this.world.officeCamera);
    }
  }
}
