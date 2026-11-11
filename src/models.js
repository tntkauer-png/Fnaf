import * as THREE from 'three';
import {
  createBibTexture,
  createFurTexture,
  createPizzaTexture,
  canvasTexture,
  makeCanvas
} from './textures.js';

const TAU = Math.PI * 2;

function mesh(geometry, material, position = [0, 0, 0], scale = [1, 1, 1]) {
  const m = new THREE.Mesh(geometry, material);
  m.position.set(...position);
  m.scale.set(...scale);
  m.castShadow = true;
  m.receiveShadow = true;
  return m;
}

function capsuleGeometry(radius, length, capSegments = 8, radialSegments = 16) {
  return new THREE.CapsuleGeometry(radius, length, capSegments, radialSegments);
}

function addTeeth(parent, material, y, z, width = 0.28, count = 6, up = true) {
  const group = new THREE.Group();
  const step = width / count;
  for (let i = 0; i < count; i++) {
    const tooth = mesh(new THREE.BoxGeometry(step * 0.72, 0.075, 0.08), material,
      [-width / 2 + step * (i + .5), up ? 0 : -0.055, 0], [1, 1, 1]);
    tooth.rotation.x = up ? 0.04 : -0.04;
    group.add(tooth);
  }
  group.position.set(0, y, z);
  parent.add(group);
  return group;
}

function addFingers(parent, material, x, y, z, sign = 1) {
  for (let i = 0; i < 3; i++) {
    const finger = mesh(capsuleGeometry(0.025, 0.13, 4, 8), material,
      [x + (i - 1) * 0.055, y - 0.12, z + 0.03], [1, 1, 1]);
    finger.rotation.x = -0.22;
    parent.add(finger);
  }
}

function makeBowtie(material) {
  const group = new THREE.Group();
  const left = mesh(new THREE.ConeGeometry(0.13, 0.24, 4), material, [-0.12, 0, 0]);
  left.rotation.z = Math.PI / 2;
  left.scale.set(1, 1, 0.55);
  const right = mesh(new THREE.ConeGeometry(0.13, 0.24, 4), material, [0.12, 0, 0]);
  right.rotation.z = -Math.PI / 2;
  right.scale.set(1, 1, 0.55);
  group.add(left, right);
  group.add(mesh(new THREE.SphereGeometry(0.065, 12, 8), material, [0, 0, 0]));
  return group;
}

function makeHat(material, accent) {
  const group = new THREE.Group();
  const brim = mesh(new THREE.CylinderGeometry(0.37, 0.4, 0.045, 28), material, [0, 0, 0]);
  const crown = mesh(new THREE.CylinderGeometry(0.2, 0.235, 0.33, 24), material, [0, 0.18, 0]);
  const band = mesh(new THREE.CylinderGeometry(0.238, 0.238, 0.055, 24), accent, [0, 0.055, 0]);
  group.add(brim, crown, band);
  return group;
}

function makeGuitar(material, darkMaterial, metalMaterial) {
  const group = new THREE.Group();
  const outline = new THREE.Shape();
  outline.moveTo(0, 0.3);
  outline.bezierCurveTo(-0.24, 0.3, -0.35, 0.12, -0.25, -0.02);
  outline.bezierCurveTo(-0.38, -0.2, -0.24, -0.42, 0, -0.34);
  outline.bezierCurveTo(0.24, -0.42, 0.38, -0.2, 0.25, -0.02);
  outline.bezierCurveTo(0.35, 0.12, 0.24, 0.3, 0, 0.3);
  const bodyGeo = new THREE.ExtrudeGeometry(outline, { depth: 0.09, bevelEnabled: true, bevelSize: 0.025, bevelThickness: 0.018, bevelSegments: 2 });
  const body = mesh(bodyGeo, material, [0, 0, 0], [1, 1, 1]);
  body.rotation.x = Math.PI / 2;
  group.add(body);
  const soundHole = mesh(new THREE.CylinderGeometry(0.09, 0.09, 0.015, 20), darkMaterial, [0, -0.04, 0.07]);
  soundHole.rotation.x = Math.PI / 2;
  group.add(soundHole);
  const neck = mesh(new THREE.BoxGeometry(0.09, 0.65, 0.055), darkMaterial, [0, 0.62, 0.05]);
  group.add(neck);
  const head = mesh(new THREE.BoxGeometry(0.14, 0.17, 0.07), material, [0, 1.02, 0.05]);
  group.add(head);
  for (let i = 0; i < 5; i++) {
    const string = mesh(new THREE.CylinderGeometry(0.004, 0.004, 1.3, 4), metalMaterial, [-0.032 + i * .016, 0.47, 0.095]);
    group.add(string);
  }
  for (let i = 0; i < 4; i++) {
    const peg = mesh(new THREE.CylinderGeometry(0.011, 0.011, 0.09, 6), metalMaterial, [-0.065 + (i % 2) * .13, 0.96 + Math.floor(i / 2) * .1, 0.05]);
    peg.rotation.z = Math.PI / 2;
    group.add(peg);
  }
  return group;
}

