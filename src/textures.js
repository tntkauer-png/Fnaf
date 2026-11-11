import * as THREE from 'three';

export function makeCanvas(width, height) {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  return canvas;
}

export function canvasTexture(canvas, { repeat = [1, 1], srgb = true, anisotropy = 4 } = {}) {
  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(repeat[0], repeat[1]);
  texture.anisotropy = anisotropy;
  if (srgb) texture.colorSpace = THREE.SRGBColorSpace;
  texture.needsUpdate = true;
  return texture;
}

export function noiseFill(ctx, width, height, amount = 0.08, alpha = 0.08) {
  const image = ctx.getImageData(0, 0, width, height);
  const data = image.data;
  for (let i = 0; i < data.length; i += 4) {
    const n = (Math.random() - 0.5) * 255 * amount;
    data[i] = Math.max(0, Math.min(255, data[i] + n));
    data[i + 1] = Math.max(0, Math.min(255, data[i + 1] + n));
    data[i + 2] = Math.max(0, Math.min(255, data[i + 2] + n));
    if (alpha > 0) data[i + 3] = Math.min(255, data[i + 3]);
  }
  ctx.putImageData(image, 0, 0);
}

function grime(ctx, w, h, count = 40, color = 'rgba(25,20,12,0.12)') {
  for (let i = 0; i < count; i++) {
    const x = Math.random() * w;
    const y = Math.random() * h;
    const r = 6 + Math.random() * 60;
    const gradient = ctx.createRadialGradient(x, y, 0, x, y, r);
    gradient.addColorStop(0, color);
    gradient.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = gradient;
    ctx.fillRect(x - r, y - r, r * 2, r * 2);
  }
}

function scratches(ctx, w, h, count = 24, color = 'rgba(230,220,190,0.08)') {
  ctx.strokeStyle = color;
  ctx.lineWidth = 0.6 + Math.random() * 1.4;
  for (let i = 0; i < count; i++) {
    ctx.beginPath();
    const x = Math.random() * w;
    const y = Math.random() * h;
    ctx.moveTo(x, y);
    ctx.lineTo(x + (Math.random() - 0.5) * 80, y + (Math.random() - 0.2) * 28);
    ctx.stroke();
  }
}

export function createFloorTexture(renderer) {
  const size = 512;
  const canvas = makeCanvas(size, size);
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#b8ad92';
  ctx.fillRect(0, 0, size, size);
  const cell = size / 4;
  for (let y = 0; y < 4; y++) {
    for (let x = 0; x < 4; x++) {
      const dark = (x + y) % 2 === 0;
      ctx.fillStyle = dark ? '#191b19' : '#d3c7a6';
      ctx.fillRect(x * cell, y * cell, cell, cell);
      ctx.fillStyle = 'rgba(255,255,255,0.035)';
      ctx.fillRect(x * cell + 2, y * cell + 2, cell - 4, 2);
    }
  }
  // Worn tile edges and scuffs.
  ctx.strokeStyle = 'rgba(9,10,8,.55)';
  ctx.lineWidth = 4;
  for (let i = 0; i <= 4; i++) {
    ctx.beginPath(); ctx.moveTo(i * cell, 0); ctx.lineTo(i * cell, size); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(0, i * cell); ctx.lineTo(size, i * cell); ctx.stroke();
  }
  grime(ctx, size, size, 65, 'rgba(24,19,10,.23)');
  scratches(ctx, size, size, 48);
  noiseFill(ctx, size, size, 0.07);
  return canvasTexture(canvas, { repeat: [8, 8], anisotropy: renderer.capabilities.getMaxAnisotropy() });
}

