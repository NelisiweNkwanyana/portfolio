import * as THREE from 'three';

/* =========================================================
   THREE.JS PORTRAIT BACKGROUND
   Fine orbital rings + subtle particles + pointer response
   ========================================================= */

const frame = document.querySelector('.hero-portrait');
const canvas = frame?.querySelector('.portrait-3d-canvas');

if (frame && canvas) {
  const reducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  let renderer;

  try {
    renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'low-power'
    });
  } catch (error) {
    console.warn(
      'Three.js could not initialise WebGL. The regular portrait will still work.',
      error
    );
  }

  if (renderer) {
    renderer.setPixelRatio(
      Math.min(window.devicePixelRatio || 1, 1.5)
    );

    renderer.setClearColor(0x000000, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
    camera.position.set(0, 0, 12);

    const group = new THREE.Group();
    scene.add(group);

    /* ---------------- ORBITAL RINGS ---------------- */

    const ringMaterialA = new THREE.MeshBasicMaterial({
      color: 0x1389a1,
      transparent: true,
      opacity: 0.28,
      wireframe: true,
      depthWrite: false
    });

    const ringMaterialB = new THREE.MeshBasicMaterial({
      color: 0xc39b56,
      transparent: true,
      opacity: 0.3,
      wireframe: true,
      depthWrite: false
    });

    const ringMaterialC = new THREE.MeshBasicMaterial({
      color: 0x1389a1,
      transparent: true,
      opacity: 0.16,
      wireframe: true,
      depthWrite: false
    });

    const ringA = new THREE.Mesh(
      new THREE.TorusGeometry(3.15, 0.012, 6, 180),
      ringMaterialA
    );

    ringA.rotation.set(0.82, 0.2, -0.34);
    group.add(ringA);

    const ringB = new THREE.Mesh(
      new THREE.TorusGeometry(2.55, 0.009, 6, 160),
      ringMaterialB
    );

    ringB.rotation.set(-0.62, 0.6, 0.48);
    group.add(ringB);

    const ringC = new THREE.Mesh(
      new THREE.TorusGeometry(3.6, 0.006, 5, 180),
      ringMaterialC
    );

    ringC.rotation.set(0.25, -0.45, 0.7);
    group.add(ringC);

    /* ---------------- PARTICLE HALO ---------------- */

    const particleCount = 240;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const palette = [
      new THREE.Color('#1389a1'),
      new THREE.Color('#c39b56'),
      new THREE.Color('#d3e7e8')
    ];

    for (let i = 0; i < particleCount; i++) {
      const radius = 2.2 + Math.random() * 2.4;
      const angle = Math.random() * Math.PI * 2;

      positions[i * 3] = Math.cos(angle) * radius;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 6.7;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 2.4;

      const color = palette[
        Math.floor(Math.random() * palette.length)
      ];

      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    const particleGeometry = new THREE.BufferGeometry();

    particleGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(positions, 3)
    );

    particleGeometry.setAttribute(
      'color',
      new THREE.BufferAttribute(colors, 3)
    );

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.035,
      vertexColors: true,
      transparent: true,
      opacity: 0.68,
      sizeAttenuation: true,
      depthWrite: false
    });

    const particles = new THREE.Points(
      particleGeometry,
      particleMaterial
    );

    group.add(particles);

    /* ---------------- POINTER MOVEMENT ---------------- */

    const pointer = {
      x: 0,
      y: 0,
      targetX: 0,
      targetY: 0
    };

    const clock = new THREE.Clock();

    let width = 1;
    let height = 1;
    let animationFrame = 0;
    let visible = false;
    let pageVisible = !document.hidden;
    let destroyed = false;

    function resize() {
      if (!renderer || destroyed) return;

      const rect = frame.getBoundingClientRect();

      width = Math.max(1, rect.width);
      height = Math.max(1, rect.height);

      renderer.setSize(width, height, false);

      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      camera.position.z = width < 420 ? 14 : 12;
    }

    function onPointerMove(event) {
      if (event.pointerType === 'touch') return;

      const rect = frame.getBoundingClientRect();

      if (!rect.width || !rect.height) return;

      pointer.targetX =
        ((event.clientX - rect.left) / rect.width - 0.5) * 0.8;

      pointer.targetY =
        ((event.clientY - rect.top) / rect.height - 0.5) * -0.8;
    }

    function onPointerLeave() {
      pointer.targetX = 0;
      pointer.targetY = 0;
    }

    /* ---------------- RENDER LOOP ---------------- */

    function renderStatic() {
      if (!renderer || destroyed) return;
      renderer.render(scene, camera);
    }

    function animate() {
      if (
        destroyed ||
        reducedMotion ||
        !visible ||
        !pageVisible
      ) {
        animationFrame = 0;
        return;
      }

      animationFrame = requestAnimationFrame(animate);

      const delta = Math.min(clock.getDelta(), 0.05);
      const elapsed = clock.elapsedTime;

      /* Smoothly ease the rings towards the cursor. */
      pointer.x += (pointer.targetX - pointer.x) * 0.045;
      pointer.y += (pointer.targetY - pointer.y) * 0.045;

      group.rotation.y =
        pointer.x + Math.sin(elapsed * 0.16) * 0.06;

      group.rotation.x =
        pointer.y + Math.cos(elapsed * 0.13) * 0.035;

      ringA.rotation.z += delta * 0.04;
      ringB.rotation.z -= delta * 0.05;
      ringC.rotation.x += delta * 0.02;

      particles.rotation.y += delta * 0.025;

      renderStatic();
    }

    function startAnimation() {
      if (
        destroyed ||
        reducedMotion ||
        !visible ||
        !pageVisible ||
        animationFrame
      ) {
        return;
      }

      clock.start();
      animationFrame = requestAnimationFrame(animate);
    }

    function stopAnimation() {
      if (!animationFrame) return;

      cancelAnimationFrame(animationFrame);
      animationFrame = 0;
    }

    function onVisibilityChange() {
      pageVisible = !document.hidden;

      if (!pageVisible) {
        stopAnimation();
      } else if (reducedMotion) {
        renderStatic();
      } else {
        startAnimation();
      }
    }

    frame.addEventListener('pointermove', onPointerMove, {
      passive: true
    });

    frame.addEventListener('pointerleave', onPointerLeave, {
      passive: true
    });

    window.addEventListener('resize', resize, {
      passive: true
    });

    document.addEventListener(
      'visibilitychange',
      onVisibilityChange
    );

    resize();

    /* Only animate while the portrait is visible on screen. */
    const observer = new IntersectionObserver(entries => {
      visible = entries[0]?.isIntersecting ?? false;

      if (visible) {
        if (reducedMotion) {
          renderStatic();
        } else {
          startAnimation();
        }
      } else {
        stopAnimation();
      }
    }, {
      threshold: 0.05
    });

    observer.observe(frame);

    if (reducedMotion) {
      renderStatic();
    }

    /*
     * Optional cleanup if you ever remove the portrait dynamically.
     * This also makes debugging/reinitialisation safer.
     */
    window.addEventListener('pagehide', () => {
      destroyed = true;
      stopAnimation();
      observer.disconnect();

      frame.removeEventListener('pointermove', onPointerMove);
      frame.removeEventListener('pointerleave', onPointerLeave);

      window.removeEventListener('resize', resize);
      document.removeEventListener(
        'visibilitychange',
        onVisibilityChange
      );

      ringA.geometry.dispose();
      ringB.geometry.dispose();
      ringC.geometry.dispose();

      ringMaterialA.dispose();
      ringMaterialB.dispose();
      ringMaterialC.dispose();

      particleGeometry.dispose();
      particleMaterial.dispose();

      renderer.dispose();
    }, { once: true });
  }
}