function makeCupcake(renderer) {
  const group = new THREE.Group();
  const paper = mesh(new THREE.CylinderGeometry(0.095, 0.075, 0.14, 18, 1, true), new THREE.MeshStandardMaterial({ color: '#d4859b', roughness: .7, side: THREE.DoubleSide }), [0, 0, 0]);
  group.add(paper);
  const cake = mesh(new THREE.CylinderGeometry(0.085, 0.085, 0.07, 18), new THREE.MeshStandardMaterial({ color: '#9b6238', roughness: .9 }), [0, .1, 0]);
  group.add(cake);
  const frostingMat = new THREE.MeshStandardMaterial({ color: '#f0c7d1', roughness: .7 });
  for (let i = 0; i < 5; i++) {
    const r = .045 + i * .009;
    const y = .14 + i * .045;
    const blob = mesh(new THREE.SphereGeometry(r, 12, 9), frostingMat, [0, y, 0]);
    group.add(blob);
  }
  const cherry = mesh(new THREE.SphereGeometry(0.035, 12, 8), new THREE.MeshStandardMaterial({ color: '#a92024', roughness: .45 }), [0, .38, 0]);
  group.add(cherry);
  // Cupcake with a face — Chica's creepy little friend.
  const eyeMat = new THREE.MeshBasicMaterial({ color: '#17120b' });
  group.add(mesh(new THREE.SphereGeometry(0.018, 8, 6), eyeMat, [-.03, .2, .075]));
  group.add(mesh(new THREE.SphereGeometry(0.018, 8, 6), eyeMat, [.03, .2, .075]));
  return group;
}

function makeHook(metalMaterial) {
  const group = new THREE.Group();
  const cuff = mesh(new THREE.CylinderGeometry(0.075, 0.07, 0.17, 12), metalMaterial, [0, 0.02, 0]);
  group.add(cuff);
  const hook = mesh(new THREE.TorusGeometry(0.115, 0.026, 8, 28, Math.PI * 1.35), metalMaterial, [0, -0.16, 0.01]);
  hook.rotation.z = Math.PI * .35;
  hook.rotation.y = Math.PI / 2;
  group.add(hook);
  return group;
}

function makeMicrophone(metalMaterial, darkMaterial) {
  const group = new THREE.Group();
  group.add(mesh(new THREE.CylinderGeometry(0.028, 0.032, 0.28, 10), metalMaterial, [0, 0, 0]));
  group.add(mesh(new THREE.SphereGeometry(0.075, 12, 9), darkMaterial, [0, 0.18, 0]));
  group.add(mesh(new THREE.TorusGeometry(0.079, 0.009, 6, 16), metalMaterial, [0, 0.18, 0]));
  return group;
}

function createEye(materials) {
  const eye = new THREE.Group();
  const white = mesh(new THREE.SphereGeometry(0.102, 18, 14), materials.eyeWhite, [0, 0, 0], [1, 1, .75]);
  const iris = mesh(new THREE.SphereGeometry(0.058, 16, 12), materials.iris, [0, 0, 0.071], [1, 1, .55]);
  const pupil = mesh(new THREE.SphereGeometry(0.025, 12, 8), materials.pupil, [0, 0, 0.098], [1, 1, .45]);
  const glint = mesh(new THREE.SphereGeometry(0.009, 8, 6), materials.glint, [-0.014, 0.018, 0.119]);
  eye.add(white, iris, pupil, glint);
  return eye;
}

