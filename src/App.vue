

<template>
  <div>
    <h3>Vue Router 入門</h3>
    <router-link to="/">home</router-link>
    <router-link to="/about">about</router-link>
    <router-link to="">about</router-link>
    <router-view></router-view>
  </div>
</template>



<script>


export default {
    data(){return {
            title: "Header",
            text: "Hello Vue.js!"
        }}
        }

</script>
