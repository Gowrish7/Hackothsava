import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import * as lilGui from 'lil-gui'
import gsap from 'gsap'
//Canvas
const canvas = document.querySelector('canvas');
const main = document.querySelector('.select');
const select = document.querySelector('.button-17');
const formContainer = document.querySelector('.form-container');
const reset = document.querySelector('.reset');
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





function cameraMovement(x, y, z) {
    gsap.to(camera.position, {x: x, y: y, z: z, duration: 3})
}
function cameraRotation(x, y, z) {
    gsap.to(camera.rotation, {x: x, y: y, z: z, duration: 3})
}
// function lookAtPosition(x, y, z) {
//     camera.lookAt( x, y, z );
// }


//gltf loader
const gltfLoader = new GLTFLoader();
gltfLoader.load("./models/C20/Classroom.gltf", (gltf) => {
    console.log(gltf)
    const model = gltf.scene;
    scene.add(model)

    
    cameraMovement(-10.29, 1.966, -7.66);
    cameraRotation(-2.89, -0.91, -2.94);
    select.addEventListener('click', async() => {

                cameraMovement(1.49, 2.04, -7.55);
                cameraRotation(-2.68, 1.05, 2.74);
                main.style.display = "none"
                // formContainer.style.display = "block"
                reset.style.display = "block"
                setInterval(()=> {
                    position = 1;
                },1000)
    })


    let clickcount = true
    reset.addEventListener('click', () => {
        clickcount = true
        cameraMovement(-10.29, 1.966, -7.66);
        cameraRotation(-2.89, -0.91, -2.94);
        main.style.display = "block"
        reset.style.display = "none"
        formContainer.style.display = "none"
    })
    canvas.addEventListener('click', (e) => {
        if(clickcount) {
        cameraMovement(1.49, 2.04, -7.55);
        cameraRotation(-2.68, 1.05, 2.74);
        pointer.x = (e.x / window.innerWidth) * 2 - 1;
        pointer.y = -(e.y / window.innerHeight) * 2 + 1;
        raycaster.setFromCamera(pointer, camera); 
        const intersects=raycaster.intersectObjects (scene.children);
        console.log("Click here");
        for (let i = 0; i < intersects.length; i++) { 
            console.log("Click", position);
            const str = intersects[i].object.material.name
            if(str.includes('Material')) {
                console.log(intersects[i].object.material.name)
                intersects[i].object.material.color.set(0x000000)
                formContainer.style.display = "block"
                clickcount = false
                break;
            }
        }
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



//raycaster and 2D Vector
const pointer = new THREE.Vector2()
const raycaster = new THREE.Raycaster()
// const onMouseMove = (event) => {
//     pointer.x = (event.x / window.innerWidth) * 2 - 1;
//     pointer.y = (event.y / window.innerHeight) * 2 + 1;
//     raycaster.setFromCamera(pointer, camera); 
//     const intersects=raycaster.intersectObjects (scene.children);
//     for (let i = 0; i < intersects.length; i++) { 
//         console.log(intersects);
//         intersects[i].object.material.color.set(0x000000)
//     }
// }
// window.addEventListener('click', (e) => {
//     if(position==1)
//         onMouseMove(e);
// })












const animate = () => {
    // controls.saveState();
    renderer.render(scene, camera);
    // controls.update();
}
renderer.setAnimationLoop(animate)
animate();