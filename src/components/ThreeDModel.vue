<template>
    <div ref="threeContainer" class="three-container"></div>
</template>

<script>
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

export default {
    name: 'ThreeDModel',
    props: ['modelPath','animation','cameraPo'],
    data() {
        return {
            scene: null,
            camera: null,
            renderer: null,
            controls: null,
            model: null,
        };
    },
    watch: {
        modelPath: 'loadModel',
        // camera: 'loadModel',
    },
    mounted() {
        console.log('mounted')
        this.initThreeJS();
        this.loadModel();
        this.setupResizeListener(); // 添加监听容器大小变化的事件
        this.onWindowResize()
    },
    beforeDestroy() {
        this.removeResizeListener(); // 移除事件监听
    },
    methods: {
        initThreeJS(type) {
            console.log('initThreeJS',type)
            // 创建场景
            this.scene = new THREE.Scene();

            // 创建相机
            const cameraPosition = new THREE.Vector3(200, 1000, 1000); // 设置相机初始位置
            const lookAtPosition = new THREE.Vector3(90, 1000, 400); // 设置相机初始目标点
            this.camera = new THREE.PerspectiveCamera(80, this.$refs.threeContainer.clientWidth / this.$refs.threeContainer.clientHeight, 0.5, 1000);
            // this.camera.position.copy(cameraPosition);
            this.camera.position.set(0, 500, 0);//第二个图片俯视效果的
            if(this.camera === 'default') {
                this.camera.lookAt(0,0,90);
            } else {
                this.camera.lookAt(0,0,0);
            }

            // this.camera.lookAt(lookAtPosition);

            // 使用四元数旋转相机
            const quaternion = new THREE.Quaternion().setFromEuler(new THREE.Euler(Math.PI / 2, 0, 0, 'XYZ')); // 绕 X 轴旋转 90 度
            this.camera.quaternion.copy(quaternion);

            console.log('Camera position:', this.camera.position);
            console.log('Camera rotation:', this.camera.rotation);

            // 创建渲染器并启用透明背景
            this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
            this.renderer.setSize(this.$refs.threeContainer.clientWidth, this.$refs.threeContainer.clientHeight);
            this.renderer.setPixelRatio(window.devicePixelRatio);
            this.$refs.threeContainer.appendChild(this.renderer.domElement);

            // 添加光源
            const ambientLight = new THREE.AmbientLight(0x404040);
            this.scene.add(ambientLight);

            const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
            directionalLight.position.set(1, 1, 1).normalize();
            this.scene.add(directionalLight);

            // 添加OrbitControls
            this.controls = new OrbitControls(this.camera, this.renderer.domElement);
            this.controls.enableDamping = true;
            this.controls.dampingFactor = 0.25;
            this.controls.screenSpacePanning = false;
            // 设置初始角度


            // this.controls.target = new THREE.Vector3(100, 0, 2000)

            // // 加载模型
            // if(this.currentModel) {
            //     this.scene.remove(this.currentModel);
            //     this.currentModel.geometry.dispose();
            //     this.currentModel.material.dispose();
            // }
            //
            // const loader = new OBJLoader();
            // let url = `/models/${type||'coke'}.obj`
            // console.log(url)
            // loader.load(url, (object) => {
            //     this.currentModel = object;
            //     this.scene.add(object);
            // }, undefined, (error) => {
            //     console.error(error);
            // });

            // 渲染循环
            const animate = () => {
                requestAnimationFrame(animate);
                if (this.currentModel) {
                    // this.currentModel.rotation.x += 0.01;
                    if(this.animation === 'x') {
                        this.currentModel.rotation.x += 0.01;
                    } else if(this.animation === 'y') {
                        this.currentModel.rotation.y += 0.01;
                    } else if(this.animation === 'z') {
                        this.currentModel.rotation.z += 0.01;
                    }
                }
                this.renderer.render(this.scene, this.camera);
            };
            animate();
        },

        loadModel() {
            // 加载模型
            if(this.currentModel) {
                this.scene.remove(this.currentModel);
                // this.currentModel.geometry.dispose();
                // this.currentModel.material.dispose();
            }

            const loader = new OBJLoader();
            let url = `/models/${this.modelPath||'coke'}.obj`
            console.log(url)
            loader.load(url, (object) => {
                this.currentModel = object;
                this.scene.add(object);
            }, undefined, (error) => {
                console.error(error);
            });
        },

        setupResizeListener() {
            // 监听窗口大小变化，调整渲染器尺寸和相机纵横比
            window.addEventListener('resize', this.onWindowResize);
        },
        removeResizeListener() {
            // 移除窗口大小变化监听
            window.removeEventListener('resize', this.onWindowResize);
        },
        onWindowResize() {
            const width = this.$refs.threeContainer.clientWidth;
            const height = this.$refs.threeContainer.clientHeight;
            console.log('width',width)
            console.log('height',height)
            this.camera.aspect = width / height;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(width, height);
        },
        // animate() {
        //     // 渲染循环
        //     requestAnimationFrame(this.animate);
        //     this.controls.update();
        //     this.renderer.render(this.scene, this.camera);
        // },
    }
};
</script>

<style scoped>
.three-container {
    width: 100%;
    height: 100vh;
}
</style>
