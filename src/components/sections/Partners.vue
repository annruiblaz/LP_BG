<script>
import logoEnemeht from '@/assets/images/logo_enemeht.webp';
import logoWba from '@/assets/images/logo_wba.webp';
import logoPowergears from '@/assets/images/logo_powergears.webp';

export default {
  name: 'TrustedPartners',
  data() {
    return {
      partners: [{
        name: 'Enemeht Fitness Logo',
        logo: logoEnemeht,
        url: 'https://enemeht-fitness.com/'
      },{
        name: 'WBA Logo',
        logo: logoWba,
        url: 'https://enemeht-fitness.com/collections/wba-fitness'
      },
      {
        name: 'PowerGears Logo',
        logo: logoPowergears,
        url: 'https://ironstrong.com'
      }]
    };
    },
  methods: {
    redirectToContact() {
      const el = document.getElementById('contactUs');
      const yOffset = -285;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

      el.scrollIntoView({top: y, behavior: 'smooth'});
    }
  }
};
</script>

<template>
    <section class="partners-section" id="partners">
        <div class="content">
            <h2 class="title">Trabajamos con las mejores marcas</h2>
            <p class="subtitle">
              Trabajamos con referentes del sector fitness a nivel europeo.
              Confianza, experiencia y excelencia, compartida con nuestros aliados.
            </p>

            <div class="logos-container">
                <a v-for="(partner, index) in partners" :key="index" :href="partner.url" target="_blank"
                    rel="noopener noreferrer" class="logo-link">
                    <img :src="partner.logo" :alt="partner.name" class="partner-logo" loading="lazy">
                </a>
            </div>

            <button @click="redirectToContact" class="btn-primary">
                ¿Quieres ser nuestro partner?
            </button>
        </div>
    </section>
</template>

<style scoped>
.partners-section {
  padding: var(--spacing-lg) var(--spacing-sm);
  text-align: center;
  background-color: var(--color-light);
}

.content {
  max-width: 1200px;
  margin: 0 auto;
}

.title {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-primary-dark);
  margin-bottom: var(--spacing-md);
}

.subtitle {
  font-size: var(--font-size-md);
  color: var(--color-dark);
  margin-bottom: var(--spacing-lg);
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.logos-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--spacing-lg);
  margin: var(--spacing-lg) 0;
}

.logo-link {
  display: inline-block;
  transition: transform .3s ease;
}

.logo-link:hover {
  transform: scale(1.05);
}

.partner-logo {
  height: 60px;
  width: auto;
  max-width: 150px;
  object-fit: contain;
  filter: grayscale(100%);
  opacity: .8;
  transition: all .3s ease;
}

.logo-link:hover .partner-logo {
  filter: grayscale(0%);
  opacity: 1;
}

.btn {
    font-size: var(--font-size-md);
}

@media (min-width: 768px) {
  .partners-section {
    padding: 50px 20px;
  }
  
  .title {
    font-size: var(--font-size-xxl);
  }

  .partner-logo {
    height: 80px;
  }
}
</style>