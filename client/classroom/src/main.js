import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import * as lilGui from 'lil-gui'
//Canvas
const canvas = document.querySelector('canvas');

//Scene
const scene = new THREE.Scene();
//Light
const light = new THREE.AmbientLight(0xffffff, 1, 100)
light.position.set(10, 0, 0)
const light1 = new THREE.AmbientLight(0xffffff, 1, 100)
light1.position.set(0, 10, 0)
const light2 = new THREE.AmbientLight(0xffffff, 1, 100)
light2.position.set(0, 0, 10)
const light3 = new THREE.AmbientLight(0xffffff, 1, 100)
light3.position.set(-10, 0, 0)
const light4 = new THREE.AmbientLight(0xffffff, 1, 100)
light4.position.set(0, -10, 0)
const light5 = new THREE.AmbientLight(0xffffff, 1, 100)
light5.position.set(0, 0, -10)
light.intensity = 0.11
light1.intensity = 0.11
light2.intensity = 0.11
light3.intensity = 0.11
light4.intensity = 0.11
light5.intensity = 0.11
scene.add(light)
scene.add(light1)
scene.add(light2)
scene.add(light3)
scene.add(light4)
scene.add(light5)
//Camera
const camera = new THREE.PerspectiveCamera(
    45, 
    window.innerWidth / window.innerHeight,
    0.1,
    1000 
);
camera.position.z = -10;

// camera.position.z = -50;
camera.position.y = 1;
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
gltfLoader.load("./models/C/Classroom1.gltf", (gltf) => {
    console.log(gltf)
    const model = gltf.scene;
    scene.add(model)
    console.log(model.position)
})

const animate = () => {
    renderer.render(scene, camera);

    controls.update();
}
renderer.setAnimationLoop(animate)
animate();