export function createWallTexture(renderer) {
  const canvas = makeCanvas(512, 512);
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#5e5546';
  ctx.fillRect(0, 0, 512, 512);
  for (let i = 0; i < 3500; i++) {
    const v = 70 + Math.random() * 40;
    ctx.fillStyle = `rgba(${v},${v - 5},${v - 15},${Math.random() * .1})`;
    ctx.fillRect(Math.random() * 512, Math.random() * 512, 1 + Math.random() * 4, 1 + Math.random() * 4);
  }
  // Wainscoting line.
  ctx.fillStyle = '#3d352b';
  ctx.fillRect(0, 415, 512, 12);
  ctx.fillStyle = 'rgba(195,173,129,.13)';
  ctx.fillRect(0, 404, 512, 4);
  grime(ctx, 512, 512, 45, 'rgba(12,10,6,.25)');
  scratches(ctx, 512, 512, 30, 'rgba(220,200,160,.06)');
  noiseFill(ctx, 512, 512, 0.04);
  return canvasTexture(canvas, { repeat: [5, 3], anisotropy: renderer.capabilities.getMaxAnisotropy() });
}

export function createCeilingTexture(renderer) {
  const canvas = makeCanvas(512, 512);
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#777164';
  ctx.fillRect(0, 0, 512, 512);
  const tile = 170;
  for (let y = 0; y < 4; y++) {
    for (let x = 0; x < 4; x++) {
      ctx.fillStyle = (x + y) % 2 ? '#6f695d' : '#7c7567';
      ctx.fillRect(x * tile, y * tile, tile, tile);
      ctx.strokeStyle = 'rgba(20,18,14,.4)';
      ctx.lineWidth = 3;
      ctx.strokeRect(x * tile, y * tile, tile, tile);
    }
  }
  grime(ctx, 512, 512, 24, 'rgba(25,20,10,.2)');
  return canvasTexture(canvas, { repeat: [8, 8], anisotropy: renderer.capabilities.getMaxAnisotropy() });
}

export function createMetalTexture(renderer, color = '#4c4d48') {
  const canvas = makeCanvas(256, 256);
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, 256, 256);
  ctx.strokeStyle = 'rgba(255,255,255,.11)';
  ctx.lineWidth = 1;
  for (let i = 0; i < 35; i++) {
    const y = Math.random() * 256;
    ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(256, y + (Math.random() - .5) * 5); ctx.stroke();
  }
  scratches(ctx, 256, 256, 50, 'rgba(255,255,255,.12)');
  grime(ctx, 256, 256, 18, 'rgba(26,16,6,.25)');
  noiseFill(ctx, 256, 256, 0.1);
  return canvasTexture(canvas, { repeat: [2, 2], anisotropy: renderer.capabilities.getMaxAnisotropy() });
}

export function createFurTexture(renderer, base = '#6a4831') {
  const canvas = makeCanvas(256, 256);
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = base;
  ctx.fillRect(0, 0, 256, 256);
  for (let i = 0; i < 8000; i++) {
    const a = Math.random() * .17;
    ctx.strokeStyle = Math.random() > .5 ? `rgba(255,235,205,${a})` : `rgba(15,8,4,${a})`;
    ctx.beginPath();
    const x = Math.random() * 256;
    const y = Math.random() * 256;
    ctx.moveTo(x, y);
    ctx.lineTo(x + (Math.random() - .5) * 5, y + 2 + Math.random() * 7);
    ctx.stroke();
  }
  grime(ctx, 256, 256, 10, 'rgba(20,10,4,.18)');
  return canvasTexture(canvas, { repeat: [2, 2], anisotropy: renderer.capabilities.getMaxAnisotropy() });
}

export function createCurtainTexture(renderer, color = '#4b1733') {
  const canvas = makeCanvas(512, 512);
  const ctx = canvas.getContext('2d');
  const g = ctx.createLinearGradient(0, 0, 512, 0);
  for (let i = 0; i <= 20; i++) {
    const p = i / 20;
    const light = Math.sin(p * Math.PI * 18) * .5 + .5;
    g.addColorStop(p, `rgb(${75 + light * 38},${20 + light * 14},${48 + light * 24})`);
  }
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 512, 512);
  ctx.fillStyle = 'rgba(0,0,0,.18)';
  for (let x = 8; x < 512; x += 25) ctx.fillRect(x, 0, 5, 512);
  grime(ctx, 512, 512, 30, 'rgba(0,0,0,.3)');
  noiseFill(ctx, 512, 512, 0.06);
  return canvasTexture(canvas, { repeat: [4, 1], anisotropy: renderer.capabilities.getMaxAnisotropy() });
}

