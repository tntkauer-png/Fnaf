import * as THREE from 'three';
import { createAnimatronic, animateAnimatronic, setEyeGlow } from './models.js';
import {
  createBackdropTexture,
  createCeilingTexture,
  createCoveSignTexture,
  createCurtainTexture,
  createDrawingTexture,
  createFloorTexture,
  createMetalTexture,
  createPizzaTexture,
  createPosterTexture,
  createScreenTexture,
  createSignTexture,
  createWallTexture,
  createWarningTexture,
  canvasTexture,
  makeCanvas
} from './textures.js';

const V = (x, y, z) => new THREE.Vector3(x, y, z);

function texRepeat(source, x, y) {
  const tex = source.clone();
  tex.needsUpdate = true;
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(x, y);
  return tex;
}

function addBox(parent, size, position, material, rotation = [0, 0, 0]) {
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(...size), material);
  mesh.position.set(...position);
  mesh.rotation.set(...rotation);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  parent.add(mesh);
  return mesh;
}

function addPlane(parent, size, position, material, rotation = [0, 0, 0]) {
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(...size), material);
  mesh.position.set(...position);
  mesh.rotation.set(...rotation);
  mesh.receiveShadow = true;
  parent.add(mesh);
  return mesh;
}

function addPoster(parent, texture, position, rotation, width = 1.1, height = 1.55) {
  const mat = new THREE.MeshStandardMaterial({ map: texture, roughness: .82, side: THREE.DoubleSide });
  return addPlane(parent, [width, height], position, mat, rotation);
}

function createCeilingLight(parent, x, z, y = 4.18, color = '#d9d2bb') {
  const group = new THREE.Group();
  group.position.set(x, y, z);
  addBox(group, [1.25, .07, .32], [0, 0, 0], new THREE.MeshStandardMaterial({ color: '#3a3932', roughness: .55, metalness: .4 }));
  const glow = addBox(group, [1.1, .025, .22], [0, -.045, 0], new THREE.MeshStandardMaterial({
    color, emissive: new THREE.Color(color), emissiveIntensity: 2.4, roughness: .22
  }));
  group.userData.glow = glow;
  parent.add(group);
  return group;
}

function makeChair(parent, x, z, rotation = 0, material = null) {
  const group = new THREE.Group();
  group.position.set(x, 0, z);
  group.rotation.y = rotation;
  const mat = material || new THREE.MeshStandardMaterial({ color: '#5a2d31', roughness: .82 });
  const legMat = new THREE.MeshStandardMaterial({ color: '#2a2926', metalness: .6, roughness: .4 });
  addBox(group, [.55, .08, .5], [0, .58, 0], mat);
  addBox(group, [.55, .62, .07], [0, .89, -.23], mat, [.12, 0, 0]);
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
    const leg = new THREE.Mesh(new THREE.CylinderGeometry(.022, .025, .56, 8), legMat);
    leg.position.set(sx * .22, .29, sz * .2);
    group.add(leg);
  }
  parent.add(group);
  return group;
}

function makeTable(parent, x, z, radius = 1.05) {
  const group = new THREE.Group();
  group.position.set(x, 0, z);
  const clothTex = createTableTexture();
  const cloth = new THREE.MeshStandardMaterial({ map: clothTex, roughness: .82, side: THREE.DoubleSide });
  const top = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius, .075, 32), cloth);
  top.position.y = .95;
  top.castShadow = top.receiveShadow = true;
  group.add(top);
  const skirt = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius * .98, .34, 32, 1, true), cloth);
  skirt.position.y = .77;
  group.add(skirt);
  const legMat = new THREE.MeshStandardMaterial({ color: '#3b3934', metalness: .6, roughness: .4 });
  const leg = new THREE.Mesh(new THREE.CylinderGeometry(.07, .11, .74, 10), legMat);
  leg.position.y = .37;
  group.add(leg);
  const base = new THREE.Mesh(new THREE.CylinderGeometry(.34, .4, .055, 16), legMat);
  base.position.y = .03;
  group.add(base);
  // Party props.
  const pizza = new THREE.Mesh(new THREE.CylinderGeometry(.31, .31, .04, 24), new THREE.MeshStandardMaterial({ map: createPizzaTexture(), roughness: .8 }));
  pizza.position.set(-.1, 1.0, 0);
  group.add(pizza);
  const boxMat = new THREE.MeshStandardMaterial({ color: '#b99c69', roughness: .9 });
  addBox(group, [.6, .1, .6], [.46, 1.02, .22], boxMat, [0, .25, 0]);
  for (let i = 0; i < 4; i++) {
    const hat = new THREE.Mesh(new THREE.ConeGeometry(.1, .35, 8), new THREE.MeshStandardMaterial({ color: ['#b63a37','#d1a030','#4d7d94','#6a4c8b'][i], roughness: .75 }));
    hat.position.set(Math.cos(i * 2) * .52, 1.18, Math.sin(i * 2) * .52);
    group.add(hat);
  }
  group.add(makePlate(.28, -.32, .04));
  parent.add(group);
  return group;
}

function makePlate(radius, x, z) {
  const plate = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius * .88, .025, 20), new THREE.MeshStandardMaterial({ color: '#d6cdba', roughness: .45 }));
  plate.position.set(x, 1.005, z);
  return plate;
}

function createTableTexture() {
  const canvas = makeCanvas(256, 256);
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#b23a3c';
  ctx.fillRect(0, 0, 256, 256);
  for (let i = 0; i < 8; i++) for (let j = 0; j < 8; j++) {
    if ((i + j) % 2 === 0) {
      ctx.fillStyle = 'rgba(235,220,190,.18)';
      ctx.fillRect(i * 32, j * 32, 32, 32);
    }
  }
  ctx.fillStyle = 'rgba(230,215,190,.65)';
  ctx.font = '18px Georgia, serif';
  ctx.textAlign = 'center';
  ctx.fillText('FREDDY’S', 128, 132);
  const tex = canvasTexture(canvas, { repeat: [1, 1] });
  return tex;
}

function makeBalloon(parent, x, y, z, color) {
  const group = new THREE.Group();
  group.position.set(x, y, z);
  const balloon = new THREE.Mesh(new THREE.SphereGeometry(.18, 16, 12), new THREE.MeshStandardMaterial({ color, roughness: .34 }));
  balloon.scale.set(1, 1.25, 1);
  balloon.castShadow = true;
  group.add(balloon);
  const knot = new THREE.Mesh(new THREE.ConeGeometry(.045, .07, 6), new THREE.MeshStandardMaterial({ color, roughness: .4 }));
  knot.position.y = -.25;
  knot.rotation.z = Math.PI;
  group.add(knot);
  const stringGeo = new THREE.BufferGeometry().setFromPoints([V(0, -.26, 0), V(0, -2.2, 0)]);
  const string = new THREE.Line(stringGeo, new THREE.LineBasicMaterial({ color: '#a79980', transparent: true, opacity: .5 }));
  group.add(string);
  group.userData.phase = Math.random() * 5;
  parent.add(group);
  return group;
}

