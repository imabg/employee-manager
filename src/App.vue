<template>
  <div id="app">
    <navbar />
    <div class="container">
    <router-view></router-view>
    </div>
  </div>
</template>

<script>
import navbar from './components/navbar.vue'
export default {
  name: 'app',
  components: {
    navbar
  }
}
</script>