export function createAnimatronic(renderer, type = 'freddy', textureCache = new Map()) {
  const definitions = {
    freddy: { fur: '#5a3824', belly: '#a87850', accent: '#171716', iris: '#4f7fa5', scale: 1.02, feet: '#4b2e1e' },
    bonnie: { fur: '#5d4488', belly: '#b295c8', accent: '#8f2434', iris: '#a54278', scale: 1.0, feet: '#47326a' },
    chica: { fur: '#d1a72d', belly: '#e3c85c', accent: '#d06720', iris: '#87529d', scale: .98, feet: '#c66a22' },
    foxy: { fur: '#7e2b23', belly: '#b56747', accent: '#2e1b16', iris: '#d1b14c', scale: 1.01, feet: '#5b1b16' }
  };
  const def = definitions[type] || definitions.freddy;
  const cacheKey = `${type}-fur`;
  let furTexture = textureCache.get(cacheKey);
  if (!furTexture) {
    furTexture = createFurTexture(renderer, def.fur);
    textureCache.set(cacheKey, furTexture);
  }

  const materials = {
    fur: new THREE.MeshStandardMaterial({ color: def.fur, map: furTexture, roughness: .94, metalness: .02 }),
    furLight: new THREE.MeshStandardMaterial({ color: def.belly, map: furTexture, roughness: .92 }),
    accent: new THREE.MeshStandardMaterial({ color: def.accent, roughness: .72 }),
    feet: new THREE.MeshStandardMaterial({ color: def.feet, map: furTexture, roughness: .95 }),
    endo: new THREE.MeshStandardMaterial({ color: '#3d4143', metalness: .78, roughness: .34 }),
    dark: new THREE.MeshStandardMaterial({ color: '#171513', roughness: .64 }),
    mouth: new THREE.MeshStandardMaterial({ color: '#240d0d', roughness: .8 }),
    teeth: new THREE.MeshStandardMaterial({ color: '#e4ddc6', roughness: .5 }),
    eyeWhite: new THREE.MeshStandardMaterial({ color: '#f1ead6', roughness: .28, emissive: new THREE.Color('#7d745f'), emissiveIntensity: .12 }),
    iris: new THREE.MeshStandardMaterial({ color: def.iris, roughness: .3, emissive: new THREE.Color(def.iris), emissiveIntensity: .28 }),
    pupil: new THREE.MeshStandardMaterial({ color: '#090807', roughness: .2 }),
    glint: new THREE.MeshBasicMaterial({ color: '#fffbe8' }),
    plastic: new THREE.MeshStandardMaterial({ color: '#292725', roughness: .5, metalness: .18 }),
    red: new THREE.MeshStandardMaterial({ color: '#781f21', roughness: .7 })
  };

  const root = new THREE.Group();
  const body = new THREE.Group();
  root.add(body);
  const parts = { type, materials };

  // Feet / legs.
  const legs = [];
  for (const side of [-1, 1]) {
    const leg = new THREE.Group();
    leg.position.set(side * 0.235, 1.02, 0);
    const thigh = mesh(capsuleGeometry(0.17, 0.36, 6, 14), materials.fur, [0, -0.27, 0], [1, 1, .95]);
    leg.add(thigh);
    const knee = mesh(new THREE.SphereGeometry(0.14, 14, 10), materials.endo, [0, -0.56, 0]);
    leg.add(knee);
    const shin = mesh(capsuleGeometry(0.135, 0.32, 6, 12), materials.fur, [0, -0.78, 0]);
    leg.add(shin);
    const ankle = mesh(new THREE.CylinderGeometry(0.1, 0.09, 0.12, 10), materials.endo, [0, -1.0, 0]);
    leg.add(ankle);
    const foot = mesh(new THREE.BoxGeometry(0.29, 0.18, 0.48), materials.feet, [0, -1.045, 0.13]);
    foot.geometry.translate(0, 0, 0);
    // Round the toe with an extra half sphere.
    const toe = mesh(new THREE.SphereGeometry(0.155, 14, 8), materials.feet, [0, -1.045, 0.355], [1, .58, .9]);
    leg.add(foot, toe);
    for (let i = 0; i < 3; i++) {
      const claw = mesh(new THREE.ConeGeometry(0.026, 0.13, 7), materials.endo, [(-1 + i) * .075, -1.1, .48]);
      claw.rotation.x = Math.PI / 2;
      leg.add(claw);
    }
    body.add(leg);
    legs.push(leg);
  }
  parts.legs = legs;

  // Hips and torso.
  const hips = mesh(new THREE.BoxGeometry(0.68, 0.28, 0.46), materials.fur, [0, 1.13, 0]);
  hips.geometry = new THREE.BoxGeometry(0.68, 0.28, 0.46);
  body.add(hips);
  const pelvis = mesh(new THREE.SphereGeometry(0.31, 18, 12), materials.fur, [0, 1.16, 0], [1, .7, .8]);
  body.add(pelvis);

  const torso = new THREE.Group();
  torso.position.y = 1.56;
  body.add(torso);
  parts.torso = torso;
  const chest = mesh(capsuleGeometry(0.43, 0.5, 8, 20), materials.fur, [0, 0, 0], [1, 1, .76]);
  torso.add(chest);
  const belly = mesh(new THREE.SphereGeometry(0.37, 20, 14), materials.furLight, [0, -0.07, 0.24], [.86, 1.03, .42]);
  torso.add(belly);
  const seam = mesh(new THREE.TorusGeometry(0.34, 0.012, 6, 28, Math.PI * 1.2), materials.endo, [0, -0.32, 0.2]);
  seam.rotation.x = Math.PI / 2;
  torso.add(seam);
  for (let i = 0; i < 3; i++) {
    const button = mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.022, 12), materials.plastic, [0, -0.03 - i * .13, .39]);
    button.rotation.x = Math.PI / 2;
    torso.add(button);
  }

  // Arms.
  const arms = [];
  for (const side of [-1, 1]) {
    const shoulder = new THREE.Group();
    shoulder.position.set(side * 0.49, 0.34, 0);
    shoulder.rotation.z = side * -0.14;
    torso.add(shoulder);
    const shoulderJoint = mesh(new THREE.SphereGeometry(0.145, 14, 10), materials.endo, [0, 0, 0]);
    shoulder.add(shoulderJoint);
    const upper = mesh(capsuleGeometry(0.135, 0.34, 6, 14), materials.fur, [0, -0.26, 0]);
    shoulder.add(upper);
    const elbow = new THREE.Group();
    elbow.position.y = -0.53;
    shoulder.add(elbow);
    elbow.add(mesh(new THREE.SphereGeometry(0.12, 12, 9), materials.endo, [0, 0, 0]));
    const forearm = mesh(capsuleGeometry(0.12, 0.32, 6, 12), materials.fur, [0, -0.25, 0]);
    elbow.add(forearm);
    const wrist = mesh(new THREE.CylinderGeometry(0.082, 0.076, 0.1, 10), materials.endo, [0, -0.44, 0]);
    elbow.add(wrist);
    const hand = new THREE.Group();
    hand.position.set(0, -0.53, 0.01);
    elbow.add(hand);
    if (type === 'foxy' && side === -1) {
      hand.add(makeHook(materials.endo));
    } else {
      const palm = mesh(new THREE.SphereGeometry(0.11, 14, 10), materials.fur, [0, 0, 0], [.8, 1.15, .65]);
      hand.add(palm);
      addFingers(hand, materials.fur, 0, 0, 0, side);
    }
    arms.push({ shoulder, elbow, hand, side });
  }
  parts.arms = arms;

  // Bow tie / costume detail.
  const bow = makeBowtie(type === 'chica' ? materials.accent : type === 'bonnie' ? materials.red : materials.plastic);
  bow.position.set(0, 1.93, 0.35);
  bow.scale.setScalar(type === 'freddy' ? 1.25 : 1.05);
  body.add(bow);

  if (type === 'chica') {
    const bib = new THREE.Mesh(
      new THREE.PlaneGeometry(0.62, 0.5),
      new THREE.MeshStandardMaterial({ map: createBibTexture(renderer), roughness: .9, transparent: true, side: THREE.DoubleSide })
    );
    bib.position.set(0, 1.4, 0.475);
    bib.rotation.x = -0.1;
    body.add(bib);
    parts.bib = bib;
  }

  // Neck.
  const neck = mesh(new THREE.CylinderGeometry(0.15, 0.17, 0.22, 12), materials.endo, [0, 1.97, 0]);
  body.add(neck);

  // Head.
  const head = new THREE.Group();
  head.position.set(0, 2.19, 0);
  body.add(head);
  parts.head = head;
  const skull = mesh(new THREE.SphereGeometry(0.35, 24, 18), materials.fur, [0, 0, 0], [1, .98, .94]);
  head.add(skull);
  const forehead = mesh(new THREE.SphereGeometry(0.31, 18, 12), materials.fur, [0, .12, -0.02], [1, .65, .95]);
  head.add(forehead);

  // Ears / head pieces.
  if (type === 'bonnie') {
    for (const side of [-1, 1]) {
      const ear = new THREE.Group();
      ear.position.set(side * 0.24, 0.28, 0);
      ear.rotation.z = side * 0.13;
      ear.add(mesh(capsuleGeometry(0.105, 0.4, 6, 12), materials.fur, [0, 0.23, 0], [.9, 1, .7]));
      const inner = mesh(capsuleGeometry(0.062, 0.31, 6, 10), materials.furLight, [0, 0.25, 0.045], [.78, 1, .3]);
      ear.add(inner);
      head.add(ear);
    }
    parts.ears = head.children.filter(c => c.type === 'Group');
  } else if (type === 'freddy') {
    for (const side of [-1, 1]) {
      const ear = mesh(new THREE.SphereGeometry(0.13, 16, 12), materials.fur, [side * 0.29, 0.26, 0], [1, 1, .65]);
      head.add(ear);
      const inner = mesh(new THREE.SphereGeometry(0.073, 12, 9), materials.furLight, [side * 0.29, 0.26, 0.065], [1, 1, .35]);
      head.add(inner);
    }
    const hat = makeHat(materials.plastic, materials.accent);
    hat.position.set(0, 0.31, 0);
    hat.rotation.z = -0.06;
    head.add(hat);
    parts.hat = hat;
  } else if (type === 'chica') {
    for (let i = -2; i <= 2; i++) {
      const feather = mesh(new THREE.ConeGeometry(0.045, 0.3 + Math.abs(i) * -0.03, 7), materials.fur, [i * 0.065, 0.34, -0.01]);
      feather.rotation.z = i * -0.14;
      head.add(feather);
    }
    const tuft = mesh(new THREE.ConeGeometry(0.06, 0.34, 8), materials.fur, [0.08, 0.33, 0.03]);
    tuft.rotation.z = -.3;
    head.add(tuft);
  } else if (type === 'foxy') {
    for (const side of [-1, 1]) {
      const ear = mesh(new THREE.ConeGeometry(0.125, 0.38, 7), materials.fur, [side * .245, .3, 0]);
      ear.rotation.z = side * -.17;
      head.add(ear);
      const inner = mesh(new THREE.ConeGeometry(0.057, 0.24, 6), materials.furLight, [side * .25, .31, .05]);
      inner.rotation.z = side * -.17;
      head.add(inner);
    }
  }

  // Muzzle / jaw.
  const muzzle = mesh(new THREE.SphereGeometry(0.27, 20, 14), materials.furLight,
    [0, -0.11, 0.26], type === 'foxy' ? [1.12, .74, 1.15] : [1.02, .72, .92]);
  head.add(muzzle);
  const mouthInterior = mesh(new THREE.SphereGeometry(0.205, 18, 12), materials.mouth, [0, -0.2, 0.29], [1.02, .34, .72]);
  head.add(mouthInterior);

  const lowerJaw = new THREE.Group();
  lowerJaw.position.set(0, -0.17, 0.17);
  head.add(lowerJaw);
  const jaw = mesh(new THREE.SphereGeometry(0.24, 18, 12), materials.furLight, [0, -0.1, 0.09], [1, .34, .8]);
  lowerJaw.add(jaw);
  const jawInterior = mesh(new THREE.SphereGeometry(0.192, 14, 10), materials.mouth, [0, -0.015, 0.1], [1, .18, .74]);
  lowerJaw.add(jawInterior);
  addTeeth(lowerJaw, materials.teeth, -0.045, 0.20, 0.31, type === 'foxy' ? 7 : 6, true);
  addTeeth(head, materials.teeth, -0.2, 0.38, 0.3, type === 'foxy' ? 7 : 6, false);
  parts.jaw = lowerJaw;

  const nose = mesh(new THREE.SphereGeometry(0.085, 14, 10), materials.plastic, [0, 0.005, 0.51], [1.12, .8, .86]);
  head.add(nose);
  if (type === 'freddy') {
    const noseBand = mesh(new THREE.TorusGeometry(0.086, 0.018, 6, 16), materials.endo, [0, 0.005, 0.47]);
    noseBand.rotation.x = Math.PI / 2;
    head.add(noseBand);
  }
  if (type === 'chica') {
    const beakUpper = mesh(new THREE.ConeGeometry(0.17, 0.3, 4), materials.accent, [0, -.045, .47]);
    beakUpper.rotation.x = Math.PI / 2 + .25;
    beakUpper.rotation.y = Math.PI / 4;
    beakUpper.scale.set(1.15, 1, .55);
    head.add(beakUpper);
    const beakLower = mesh(new THREE.ConeGeometry(0.15, 0.24, 4), materials.accent, [0, -.16, .45]);
    beakLower.rotation.x = Math.PI / 2 + .2;
    beakLower.rotation.y = Math.PI / 4;
    beakLower.scale.set(1.05, .8, .5);
    lowerJaw.add(beakLower);
  }

  // Eyes.
  const eyes = [];
  for (const side of [-1, 1]) {
    const eye = createEye(materials);
    eye.position.set(side * 0.125, 0.09, 0.3);
    eye.scale.setScalar(type === 'foxy' ? .9 : 1);
    head.add(eye);
    eyes.push(eye);
    const brow = mesh(new THREE.BoxGeometry(0.17, 0.038, 0.065), materials.fur, [side * .125, 0.22, 0.3]);
    brow.rotation.z = side * -.11;
    head.add(brow);
  }
  parts.eyes = eyes;
  if (type === 'foxy') {
    const patch = mesh(new THREE.CircleGeometry(0.13, 20), materials.dark, [0.125, 0.09, 0.411]);
    patch.scale.set(1.1, 1.1, 1);
    head.add(patch);
    const strap = mesh(new THREE.BoxGeometry(0.56, 0.035, 0.025), materials.dark, [0, 0.13, 0.34]);
    strap.rotation.z = -.12;
    head.add(strap);
    // Snout scar.
    const scarMat = new THREE.MeshStandardMaterial({ color: '#3e1511', roughness: .9 });
    for (let i = 0; i < 3; i++) {
      const scar = mesh(new THREE.BoxGeometry(0.018, 0.12, 0.02), scarMat, [-0.22 + i * .035, -0.12, 0.45]);
      scar.rotation.z = .4;
      head.add(scar);
    }
  }

  // Props.
  if (type === 'bonnie') {
    const guitar = makeGuitar(materials.red, materials.dark, materials.endo);
    guitar.position.set(0.57, 1.28, 0.28);
    guitar.rotation.set(-0.12, -.15, -.25);
    guitar.scale.setScalar(.8);
    body.add(guitar);
    parts.guitar = guitar;
  } else if (type === 'freddy') {
    const mic = makeMicrophone(materials.endo, materials.dark);
    mic.position.set(0.64, 1.15, 0.38);
    mic.rotation.z = -.35;
    body.add(mic);
    parts.mic = mic;
  } else if (type === 'chica') {
    const cupcake = makeCupcake(renderer);
    cupcake.position.set(0.67, 1.16, 0.36);
    cupcake.scale.setScalar(.95);
    body.add(cupcake);
    parts.cupcake = cupcake;
  } else if (type === 'foxy') {
    const scarf = new THREE.Mesh(
      new THREE.PlaneGeometry(0.42, 0.3),
      new THREE.MeshStandardMaterial({ color: '#34202c', roughness: .9, side: THREE.DoubleSide })
    );
    scarf.position.set(0, 1.8, 0.31);
    scarf.rotation.x = -.35;
    body.add(scarf);
  }

  // Subtle exposed endoskeleton seams.
  const chestSeam = mesh(new THREE.TorusGeometry(0.285, 0.009, 5, 20, Math.PI), materials.endo, [0, -.18, .33]);
  chestSeam.rotation.x = Math.PI / 2;
  torso.add(chestSeam);

  root.scale.setScalar(def.scale);
  root.userData = {
    type,
    parts,
    baseScale: def.scale,
    phase: Math.random() * TAU,
    eyeGlow: type === 'foxy' ? '#e8c24c' : type === 'chica' ? '#b078d3' : '#7fb2df',
    location: 'stage'
  };
  return root;
}

