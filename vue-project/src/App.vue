<script>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { defineComponent } from "vue";
import Demo from "./components/Demo.vue";
export default defineComponent({
components: {
  Demo,
},
});
</script>

<template>
     
     <nav>
        <RouterLink to="/villa">villa</RouterLink>
        <RouterLink to="/gallery">gallery</RouterLink>
        <RouterLink to="/tree">Tree</RouterLink>
        <RouterLink to="/forms">Form</RouterLink>
    </nav>  
 
         <RouterView ></RouterView>
 
     
</template>

<style scoped>

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 30%;
  font-size: 12px;
  text-align: left;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: right;
    margin-left: -1rem;
    font-size: 1rem;
    z-index: 50; 
    padding: 1rem 0;
    margin-top: 1rem;
    position: relative;

  }
}
</style>
