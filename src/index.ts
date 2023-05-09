import { Scene, PerspectiveCamera, WebGLRenderer, BoxGeometry, MeshBasicMaterial, Mesh } from 'three'

import { OrbitControls } from './controls/OrbitControls'

class FirstDemo {
  private scene:Scene
  private camera:PerspectiveCamera
  private renderer:WebGLRenderer
  private boxCube:Mesh

  constructor() {
    //创建一个场景
    this.scene = new Scene()
    //创建一个镜头
    this.camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

    //创建一个渲染器
    this.renderer = new WebGLRenderer({ antialias: true})
    //设置渲染宽高
    this.renderer.setSize(window.innerWidth, window.innerHeight)
    document.body.appendChild(this.renderer.domElement)


    const box = new BoxGeometry( 1, 1, 1 )
    const material = new MeshBasicMaterial( { color: 0x00ff00 } )
    this.boxCube = new Mesh( box, material )
    this.scene.add(this.boxCube)

    this.camera.position.z = 5

    this.render()


    window.addEventListener('resize', () => {
      this.resize()
    })

    new OrbitControls(this.camera, this.renderer.domElement)
  }

  private render(){
    requestAnimationFrame(() => {this.render()})
    // this.boxCube.rotation.x += 0.01
    // this.boxCube.rotation.y += 0.01
    this.renderer.render(this.scene, this.camera)
  }

  private resize(){
    this.renderer.setSize(window.innerWidth, window.innerHeight)
    this.camera.aspect = window.innerWidth/window.innerHeight
    this.camera.updateProjectionMatrix()
  }

  
}

new FirstDemo()
