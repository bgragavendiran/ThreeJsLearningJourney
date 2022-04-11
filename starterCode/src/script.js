import './style.css'
import * as THREE from 'three'
console.log(THREE);
const canvas=document.querySelector('.webgl')

// Scene
const Scene= new THREE.Scene()

// Red Cube
const geometry = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshBasicMaterial({color:'#ff0000'})

const cube = new THREE.Mesh(geometry,material)
cube.position.x=0.7
cube.position.y=-0.6
cube.position.z=0

Scene.add(cube)

console.log(cube.position.length())

//Sizes
const Sizes={
    width: 800,
    height:600
}
//Camera
const camera = new THREE.PerspectiveCamera(75,Sizes.width/Sizes.height)
camera.position.z=3
camera.lookAt(cube.position)

Scene.add(camera)

//renderer
const renderer =new THREE.WebGLRenderer({
    canvas:canvas
})
renderer.setSize(Sizes.width,Sizes.height)
renderer.render(Scene,camera)

