<!-- src/views/HomePage.vue -->
<template>
    <div class="wrap" :style="{'background-color':themeBg}">
        <div class="model-gallery-container">
            <div class="model-container">
                <div class="model-title">
                    <div class="x3d-title">3D Models</div>
                </div>
                <div class="model-content">
                    <div class="title-name">{{ `${currentModel} 3D Model` }}</div>
                    <div class="btn-area">
                        <button class="btn-item" @click="handleClick(1)">Coke</button>
                        <button class="btn-item" @click="handleClick(2)">Sprite</button>
                        <button class="btn-item" @click="handleClick(3)">Pepper</button>
                    </div>
                    <img v-if="showLine" :src="require(`../assets/images/${type}-line.jpg`)" alt="Model Image" class="line-image">
                    <img v-if="showFront" :src="require(`../assets/images/${type}-front.png`)" alt="Model Image" class="front-image">
                    <ThreeDModel v-if="!showLine && !showFront" ref="threeD" :modelPath="type" :animation="animation" :cameraPo="camera"/>
                    <div class="model-describe-area">{{ `This 3D model of the ${modelName} has been created in Rhino.` }}</div>
                </div>
            </div>
            <div class="gallery-container">
                <div class="gallery-title">
                    <div class="x3d-title">Gallery</div>
                </div>
                <div class="gallery-content">
                    <div class="title-name">3D Images</div>
                    <div class="image-outer">
                        <div v-for="(item,index) in 6" :key="index" class="image-container">
                            <img :src="require(`../assets/images/model-image-${index+1}.png`)" alt="Model Image" class="gallery-image">
                        </div>
                    </div>
                    <div >You should consider rendering your 3D Image Gallery objects in 3ds Max 2017 with Mental Ray</div>
                </div>
            </div>
        </div>
        <div class="control-center">
            <div class="control-item">
                <div class="item-title">
                    <div class="item-title-name">Cameras</div>
                </div>
                <div class="control-name">Camera Views</div>
                <div class="camera-btn-container">
                    <div class="cam-btn-item" @click="handleCamera('d')">Default</div>
                    <div class="cam-btn-item" @click="handleCamera('b')">Back</div>
                    <div class="cam-btn-item" @click="handleCamera('l')">Left</div>
                    <div class="cam-btn-item" @click="handleCamera('r')">Right</div>
                    <div class="cam-btn-item">Off</div>
                </div>
                <div class="ani-explain">These buttons select a limited range of 3D model viewpoints, use the dropdown menu for more camera views</div>
            </div>
            <div class="control-item">
                <div class="item-title">
                    <div class="item-title-name">Animation</div>
                </div>
                <div class="control-name">Animation Options</div>
                <div class="animation-btn-container">
                    <div class="ani-btn-item" @click="handleRotate('x')">RotX</div>
                    <div class="ani-btn-item" @click="handleRotate('y')">RotY</div>
                    <div class="ani-btn-item" @click="handleRotate('z')">RotZ</div>
                    <div class="ani-btn-item" @click="handleRotate('')">Stop</div>
                </div>
                <div class="ani-explain">These buttons select a range of 3D animation options</div>
            </div>
            <div class="control-item">
                <div class="item-title">
                    <div class="item-title-name">Render</div>
                </div>
                <div class="control-name">Render and Lighting Options</div>
                <div class="animation-btn-container">
                    <div class="ani-btn-item" @click="handleLine">Poly</div>
                    <div class="ani-btn-item" @click="handleLine">Wire</div>
                    <div class="ani-btn-item" @click="handleLine">Headlight</div>
                    <div class="ani-btn-item" @click="handleLine">Default</div>
                </div>
                <div class="ani-explain">These buttons select a limited number of render and lighting options; use the dropdown menus for more options</div>
            </div>
        </div>
        <div class="introduction-container">
            <div class="introduction-title">{{introTitle}}</div>
            <div class="title-smaller">{{titleSmaller}}</div>
            <div class="intro-detail">{{introDetail}}</div>
            <div class="visit-btn">{{`visit ${itemName}`}}</div>
        </div>
    </div>
</template>

