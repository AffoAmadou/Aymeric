
import * as THREE from 'three';
import fragment from './shaders/fragment.glsl';
import vertex from './shaders/vertex.glsl';

// export default class Sketch {
//     constructor() {
//         this.containerRef = document.getElementById('canvass')
//         this.scale = document.getElementById('home__link')

//         console.log(this.containerRef);
//         this.numberSegment = 200

//         this.material = null;
//         this.t = 0;

//         this.scene = new THREE.Scene();
//         const width = this.containerRef.offsetWidth;
//         const height = this.containerRef.offsetHeight;

//         this.camera = new THREE.PerspectiveCamera(70, width / height, 100, 2000);
//         this.camera.position.z = 600;
//         this.camera.fov = 2 * Math.atan((height / 2) / 600) * (180 / Math.PI);

//         this.renderer = new THREE.WebGLRenderer({
//             antialias: true,
//             alpha: true
//         });

//         this.containerRef.appendChild(this.renderer.domElement);

//         this.addObjects();
//         this.resize();
//         this.setupResize();
//         this.render();
//         this.animate();
//        this.addEventListener();

//     }

//     addObjects() {

//         this.geometry = new THREE.PlaneGeometry(900, 900, this.numberSegment, this.numberSegment);

//         this.material = new THREE.ShaderMaterial({
//             uniforms: {
//                 time: { value: 0 },
//                 // color: { value: this.props.number },
//                 opacity: { value: 0. },
//             },
//             side: THREE.DoubleSide,
//             fragmentShader: fragment,
//             vertexShader: vertex,
//             wireframe: true,
//         });

//         this.mesh = new THREE.Mesh(this.geometry, this.material);
//         this.mesh.rotation.x = Math.PI / 2;
//         console.log(this.mesh);
//         this.scene.add(this.mesh);
//     };

//     resize() {
//         const width = this.containerRef.offsetWidth;
//         const height = this.containerRef.offsetHeight;
//         this.renderer.setSize(width, height);
//         this.camera.aspect = width / height;
//         this.camera.updateProjectionMatrix();
//     }

//     setupResize() {
//         window.addEventListener('resize', this.resize.bind(this));
//     }

//     render() {
//         this.t += 0.05;
//         this.material.uniforms.time.value = this.t;

//         this.renderer.render(this.scene, this.camera);
//         window.requestAnimationFrame(this.render.bind(this));
//     }
//     animate() {
//         GSAP.to(this.material.uniforms.opacity, {
//             duration: 4,
//             value: 1,
//             ease: 'expo.out',
//             //call function changeSegment
//         });
//     }
//     sca() {
//         console.log('click');
//         GSAP.to(this.containerRef, {
//             scale: 0.5,
//             ease: 'expo.out',
//             duration: 1,
//         })
//     }

//     addEventListener() {
//         this.scale.addEventListener('click', this.sca.bind(this));
//     }

// }

// new Sketch()
