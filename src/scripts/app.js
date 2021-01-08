// eslint-disable-next-line import/no-unresolved
import 'styles/index.scss'
import * as THREE from 'three'

export default class App {
  setup() {
    this.gutter = { size: 4 }
    this.meshes = []
    this.grid = { rows: 11, cols: 7 }
    this.width = window.innerWidth
    this.height = window.innerHeight
    this.mouse3D = new THREE.Vector2()
    this.geometries = []

    this.raycaster = new THREE.Raycaster()
  }

  createScene() {
    this.scene = new THREE.Scene()
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false })
    this.renderer.setSize(window.innerWidth, window.innerHeight)
    this.renderer.setPixelRatio(window.devicePixelRatio)

    // this.renderer.shadowMap.enabled = true;
    // this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    document.body.appendChild(this.renderer.domElement)
  }

  createCamera() {
    this.camera = new THREE.PerspectiveCamera(
      20,
      window.innerWidth / window.innerHeight,
      1
    )
    this.camera.position.set(0, 65, 0)
    this.camera.rotation.x = -1.57

    this.scene.add(this.camera)
  }

  addAmbientLight() {
    const light = new THREE.AmbientLight('#ffffff', 1)

    this.scene.add(light)
  }

  addSpotLight() {
    const ligh = new THREE.SpotLight('#7bccd7', 1, 1000)

    ligh.position.set(0, 27, 0)
    ligh.castShadow = true

    this.scene.add(ligh)
  }

  addRectLight() {
    const light = new THREE.RectAreaLight('#341212', 1, 2000, 2000)

    light.position.set(5, 50, 50)
    light.lookAt(0, 0, 0)

    this.scene.add(light)
  }

  addPointLight(color, position) {
    const light = new THREE.PointLight(color, 1, 1000, 1)

    light.position.set(position.x, position.y, position.z)

    this.scene.add(light)
  }

  addFloor() {
    const geometry = new THREE.PlaneGeometry(100, 100)
    const material = new THREE.ShadowMaterial({ opacity: 0.3 })

    this.floor = new THREE.Mesh(geometry, material)
    this.floor.position.y = 0
    this.floor.receiveShadow = true
    this.floor.rotateX(-Math.PI / 2)

    this.scene.add(this.floor)
  }

  init() {
    console.log('app.js init')

    this.setup()

    this.createScene()

    this.createCamera()

    // this.createGrid();

    // this.addFloor();

    this.addAmbientLight()

    this.addSpotLight()

    this.addRectLight()

    this.addPointLight(0xfff000, { x: 0, y: 10, z: -100 })

    this.addPointLight(0x79573e, { x: 100, y: 10, z: 0 })

    this.addPointLight(0xc27439, { x: 20, y: 5, z: 20 })
  }
}