export function createPosterTexture(renderer, kind = 'freddy') {
  const w = 512, h = 720;
  const canvas = makeCanvas(w, h);
  const ctx = canvas.getContext('2d');
  const bg = ctx.createLinearGradient(0, 0, 0, h);
  bg.addColorStop(0, kind === 'chica' ? '#d8aa28' : kind === 'foxy' ? '#70231d' : '#a67c45');
  bg.addColorStop(1, kind === 'chica' ? '#7f5d0d' : kind === 'foxy' ? '#35100e' : '#5d3e28');
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, w, h);
  // Burst rays.
  ctx.save();
  ctx.translate(w / 2, h * .62);
  for (let i = 0; i < 20; i++) {
    ctx.rotate(Math.PI / 10);
    ctx.fillStyle = i % 2 ? 'rgba(255,243,202,.1)' : 'rgba(47,20,10,.07)';
    ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(-90, -600); ctx.lineTo(90, -600); ctx.closePath(); ctx.fill();
  }
  ctx.restore();

  // Character portrait drawn from simple vector shapes.
  const cx = w / 2;
  if (kind === 'freddy') {
    ctx.fillStyle = '#4b2d1d'; ctx.beginPath(); ctx.ellipse(cx, 366, 150, 182, 0, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.ellipse(cx - 124, 226, 54, 66, -.2, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.ellipse(cx + 124, 226, 54, 66, .2, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#b07c4f'; ctx.beginPath(); ctx.ellipse(cx, 442, 96, 76, 0, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#141312'; ctx.beginPath(); ctx.ellipse(cx, 300, 92, 22, 0, 0, Math.PI * 2); ctx.fill(); ctx.fillRect(cx - 58, 215, 116, 86);
    ctx.fillStyle = '#f3ebd6'; ctx.beginPath(); ctx.arc(cx - 48, 348, 19, 0, Math.PI * 2); ctx.arc(cx + 48, 348, 19, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#16110d'; ctx.beginPath(); ctx.arc(cx - 48, 350, 9, 0, Math.PI * 2); ctx.arc(cx + 48, 350, 9, 0, Math.PI * 2); ctx.fill();
  } else if (kind === 'bonnie') {
    ctx.fillStyle = '#59417e'; ctx.beginPath(); ctx.ellipse(cx, 385, 142, 174, 0, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.ellipse(cx - 94, 178, 40, 143, -.16, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.ellipse(cx + 94, 178, 40, 143, .16, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#c7a6d6'; ctx.beginPath(); ctx.ellipse(cx - 93, 183, 17, 105, -.16, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.ellipse(cx + 93, 183, 17, 105, .16, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#a888bb'; ctx.beginPath(); ctx.ellipse(cx, 452, 82, 57, 0, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#fff7df'; ctx.beginPath(); ctx.arc(cx - 46, 356, 23, 0, Math.PI * 2); ctx.arc(cx + 46, 356, 23, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#9e2330'; ctx.beginPath(); ctx.arc(cx - 46, 358, 10, 0, Math.PI * 2); ctx.arc(cx + 46, 358, 10, 0, Math.PI * 2); ctx.fill();
  } else if (kind === 'chica') {
    ctx.fillStyle = '#d6b02c'; ctx.beginPath(); ctx.ellipse(cx, 385, 145, 170, 0, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#e3c043'; ctx.beginPath(); ctx.ellipse(cx, 465, 84, 49, 0, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#d56e1e'; ctx.beginPath(); ctx.moveTo(cx - 58, 426); ctx.lineTo(cx + 58, 426); ctx.lineTo(cx, 482); ctx.closePath(); ctx.fill();
    ctx.fillStyle = '#f7efd8'; ctx.beginPath(); ctx.arc(cx - 52, 350, 24, 0, Math.PI * 2); ctx.arc(cx + 52, 350, 24, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#8a4b9d'; ctx.beginPath(); ctx.arc(cx - 52, 352, 11, 0, Math.PI * 2); ctx.arc(cx + 52, 352, 11, 0, Math.PI * 2); ctx.fill();
    ctx.strokeStyle = '#e0be4a'; ctx.lineWidth = 12;
    for (let i = -3; i <= 3; i++) { ctx.beginPath(); ctx.moveTo(cx + i * 18, 224); ctx.lineTo(cx + i * 22, 165); ctx.stroke(); }
  } else {
    ctx.fillStyle = '#862a21'; ctx.beginPath(); ctx.ellipse(cx, 380, 138, 175, 0, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.moveTo(cx - 122, 258); ctx.lineTo(cx - 153, 126); ctx.lineTo(cx - 43, 216); ctx.closePath(); ctx.fill();
    ctx.beginPath(); ctx.moveTo(cx + 122, 258); ctx.lineTo(cx + 153, 126); ctx.lineTo(cx + 43, 216); ctx.closePath(); ctx.fill();
    ctx.fillStyle = '#c46a42'; ctx.beginPath(); ctx.ellipse(cx + 12, 445, 96, 55, 0.05, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#17110e'; ctx.fillRect(cx - 118, 321, 82, 56); ctx.strokeStyle = '#6e1b17'; ctx.lineWidth = 8; ctx.beginPath(); ctx.moveTo(cx - 118, 321); ctx.lineTo(cx - 36, 377); ctx.stroke();
    ctx.fillStyle = '#f4e8ce'; ctx.beginPath(); ctx.arc(cx + 60, 347, 22, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#d0b84e'; ctx.beginPath(); ctx.arc(cx + 60, 349, 8, 0, Math.PI * 2); ctx.fill();
  }

  // Title text.
  const label = kind === 'freddy' ? 'FREDDY FAZBEAR' : kind === 'bonnie' ? 'BONNIE' : kind === 'chica' ? 'CHICA' : 'FOXY THE PIRATE';
  ctx.textAlign = 'center';
  ctx.fillStyle = 'rgba(30,10,6,.58)';
  ctx.fillRect(0, 42, w, 102);
  ctx.font = '700 62px Impact, Arial Black, sans-serif';
  ctx.fillStyle = '#fff4cf';
  ctx.shadowColor = '#38100a'; ctx.shadowBlur = 0; ctx.shadowOffsetY = 6;
  ctx.fillText(label, cx, 117);
  ctx.shadowOffsetY = 0;
  ctx.font = '22px Georgia, serif';
  ctx.fillStyle = 'rgba(255,244,207,.8)';
  ctx.fillText('FREDDY FAZBEAR’S PIZZA', cx, 660);
  // Tape and wear.
  ctx.fillStyle = 'rgba(225,210,160,.52)';
  ctx.save(); ctx.translate(30, 50); ctx.rotate(-.4); ctx.fillRect(-28, -14, 120, 28); ctx.restore();
  ctx.save(); ctx.translate(w - 36, h - 58); ctx.rotate(.35); ctx.fillRect(-28, -14, 120, 28); ctx.restore();
  grime(ctx, w, h, 26, 'rgba(20,12,5,.23)');
  scratches(ctx, w, h, 20, 'rgba(255,240,200,.12)');
  noiseFill(ctx, w, h, .04);
  return canvasTexture(canvas, { anisotropy: renderer.capabilities.getMaxAnisotropy() });
}

export function createBackdropTexture(renderer) {
  const w = 1024, h = 512;
  const canvas = makeCanvas(w, h);
  const ctx = canvas.getContext('2d');
  const g = ctx.createLinearGradient(0, 0, 0, h);
  g.addColorStop(0, '#281037');
  g.addColorStop(.55, '#451443');
  g.addColorStop(1, '#120916');
  ctx.fillStyle = g; ctx.fillRect(0, 0, w, h);
  // Glowing stars.
  for (let i = 0; i < 140; i++) {
    const x = Math.random() * w, y = Math.random() * h * .8, r = Math.random() * 4 + 1;
    ctx.fillStyle = `rgba(255,${180 + Math.random() * 60},${80 + Math.random() * 60},${.3 + Math.random() * .7})`;
    ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill();
  }
  ctx.textAlign = 'center';
  ctx.font = '700 88px Impact, Arial Black, sans-serif';
  ctx.fillStyle = '#f6d97b';
  ctx.shadowColor = '#ff8b27'; ctx.shadowBlur = 28;
  ctx.fillText('FREDDY & FRIENDS', w / 2, 190);
  ctx.font = '700 50px Impact, Arial Black, sans-serif';
  ctx.shadowBlur = 12;
  ctx.fillStyle = '#f1ead7';
  ctx.fillText('LET’S EAT!', w / 2, 265);
  ctx.shadowBlur = 0;
  // Checker border.
  const cell = 42;
  for (let x = 0; x < w; x += cell) {
    for (let y = 0; y < 2; y++) {
      ctx.fillStyle = ((x / cell) + y) % 2 ? '#d9cba9' : '#17131a';
      ctx.fillRect(x, h - cell * 2 + y * cell, cell, cell);
    }
  }
  grime(ctx, w, h, 25, 'rgba(0,0,0,.3)');
  return canvasTexture(canvas, { anisotropy: renderer.capabilities.getMaxAnisotropy() });
}

export function createBibTexture(renderer) {
  const canvas = makeCanvas(512, 400);
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, 512, 400);
  ctx.fillStyle = '#f0e4c5';
  ctx.beginPath(); ctx.arc(256, 220, 205, Math.PI, 0); ctx.lineTo(461, 360); ctx.quadraticCurveTo(256, 430, 51, 360); ctx.closePath(); ctx.fill();
  ctx.strokeStyle = '#bc9d60'; ctx.lineWidth = 9; ctx.stroke();
  ctx.textAlign = 'center';
  ctx.font = '700 68px Impact, Arial Black, sans-serif';
  ctx.fillStyle = '#b03a42';
  ctx.fillText('LET’S EAT!!!', 256, 246);
  for (let i = 0; i < 16; i++) {
    ctx.fillStyle = ['#d39c2f','#b43a3a','#4b8b68','#5f4c93'][i % 4];
    ctx.beginPath(); ctx.arc(60 + i * 26, 300 + Math.sin(i) * 9, 7, 0, Math.PI * 2); ctx.fill();
  }
  return canvasTexture(canvas, { anisotropy: renderer.capabilities.getMaxAnisotropy() });
}

export function createSignTexture(renderer) {
  const canvas = makeCanvas(1024, 256);
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, 1024, 256);
  ctx.textAlign = 'center';
  ctx.font = '700 108px Impact, Arial Black, sans-serif';
  ctx.fillStyle = '#e4c155';
  ctx.shadowColor = '#9a3512'; ctx.shadowBlur = 18; ctx.shadowOffsetY = 8;
  ctx.fillText("FREDDY FAZBEAR'S", 512, 112);
  ctx.shadowBlur = 10;
  ctx.fillStyle = '#f1e5c4';
  ctx.font = '700 84px Impact, Arial Black, sans-serif';
  ctx.fillText('PIZZA', 512, 201);
  return canvasTexture(canvas, { anisotropy: renderer.capabilities.getMaxAnisotropy() });
}

export function createCoveSignTexture(renderer) {
  const canvas = makeCanvas(512, 320);
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#d9cba8'; ctx.fillRect(0, 0, 512, 320);
  ctx.strokeStyle = '#4b3927'; ctx.lineWidth = 10; ctx.strokeRect(10, 10, 492, 300);
  ctx.textAlign = 'center';
  ctx.fillStyle = '#a3262b';
  ctx.font = '700 78px Impact, Arial Black, sans-serif';
  ctx.fillText('SORRY!', 256, 104);
  ctx.fillStyle = '#30261c';
  ctx.font = '700 35px Arial, sans-serif';
  ctx.fillText('OUT OF ORDER', 256, 165);
  ctx.font = '25px Georgia, serif';
  ctx.fillText('PIRATE COVE', 256, 212);
  ctx.fillStyle = '#5e4b32';
  ctx.font = 'italic 24px Georgia, serif';
  ctx.fillText('— Freddy Fazbear’s Pizza —', 256, 264);
  grime(ctx, 512, 320, 10, 'rgba(40,25,10,.2)');
  return canvasTexture(canvas, { anisotropy: renderer.capabilities.getMaxAnisotropy() });
}

export function createScreenTexture(renderer) {
  const canvas = makeCanvas(512, 320);
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#06110e'; ctx.fillRect(0, 0, 512, 320);
  ctx.fillStyle = 'rgba(70,255,185,.08)';
  for (let y = 0; y < 320; y += 4) ctx.fillRect(0, y, 512, 1);
  ctx.strokeStyle = 'rgba(94,255,195,.55)'; ctx.lineWidth = 2;
  for (let i = 0; i < 8; i++) {
    ctx.beginPath();
    ctx.moveTo(30, 40 + i * 34);
    ctx.lineTo(150 + Math.random() * 300, 40 + i * 34);
    ctx.stroke();
  }
  ctx.fillStyle = 'rgba(110,255,195,.8)';
  ctx.font = '24px monospace';
  ctx.fillText('SECURITY SYSTEM', 30, 22);
  ctx.fillText('● REC  01:24:12', 350, 300);
  grime(ctx, 512, 320, 8, 'rgba(0,0,0,.25)');
  return canvasTexture(canvas);
}

export function createDrawingTexture(renderer, variant = 0) {
  const canvas = makeCanvas(384, 512);
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#e7ddc4'; ctx.fillRect(0, 0, 384, 512);
  ctx.strokeStyle = '#4d4637'; ctx.lineWidth = 5;
  if (variant % 3 === 0) {
    ctx.beginPath(); ctx.arc(192, 230, 90, 0, Math.PI * 2); ctx.stroke();
    ctx.beginPath(); ctx.arc(158, 210, 12, 0, Math.PI * 2); ctx.arc(226, 210, 12, 0, Math.PI * 2); ctx.stroke();
    ctx.beginPath(); ctx.arc(192, 250, 40, .1, Math.PI - .1); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(155, 142); ctx.lineTo(130, 74); ctx.lineTo(182, 128); ctx.moveTo(229, 142); ctx.lineTo(254, 74); ctx.lineTo(202, 128); ctx.stroke();
    ctx.fillStyle = '#7a4a2b'; ctx.font = '44px Comic Sans MS, cursive'; ctx.fillText('FREDDY', 62, 430);
    ctx.fillStyle = '#d2b43e'; ctx.beginPath(); ctx.arc(80, 100, 25, 0, Math.PI * 2); ctx.fill();
  } else if (variant % 3 === 1) {
    const colors = ['#b1393e','#3f81a7','#b9932f','#3f8a61'];
    for (let i = 0; i < 4; i++) {
      ctx.strokeStyle = colors[i];
      ctx.beginPath(); ctx.moveTo(36 + i * 85, 260); ctx.lineTo(36 + i * 85, 90);
      ctx.lineTo(72 + i * 85, 130); ctx.lineTo(108 + i * 85, 90); ctx.stroke();
    }
    ctx.fillStyle = '#3c3930'; ctx.font = '37px Comic Sans MS, cursive'; ctx.fillText('MY FRIENDS', 30, 350);
    ctx.fillStyle = '#b1393e'; ctx.beginPath(); ctx.arc(320, 70, 32, 0, Math.PI * 2); ctx.fill();
  } else {
    ctx.strokeStyle = '#5c4682'; ctx.lineWidth = 8;
    ctx.beginPath(); ctx.ellipse(190, 220, 90, 110, 0, 0, Math.PI * 2); ctx.stroke();
    ctx.beginPath(); ctx.ellipse(150, 100, 24, 90, -.2, 0, Math.PI * 2); ctx.ellipse(230, 100, 24, 90, .2, 0, Math.PI * 2); ctx.stroke();
    ctx.fillStyle = '#5c4682'; ctx.beginPath(); ctx.arc(160, 225, 12, 0, Math.PI * 2); ctx.arc(220, 225, 12, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#3c3930'; ctx.font = '40px Comic Sans MS, cursive'; ctx.fillText('BONNIE', 98, 440);
  }
  // Crayon texture.
  for (let i = 0; i < 300; i++) {
    ctx.fillStyle = `rgba(80,70,50,${Math.random() * .035})`;
    ctx.fillRect(Math.random() * 384, Math.random() * 512, 2, 2);
  }
  return canvasTexture(canvas);
}

export function createWarningTexture(renderer) {
  const canvas = makeCanvas(512, 512);
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#e0d4b5'; ctx.fillRect(0, 0, 512, 512);
  ctx.strokeStyle = '#b62d2d'; ctx.lineWidth = 18; ctx.strokeRect(16, 16, 480, 480);
  ctx.fillStyle = '#b62d2d';
  ctx.beginPath(); ctx.moveTo(256, 60); ctx.lineTo(450, 400); ctx.lineTo(62, 400); ctx.closePath(); ctx.fill();
  ctx.fillStyle = '#f0e6cc'; ctx.textAlign = 'center'; ctx.font = '700 132px Impact, sans-serif'; ctx.fillText('!', 256, 350);
  ctx.fillStyle = '#34291c'; ctx.font = '700 42px Impact, sans-serif'; ctx.fillText('EMPLOYEES ONLY', 256, 458);
  ctx.font = '20px Arial, sans-serif'; ctx.fillText('FREDDY FAZBEAR’S PIZZA', 256, 490);
  grime(ctx, 512, 512, 15, 'rgba(30,20,8,.23)');
  return canvasTexture(canvas);
}

export function createPizzaTexture(renderer) {
  const canvas = makeCanvas(512, 512);
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#bca57c'; ctx.fillRect(0, 0, 512, 512);
  ctx.translate(256, 256);
  for (let i = 0; i < 16; i++) {
    ctx.rotate(Math.PI / 8);
    ctx.fillStyle = i % 2 ? '#c58a55' : '#b97847';
    ctx.beginPath(); ctx.arc(0, 0, 140, -.2, .2); ctx.lineTo(0, 0); ctx.fill();
  }
  ctx.fillStyle = '#d6b053';
  for (let i = -2; i <= 2; i++) for (let j = -2; j <= 2; j++) {
    if ((i + j) % 3) {
      ctx.beginPath(); ctx.arc(i * 52 + Math.sin(j) * 10, j * 52, 19, 0, Math.PI * 2); ctx.fill();
    }
  }
  ctx.fillStyle = '#a63c2e';
  for (let i = 0; i < 12; i++) {
    const a = Math.random() * Math.PI * 2, r = Math.random() * 120;
    ctx.beginPath(); ctx.arc(Math.cos(a) * r, Math.sin(a) * r, 9, 0, Math.PI * 2); ctx.fill();
  }
  ctx.fillStyle = 'rgba(40,20,8,.18)';
  ctx.font = '700 34px Impact, sans-serif'; ctx.textAlign = 'center';
  ctx.fillText("FREDDY'S PIZZA", 0, 185);
  return canvasTexture(canvas);
}

export function createCurtainClothTexture(renderer) {
  return createCurtainTexture(renderer, '#3e1329');
}
