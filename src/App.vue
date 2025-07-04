<script setup>
import Navbar from './components/layout/Navbar.vue';
import Footer from './components/layout/Footer.vue';
import HeroBanner from './components/sections/HeroBanner.vue';
import Highlights from './components/sections/Highlights.vue';
import About from './components/sections/About.vue';
import ContactUs from './components/sections/ContactUs.vue';
import Partners from './components/sections/Partners.vue';
</script>

<template>
  <div>
    <Navbar />
    <main>
      <HeroBanner />
      <Highlights />
      <Partners />
      <About />
      <ContactUs />
    </main>
  </div>
  <Footer />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
