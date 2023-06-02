import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import * as lilGui from 'lil-gui'
//Canvas
const canvas = document.querySelector('canvas');

//Scene
const scene = new THREE.Scene();

//Camera
const camera = new THREE.PerspectiveCamera(
    45, 
    window.innerWidth / window.innerHeight,
    0.1,
    1000 
);
camera.position.z = +500;
// camera.position.y = 50;
// camera.position.x = 50;
scene.add(camera)

//Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
});
renderer.setSize(window.innerWidth, window.innerHeight)

//Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true;

//GUI configurator
const gui = new lilGui.GUI();

//gltf loader
const gltfLoader = new GLTFLoader();
gltfLoader.load("./models/classroom1.gltf", (gltf) => {
    console.log(gltf)
    const model = gltf.scene;
    scene.add(model)
})

const animate = () => {
    renderer.render(scene, camera);

    window.requestAnimationFrame(animate);
}
animate();