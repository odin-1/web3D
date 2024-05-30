<!-- src/views/HomePage.vue -->
<template>
    <div>
        <div class="wrap" :style="{'background-color':themeBg}">
            <div class="img-container">
                <img class="main-img" src="../assets/images/main_3D.jpg">
                <div class="main-info-container">
                    <span class="info1">Coca Cola Great Britain</span>
                    <span class="info2">Founded in 1886 Dr John S Pemberton</span>
                    <span class="info3">The Coca Cola Company is the world's leading manufacturer, marketer and distributor of non-alcoholic beverage concentrates and syrups, and produces nearly 400 brands.</span>
                </div>
            </div>
            <div class="detail-container">
                <div v-for="(item,index) in detailList" :key="index" class="detail-item">
                    <div class="detail-img-container">
                        <img class="item-img" :src="itemImg(item)">
                    </div>
                    <div class="content-container">
                        <span class="item-title">{{ item.title }}</span>
                        <span class="item-content">{{ item.content }}</span>
                        <span class="item-more">{{ item.moreContent }}</span>
                        <div class="more-btn">Find out more ...</div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import coca from '@/assets/images/coca_cola.jpg'
import sprite from '@/assets/images/sprite.jpg'
import pepper from '@/assets/images/dr_pepper.jpg'
export default {
    name: 'HomePage',
    data() {
        return {
            detailList: [
                {
                    name: 'coca_cola',
                    title: 'Coca Cola',
                    content: 'New York Harbour, 1886',
                    moreContent: 'It was 1886, John Pemberton, an Atlanta pharmacist, was inspired by simple curiosity. One afternoon, he stirred up a fragrant, caramel-coloured liquid and, when it was done, the mixture was combined with carbonated water and sampled by customers who all agreed - this new drink was something special!'
                },
                {
                    name: 'sprite',
                    title: 'Sprite',
                    content: 'West Germany, 1959',
                    moreContent: 'First introduced in 1961, crisp, refreshing, clean-tasting Sprite is now the world\'s leading lemon and lime flavoured soft drink and is sold in more than 190 different countries. Sprite Zero, part of our no sugar Zero range, offers the delicious lemon lime taste of Sprite without the sugar or calories.'
                },
                {
                    name: 'dr_pepper',
                    title: 'Dr Pepper',
                    content: 'Texas, 1885',
                    moreContent: 'Dr Pepper\'s unique, sparkling blend of 23 fruit flavours has been around for well over a century and it\'s still the same, with that distinctive flavour you just can\'t quite put your tongue on. It was created by Texas pharmacist Alderton in 1885. The taste of Dr Pepper has been popular ever since.'
                }
            ],
        }
    },
    computed: {
        theme() {
            return this.$store.state.theme
        },
        itemImg() {
            return (item) => {
                if(item.name === 'coca_cola') {
                    return coca
                } else if(item.name === 'sprite') {
                    return sprite
                } else {
                    return pepper
                }
            }
        },
        themeBg() {
            if( this.theme === 0) {
                return '#c4c4c4'
            } else if(this.theme === 1) {
                return '#d7faf5'
            } else if (this.theme === 2) {
                return '#ff7217'
            }
        }
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
    padding: 20px;
    width: 100%;
    //background-color: antiquewhite;
    .img-container {
        display: flex;
        flex-direction: column;
        position: relative;
        width: 100%;
        .main-info-container {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 50%;
            right: 20px;
            transform: translateY(-50%);
            width: 40%;
            background-color: rgba(255, 255, 255, 0.6);
            padding: 10px;
            border-radius: 5px;
            .info1 {
                font-family: Oswald, sans-serif;
                color: crimson;
                font-size: 30px;
            }
            .info2 {
                font-family: Oswald, sans-serif;
                color: darkcyan;
                font-size: 22px;
            }
            .info3 {

            }
        }
        .main-img {
            width: 100%;
            height: 700px;
            object-fit: cover;
        }

    }
    .detail-container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 40px; /* 每栏之间的间距 */
        margin-top: 15px;
        width: 100%;
        .detail-item {
            min-width: 100px; /* 每栏的最小宽度 */
        //width: 450px;
            padding: 10px 20px;
            min-height: 10px;
            background-color: rgb(185, 185, 178);
            .detail-img-container {
                width: 100%;
                padding: 5px;
                background-color: #fff;
            }
            .item-img {
                width: 100%;
            }
            .content-container {
                display: flex;
                flex-direction: column;
                padding: 20px;
                .item-title {
                    margin-bottom: 10px;
                    font-size: 27px;
                    font-family: Oswald;
                }
                .item-content {
                    margin-bottom: 10px;
                    font-size: 22px;
                    font-family: Oswald;
                    font-weight: 400;
                }
                .item-more {
                    font-size: 15px;
                }
                .more-btn {
                    margin-top: 20px;
                    width: fit-content;
                    color: #fff;
                    background-color: #007bff;
                    border-color: #007bff;
                    border-radius: 4px;
                    padding: 5px 5px;
                    font-size: 80%;
                    line-height: 1.2;
                }
            }

        }
    }

}

</style>
