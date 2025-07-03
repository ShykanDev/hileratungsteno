<template>
   <MainLayout>
    <template #main>
      <section class="py-8 bg-gray-100 animate-fade-up">
  <div class="container px-4 mx-auto text-center">
    <h2 class="mb-4 text-3xl font-bold">Realice su compra de forma segura</h2>
  </div>
</section>

<section class="container px-4 mx-auto my-8">
  <div class="flex flex-col justify-between items-center p-6 bg-white rounded-lg shadow-lg md:flex-row">
    <div class="flex justify-center md:w-1/2">
      <img src="../assets/img/mercadolibre.png" alt="Mercado Libre" class="w-48">
    </div>
    <div class="mt-6 text-center md:w-1/2 md:mt-0 md:text-left">
      <p class="text-lg text-gray-700"><span class="font-bold">Somos Mercado Líder</span> con excelente reputación</p>
    </div>
  </div>
</section>

<div class="my-8 border-t border-gray-200"></div>

<section class="container px-4 mx-auto my-8">
  <h2 class="mb-6 text-3xl font-bold text-center">Formas de pago</h2>
  <div class="flex flex-col justify-between items-center md:flex-row">
    <div class="flex justify-center mb-4 md:w-1/3 md:mb-0">
      <img src="../assets/img/transferencia.png" alt="Transferencia" class="w-32">
    </div>
    <div class="flex justify-center mb-4 md:w-1/3 md:mb-0">
      <img src="../assets/img/paypal.png" alt="PayPal" class="w-32">
    </div>
    <div class="flex justify-center md:w-1/3">
      <img src="../assets/img/mercado-pago.png" alt="Mercado Pago" class="w-32">
    </div>
  </div>
</section>

<div class="my-8 border-t border-gray-200"></div>

<section class="container px-4 mx-auto my-8">
  <div class="flex flex-col justify-between items-center md:flex-row">
    <div class="p-6 mb-4 text-center bg-white rounded-lg shadow-lg md:w-1/3 md:mb-0">
      <h2 class="mb-4 text-2xl font-bold">1</h2>
      <p class="mb-4 text-gray-700">Puede realizar su compra vía llamada telefónica, en la misma puede despejar dudas y se le informará de precios y formas de envío.</p>
      <a href="tel:+525563950179" class="px-6 py-3 font-bold text-white bg-blue-500 rounded-full transition duration-300 ease-in-out transform hover:bg-blue-700 hover:scale-105">Llamar al +525563950179</a>
    </div>
    <div class="p-6 mb-4 text-center bg-white rounded-lg shadow-lg md:w-1/3 md:mb-0">
      <h2 class="mb-4 text-2xl font-bold">2</h2>
      <p class="mb-4 text-gray-700">Si deseas mensajería, puedes escribirnos a nuestro WhatsApp y pedir informes o realizar la compra, se brindará toda la información requerida.</p>
      <a href="https://api.whatsapp.com/send?phone=525562516687&text=¡Hola!%20Vengo%20de%20la%20página%20HileraTungsteno.com,%20me%20gustaría%20saber%20más%20información%20de%20la%20compra" target="_blank" rel="noopener noreferrer" class="px-6 py-3 font-bold text-white bg-green-500 rounded-full transition duration-300 ease-in-out transform hover:bg-green-700 hover:scale-105"><i class="mr-2 fab fa-whatsapp"></i> WhatsApp</a>
    </div>
    <div class="p-6 text-center bg-white rounded-lg shadow-lg md:w-1/3">
      <h2 class="mb-4 text-2xl font-bold">3</h2>
      <p class="mb-4 text-gray-700">Llena el formulario y nosotros nos contactaremos dependiendo el medio que hayas seleccionado, brindando información y haciendo procesos de compra.</p>
      <RouterLink to="/contacto" class="px-6 py-3 font-bold text-white bg-blue-500 rounded-full transition duration-300 ease-in-out transform hover:bg-blue-700 hover:scale-105">Llenar Formulario</RouterLink>
    </div>
  </div>
</section>

<div class="my-8 border-t border-gray-200"></div>

<!-- Sección Formas de Pago -->

<section id="contacto" class="px-4 py-16 bg-gradient-to-r from-blue-50 to-gray-50 animate-fade-up">
     <div class="container mx-auto max-w-4xl">
    <div class="p-8 bg-white rounded-2xl shadow-xl md:p-12">
      <!-- Título -->
      <div class="mb-8 text-center">
        <h2 class="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 md:text-4xl">
          Formulario de Contacto
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
