<!-- Navbar.vue -->

<template>
    <div class="navbar" :style="{'background-color': navBarBg}">
        <div class="left-info">
            <div class="text-container">
                <span class="coca-text-1">1oca</span>
                <span class="coca-text-2">Cola</span>
                <span class="journey-text">Journey</span>
            </div>
            <span class="refresh-text">Refreshing the world, one story at a time</span>
        </div>
        <div class="right-info">
            <div class="nav-item">
                <router-link to="/" class="nav-text" :class="{ active: $route.name === 'HomePage' }">Home</router-link>
            </div>
            <div class="nav-item">
                <router-link to="/about" class="nav-text" :class="{ active: $route.name === 'AboutPage' }">About</router-link>
            </div>
            <div class="nav-item">
                <router-link to="/model" class="nav-text" :class="{ active: $route.name === 'ModelPage' }">Model</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import store from '/src/store/index.js'
export default {
    name: 'Navbar',
    data() {
        return {
        }
    },
    computed:{
        theme() {
            return this.$store.state.theme
        },
        navBarBg() {
            if( this.theme === 0) {
                return 'chocolate'
            } else if(this.theme === 1) {
                return 'red'
            } else if (this.theme === 2) {
                return 'darkcyan'
            }
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

.navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    padding: 10px;
    z-index: 999;
}
.nav-item {
    padding: 0 0.5rem;
    font-size: 1rem;
    text-decoration: none;
}
.nav-text {
    padding: 0.5rem 0.5rem;
    text-decoration: none;
    color: #fff;
}
.left-info {
    display: flex;
    flex-direction: column;
    margin-top: 15px;
    margin-bottom: 15px;
    margin-left: 10px;
}
.text-container {
    position: relative;
    height: 60px;
}
.text-left {
    margin-bottom: 30px;
}
.coca-text-1 {
    position: absolute;
    left: 0;
    bottom: -8px;
    font-family: cocaColaFont, sans-serif;
    font-size: 65px;
    color: #fff;
}
.coca-text-2 {
    position: absolute;
    left: 80px;
    bottom: -20px;
    font-family: cocaColaFont, sans-serif;
    font-size: 65px;
    color: #fff;
}
.journey-text {
    position: absolute;
    left: 181px;
    bottom: -4px;
    margin-left: 4px;
    font-family: Oswald, sans-serif;
    font-size: 40px;
    color: #fff;
}
.refresh-text {
    margin-top: 5px;
    margin-left: 15px;
    font-size: 14px;
    color: #fff;
}
.right-info {
    display: flex;
}
.active {
    background-color: rgb(239, 252, 255);
    color: #000;
}
</style>