function createSecurityCamera(x, y, z, ry = 0) {
  const group = new THREE.Group();
  group.position.set(x, y, z);
  group.rotation.y = ry;
  const body = new THREE.Mesh(new THREE.BoxGeometry(.2, .16, .42), new THREE.MeshStandardMaterial({ color: '#242522', roughness: .46, metalness: .42 }));
  body.position.z = -.08;
  group.add(body);
  const lens = new THREE.Mesh(new THREE.CylinderGeometry(.07, .08, .12, 12), new THREE.MeshStandardMaterial({ color: '#0d0d0c', roughness: .2, metalness: .7 }));
  lens.rotation.x = Math.PI / 2;
  lens.position.set(0, 0, -.32);
  group.add(lens);
  const led = new THREE.Mesh(new THREE.SphereGeometry(.015, 8, 6), new THREE.MeshBasicMaterial({ color: '#ff2a24' }));
  led.position.set(.065, .075, -.28);
  group.add(led);
  group.userData.led = led;
  return group;
}

function makeStageCurtain(width, height, texture, x, z) {
  const geo = new THREE.PlaneGeometry(width, height, 28, 2);
  const pos = geo.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    const px = pos.getX(i);
    pos.setZ(i, Math.sin(px * 3.1) * .1 + Math.cos(px * 1.4) * .08);
  }
  geo.computeVertexNormals();
  const mat = new THREE.MeshStandardMaterial({ map: texture, roughness: .9, side: THREE.DoubleSide });
  const curtain = new THREE.Mesh(geo, mat);
  curtain.position.set(x, height / 2, z);
  curtain.castShadow = true;
  return curtain;
}

function createCoveCurtain(renderer, x, z) {
  const group = new THREE.Group();
  const tex = createCurtainTexture(renderer, '#3b1231');
  tex.repeat.set(3, 1);
  const left = makeStageCurtain(2.72, 3.8, tex, 0, 0);
  left.position.x = -1.36;
  left.material.emissive = new THREE.Color('#1b0717');
  left.material.emissiveIntensity = .9;
  const right = makeStageCurtain(2.72, 3.8, tex, 0, 0);
  right.position.x = 1.36;
  right.material.emissive = new THREE.Color('#1b0717');
  right.material.emissiveIntensity = .9;
  group.add(left, right);
  group.position.set(x, 0, z);
  group.userData = { left, right };
  return group;
}

