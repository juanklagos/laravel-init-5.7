<template>
    <div>
        <div v-if="$auth.ready()">
            <Header></Header>
            <div class="container top-container">
                <router-view></router-view>
            </div>
        </div>
        <div v-if="!$auth.ready()">
            <div class="spinner">
                <div class="dot1"></div>
                <div class="dot2"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from "../sections/Header";
    export default {
        name: "App",
        components: {Header},
        created() {
            var _this = this;
            this.$auth.ready(function () {
                //    console.log(this); // Will be proper context.
            });
            //  console.log(this.$auth.user());
        }
    }
</script>

<style scoped>
    .top-container{
        margin-top: 20px;
    }
</style>