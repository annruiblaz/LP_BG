<script>
export default {
  name: 'Hero',
  data() {
    return {
      title: 'Calidad de élite sin pagar de más.',
      subtitle: 'Mismo estándar que las grandes marcas, hasta 70% menos.',
      ctaText: 'Consulta sin compromiso'
    }
  }
}
</script>

<template>
  <section id="hero" class="hero">
    <div class="hero-bg"></div>
    
    <div class="hero-container">
      <div class="hero-content">
        <h1 class="hero-title">{{ title }}</h1>
        <p class="hero-subtitle">{{ subtitle }}</p>
        <a href="#contacto" class="hero-button">
          {{ ctaText }}
          <span class="hero-button-icon">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Base styles (mobile-first) */
.hero {
  position: relative;
  height: 80vh;
  display: flex;
  align-items: center;
  padding: var(--spacing-lg) var(--spacing-md);
  margin-top: -1px;
  background-color: var(--color-bg-dark);
}

.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background:
    linear-gradient(var(--color-shadow-dark-80), var(--color-shadow-dark-50)),
    url('@/assets/images/hero-bg.jpg') center/cover no-repeat;
  z-index: 0;
}

.hero-container {
  width: 100%;
  max-width: 1200px;
  height: auto;
  min-height: 350px;
  padding: 15px 30px;
  margin: 0 auto;
  z-index: 1;
}

.hero-content {
  margin: 0 auto;
  animation: fadeIn 0.8s ease-out;
}

.hero-title {
  font-family: var(--font-primary);
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height);
  color: var(--color-text-light);
  text-shadow: 0 2px 4px var(--color-shadow-dark-80);
  text-align: left;
}

.hero-subtitle {
  font-family: var(--font-secondary);
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-normal);
  line-height: var(--line-height);
  color: var(--color-text-light);
  opacity: 0.9;
  margin-bottom: var(--spacing-lg);
  text-shadow: 0 1px 2px var(--color-shadow-dark-80);
  text-align: left;
  max-width: 100%;
}

.hero-button {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-sm);
  background-color: var(--color-primary);
  color: var(--color-text-light);
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--border-radius);
  font-family: var(--font-primary);
  font-weight: var(--font-weight-medium);
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px var(--color-shadow-primary);
}

.hero-button:hover {
  background-color: var(--color-primary-hover);
  transform: translateY(-2px);
  box-shadow: 0 6px 16px var(--color-shadow-primary-hover);
}

.hero-button-icon {
  transition: transform 0.3s ease;
}

.hero-button:hover .hero-button-icon {
  transform: translateX(4px);
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (min-width: 768px) {
  .hero {
    padding: var(--spacing-lg) var(--spacing-md);
  }
  
  .hero-title {
    font-size: var(--font-size-xxl);
  }
  
  .hero-subtitle {
    font-size: var(--font-size-xl);
    max-width: 80%;
  }
  
  .hero-button {
    padding: var(--spacing-md) var(--spacing-lg);
  }
}

</style>