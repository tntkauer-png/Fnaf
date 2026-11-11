import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { createWorld } from './world.js';
import { Game } from './game.js';
import './style.css';

function boot() {
  const canvas = document.getElementById('game-canvas');
  const scene = new THREE.Scene();
  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    powerPreference: 'high-performance',
    alpha: false,
    stencil: false
  });
  renderer.setClearColor(0x050404, 1);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.08;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.info.autoReset = true;

  // A subtle studio environment gives metal and plastic a believable sheen.
  const pmrem = new THREE.PMREMGenerator(renderer);
  const room = new RoomEnvironment(renderer);
  scene.environment = pmrem.fromScene(room, .04).texture;
  scene.environmentIntensity = .28;
  room.dispose?.();
  pmrem.dispose();

  const world = createWorld(renderer, scene);
  const game = new Game({ renderer, scene, world });
  window.__FNAF = { game, world, scene, renderer };

  renderer.domElement.addEventListener('webglcontextlost', (event) => {
    event.preventDefault();
    const bootEl = document.getElementById('boot');
    if (bootEl) bootEl.textContent = 'The security system lost its signal. Reload to try again.';
  });
}

try {
  boot();
} catch (error) {
  console.error(error);
  const bootEl = document.getElementById('boot');
  if (bootEl) {
    bootEl.innerHTML = `<div class="boot-mark"><span class="boot-star">★</span><span>SIGNAL LOST</span></div><div class="boot-copy">Your device could not start the 3D security system.<br>${String(error.message || error).slice(0, 160)}</div>`;
  }
}