<script>
import ThreeDModel from "@/components/ThreeDModel.vue";
export default {
    name: 'ModelPage',
    components:{
        ThreeDModel
    },
    data() {
        return {
            currentModel: 'Coca Cola',
            animation:'',
            camera:'',
            showLine: false,
            showFront: false,
        }
    },
    computed:{
        type() {
            if(this.currentModel === 'Coca Cola') {
                return 'coke'
            } else if(this.currentModel === 'Sprite') {
                return 'sprite'
            } else {
                return 'pepper'
            }
        },
        modelName() {
            if(this.currentModel === 'Coca Cola') {
                return 'coke can'
            } else if(this.currentModel === 'Sprite') {
                return 'sprite bottle'
            } else {
                return 'pepper cup'
            }
        },
        itemName() {
            if(this.currentModel === 'Coca Cola') {
                return 'coke'
            } else if(this.currentModel === 'Sprite') {
                return 'sprite'
            } else {
                return 'pepper'
            }
        },
        theme() {
            return this.$store.state.theme
        },
        themeBg() {
            if( this.theme === 0) {
                return '#c4c4c4'
            } else if(this.theme === 1) {
                return '#d7faf5'
            } else if (this.theme === 2) {
                return '#ff7217'
            }
        },
        introTitle() {
            if(this.currentModel === 'Coca Cola') {
                return 'History of Coca Cola'
            } else if(this.currentModel === 'Sprite') {
                return 'Sprite — Fanta Klare Zitrone'
            } else {
                return 'Dr Pepper — Liquid Sunshine'
            }
        },
        titleSmaller () {
            if(this.currentModel === 'Coca Cola') {
                return 'Atlanta Beginnings'
            } else if(this.currentModel === 'Sprite') {
                return 'First introduced in 1961'
            } else {
                return '23 fruit flavours'
            }
        },
        introDetail() {
            if(this.currentModel === 'Coca Cola') {
                return 'It was 1886, John Pemberton, an Atlanta pharmacist, was inspired by simple curiosity. One afternoon, he stirred up a fragrant, caramel-coloured liquid and, when it was done, the mixture was combined with carbonated water and sampled by customers who all agreed - this new drink was something special!'
            } else if(this.currentModel === 'Sprite') {
                return 'First introduced in 1961, crisp, refreshing, clean-tasting Sprite is now the world\'s leading lemon and lime flavoured soft drink and is sold in more than 190 different countries. Sprite Zero, part of our no sugar Zero range, offers the delicious lemon lime taste of Sprite without the sugar or calories.'
            } else {
                return 'Dr Pepper\'s unique, sparkling blend of 23 fruit flavours has been around for well over a century and it\'s still the same, with that distinctive flavour you just can\'t quite put your tongue on. It was created by Texas pharmacist Alderton in 1885. The taste of Dr Pepper has been popular ever since.'
            }
        }
    },
    methods: {
        handleClick(index) {
            if(index === 1) {
                this.currentModel = 'Coca Cola'
                // this.$refs.threeD.initThreeJS('coke')
            } else if(index === 2) {
                this.currentModel = 'Sprite'
                // this.$refs.threeD.initThreeJS('sprite')
            } else {
                this.currentModel = 'Dr Pepper'
                // this.$refs.threeD.initThreeJS('pepper')
            }
        },
        handleRotate(axis) {
            this.showLine = false
            this.showFront = false
            if(axis === 'x') {
                this.animation = 'x'
            } else if(axis === 'y') {
                this.animation = 'y'
            } else if(axis === 'z') {
                this.animation = 'z'
            } else {
                this.animation = ''
            }
            window.scrollTo(0, 0);
        },
        handleCamera(cam) {
            this.showLine = false
            this.showFront = true
            window.scrollTo(0, 0);
            // if(cam === 'd') {
            //     this.camera = 'default'
            // } else if (cam === 'b') {
            //     this.camera = 'back'
            // } else if (cam === 'l') {
            //     this.camera = 'left'
            // } else if (cam === 'r') {
            //     this.camera = 'right'
            // }
        },
        handleLine() {
            this.showLine = true
            this.showFront = false
            console.log('this.showLine',this.showLine)
        },
    },
    created() {
        this.$refs.threeD.initThreeJS('coke')
    }
};
</script>

