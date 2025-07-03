<script>
export default {
  name: 'Contact',
  data() {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
        message: ''
      },
      submitted: false
    }
  },
  methods: {
    submitForm() {
      // Aquí iría la lógica para enviar el formulario
      console.log('Formulario enviado:', this.form)
      this.submitted = true
      this.form = {
        name: '',
        email: '',
        phone: '',
        message: ''
      }
      
      // Resetear el estado después de 3 segundos
      setTimeout(() => {
        this.submitted = false
      }, 3000)
    }
  }
}
</script>

<template>
  <section id="contact" class="contact">
    <div class="container">
      <h2 class="text-center">Contacto</h2>
      <p class="section-description text-center">
        ¿Tienes preguntas? Contáctanos y te responderemos lo antes posible.
      </p>
      
      <div class="contact-content">
        <form @submit.prevent="submitForm" class="contact-form">
          <div class="form-group">
            <label for="name">Nombre</label>
            <input 
              type="text" 
              id="name" 
              v-model="form.name" 
              required 
              placeholder="Tu nombre completo"
            >
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input 
              type="email" 
              id="email" 
              v-model="form.email" 
              required 
              placeholder="tu@email.com"
            >
          </div>
          <div class="form-group">
            <label for="phone">Teléfono</label>
            <input 
              type="tel" 
              id="phone" 
              v-model="form.phone" 
              placeholder="+1 234 567 890"
            >
          </div>
          <div class="form-group">
            <label for="message">Mensaje</label>
            <textarea 
              id="message" 
              v-model="form.message" 
              required 
              rows="5" 
              placeholder="Tu mensaje..."
            ></textarea>
          </div>
          <button type="submit" class="btn">Enviar Mensaje</button>
          <p v-if="submitted" class="success-message">
            ¡Gracias por contactarnos! Te responderemos pronto.
          </p>
        </form>
        
        <div class="contact-info">
          <h3>Información de Contacto</h3>
          <p><i class="fas fa-map-marker-alt"></i> 123 Calle Gimnasio, Ciudad</p>
          <p><i class="fas fa-phone"></i> +1 234 567 890</p>
          <p><i class="fas fa-envelope"></i> info@gymequip.com</p>
          <p><i class="fas fa-clock"></i> Lunes a Viernes: 9:00 - 18:00</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact {
  background-color: var(--light-color);
}

.section-description {
  max-width: 700px;
  margin: 0 auto 3rem;
  font-size: 1.1rem;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  font-weight: 500;
}

.form-group input,
.form-group textarea {
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-family: inherit;
  font-size: 1rem;
}

.form-group textarea {
  resize: vertical;
}

.success-message {
  color: var(--secondary-color);
  font-weight: 500;
  margin-top: 1rem;
}

.contact-info {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.contact-info h3 {
  margin-bottom: 1.5rem;
  color: var(--primary-color);
}

.contact-info p {
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

.contact-info i {
  color: var(--secondary-color);
  width: 20px;
  text-align: center;
}

@media (max-width: 768px) {
  .contact-content {
    grid-template-columns: 1fr;
  }
}
</style>