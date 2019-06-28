<template>
  <div id="app">
    <nav class="navbar navbar-default">
      <div class="container-fluid">
         <div class="navbar-header">
         <a class="navbar-brand" href="#">STORE APP</a>
         <ul class="nav navbar-nav">
           <li><router-link class="nav navbar-nav" to="/customers">CUSTOMERS</router-link></li>
           <li><router-link class="nav navbar-nav" to="/products">PRODUCTS</router-link></li>
         </ul>
         </div>
      </div>  
    </nav>
      <router-view />
  </div>
</template>

<script>
 import StoreApp from './components/StoreApp.vue'

export default {
  name: 'app',
  components: {
    StoreApp
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