export function createWorld(renderer, scene) {
  const textureCache = new Map();
  const world = { characters: {}, doors: {}, lights: {}, cams: {}, props: {}, interactives: [] };
  const floorTex = createFloorTexture(renderer);
  const wallTex = createWallTexture(renderer);
  const ceilingTex = createCeilingTexture(renderer);
  const metalTex = createMetalTexture(renderer);
  const curtainTex = createCurtainTexture(renderer);
  const backdropTex = createBackdropTexture(renderer);
  const screenTex = createScreenTexture(renderer);

  const floorMatOffice = new THREE.MeshStandardMaterial({ map: texRepeat(floorTex, 3, 3), color: '#bdb39a', roughness: .72, metalness: .04 });
  const floorMatDining = new THREE.MeshStandardMaterial({ map: texRepeat(floorTex, 10, 10), color: '#b7ad96', roughness: .76 });
  const wallMat = new THREE.MeshStandardMaterial({ map: texRepeat(wallTex, 2.4, 1.4), color: '#9b907e', roughness: .9 });
  const wallMatDark = new THREE.MeshStandardMaterial({ map: texRepeat(wallTex, 2.4, 1.4), color: '#6a6256', roughness: .95 });
  const ceilingMat = new THREE.MeshStandardMaterial({ map: texRepeat(ceilingTex, 3, 3), color: '#777166', roughness: .9 });
  const metalMat = new THREE.MeshStandardMaterial({ map: texRepeat(metalTex, 1, 1), color: '#5c5d57', metalness: .68, roughness: .45 });
  const darkMetal = new THREE.MeshStandardMaterial({ color: '#242420', roughness: .55, metalness: .58 });
  const trimMat = new THREE.MeshStandardMaterial({ color: '#2a2119', roughness: .74, metalness: .15 });
  const blackMat = new THREE.MeshStandardMaterial({ color: '#090807', roughness: .86 });
  const redMat = new THREE.MeshStandardMaterial({ color: '#3a0d0b', roughness: .6, metalness: .2 });

  // ---------------------------------------------------------------------------
  // Architecture
  // ---------------------------------------------------------------------------
  const office = new THREE.Group();
  world.office = office;
  scene.add(office);

  const officeFloor = addPlane(office, [8.6, 8.6], [0, 0, 13.2], floorMatOffice, [-Math.PI / 2, 0, 0]);
  officeFloor.receiveShadow = true;

  // Office ceiling.
  addBox(office, [8.6, .14, 8.6], [0, 4.3, 13.2], ceilingMat);

  // Back wall, with vent and bulletin board.
  addBox(office, [8.6, 4.3, .18], [0, 2.15, 17.45], wallMat);
  const vent = addBox(office, [1.05, .7, .055], [1.9, 1.75, 17.33], metalMat);
  for (let i = 0; i < 7; i++) addBox(office, [.92, .018, .03], [1.9, 1.48 + i * .09, 17.29], darkMetal);
  addPoster(office, createWarningTexture(renderer), [-2.35, 2.65, 17.33], [0, Math.PI, 0], .78, .78);
  addPoster(office, createDrawingTexture(renderer, 0), [-.85, 1.95, 17.33], [0, Math.PI, 0], .48, .64);
  addPoster(office, createDrawingTexture(renderer, 1), [.2, 1.98, 17.33], [0, Math.PI, 0], .48, .64);

  // Front wall around a large observation window.
  addBox(office, [1.55, 4.3, .2], [-3.5, 2.15, 9.02], wallMat);
  addBox(office, [1.55, 4.3, .2], [3.5, 2.15, 9.02], wallMat);
  addBox(office, [5.55, 1.1, .2], [0, .55, 9.02], wallMatDark);
  addBox(office, [5.55, .84, .2], [0, 3.88, 9.02], wallMatDark);
  // Window glass and safety bars.
  const glass = new THREE.Mesh(new THREE.PlaneGeometry(5.45, 2.34),
    new THREE.MeshPhysicalMaterial({ color: '#93a9a7', transparent: true, opacity: .12, roughness: .08, metalness: .3, side: THREE.DoubleSide }));
  glass.position.set(0, 2.22, 9.03);
  office.add(glass);
  for (let i = -2; i <= 2; i++) addBox(office, [.035, 2.35, .035], [i * 1.08, 2.22, 9.13], darkMetal);
  for (let i = 0; i < 3; i++) addBox(office, [5.45, .03, .03], [0, 1.38 + i * .83, 9.13], darkMetal);
  addBox(office, [5.55, .12, .34], [0, 1.07, 9.05], trimMat);
  addBox(office, [5.55, .12, .34], [0, 3.38, 9.05], trimMat);

  // Side walls with door openings.
  for (const side of [-1, 1]) {
    addBox(office, [.2, 4.3, 1.7], [side * 4.3, 2.15, 9.87], wallMat);
    addBox(office, [.2, 4.3, 4.22], [side * 4.3, 2.15, 15.34], wallMat);
    addBox(office, [.2, 1.15, 2.25], [side * 4.3, 3.72, 11.85], wallMatDark);
    // Door frame.
    addBox(office, [.26, 2.68, .13], [side * 4.3, 1.34, 10.72], trimMat);
    addBox(office, [.26, 2.68, .13], [side * 4.3, 1.34, 12.98], trimMat);
    addBox(office, [.26, .14, 2.4], [side * 4.3, 2.74, 11.85], trimMat);
  }

  // Office trim and cables.
  addBox(office, [8.5, .08, .12], [0, .04, 9.1], trimMat);
  addBox(office, [8.5, .1, .1], [0, 4.12, 9.12], trimMat);
  for (let i = 0; i < 6; i++) {
    const cable = new THREE.Mesh(new THREE.CylinderGeometry(.012, .012, 1.5 + Math.random(), 5), blackMat);
    cable.position.set(-2.8 + i * 1.1, 4.05, 12.2 + Math.random() * 3);
    cable.rotation.z = (Math.random() - .5) * .15;
    office.add(cable);
  }

  // Door leaves and their mechanisms.
  for (const side of [-1, 1]) {
    const key = side < 0 ? 'left' : 'right';
    const doorGroup = new THREE.Group();
    doorGroup.position.set(side * 4.2, 1.4, 11.85);
    const panelTex = texRepeat(metalTex, .8, 1.6);
    const panel = new THREE.Mesh(new THREE.BoxGeometry(.12, 2.62, 2.32), new THREE.MeshStandardMaterial({ map: panelTex, color: '#4a4c48', metalness: .7, roughness: .5 }));
    panel.position.y = 0;
    panel.castShadow = true;
    doorGroup.add(panel);
    for (let i = 0; i < 6; i++) {
      addBox(doorGroup, [.035, .055, 2.03], [side * .07, -.92 + i * .37, 0], darkMetal);
    }
    addBox(doorGroup, [.08, .13, .32], [side * .08, .62, -.83], redMat);
    doorGroup.userData.panel = panel;
    office.add(doorGroup);
    world.doors[key] = {
      group: doorGroup,
      panel,
      amount: 0,
      target: 0,
      lightMesh: null,
      lamp: null
    };

    // Indoor door control panel.
    const panelGroup = new THREE.Group();
    panelGroup.position.set(side * 4.05, 1.38, 13.55);
    panelGroup.rotation.y = side * -Math.PI / 2;
    addBox(panelGroup, [.3, .82, .1], [0, 0, 0], metalMat);
    const doorButton = new THREE.Mesh(new THREE.CylinderGeometry(.055, .055, .035, 14), new THREE.MeshStandardMaterial({ color: '#a1201d', emissive: '#5b0d0c', emissiveIntensity: .7, roughness: .4 }));
    doorButton.rotation.x = Math.PI / 2;
    doorButton.position.set(0, .2, .07);
    panelGroup.add(doorButton);
    const lightButton = new THREE.Mesh(new THREE.CylinderGeometry(.055, .055, .035, 14), new THREE.MeshStandardMaterial({ color: '#d9c68f', emissive: '#594a27', emissiveIntensity: .5, roughness: .4 }));
    lightButton.rotation.x = Math.PI / 2;
    lightButton.position.set(0, -.16, .07);
    panelGroup.add(lightButton);
    const labelCanvas = makeCanvas(256, 128);
    const lctx = labelCanvas.getContext('2d');
    lctx.fillStyle = '#171613'; lctx.fillRect(0, 0, 256, 128);
    lctx.strokeStyle = '#a6946b'; lctx.lineWidth = 5; lctx.strokeRect(6, 6, 244, 116);
    lctx.fillStyle = '#d8c494'; lctx.textAlign = 'center'; lctx.font = '700 32px Arial, sans-serif';
    lctx.fillText('DOOR', 128, 54); lctx.fillText('LIGHT', 128, 102);
    const label = new THREE.Mesh(new THREE.PlaneGeometry(.22, .11), new THREE.MeshBasicMaterial({ map: canvasTexture(labelCanvas) }));
    label.position.set(0, -.52, .055);
    panelGroup.add(label);
    office.add(panelGroup);
    world.doors[key].buttonPanel = panelGroup;
    world.doors[key].button = doorButton;
    world.doors[key].lightButton = lightButton;

    // Indicator lamp above the doorway.
    const housing = new THREE.Group();
    housing.position.set(side * 4.1, 3.06, 11.85);
    const bulb = new THREE.Mesh(new THREE.SphereGeometry(.075, 12, 8), new THREE.MeshStandardMaterial({ color: '#2b0908', emissive: '#ff1f16', emissiveIntensity: .2, roughness: .3 }));
    housing.add(bulb);
    housing.add(new THREE.Mesh(new THREE.TorusGeometry(.1, .02, 6, 16), darkMetal));
    office.add(housing);
    world.doors[key].lightMesh = bulb;
  }

  // Halls beyond both doors.
  for (const side of [-1, 1]) {
    const hall = new THREE.Group();
    const xCenter = side * 6.1;
    addPlane(hall, [4.2, 5.6], [xCenter, 0, 12.1], floorMatOffice, [-Math.PI / 2, 0, 0]);
    addBox(hall, [4.2, 4.3, .18], [xCenter, 2.15, 14.85], wallMatDark);
    addBox(hall, [.18, 4.3, 5.6], [side * 8.2, 2.15, 12.1], wallMatDark);
    addBox(hall, [4.2, .16, 5.6], [xCenter, 4.3, 12.1], ceilingMat);
    addPoster(hall, createPosterTexture(renderer, side < 0 ? 'bonnie' : 'chica'),
      [side * 8.08, 2.3, 12.2], [0, side < 0 ? Math.PI / 2 : -Math.PI / 2, 0], .85, 1.2);
    // The door lamp sits just inside the office so it lights the face of
    // anyone standing in the doorway, not the back of their head.
    const hallLight = new THREE.PointLight(0xffb66b, 0, 7.5, 2);
    hallLight.position.set(side * 3.65, 2.72, 11.85);
    hall.add(hallLight);
    const fixture = createCeilingLight(hall, xCenter, 12.1, 4.16, '#ffd9a0');
    fixture.userData.glow.visible = false;
    world.lights[side < 0 ? 'leftHall' : 'rightHall'] = { light: hallLight, fixture, flicker: Math.random() * 10 };
    // Hall props: a maintenance cart and stacks of boxes.
    const boxMat = new THREE.MeshStandardMaterial({ color: '#6e5332', roughness: .9 });
    if (side < 0) {
      addBox(hall, [.75, .32, .7], [-7.3, .16, 13.6], boxMat, [0, .2, 0]);
      addBox(hall, [.7, .5, .65], [-7.1, .5, 13.35], boxMat, [0, -.14, 0]);
      addBox(hall, [.5, .45, .5], [-7.32, .24, 14.2], boxMat, [0, .1, 0]);
    } else {
      addBox(hall, [.9, .14, .55], [7.2, .75, 10.25], metalMat, [0, 0, -.12]);
      for (const dx of [-.35, .35]) addBox(hall, [.05, .7, .05], [7.2 + dx, .38, 10.25], darkMetal);
    }
    scene.add(hall);
  }

  // Desk.
  const desk = new THREE.Group();
  desk.position.set(0, 0, 14.4);
  const woodMat = new THREE.MeshStandardMaterial({ color: '#32271e', roughness: .64, metalness: .06 });
  addBox(desk, [3.9, .14, 1.18], [0, 1.02, 0], woodMat);
  addBox(desk, [3.75, .85, .08], [0, .56, -.5], woodMat);
  addBox(desk, [.12, 1.0, 1.0], [-1.85, .52, 0], darkMetal);
  addBox(desk, [.12, 1.0, 1.0], [1.85, .52, 0], darkMetal);
  addBox(desk, [3.3, .04, .8], [0, .06, 0], darkMetal);
  // Drawers.
  for (let i = 0; i < 3; i++) addBox(desk, [1.08, .21, .045], [-.62, .76 - i * .25, -.51], trimMat);
  for (let i = 0; i < 3; i++) addBox(desk, [.22, .025, .04], [-.62, .76 - i * .25, -.54], new THREE.MeshStandardMaterial({ color: '#b49454', metalness: .8, roughness: .3 }));
  office.add(desk);

  // Desk fan.
  const fan = new THREE.Group();
  fan.position.set(-1.12, 1.1, 14.31);
  const fanMetal = new THREE.MeshStandardMaterial({ color: '#77776f', metalness: .7, roughness: .34 });
  addBox(fan, [.3, .055, .3], [0, 0, 0], fanMetal);
  const stem = new THREE.Mesh(new THREE.CylinderGeometry(.025, .035, .35, 10), fanMetal);
  stem.position.y = .18;
  fan.add(stem);
  const fanHead = new THREE.Group();
  fanHead.position.y = .38;
  fanHead.rotation.x = -.1;
  const cage = new THREE.Mesh(new THREE.TorusGeometry(.27, .014, 6, 28), fanMetal);
  fanHead.add(cage);
  for (let i = 0; i < 8; i++) {
    const spoke = new THREE.Mesh(new THREE.TorusGeometry(.27, .0055, 4, 20, Math.PI), fanMetal);
    spoke.rotation.z = i * Math.PI / 8;
    fanHead.add(spoke);
  }
  const rotor = new THREE.Group();
  for (let i = 0; i < 3; i++) {
    const blade = new THREE.Mesh(new THREE.BoxGeometry(.19, .055, .022), new THREE.MeshStandardMaterial({ color: '#a8a294', roughness: .55, metalness: .15 }));
    blade.position.x = Math.cos(i * Math.PI * 2 / 3) * .12;
    blade.position.y = Math.sin(i * Math.PI * 2 / 3) * .12;
    blade.rotation.z = i * Math.PI * 2 / 3;
    rotor.add(blade);
  }
  fanHead.add(rotor);
  const fanBack = new THREE.Mesh(new THREE.CylinderGeometry(.085, .12, .18, 12), fanMetal);
  fanBack.rotation.x = Math.PI / 2;
  fanBack.position.z = -.1;
  fanHead.add(fanBack);
  fan.add(fanHead);
  office.add(fan);
  world.props.fan = rotor;

  // Desk monitor and keyboard.
  const monitor = new THREE.Group();
  monitor.position.set(.95, 1.05, 14.25);
  monitor.rotation.y = -.1;
  monitor.scale.setScalar(.7);
  addBox(monitor, [.92, .64, .5], [0, .34, 0], new THREE.MeshStandardMaterial({ color: '#252620', roughness: .5, metalness: .35 }));
  const screenMat = new THREE.MeshStandardMaterial({ map: screenTex, emissive: new THREE.Color('#5affc3'), emissiveIntensity: .35, emissiveMap: screenTex, roughness: .22 });
  const screen = addPlane(monitor, [.75, .48], [0, .37, .257], screenMat);
  screen.rotation.y = 0;
  world.props.screen = screen;
  addBox(monitor, [.26, .18, .25], [0, .03, 0], darkMetal);
  office.add(monitor);
  addBox(office, [.85, .035, .28], [.35, 1.11, 15.07], new THREE.MeshStandardMaterial({ color: '#262520', roughness: .7 }), [0, -.08, 0]);
  for (let i = 0; i < 6; i++) for (let j = 0; j < 3; j++) addBox(office, [.1, .018, .04], [-.02 + i * .12, 1.135, 15.01 + j * .07], new THREE.MeshStandardMaterial({ color: '#4f4b41', roughness: .6 }));

  // Papers, tape, cup and flashlight on the desk.
  const paperMat = new THREE.MeshStandardMaterial({ color: '#cfc4a4', roughness: .92, side: THREE.DoubleSide });
  for (let i = 0; i < 5; i++) {
    const paper = addPlane(office, [.42, .55], [-.24 + Math.random() * .38, 1.104, 14.27 + Math.random() * .3], paperMat, [-Math.PI / 2, 0, Math.random() * 1.2]);
    paper.material = new THREE.MeshStandardMaterial({ map: createDrawingTexture(renderer, i), roughness: .93, side: THREE.DoubleSide });
  }
  const cup = new THREE.Mesh(new THREE.CylinderGeometry(.075, .06, .17, 14), new THREE.MeshStandardMaterial({ color: '#c8c1aa', roughness: .5 }));
  cup.position.set(.4, 1.2, 14.28);
  office.add(cup);
  const cupHandle = new THREE.Mesh(new THREE.TorusGeometry(.048, .012, 6, 12, Math.PI), cup.material);
  cupHandle.position.set(.47, 1.2, 14.28);
  cupHandle.rotation.y = Math.PI / 2;
  office.add(cupHandle);
  const flashlight = new THREE.Group();
  flashlight.position.set(-.4, 1.14, 14.7);
  flashlight.rotation.set(0, .5, Math.PI / 2);
  flashlight.add(new THREE.Mesh(new THREE.CylinderGeometry(.045, .055, .32, 12), darkMetal));
  const lens = new THREE.Mesh(new THREE.CylinderGeometry(.062, .06, .04, 12), new THREE.MeshStandardMaterial({ color: '#d9cfa8', emissive: '#665c34', emissiveIntensity: .4 }));
  lens.position.y = .18;
  flashlight.add(lens);
  office.add(flashlight);

  // Office lamp and its warm pool of light.
  const deskLamp = new THREE.Group();
  deskLamp.position.set(-1.65, 1.08, 13.95);
  addBox(deskLamp, [.2, .04, .2], [0, 0, 0], darkMetal);
  const lampStem = new THREE.Mesh(new THREE.CylinderGeometry(.015, .015, .58, 8), darkMetal);
  lampStem.position.y = .3;
  lampStem.rotation.z = -.18;
  deskLamp.add(lampStem);
  const shade = new THREE.Mesh(new THREE.ConeGeometry(.18, .22, 20, 1, true), new THREE.MeshStandardMaterial({ color: '#4e5b42', roughness: .5, metalness: .4, side: THREE.DoubleSide }));
  shade.position.set(.1, .61, 0);
  shade.rotation.z = Math.PI + .15;
  deskLamp.add(shade);
  const lampGlow = new THREE.Mesh(new THREE.SphereGeometry(.055, 12, 8), new THREE.MeshStandardMaterial({ color: '#fff3c0', emissive: '#ffdf93', emissiveIntensity: 3 }));
  lampGlow.position.set(.1, .54, 0);
  deskLamp.add(lampGlow);
  office.add(deskLamp);
  const lampLight = new THREE.PointLight(0xffca7d, 7.5, 5.5, 2);
  lampLight.position.set(-1.52, 1.7, 13.98);
  scene.add(lampLight);
  world.lights.lamp = lampLight;
  world.props.lampGlow = lampGlow;

  // Office wall props.
  addPoster(office, createPosterTexture(renderer, 'freddy'), [-2.25, 2.25, 17.3], [0, Math.PI, 0], 1.05, 1.48);
  addPoster(office, createPosterTexture(renderer, 'chica'), [2.95, 2.25, 17.3], [0, Math.PI, 0], .95, 1.34);
  addPoster(office, createDrawingTexture(renderer, 2), [4.18, 2.3, 15.3], [0, -Math.PI / 2, 0], .55, .73);
  addPoster(office, createWarningTexture(renderer), [-4.18, 2.6, 15.75], [0, Math.PI / 2, 0], .72, .72);
  const clockMat = new THREE.MeshStandardMaterial({ color: '#24231e', roughness: .45, metalness: .3 });
  const clock = new THREE.Group();
  clock.position.set(0, 3.62, 9.16);
  clock.add(new THREE.Mesh(new THREE.CylinderGeometry(.25, .25, .08, 24), clockMat));
  clock.children[0].rotation.x = Math.PI / 2;
  const clockFace = new THREE.Mesh(new THREE.CircleGeometry(.21, 24), new THREE.MeshStandardMaterial({ color: '#cfc4a5', roughness: .8 }));
  clockFace.position.z = .046;
  clock.add(clockFace);
  const hand1 = addBox(clock, [.015, .12, .012], [0, .05, .058], blackMat);
  const hand2 = addBox(clock, [.09, .012, .012], [.035, 0, .058], blackMat);
  clock.userData.hands = [hand1, hand2];
  office.add(clock);
  world.props.clock = clock;

  // Office ceiling lamp.
  const officeLightFixture = createCeilingLight(office, 0, 13.0, 4.19, '#e5ddc5');
  const officeLight = new THREE.PointLight(0xffd8a0, 11, 10, 2);
  officeLight.position.set(0, 3.65, 13.0);
  scene.add(officeLight);
  world.lights.office = { light: officeLight, fixture: officeLightFixture, base: 11, flicker: 0 };

  // A red emergency light above the back wall vent.
  const emergency = new THREE.PointLight(0xff2414, 0, 8, 2);
  emergency.position.set(0, 3.7, 15.8);
  scene.add(emergency);
  world.lights.emergency = emergency;
  const emergencyMesh = new THREE.Mesh(new THREE.SphereGeometry(.08, 12, 8), new THREE.MeshStandardMaterial({ color: '#420b08', emissive: '#ff2112', emissiveIntensity: 0 }));
  emergencyMesh.position.set(0, 3.72, 17.27);
  office.add(emergencyMesh);
  world.props.emergencyBulb = emergencyMesh;

  // ---------------------------------------------------------------------------
  // Restaurant — visible through the office window, explored through cameras.
  // ---------------------------------------------------------------------------
  const restaurant = new THREE.Group();
  scene.add(restaurant);
  const diningFloor = addPlane(restaurant, [29, 27.5], [0, 0, -4.5], floorMatDining, [-Math.PI / 2, 0, 0]);
  diningFloor.receiveShadow = true;
  addBox(restaurant, [29, .12, 27.5], [0, 4.5, -4.5], ceilingMat);
  // Side walls.
  addBox(restaurant, [.2, 4.5, 27.5], [-14.5, 2.25, -4.5], wallMat);
  addBox(restaurant, [.2, 4.5, 27.5], [14.5, 2.25, -4.5], wallMat);
  // Corridor wall at the office end with openings.
  addBox(restaurant, [9.0, 4.5, .22], [-9.95, 2.25, 9.0], wallMatDark);
  addBox(restaurant, [9.0, 4.5, .22], [9.95, 2.25, 9.0], wallMatDark);
  addBox(restaurant, [4.5, 1.5, .22], [0, 3.75, 9.0], wallMatDark);
  addBox(restaurant, [4.5, .7, .22], [0, .35, 9.0], wallMatDark);
  // Stage wall.
  addBox(restaurant, [29, 4.5, .22], [0, 2.25, -18.2], wallMat);
  const backdrop = new THREE.Mesh(new THREE.PlaneGeometry(16.5, 5.2),
    new THREE.MeshStandardMaterial({ map: backdropTex, emissive: new THREE.Color('#321843'), emissiveIntensity: .3, roughness: .8 }));
  backdrop.position.set(0, 2.9, -18.06);
  restaurant.add(backdrop);
  addBox(restaurant, [16.9, .18, .3], [0, 5.32, -18.0], trimMat);
  // Stage.
  addBox(restaurant, [15.6, .55, 5.2], [0, .275, -15.35], new THREE.MeshStandardMaterial({ color: '#271723', roughness: .65 }));
  addBox(restaurant, [15.8, .1, .18], [0, .55, -12.72], new THREE.MeshStandardMaterial({ color: '#a78342', metalness: .55, roughness: .32 }));
  for (let i = 0; i < 14; i++) {
    const bulb = new THREE.Mesh(new THREE.SphereGeometry(.045, 8, 6), new THREE.MeshBasicMaterial({ color: i % 2 ? '#ffd170' : '#ff8a50' }));
    bulb.position.set(-7.2 + i * 1.1, .63, -12.62);
    restaurant.add(bulb);
  }
  // Stage curtains, valance and sign.
  const stageLeft = makeStageCurtain(4.7, 4.25, texRepeat(curtainTex, 2.4, 1), -7.0, 0);
  stageLeft.position.set(-8.2, 2.13, -17.9);
  restaurant.add(stageLeft);
  const stageRight = makeStageCurtain(4.7, 4.25, texRepeat(curtainTex, 2.4, 1), 8.2, 0);
  stageRight.position.x = 8.2;
  restaurant.add(stageRight);
  const valance = makeStageCurtain(15.6, .85, texRepeat(curtainTex, 5, 1), 0, 0);
  valance.position.set(0, 4.75, -17.84);
  restaurant.add(valance);
  const sign = new THREE.Mesh(new THREE.PlaneGeometry(10.5, 2.6), new THREE.MeshStandardMaterial({ map: createSignTexture(renderer), transparent: true, emissive: new THREE.Color('#d69136'), emissiveIntensity: .55, roughness: .6 }));
  sign.position.set(0, 4.55, -17.78);
  restaurant.add(sign);

  // Ceiling fixtures in dining hall.
  const ceilingFixtures = [];
  for (const x of [-8.2, 0, 8.2]) for (const z of [-5, 2.5]) {
    const fixture = createCeilingLight(restaurant, x, z, 4.41, '#e7dfc8');
    ceilingFixtures.push(fixture);
  }
  // Wall lights and bulbs.
  for (const side of [-1, 1]) for (let i = 0; i < 3; i++) {
    const sconce = new THREE.PointLight(0xffbe72, 2.8, 5, 2);
    sconce.position.set(side * 13.95, 2.85, -10 + i * 6.2);
    restaurant.add(sconce);
    const shade = new THREE.Mesh(new THREE.ConeGeometry(.24, .32, 12, 1, true), new THREE.MeshStandardMaterial({ color: '#5e4430', metalness: .4, roughness: .5, side: THREE.DoubleSide }));
    shade.position.copy(sconce.position);
    restaurant.add(shade);
  }
  const diningFill = new THREE.PointLight(0xffce8d, 26, 24, 2);
  diningFill.position.set(0, 3.8, -4);
  scene.add(diningFill);
  world.lights.dining = diningFill;

  // Stage spotlights.
  const stageSpot = new THREE.SpotLight(0xffe4ae, 250, 27, .58, .52, 1.7);
  stageSpot.position.set(0, 4.2, -6.0);
  stageSpot.target.position.set(0, 1.55, -14.5);
  stageSpot.castShadow = true;
  stageSpot.shadow.mapSize.set(1024, 1024);
  stageSpot.shadow.camera.near = 2;
  stageSpot.shadow.camera.far = 24;
  stageSpot.shadow.bias = -.0004;
  scene.add(stageSpot, stageSpot.target);
  world.lights.stageSpot = stageSpot;
  const stageBlue = new THREE.PointLight(0x523d8f, 18, 10, 2);
  stageBlue.position.set(0, 3.1, -16.4);
  scene.add(stageBlue);

  // Party tables.
  const tables = [
    [-6.2, -3.0, 1.15], [6.2, -3.2, 1.15], [-7.6, 3.2, 1.0], [7.4, 3.0, 1.0],
    [-2.0, -6.4, 1.0], [2.3, -6.0, 1.0]
  ];
  for (const [x, z, r] of tables) {
    makeTable(restaurant, x, z, r);
    makeChair(restaurant, x - 1.25, z + .15, .4);
    makeChair(restaurant, x + 1.2, z - .25, Math.PI - .3);
  }
  // Extra stacked chairs by the wall.
  for (let i = 0; i < 3; i++) makeChair(restaurant, -12.2 + i * .2, 2.2, Math.PI / 2);
  // Balloons.
  const balloonColors = ['#b53139', '#d3a12a', '#3e7c6a', '#6b4c95'];
  for (let i = 0; i < 12; i++) {
    const balloon = makeBalloon(restaurant, (i % 2 ? 1 : -1) * (4 + Math.random() * 7), 2.1 + Math.random() * .9, -8 + Math.random() * 14, balloonColors[i % balloonColors.length]);
    world.interactives.push(balloon);
  }
  // Confetti and streamers.
  for (let i = 0; i < 70; i++) {
    const confetti = new THREE.Mesh(new THREE.PlaneGeometry(.06, .028), new THREE.MeshBasicMaterial({ color: ['#d3b54e','#a63234','#4d7b88','#5e4a8a'][i % 4], side: THREE.DoubleSide }));
    confetti.position.set((Math.random() - .5) * 26, .01 + Math.random() * .02, -16 + Math.random() * 24);
    confetti.rotation.set(-Math.PI / 2 + Math.random() * .2, Math.random() * Math.PI, 0);
    restaurant.add(confetti);
  }
  const streamerColors = ['#b7333b', '#d4ad3e', '#467d88', '#6b4b8e'];
  for (let i = 0; i < 12; i++) {
    const curve = new THREE.CatmullRomCurve3([
      V(-10 + i * 1.8, 4.35, -7), V(-8 + i * 1.8, 3.95 + Math.sin(i) * .25, -5), V(-11 + i * 1.8, 3.85, -3)
    ]);
    const streamer = new THREE.Mesh(new THREE.TubeGeometry(curve, 14, .018, 5, false), new THREE.MeshStandardMaterial({ color: streamerColors[i % 4], roughness: .65 }));
    restaurant.add(streamer);
  }

  // Foxy's Pirate Cove.
  const cove = new THREE.Group();
  cove.position.set(-11.4, 0, -8.1);
  addBox(cove, [5.2, .48, 4.0], [0, .24, 0], new THREE.MeshStandardMaterial({ color: '#22141d', roughness: .7 }));
  addBox(cove, [5.4, .1, .16], [0, .49, 2.03], darkMetal);
  // Star curtain behind Foxy.
  const starCanvas = makeCanvas(512, 512);
  const sctx = starCanvas.getContext('2d');
  sctx.fillStyle = '#2a0d23'; sctx.fillRect(0, 0, 512, 512);
  for (let i = 0; i < 60; i++) {
    sctx.fillStyle = `rgba(235,195,80,${.25 + Math.random() * .65})`;
    const x = Math.random() * 512, y = Math.random() * 512, r = 1 + Math.random() * 3;
    sctx.beginPath(); sctx.arc(x, y, r, 0, Math.PI * 2); sctx.fill();
  }
  const starTex = canvasTexture(starCanvas, { repeat: [2, 1] });
  addPlane(cove, [5.0, 4.1], [0, 2.3, -1.75], new THREE.MeshStandardMaterial({ map: starTex, roughness: .9 }), [0, 0, 0]);
  const coveCurtain = createCoveCurtain(renderer, 0, 1.67);
  coveCurtain.position.set(0, 0, 1.7);
  cove.add(coveCurtain);
  const coveSign = new THREE.Mesh(new THREE.PlaneGeometry(1.35, .85), new THREE.MeshStandardMaterial({ map: createCoveSignTexture(renderer), roughness: .8 }));
  coveSign.position.set(0, 1.35, 2.08);
  cove.add(coveSign);
  world.props.coveSign = coveSign;
  const coveLight = new THREE.PointLight(0xb87aff, 14, 5.5, 2);
  coveLight.position.set(0, 2.15, .35);
  cove.add(coveLight);
  // Soft front fill keeps the curtain and the sign legible on camera.
  const coveFill = new THREE.PointLight(0x8a5bd0, 3.2, 4.5, 2);
  coveFill.position.set(0, 2.5, 3.2);
  cove.add(coveFill);
  restaurant.add(cove);
  world.props.coveCurtain = coveCurtain;
  world.lights.cove = coveLight;
  world.lights.coveFill = coveFill;

  // A few arcade cabinets against the east wall.
  const arcadeScreen = new THREE.MeshStandardMaterial({ color: '#0d1511', emissive: '#2bd28f', emissiveIntensity: .8, roughness: .2 });
  for (let i = 0; i < 3; i++) {
    const arcade = new THREE.Group();
    arcade.position.set(13.7, 0, -2 + i * 2.4);
    arcade.rotation.y = -Math.PI / 2;
    addBox(arcade, [1.1, 2.1, .75], [0, 1.05, 0], new THREE.MeshStandardMaterial({ color: '#261c34', roughness: .65 }));
    addBox(arcade, [.83, .58, .06], [0, 1.48, .39], arcadeScreen);
    addBox(arcade, [.88, .24, .46], [0, 1.08, .5], darkMetal);
    const marquee = addBox(arcade, [.95, .22, .05], [0, 2.0, .39], new THREE.MeshStandardMaterial({ color: '#c4a137', emissive: '#5b4812', emissiveIntensity: .5 }));
    restaurant.add(arcade);
  }

  // Wall decoration and posters in dining room.
  addPoster(restaurant, createPosterTexture(renderer, 'freddy'), [-14.35, 2.6, -4], [0, Math.PI / 2, 0], 1.4, 1.96);
  addPoster(restaurant, createPosterTexture(renderer, 'bonnie'), [-14.35, 2.6, 1.0], [0, Math.PI / 2, 0], 1.2, 1.7);
  addPoster(restaurant, createPosterTexture(renderer, 'chica'), [14.35, 2.6, 2.4], [0, -Math.PI / 2, 0], 1.2, 1.7);
  addPoster(restaurant, createPosterTexture(renderer, 'foxy'), [-14.35, 2.55, -10.5], [0, Math.PI / 2, 0], 1.1, 1.55);
  // Big painted wall mural on the west wall.
  const muralCanvas = makeCanvas(1024, 512);
  const mctx = muralCanvas.getContext('2d');
  mctx.fillStyle = '#4e2130'; mctx.fillRect(0, 0, 1024, 512);
  mctx.fillStyle = '#d3a83c'; mctx.beginPath(); mctx.arc(512, 250, 185, 0, Math.PI * 2); mctx.fill();
  mctx.fillStyle = '#6b3b2a'; mctx.beginPath(); mctx.arc(512, 290, 150, 0, Math.PI * 2); mctx.fill();
  mctx.fillStyle = '#1a1210'; mctx.beginPath(); mctx.arc(455, 250, 18, 0, Math.PI * 2); mctx.arc(569, 250, 18, 0, Math.PI * 2); mctx.fill();
  mctx.fillStyle = '#eee3c4'; mctx.font = '700 64px Impact, sans-serif'; mctx.textAlign = 'center'; mctx.fillText('LET’S PARTY!', 512, 80);
  const mural = new THREE.Mesh(new THREE.PlaneGeometry(11.5, 5.75), new THREE.MeshStandardMaterial({ map: canvasTexture(muralCanvas), roughness: .9 }));
  mural.position.set(-14.34, 2.65, -14.2);
  mural.rotation.y = Math.PI / 2;
  restaurant.add(mural);

  // Security cameras visible in the restaurant.
  const camProps = [
    [-13.8, 3.85, 8.5, -.55], [13.8, 3.8, 8.3, .55], [-13.8, 3.8, -9, -.4],
    [13.8, 3.8, -10, .4], [-8.5, 3.7, -12.8, .2]
  ];
  for (const [x, y, z, ry] of camProps) restaurant.add(createSecurityCamera(x, y, z, ry));

  // Dust motes.
  const dustGeo = new THREE.BufferGeometry();
  const dustCount = 260;
  const dustPositions = new Float32Array(dustCount * 3);
  for (let i = 0; i < dustCount; i++) {
    dustPositions[i * 3] = (Math.random() - .5) * 15;
    dustPositions[i * 3 + 1] = .3 + Math.random() * 4;
    dustPositions[i * 3 + 2] = -10 + Math.random() * 26;
  }
  dustGeo.setAttribute('position', new THREE.BufferAttribute(dustPositions, 3));
  const dustMat = new THREE.PointsMaterial({ color: 0xdccba4, size: .018, transparent: true, opacity: .36, depthWrite: false, blending: THREE.AdditiveBlending });
  const dust = new THREE.Points(dustGeo, dustMat);
  scene.add(dust);
  world.props.dust = dust;

  // ---------------------------------------------------------------------------
  // Characters
  // ---------------------------------------------------------------------------
  const starts = {
    freddy: [0, .55, -14.6, 0],
    bonnie: [-2.85, .55, -14.85, .02],
    chica: [2.85, .55, -14.85, -.02],
    foxy: [-11.4, .5, -9.1, 0]
  };
  for (const type of ['freddy', 'bonnie', 'chica', 'foxy']) {
    const char = createAnimatronic(renderer, type, textureCache);
    const [x, y, z, ry] = starts[type];
    char.position.set(x, y, z);
    char.rotation.y = ry;
    char.userData.home = { x, y, z, ry };
    char.userData.mode = 'stage';
    scene.add(char);
    world.characters[type] = char;
  }
  // Make Freddy large and central.
  world.characters.freddy.scale.setScalar(1.04);

  // Stage mic stand and a spare guitar.
  const micStand = new THREE.Group();
  micStand.position.set(.95, .55, -13.4);
  addBox(micStand, [.22, .05, .22], [0, 0, 0], darkMetal);
  const stand = new THREE.Mesh(new THREE.CylinderGeometry(.018, .02, 1.5, 8), darkMetal);
  stand.position.y = .75;
  micStand.add(stand);
  const mic = new THREE.Mesh(new THREE.SphereGeometry(.075, 10, 8), blackMat);
  mic.position.set(0, 1.5, .04);
  micStand.add(mic);
  restaurant.add(micStand);

  // ---------------------------------------------------------------------------
  // Cameras
  // ---------------------------------------------------------------------------
  const officeCamera = new THREE.PerspectiveCamera(58, 1, .035, 55);
  officeCamera.position.set(0, 1.62, 15.55);
  officeCamera.rotation.order = 'YXZ';
  world.officeCamera = officeCamera;

  const menuCamera = new THREE.PerspectiveCamera(40, 1, .1, 55);
  menuCamera.position.set(0, 2.35, -3.0);
  menuCamera.lookAt(0, 1.75, -14.65);
  world.menuCamera = menuCamera;

  const makeCam = (x, y, z, tx, ty, tz, fov = 58) => {
    const cam = new THREE.PerspectiveCamera(fov, 1, .08, 60);
    cam.position.set(x, y, z);
    cam.userData.target = V(tx, ty, tz);
    cam.lookAt(cam.userData.target);
    return cam;
  };
  world.cams = {
    '1': { camera: makeCam(0, 3.45, -3.4, 0, 1.5, -14.5, 54), label: 'SHOW STAGE', name: 'CAM 01' },
    '2': { camera: makeCam(-11.8, 3.8, 7.8, 0, 1.2, -4.2, 62), label: 'DINING AREA', name: 'CAM 02' },
    '3': { camera: makeCam(-7.55, 3.05, 13.85, -4.35, 1.3, 11.55, 62), label: 'WEST HALL', name: 'CAM 03' },
    '4': { camera: makeCam(7.55, 3.05, 13.85, 4.35, 1.3, 11.55, 62), label: 'EAST HALL', name: 'CAM 04' },
    '5': { camera: makeCam(-11.4, 2.65, -3.35, -11.4, 1.6, -6.35, 56), label: 'PIRATE COVE', name: 'CAM 05' }
  };

  // ---------------------------------------------------------------------------
  // Lighting ambience
  // ---------------------------------------------------------------------------
  scene.fog = new THREE.FogExp2(0x060607, .018);
  const ambient = new THREE.AmbientLight(0x5c554a, .48);
  scene.add(ambient);
  const hemi = new THREE.HemisphereLight(0x515a66, 0x17110c, .52);
  scene.add(hemi);
  world.lights.ambient = ambient;
  world.lights.hemi = hemi;
  world.lights.diningFill = diningFill;

  const leftHallBase = world.lights.leftHall;
  const rightHallBase = world.lights.rightHall;

  // Subtle volumetric glow sheets behind stage and monitors (cheap bloom).
  const glowCanvas = makeCanvas(128, 128);
  const gctx = glowCanvas.getContext('2d');
  const gradient = gctx.createRadialGradient(64, 64, 0, 64, 64, 64);
  gradient.addColorStop(0, 'rgba(255,216,140,.65)');
  gradient.addColorStop(.35, 'rgba(255,192,90,.18)');
  gradient.addColorStop(1, 'rgba(255,170,60,0)');
  gctx.fillStyle = gradient; gctx.fillRect(0, 0, 128, 128);
  const glowTex = canvasTexture(glowCanvas);
  const glowSprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex, transparent: true, opacity: .42, blending: THREE.AdditiveBlending, depthWrite: false }));
  glowSprite.scale.set(9, 6, 1);
  glowSprite.position.set(0, 4.0, -17.7);
  restaurant.add(glowSprite);
  world.props.stageGlow = glowSprite;

  // Static overlay on the office monitor.
  const staticCanvas = makeCanvas(128, 128);
  const stctx = staticCanvas.getContext('2d');
  const image = stctx.createImageData(128, 128);
  for (let i = 0; i < image.data.length; i += 4) {
    const v = Math.random() * 255;
    image.data[i] = image.data[i + 1] = image.data[i + 2] = v;
    image.data[i + 3] = 255;
  }
  stctx.putImageData(image, 0, 0);
  const staticTex = canvasTexture(staticCanvas);
  world.props.staticTex = staticTex;

  // ---------------------------------------------------------------------------
  // Animation state
  // ---------------------------------------------------------------------------
  const clockHands = world.props.clock.userData.hands;
  world.update = (time, dt, options = {}) => {
    const { doorAmounts = [0, 0], hallLights = [0, 0], powerOut = false, mode = 'office', foxyProgress = 0 } = options;
    // Security feeds get a little extra fill so the halls stay readable.
    const feed = mode === 'camera';
    ambient.intensity += ((feed ? 1.02 : .48) - ambient.intensity) * Math.min(1, dt * 3.5);
    hemi.intensity += ((feed ? .92 : .52) - hemi.intensity) * Math.min(1, dt * 3.5);
    // Doors slide down into place.
    ['left', 'right'].forEach((key, i) => {
      const target = doorAmounts[i] || 0;
      const d = world.doors[key];
      d.amount += (target - d.amount) * Math.min(1, dt * 9);
      d.group.position.y = 1.4 + (1 - d.amount) * 2.7;
      d.panel.visible = d.amount > .012;
      d.lightMesh.material.emissiveIntensity = .15 + d.amount * 2.6;
      d.lightMesh.material.color.set(d.amount > .3 ? '#ff2b1f' : '#2b0908');
    });
    ['leftHall', 'rightHall'].forEach((key, i) => {
      const l = world.lights[key];
      const on = hallLights[i] || 0;
      l.light.intensity += (on * 45 - l.light.intensity) * Math.min(1, dt * 18);
      l.fixture.userData.glow.visible = on > .08;
      l.fixture.userData.glow.material.emissiveIntensity = 1.4 + on * 1.6;
    });
    // Room light flicker and power failure.
    const office = world.lights.office;
    office.flicker -= dt;
    if (office.flicker < 0) office.flicker = .4 + Math.random() * 5;
    let officeIntensity = office.base;
    if (office.flicker < .11 && !powerOut) officeIntensity *= .2 + Math.random() * .5;
    if (powerOut) officeIntensity *= .03;
    office.light.intensity += (officeIntensity - office.light.intensity) * Math.min(1, dt * 14);
    office.fixture.userData.glow.material.emissiveIntensity = powerOut ? .03 : 1.8 + Math.sin(time * 3.2) * .1;
    world.lights.lamp.intensity += ((powerOut ? .2 : 7.5) - world.lights.lamp.intensity) * Math.min(1, dt * 10);

    // Emergency state.
    const emergencyOn = powerOut || mode === 'scare';
    world.lights.emergency.intensity += ((emergencyOn ? 4.5 : 0) - world.lights.emergency.intensity) * Math.min(1, dt * 5);
    world.props.emergencyBulb.material.emissiveIntensity = emergencyOn ? 2.5 + Math.sin(time * 8) * 1.3 : 0;
    world.props.emergencyBulb.material.emissive.set(emergencyOn ? '#ff2212' : '#420b08');

    // Fan and clock.
    world.props.fan.rotation.z += dt * (powerOut ? .4 : 12);
    clockHands[0].rotation.z = -time * .08;
    clockHands[1].rotation.z = -time * .9;

    // Atmosphere.
    world.props.dust.rotation.y = time * .006;
    world.props.dust.position.y = Math.sin(time * .18) * .12;
    world.props.screen.material.emissiveIntensity = .24 + Math.random() * .08;
    world.props.screen.material.emissive.setRGB(.08 + Math.random() * .03, .65, .48);
    world.lights.stageSpot.intensity = 230 + Math.sin(time * 7.3) * 12 + (Math.random() > .985 ? -130 : 0);
    world.props.stageGlow.material.opacity = .34 + Math.sin(time * 1.1) * .05;
    world.lights.cove.intensity = 20 + Math.sin(time * 1.7) * 2.4;
    // Pirate Cove gets a front fill only on the security feed, so Foxy stays hidden in person.
    const coveFill = world.lights.coveFill;
    if (coveFill) coveFill.intensity += ((feed ? 12 : 3.2) - coveFill.intensity) * Math.min(1, dt * 3.5);

    // Cove curtain opens based on Foxy's progress.
    const cove = world.props.coveCurtain.userData;
    const open = Math.max(0, Math.min(1, foxyProgress / 3));
    cove.left.position.x = -1.36 - open * .95;
    cove.right.position.x = 1.36 + open * .95;
    cove.left.scale.x = 1 - open * .12;
    cove.right.scale.x = 1 - open * .12;
    // Slide the warning sign aside with the left curtain so the gap reveals Foxy.
    if (world.props.coveSign) world.props.coveSign.position.x = -open * 2.15;

    // Animatronic idle animations.
    for (const [type, char] of Object.entries(world.characters)) {
      const animMode = char.userData.mode || (type === 'foxy' ? 'stage' : 'idle');
      animateAnimatronic(char, time, animMode, char.userData.animationIntensity || 1);
    }
    // Foxy eyes glow from the cove.
    if (world.characters.foxy.userData.mode !== 'scare') setEyeGlow(world.characters.foxy, .3 + foxyProgress * .38);
    // Security LEDs blink.
    for (const obj of restaurant.children) {
      if (obj.userData?.led) obj.userData.led.material.color.set(Math.sin(time * 3 + obj.position.z) > 0 ? '#ff2a24' : '#3a0907');
    }
  };

  world.setVisibleCharacters = (visibility) => {
    for (const [type, char] of Object.entries(world.characters)) {
      char.visible = visibility[type] !== false;
    }
  };

  world.getCamera = (id) => world.cams[String(id)]?.camera;

  return world;
}
