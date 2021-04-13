<template>
    <div id="container"></div>
</template>

<script>
import * as Three from 'three'

export default {
  name: 'ThreeTest',
  data() {
    return {
      camera: null,
			light: null,
      scene: null,
      renderer: null,
      cube: null
    }
  },
  methods: {
    init() {
        let container = document.getElementById('container')

				// camera
        this.camera = new Three.PerspectiveCamera(45, container.clientWidth/container.clientHeight, 1, 1000)
        this.camera.position.z = 15
				// scene
        this.scene = new Three.Scene()
				// light
				this.light = new Three.PointLight( 0xFFFFFF, 1, 500 )
				this.light.position.set(10, 0, 25)
				this.scene.add(this.light)
				// cube
        let geometry = new Three.BoxGeometry(5, 5, 5)
        let material = new Three.MeshLambertMaterial({ color: 0xe3e3e3 })

        this.cube = new Three.Mesh(geometry, material)
        this.scene.add(this.cube)

        this.renderer = new Three.WebGLRenderer({ antialias: true })
        this.renderer.setSize(container.clientWidth, container.clientHeight)
				this.renderer.setClearColor('#e3e3e3')
        container.appendChild(this.renderer.domElement)

    },
    animate() {
        requestAnimationFrame(this.animate)
        this.cube.rotation.x += 0.01
        this.cube.rotation.y += 0.01
        this.renderer.render(this.scene, this.camera)
    }
  },
  mounted() {
      this.init()
      this.animate()
  }
}
</script>

<style scoped>
  #container {
		display: block;
		width: 200px;
		height: 200px;
		margin: 50px auto
	}
</style>