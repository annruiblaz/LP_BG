<script>
export default {
  name: 'Navbar',
  data() {
    return {
      isMobileMenuOpen: false,
      isScrolled: false,
      navItems: [
        { name: 'Inicio', id: 'hero' },
        { name: 'Contacto', id: 'contactUs' },
      ],
    };
  },
  methods: {
    scrollToSection(id) {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        this.isMobileMenuOpen = false;
      }
    },
    //para ajustar el fondo / estilo del navbar al hacer scroll
    handleScroll() {
      this.isScrolled = window.scrollY > 20;
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  }
};
</script>

<template>
  <header 
    class="navbar" 
    :class="{ 'scrolled': isScrolled }"
  >
    <div class="navbar-inner">
      <div class="navbar-logo" @click="scrollToSection('hero')">
        <img src="@/assets/images/bermeos_logo.png" alt="Logo Bermeos Global" />
      </div>

      <nav class="navbar-links">
        <a
          v-for="(item, index) in navItems"
          :key="index"
          role="button"
          class="navbar-link"
          @click="scrollToSection(item.id)"
        >
          {{ item.name }}
        </a>
      </nav>

      <button 
        class="navbar-toggle" 
        @click="isMobileMenuOpen = !isMobileMenuOpen" 
        aria-label="Toggle menu"
        :aria-expanded="isMobileMenuOpen"
      >
        <span class="navbar-toggle-icon" :class="{ 'open': isMobileMenuOpen }">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </span>
      </button>
    </div>

    <transition name="mobile-menu">
      <nav
        v-if="isMobileMenuOpen"
        class="navbar-mobile-menu"
        :class="{ 'open': isMobileMenuOpen }"
        @click.self="isMobileMenuOpen = false"
      >
        <div class="mobile-menu-content">
          <a
            v-for="(item, index) in navItems"
            :key="'mobile-' + index"
            href="#"
            class="navbar-mobile-link"
            @click.prevent="scrollToSection(item.id)"
          >
            {{ item.name }}
          </a>
        </div>
      </nav>
    </transition>
  </header>
</template>

<style scoped>
.navbar {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: var(--color-bg-light);
  box-shadow: 0 2px 10px var(--color-shadow-20);
  z-index: 10;
  padding: 0;
  font-family: var(--font-primary);
  transition: all 0.3s ease;

  &.scrolled {
    background-color: var(--color-shadow-90);
    backdrop-filter: blur(10px);
    box-shadow: 0 2px 15px var(--color-shadow-dark-20);
  }
}

.navbar-inner {
  width: 100%;
  max-width: 1200px;
  padding: 15px 30px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar-logo {
  cursor: pointer;
  z-index: 10;

  & img {
    height: 50px;
    width: auto;
    transition: transform .5s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
}

.navbar-links {
  display: none;
  gap: var(--spacing-lg);
}

.navbar-link {
  position: relative;
  font-family: var(--font-secondary);
  color: var(--color-text-dark);
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: var(--font-weight-medium);
  padding: var(--spacing-sm) 0;
  transition: color 0.3s ease;

  &::after {
    content: '';
    position: absolute;
    bottom: 14px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--color-primary);
    transition: width .3s ease-in;
  }

  &:hover {
    color: var(--color-primary);

    &::after {
      width: 100%;
    }
  }
}

.navbar-toggle {
  background: none;
  border: none;
  padding: var(--spacing-sm);
  cursor: pointer;
  z-index: 10;
  outline: none;
}

.navbar-toggle-icon {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 24px;
  height: 18px;
  position: relative;
  transition: all 0.3s ease;
}

.bar {
  display: block;
  width: 100%;
  height: 2px;
  background-color: var(--color-primary-dark);
  transition: all 0.3s ease;
  transform-origin: center;
}

.navbar-toggle-icon.open .bar:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}

.navbar-toggle-icon.open .bar:nth-child(2) {
  opacity: 0;
}

.navbar-toggle-icon.open .bar:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}

.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all .8s ease-in-out;

  .mobile-menu-content {
      opacity: 0;
  }
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  transform: translateY(-750px);
}

.navbar-mobile-menu {
  z-index: 5;
  padding-top: 90px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--color-bg-light);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.mobile-menu-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-lg);
  width: 100%;
  max-width: 300px;
  opacity: 1;
  transition: opacity .2s ease-in-out;
}

.navbar-mobile-link {
  color: var(--color-text-dark);
  font-size: 1.25rem;
  font-weight: var(--font-weight-medium);
  text-decoration: none;
  font-family: var(--font-secondary);
  padding: var(--spacing-sm) var(--spacing-md);
  transition: all 0.3s ease;
  width: 100%;
  text-align: center;
  border-radius: var(--border-radius);
  
  &:hover {
    color: var(--color-primary);
    background-color: var(--color-primary-20);
  }
}

@media (min-width: 768px) {
  .navbar-toggle {
    display: none;
  }

  .navbar-links {
    display: flex;
  }

  .navbar-logo img {
    height: 75px;
  }
}

</style>