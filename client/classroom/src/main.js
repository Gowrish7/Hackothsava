import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import * as lilGui from 'lil-gui'
import gsap from 'gsap'
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

let position = 0;
//Camera
const camera = new THREE.PerspectiveCamera(
    45, 
    window.innerWidth / window.innerHeight,
    0.1,
    1000 
);
const initialPosition = {
    cameraMovement: {
        x: -10.29, 
        y: 1.966,
        z: -7.66
    },
    cameraRotation: {
        x: -2.89,
        y: -0.91,
        z: -2.94
    }
}
camera.position.x = initialPosition.cameraMovement.x
camera.position.y = initialPosition.cameraMovement.y
camera.position.z = initialPosition.cameraMovement.z
camera.rotation.x = initialPosition.cameraRotation.x
camera.rotation.y = initialPosition.cameraRotation.y
camera.position.z = initialPosition.cameraRotation.z
// camera.position.y = 1;
scene.add(camera)

//Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
});
renderer.setSize(window.innerWidth, window.innerHeight)

//Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true;


//gltf loader
const gltfLoader = new GLTFLoader();
gltfLoader.load("./models/C/Classroom1.gltf", (gltf) => {
    console.log(gltf)
    const model = gltf.scene;
    scene.add(model)

    function cameraMovement(x, y, z) {
        gsap.to(camera.position, {x: x, y: y, z: z, duration: 3})
    }
    function cameraRotation(x, y, z) {
        gsap.to(camera.rotation, {x: x, y: y, z: z, duration: 3})
    }
    function lookAtPosition(x, y, z) {
        camera.lookAt( x, y, z );
    }

    window.addEventListener('mouseup', async() => {
        // camera.position.x= 1.49;
        // camera.position.y= 2.04;
        // camera.rotation.y= 1;
        

        // console.log(camera.position)
        // console.log(camera.rotation)
    
        // cameraMovement(1.49, 2.04, -7.55);
        // cameraRotation(-2.68, 1.05, 2.74);



        switch(position) {
            case 0:
                cameraMovement(-10.29, 1.966, -7.66);
                cameraRotation(-2.89, -0.91, -2.94);
                // lookAtPosition(400, 400, 0)
                position = 1;
                break;
            case 1:
                cameraMovement(1.49, 2.04, -7.55);
                cameraRotation(-2.68, 1.05, 2.74);
                // lookAtPosition(400, 400, 0)
                // position = 0;
                // console.log(camera.rotation)
                break;
                // default: 
                //     cameraMovement(1.49, 2.04, -7.55);
                //     cameraRotation(-2.68, 1.05, 2.74);
                //     position = 0;
        }
    })

    


    //GUI configurator
const gui = new lilGui.GUI();

gui
.add(model.position, 'x')
.min(-10)
.max(10)
.step(0.001)
.name('Model X-Axis')

gui
.add(model.position, 'y')
.min(-10)
.max(10)
.step(0.001)
.name('Model Y-Axis')

gui
.add(model.position, 'z')
.min(-10)
.max(10)
.step(0.001)
.name('Model Y-Axis')
})

const animate = () => {
    controls.saveState();
    renderer.render(scene, camera);
    // controls.update();
}
renderer.setAnimationLoop(animate)
animate();