import * as THREE from 'three'
import { radians } from '../helpers'

export default class Cone {
  constructor() {
    this.geom = new THREE.ConeBufferGeometry(0.3, 0.5, 32)
    this.rotationX = 0
    this.rotationY = 0
    this.rotationZ = radians(-180)
  }
}
