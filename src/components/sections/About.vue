<script setup>
  import imgAbout from '@/assets/images/material_2.jpg';
  const redirectToContact = () => {
      const el = document.getElementById('contactUs');
      el.scrollIntoView({ behavior: 'smooth' });
  };
</script>

<template>
  <section id="about" class="about-section">
    <div class="container about-container">

      <div class="about-image">
        <img :src="imgAbout" alt="Equipamiento de gimnasio profesional" />
      </div>

      <div class="about-content">
        <h2 class="about-title">¿Quiénes somos?</h2>
        <h3 class="about-subtitle">Somos <span>fabricantes</span><br> Vendemos <span>sin intermediarios.</span></h3>
        <p class="about-description">
          Diseñamos, producimos y distribuimos equipamiento profesional en toda Europa.
          Sin importar el tamaño de tu gimnasio, siempre accedes a <span>precios al por mayor.</span>
        </p>
        <a @click="redirectToContact" class="btn-secondary">
          Solicita nuestro catálogo
          <font-awesome-icon icon="arrow-right" class="btn-secondary-icon" />
        </a>
      </div>

    </div>
  </section>
</template>

<style scoped>
.about-section {
  height: auto;
  max-width: 1200px;
  min-height: 350px;
  margin: 0 auto;
  background-color: var(--color-light);
  padding: var(--spacing-lg) var(--spacing-sm);
}

.about-container {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
  align-items: center;
}

.about-image img {
  width: 100%;
  height: auto;
  max-height: 350px;
  border-radius: var(--border-radius);
  object-fit: cover;
}

.about-content {
  text-align: left;
  max-width: 800px;
}

.about-title {
  font-family: var(--font-primary);
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-primary-dark);
  margin-bottom: 10px;
}

.about-subtitle {
  font-family: var(--font-secondary);
  font-size: var(--font-size-lg);
  font-weight: 400;
  color: var(--color-dark);
  margin-bottom: var(--spacing-sm);

  & span {
    font-weight: var(--font-weight-medium);
    color: var(--color-primary-dark);
  }
}

.about-description {
  margin-bottom: var(--spacing-md);
  font-family: var(--font-secondary);
  font-size: var(--font-size-md);
  color: var(--color-dark);
  line-height: var(--line-height);
}

.btn-secondary {
  font-size: 20px;
}

.btn-secondary-icon {
  margin-left: 4px;
  transition: transform .3s ease;
}

.btn-secondary:hover {
  .btn-secondary-icon {
    transform: translateX(6px);
  }
}

@media (min-width: 768px) {
  .about-section {
    padding: 50px 20px;
  }

  .about-container {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .about-image,
  .about-content {
    flex: 1;
  }

  .about-img img {
    max-height: 500px;
  }

  .about-content {
    padding-left: var(--spacing-md);
  }

  .about-title {
    font-size: var(--font-size-xxl);
  }

  .about-subtitle {
    font-size: var(--font-size-lg);
  }
}
</style>
