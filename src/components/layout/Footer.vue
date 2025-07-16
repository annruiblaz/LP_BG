<script>
export default {
  name: 'Footer',
  data() {
    return {
      navItems: [
        { name: 'Inicio', id: 'hero' },
        { name: 'Socios', id: 'partners' },
        { name: 'Quiénes somos', id: 'about' },
        { name: 'Contacto', id: 'contactUs' },
      ],
    };
  },
  methods: {
    scrollToSection(id) {
        const el = document.getElementById(id);
        if (!el) return;
        const yOffset = -180;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({ top: y, behavior: 'smooth' });
        this.isMobileMenuOpen = false;
    },
  },
};
</script>

<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-column identity">
        <h2 class="company-name">Bermeos Global</h2>
        <p class="footer-description">
          Fabricamos maquinaria industrial de alto rendimiento que cumple con los estándares europeos más exigentes
        </p>
      </div>

      <div class="footer-column">
        <h4 class="footer-title">Enlaces</h4>
        <nav class="footer-links">
          <a v-for="(item, index) in navItems" :key="index" class="footer-link" @click="scrollToSection(item.id)">
            {{ item.name }}
          </a>
        </nav>
      </div>

      <div class="footer-column">
        <h4 class="footer-title">Legal</h4>
        <nav class="footer-links">
          <a href="#" class="footer-link">Política de privacidad</a>
          <a href="#" class="footer-link">Términos y condiciones</a>
        </nav>
      </div>
    </div>

    <div class="footer-bottom">
      <p>© {{ new Date().getFullYear() }} Bermeos Global. Todos los derechos reservados.</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: var(--color-bg-light);
  color: var(--color-text-dark);
  font-family: var(--font-primary);
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 40px;
}

.footer-column {
  flex: 1 1 220px;
  min-width: 200px;
}

.footer-column.identity {
  cursor: pointer;
}

.company-name {
  font-size: var(--font-size-xl);
  color: var(--color-primary);
  font-weight: var(--font-weight-bold);
  margin-bottom: 12px;
}

.footer-description {
  font-size: var(--font-size-sm);
  color: var(--color-dark);
  line-height: 1.5;
}

.footer-title {
  font-size: var(--font-size-lg);
  color: var(--color-primary-dark);
  margin-bottom: 10px;
  font-weight: var(--font-weight-bold);
}

.footer-links {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.footer-link {
  font-size: var(--font-size-base);
  color: var(--color-dark);
  text-decoration: none;
  transition: color .3s ease;
  cursor: pointer;
}

.footer-link:hover {
  color: var(--color-primary);
}

.footer-bottom {
  background-color: var(--color-primary-dark);
  color: white;
  text-align: center;
  padding: 16px 10px;
  font-size: var(--font-size-sm);
}

@media (min-width: 768px) {
  .footer-column.logo {
    margin: 0 auto;
    display: flex;
    align-items: center;
    gap: 20px;
  }
}
</style>