<style scoped>
@font-face {
    font-family: Oswald;
    src: url(/src/assets/fonts/Oswald-Medium.ttf);
}
.wrap {
    //padding-top: 90px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    width: 100%;
    background-color: antiquewhite;
    .model-gallery-container {
        display: flex;
        justify-content: space-between;
        .model-container {
            width: 66%;
            height: fit-content;
            background-color: rgb(185, 185, 178);
            border-radius: 6px;
            .model-title {
                display: flex;
                align-items: center;
                padding-left: 10px;
                width: 100%;
                height: 50px;
                background-color: rgba(0, 0, 0, 0.03);
                border-bottom: 1px solid rgba(0, 0, 0, 0.125);
                .x3d-title {
                    padding: 6px 12px;
                    background-color: #007bff;
                    border-radius: 4px;
                    color: white;
                }
            }
            .model-content {
                width: 100%;
                //height: 450px;
                padding: 1.25rem;
                //display: flex;
                .line-image {
                    //width: 100%;
                    height: 500px;
                    margin-left: 200px;
                    margin-bottom: 100px;
                    margin-top: 100px;
                }
                .front-image{
                    height: 500px;
                    //margin-left: 200px;
                    margin-bottom: 100px;
                    margin-top: 100px;
                }
                .btn-area {
                    margin-top: 10px;
                    margin-bottom: 20px;
                    .btn-item {
                        margin-right: 10px;
                        padding: 6px 12px;
                        background-color: #28a745;
                        border-radius: 4px;
                        color: white;
                        font-size: 0.8rem;
                        cursor: pointer;
                    }
                    .btn-item:hover{
                        background-color: #218838;
                        border-color: #1e7e34;
                    }
                }
                .model-describe-area {
                    margin-top: 10px;
                    margin-bottom: 10px;
                }
            }
        }
        .gallery-container {
            width: 32%;
            height: fit-content;
            background-color: rgb(185, 185, 178);
            border-radius: 6px;
            .gallery-title {
                display: flex;
                align-items: center;
                padding-left: 10px;
                width: 100%;
                height: 50px;
                background-color: rgba(0, 0, 0, 0.03);
                border-bottom: 1px solid rgba(0, 0, 0, 0.125);
                .x3d-title {
                    padding: 6px 12px;
                    background-color: #007bff;
                    border-radius: 4px;
                    color: white;
                }
            }
            .gallery-content {
                padding: 1.25rem;
                .image-outer {
                    margin-top: 20px;
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-between;
                }
                .image-container {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 47%;
                    height: 250px;
                    margin-bottom: 20px;
                    border-radius: 8px;
                    border: white 1px solid;
                    .gallery-image {
                        width: 10rem;
                    }
                }
            }
        }
    }
    .control-center {
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
        .control-item {
            width: 32%;
            //height: 200px;
            background-color: rgb(185, 185, 178);
            border-radius: 6px;
            padding-bottom: 20px;
            .item-title {
                display: flex;
                align-items: center;
                padding-left: 10px;
                width: 100%;
                height: 50px;
                background-color: rgba(0, 0, 0, 0.03);
                border-bottom: 1px solid rgba(0, 0, 0, 0.125);
                .item-title-name {
                    padding: 6px 12px;
                    background-color: #007bff;
                    border-radius: 4px;
                    color: white;
                }
            }
            .control-name {
                padding: 1rem 1rem 0.2rem 1rem;
                font-family: 'Oswald', sans-serif;
                font-size: 1.2rem;
            }
            .camera-btn-container {
                padding-left: 1rem;
                display: flex;
                margin-top: 5px;
                .cam-btn-item {
                    margin-right: 10px;
                    padding: 6px 12px;
                    border: white 1px solid;
                    border-radius: 4px;
                    color: black;
                    font-size: 0.8rem;
                    cursor: pointer;
                }
                .cam-btn-item:hover {
                    background-color: #0056b3;
                    border-color: #004dab;
                }
            }

        }
        .ani-explain {
            margin-left: 1rem;
            margin-top: 10px;
            padding-right: 10px;
        }
        .animation-btn-container {
            padding-left: 1rem;
            display: flex;
            //justify-content: space-around;
            margin-top: 5px;
            .ani-btn-item {
                margin-right: 10px;
                padding: 6px 12px;
            //background-color: #007bff;
                border: white 1px solid;
                border-radius: 4px;
                color: black;
                font-size: 0.8rem;
                cursor: pointer;
            }
            .ani-btn-item:hover {
                background-color: #0056b3;
                border-color: #004dab;
            }

        }
    }
    .introduction-container {
        margin-top: 20px;
        padding: 10px 20px 30px 20px;
        //height: 200px;
        background-color: rgb(185, 185, 178);
        border-radius: 6px;
        .introduction-title {
            display: flex;
            align-items: center;
            //padding-left: 10px;
            width: 100%;
            height: 50px;
            font-family: 'Oswald', sans-serif;
            font-size: 1.7rem;
        }
        .title-smaller {
            font-family: 'Oswald', sans-serif;
            font-size: 1.2rem;
        }
        .intro-detail {
            margin-top: 10px;
        }
        .visit-btn{
            margin-top: 20px;
            padding: 6px 12px;
            background-color: #007bff;
            border-radius: 4px;
            color: white;
            font-size: 0.8rem;
            cursor: pointer;
            width: fit-content;
        }
    }
}
.title-name {
    font-family: 'Oswald', sans-serif;
    font-size: 1.7rem;
}
</style>
