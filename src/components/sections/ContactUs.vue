<script setup>
  import imgContact from '@/assets/images/maquinas_1.webp';
  import { ref, reactive } from 'vue';

  const form = reactive({ name: '', email: '', phone: '', message: '' });
  const errors = reactive({});
  const submitted = ref(false);

  const MAX_PHONE_LENGTH = 13;

  const onPhoneInput = (e) => {
    //valida q el user no inserta letras (permite num, espacio + - ())
    e.target.value = e.target.value.replace(/[^\d+\-\s()]/g, '').slice(0, MAX_PHONE_LENGTH);
    form.phone = e.target.value;
  };

  function validate() {
    errors.name = !form.name.trim() ? 'Campo obligatorio' : '';
    //comprueba si el txt del email tiene un formato basico d mail
    errors.email = !form.email.trim() || !/@.+\..+/.test(form.email) ? 'Correo inválido' : '';
    //comprueba si el txt del phone tiene un formato basico d tel (+ no letras)
    errors.phone = !form.phone.trim() || !/^[0-9+\-\s()]{6,13}$/.test(form.phone) ? 'Teléfono inválido' : '';
    errors.message = !form.message.trim() ? 'Campo obligatorio' : '';

    return !errors.name && !errors.email && !errors.phone && !errors.message;
  }

  function submitForm() {
    if (!validate()) return;
    console.log('Formulario enviado:', { ...form });
    submitted.value = true;
    Object.assign(form, { name: '', email: '', phone: '', message: '' });

    setTimeout(() => (submitted.value = false), 4000);
  }
</script>

<template>
  <section class="contact">
    <div class="container" id="contactUs">

      <h2 class="title">Contáctanos</h2>

      <p class="intro-text">
        ¿Tienes dudas sobre nuestros equipos o necesitas una solución a medida?<br>
        Nuestro equipo está listo para asesorarte.
      </p>

      <div class="content">
        <form @submit.prevent="submitForm" class="form" novalidate>
          <div v-if="submitted" class="success fade-in" role="alert" aria-live="polite">
            <font-awesome-icon icon="check-circle" class="icon-success" />
            <p>¡Gracias por contactarnos! Nuestro equipo te responderá lo antes posible para ofrecerte la mejor solución
              a medida.</p>
          </div>

          <div class="form-group">
            <label for="name">Nombre <span class="label-required">*</span></label>
            <input id="name" v-model.trim="form.name" type="text" placeholder="Tu nombre completo"
              :class="{ 'input-error': errors.name }" autocomplete="name" required />
            <span v-if="errors.name" class="error-msg fade-in">{{ errors.name }}</span>
          </div>

          <div class="form-group">
            <label for="email">Correo electrónico <span class="label-required">*</span></label>
            <input id="email" v-model.trim="form.email" type="email" placeholder="correo@ejemplo.com"
              :class="{ 'input-error': errors.email }" autocomplete="email" required />
            <span v-if="errors.email" class="error-msg fade-in">{{ errors.email }}</span>
          </div>

          <div class="form-group">
            <label for="phone">Teléfono <span class="label-required">*</span></label>
            <input id="phone" v-model="form.phone" type="tel" placeholder="+34 600 000 000" @input="onPhoneInput"
              :maxlength="MAX_PHONE_LENGTH" :class="{ 'input-error': errors.phone }" autocomplete="tel" required />
            <span v-if="errors.phone" class="error-msg fade-in">{{ errors.phone }}</span>
          </div>

          <div class="form-group">
            <label for="message">Mensaje <span class="label-required">*</span></label>
            <textarea id="message" v-model.trim="form.message" rows="4" placeholder="Escribe tu consulta aquí..."
              :class="{ 'input-error': errors.message }" required></textarea>
            <span v-if="errors.message" class="error-msg fade-in">{{ errors.message }}</span>
          </div>

          <button type="submit" class="btn btn-primary" aria-label="Enviar formulario de contacto">Enviar</button>
        </form>

        <aside class="contact-details">
          <img :src="imgContact" class="contact-img" aria-label="Imagen de maquinas"></img>
          <h3 class="contact-details-title">Tu gimnasio merece lo mejor</h3>
          <p class="contact-details-subtitle">Calidad europea y precios al por mayor sin intermediarios. Equipamiento
            profesional que se adapta a tu gimnasio y tu estilo.
            ¡Solicita tu catálogo ya!
          </p>
          <div class="contact-details-content">
            <p>
              <font-awesome-icon icon="phone" class="contact-details-icon" /> +34 600 000 000</p>
            <p>
              <font-awesome-icon icon="envelope" class="contact-details-icon" /> info@bermeosglobal.com</p>
            <p>
              <font-awesome-icon icon="clock" class="contact-details-icon" /> Lunes a Viernes: 9:00 - 18:00</p>
          </div>
        </aside>

      </div>
    </div>
  </section>
