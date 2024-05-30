<!-- Navbar.vue -->

<template>
    <div class="bottom-container" :style="{'background-color': bottomBg}">
        <div class="bottom-left-info">
            <span class="year-info">© 2018 3D Apps | </span>
            <div class="restyle-btn" @click="handleChangeTheme">Restyle </div>
            <span class="line"> | </span>
            <div class="restyle-btn">Reset</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Navbar',
    data() {
        return {
            themeCount: 1,
        }
    },
    computed:{
        bottomBg() {
            if(this.theme === 0) {
                return 'dimgrey'
            } else if (this.theme === 1) {
                return 'orange'
            } else if(this.theme === 2) {
                return 'orange'
            }
        },
        theme() {
            return this.$store.state.theme
        },
    },
    methods:{
        handleChangeTheme() {
            this.themeCount ++
            // 更改主题
            this.$store.commit('setTheme',this.themeCount%3)
        }
    }
};
</script>

<style lang="scss" scoped>
@font-face {
    font-family: cocaColaFont;
    src: url(/src/assets/fonts/Loki-Cola.TTF);
}
@font-face {
    font-family: Oswald;
    src: url(/src/assets/fonts/Oswald-Medium.ttf);
}
.bottom-container {
    width: 100%;
    padding: 20px 30px;
    .bottom-left-info {
        display: flex;
        align-content: center;
        .year-info {
            color: rgb(12, 5, 3);
            font-size: 23px;
        }
        .restyle-btn {
            margin-left: 10px;
            color: #007bff;
            font-size: 23px;
        }
        .line {
            margin-left: 10px;
            color: rgb(12, 5, 3);
            font-size: 23px;
        }
    }
}
</style>
