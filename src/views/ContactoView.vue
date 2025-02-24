<template>
   <MainLayout>
    <template #main>
      <section id="contacto" class="bg-gradient-to-r from-blue-50 to-gray-50 py-16 px-4 animate-fade-up">
  <div class="container mx-auto max-w-4xl">
    <div class="bg-white rounded-2xl shadow-xl p-8 md:p-12">
      <!-- Título -->
      <div class="text-center mb-8">
        <h2 class="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
          Contáctanos
        </h2>
        <p class="text-gray-600 mt-2">Estamos aquí para ayudarte. Envíanos un mensaje y te responderemos pronto.</p>
      </div>

      <!-- Formulario -->
      <form class="space-y-6">
        <!-- Nombre -->
        <div class="relative">
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <i class="fas fa-user text-gray-400"></i>
          </div>
          <input

          v-model="name"
            type="text"
            id="nombre"
            name="nombre"
            placeholder="Nombre completo"
            class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
            required
          >
        </div>

        <!-- Correo Electrónico -->
        <div class="relative">
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <i class="fas fa-envelope text-gray-400"></i>
          </div>
          <input
            v-model="email"
            type="email"
            id="email"
            name="email"
            placeholder="Correo electrónico"
            class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
            required
          >
        </div>

        <!-- Asunto -->
        <div class="relative">
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <i class="fas fa-tag text-gray-400"></i>
          </div>
          <input
            v-model="subject"
            type="text"
            id="asunto"
            name="asunto"
            placeholder="Asunto"
            class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
            required
          >
        </div>

        <!-- Número de Teléfono (Opcional) -->
        <div class="relative">
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <i class="fas fa-phone text-gray-400"></i>
          </div>
          <input
            v-model="phone"
            type="tel"
            id="telefono"
            name="telefono"
            placeholder="Número de teléfono (opcional)"
            class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
          >
        </div>

        <!-- Mensaje -->
        <div class="relative">
          <div class="absolute inset-y-0 left-0 pl-3 pt-3 flex items-start pointer-events-none">
            <i class="fas fa-comment text-gray-400"></i>
          </div>
          <textarea
            v-model="message"
            id="mensaje"
            name="mensaje"
            rows="4"
            placeholder="Escribe tu mensaje aquí..."
            class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
            required
          ></textarea>
        </div>

        <!-- Botón de Enviar -->
        <div class="text-center">
          <button
            @click.prevent="sendEmail"
            type="submit"
            class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105 shadow-md"
          >
            <i class="fas fa-paper-plane mr-2"></i> Enviar Mensaje
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