export function setAnimatronicMouth(model, open = 0) {
  const jaw = model?.userData?.parts?.jaw;
  if (jaw) jaw.rotation.x = open * 0.62;
}

export function animateAnimatronic(model, time, mode = 'idle', intensity = 1) {
  if (!model) return;
  const { parts, phase } = model.userData;
  const head = parts.head;
  const arms = parts.arms;
  const t = time + phase;
  const breathe = Math.sin(t * 1.9) * .012;
  parts.torso.position.y = 1.56 + breathe;
  if (head) {
    head.rotation.y = Math.sin(t * .43) * .14 + Math.sin(t * 1.3) * .02;
    head.rotation.z = Math.sin(t * .61) * .025;
  }
  if (arms) {
    arms.forEach((arm, i) => {
      const sway = Math.sin(t * .8 + i * 1.8) * .03;
      arm.shoulder.rotation.x = sway;
      arm.shoulder.rotation.z = arm.side * -.14 + Math.sin(t * .55 + i) * .015;
      arm.elbow.rotation.x = .08 + Math.sin(t * .75 + i) * .02;
    });
  }
  if (mode === 'door') {
    if (head) head.rotation.y = Math.sin(t * .7) * .28;
    if (parts.jaw) setAnimatronicMouth(model, .08 + Math.abs(Math.sin(t * 1.6)) * .1);
    model.position.y = Math.sin(t * 2.3) * .008;
  } else if (mode === 'run') {
    if (head) head.rotation.z = Math.sin(t * 15) * .09;
    if (parts.legs) parts.legs.forEach((leg, i) => { leg.rotation.x = Math.sin(t * 9 + i * Math.PI) * .38; });
    if (arms) arms.forEach((arm, i) => { arm.shoulder.rotation.x = Math.sin(t * 9 + i * Math.PI + .4) * .55; });
  } else if (mode === 'scare') {
    // Keep the root planted where the scare placed it, then shake the head.
    if (head) {
      head.rotation.z = Math.sin(t * 28) * .12;
      head.rotation.x = Math.sin(t * 34) * .08;
    }
    if (parts.jaw) setAnimatronicMouth(model, .82 + Math.sin(t * 25) * .14);
    if (parts.eyes) parts.eyes.forEach((eye, i) => {
      eye.rotation.z = Math.sin(t * 40 + i) * .14;
    });
  } else if (mode === 'stage') {
    if (head) head.rotation.x = Math.sin(t * .34) * .035;
    if (parts.jaw) setAnimatronicMouth(model, .02);
  }
  if (intensity !== 1) {
    if (arms) arms.forEach(arm => arm.shoulder.rotation.x *= intensity);
  }
}

export function setEyeGlow(model, intensity = 1) {
  if (!model?.userData?.parts?.eyes) return;
  for (const eye of model.userData.parts.eyes) {
    const iris = eye.children[1];
    if (iris?.material) iris.material.emissiveIntensity = 0.28 + intensity * 2.6;
  }
}
