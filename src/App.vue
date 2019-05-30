<template>
  <div id="app">    
    <div :class="$style.container">
    <router-view></router-view>    
    </div>
    <sidebar/>
    <sidebar-toggle/>
  </div>
</template>

<script>
import Sidebar from './components/layout/sidebar/Sidebar'
import SidebarToggle from './components/layout/sidebar/SidebarToggle'

export default {
  name: 'app',
  components: {
    Sidebar,
    SidebarToggle
  }
}
</script>

<style>
    :root{
    --accent-color: #66FCF1;
    --primary-color: #1F2833;
    --dark-color: #C5C6C7;
  }

  * {
        margin: 0;
        padding: 0;
        border: 0;
        outline: 0;
        font-size: 100%;
        vertical-align: baseline;
        background: transparent;
    }
</style>

<style module>
  .container{
    position: fix;
    margin: 0;
    left: 0;
    top: 0;
    height: 100vh;
    width: 100vw;
    background-color: var(--primary-color);
  }
</style>