</template>

<style scoped>
.contact {
  background: var(--color-light);
  padding: var(--spacing-lg) var(--spacing-sm);
  font-family: var(--font-secondary);
}

.title {
  margin-bottom: 10px;
  font-family: var(--font-primary);
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-xl);
  color: var(--color-primary-dark);
  text-align: center;
}

.intro-text {
  text-align: center;
  font-size: var(--font-size-md);
  margin-bottom: var(--spacing-lg);
  color: var(--color-dark);
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.content {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

.form {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  flex: 1;
  justify-content: space-evenly;
}

.form-group {
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 10px;
  display: inline-block;
  font-weight: var(--font-weight-normal);
  color: var(--color-dark);

}

.label-required {
  color: var(--color-primary);
  font-weight: var(--font-weight-bold);
}

input,
textarea {
  padding: 10px 15px 10px 10px;
  border: 1px solid var(--color-gray);
  border-radius: 4px;
  font-family: inherit;
  font-size: var(--font-size-mdss);

  &:focus {
    outline: 1px solid var(--color-primary);
    box-shadow: 0 0 4px var(--color-shadow-primary);
  }
}

span.error-msg {
  margin-left: 10px;
  color: var(--color-error);
  font-size: var(--font-size-sm);
}

.success {
  background: #d4edda;
  border: 1px solid #c3e6cb;
  color: var(--color-success);
  padding: var(--spacing-md);
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
}

.contact-details {
  flex: 1;
  background: white;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  color: var(--color-dark);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.contact-details-title {
  color: var(--color-primary-dark);
  font-family: var(--font-primary);
  font-size: var(--font-size-lg);
  margin-bottom: var(--spacing-md);
}

.contact-details-subtitle {
  display: flex;
  padding-bottom: var(--spacing-sm);
  gap: var(--spacing-md);
  align-items: center;
}

.contact-details-content {
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
  font-size: var(--font-size-md);

  p {
    display: flex;
    align-items: center;
    gap: var(--spacing-md);
    margin: 0;
  }
}

.contact-details-icon {
  display: inline-block;
  color: var(--color-primary);
}

.contact-img {
  width: 100%;
  min-height: 280px;
  max-height: 350px;
  border-radius: var(--border-radius);
  background-color: var(--color-gray);
  margin-bottom: var(--spacing-sm);
  object-fit: cover;
}

.btn-primary {
  width: 100%;
  text-align: center;
  justify-content: center;
  font-size: var(--font-size-md);
}

.fade-in {
  opacity: 0;
  animation: fadeInMove .3s ease forwards;
}

@keyframes fadeInMove {
  to {
    opacity: 1;
  }
}

@media (min-width: 768px) {
  .contact {
    padding: 50px 20px;
  }

  .content {
    flex-direction: row-reverse;
    align-items: stretch;
  }

  .title {
    font-size: var(--font-size-xxl);
  }

  span.error-msg {
    margin-top: 5px;
  }

  .form-group {
    margin-bottom: var(--spacing-sm);
  }
}
</style>
