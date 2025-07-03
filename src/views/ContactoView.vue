<template>
   <MainLayout>
    <template #main>
      <section id="contacto" class="px-4 py-16 bg-gradient-to-r from-blue-50 to-gray-50 animate-fade-up">
     <div class="container mx-auto max-w-4xl">
    <div class="p-8 bg-white rounded-2xl shadow-xl md:p-12">
      <!-- Título -->
      <div class="mb-8 text-center">
        <h2 class="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 md:text-4xl">
          Contáctanos
        </h2>
        <p class="mt-2 text-gray-600">Estamos aquí para ayudarte. Envíanos un mensaje y te responderemos pronto.</p>
      </div>

      <!-- Formulario -->
      <form class="space-y-6">
        <!-- Nombre -->
        <div class="relative">
          <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <i class="text-gray-400 fas fa-user"></i>
          </div>
          <input

          v-model="name"
            type="text"
            id="nombre"
            name="nombre"
            placeholder="Nombre completo"
            class="py-3 pr-4 pl-10 w-full rounded-lg border border-gray-300 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          >
        </div>

        <!-- Correo Electrónico -->
        <div class="relative">
          <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <i class="text-gray-400 fas fa-envelope"></i>
          </div>
          <input
            v-model="email"
            type="email"
            id="email"
            name="email"
            placeholder="Correo electrónico"
            class="py-3 pr-4 pl-10 w-full rounded-lg border border-gray-300 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          >
        </div>

        <!-- Asunto -->
        <div class="relative">
          <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <i class="text-gray-400 fas fa-tag"></i>
          </div>
          <input
            v-model="subject"
            type="text"
            id="asunto"
            name="asunto"
            placeholder="Asunto"
            class="py-3 pr-4 pl-10 w-full rounded-lg border border-gray-300 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          >
        </div>

        <!-- Número de Teléfono (Opcional) -->
        <div class="relative">
          <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <i class="text-gray-400 fas fa-phone"></i>
          </div>
          <input
            v-model="phone"
            type="tel"
            id="telefono"
            name="telefono"
            placeholder="Número de teléfono (opcional)"
            class="py-3 pr-4 pl-10 w-full rounded-lg border border-gray-300 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
        </div>

        <!-- Mensaje -->
        <div class="relative">
          <div class="flex absolute inset-y-0 left-0 items-start pt-3 pl-3 pointer-events-none">
            <i class="text-gray-400 fas fa-comment"></i>
          </div>
          <textarea
            v-model="message"
            id="mensaje"
            name="mensaje"
            rows="4"
            placeholder="Escribe tu mensaje aquí..."
            class="py-3 pr-4 pl-10 w-full rounded-lg border border-gray-300 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          ></textarea>
        </div>

        <!-- Botón de Enviar -->
        <div class="text-center">
          <button
            @click.prevent="sendEmail"
            type="submit"
            class="px-8 py-3 font-semibold text-white bg-blue-500 rounded-full shadow-md transition-all duration-300 hover:bg-blue-600 hover:scale-105"
          >
            <i class="mr-2 fas fa-paper-plane"></i> Enviar Mensaje
          </button>
        </div>
      </form>
    </div>
  </div>
</section>

    </template>
   </MainLayout>
</template>

<script lang="ts" setup>
import MainLayout from '@/layouts/MainLayout.vue';
import { ref } from 'vue';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css'; // for React, Vue and Svelte
import emailjs from '@emailjs/browser';
// Create an instance of Notyf
const notyf = new Notyf({
  duration: 6000,
  position: {
    x: 'left',
    y: 'top',
  }
});

const validateForm = () => {
  if (subject.value === '' || name.value === '' || email.value === '' || message.value === '') {
    notyf.error('Por favor, completa todos los campos');
    return false;
  }
  return true;
}

emailjs.init({
  publicKey: 'fXlbInB-wrOGPiUbH',
  // Do not allow headless browsers
  blockHeadless: true,
  blockList: {
    // Block the suspended emails
    list: ['foo@emailjs.com', 'bar@emailjs.com'],
    // The variable contains the email address
    watchVariable: 'userEmail',
  },
  limitRate: {
    // Set the limit rate for the application
    id: 'app',
    // Allow 1 request per 10s
    throttle: 10000,
  },
});


const subject = ref('');
const name = ref('');
const email = ref('');
const phone = ref('');
const message = ref('');
const sendEmail = async() => {
if (!validateForm()) return;
const response = await emailjs.send('service_3nl9wkf.','template_2q2mc52', {
    subject: subject.value,
    name: name.value,
    email: email.value,
    phone: phone.value,
    message: message.value,
    url:'www.hilerajoyeria.com',
  });
  if (response.status === 200) {
    notyf.success('Hemos revibido su correo, pronto nos pondremos en contacto!');
    subject.value = '';
    name.value = '';
    email.value = '';
    phone.value = '';
    message.value = '';
  } else {
    notyf.error('Error al enviar el correo, por favor intentelo mas tarde');
  }
}

</script>

<style scoped>

</style>
