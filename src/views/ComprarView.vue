<template>
   <MainLayout>
    <template #main>
      <section class="bg-gray-100 py-8 animate-fade-up">
  <div class="container mx-auto text-center px-4">
    <h2 class="text-3xl font-bold mb-4">Realice su compra de forma segura</h2>
  </div>
</section>

<section class="container mx-auto my-8 px-4">
  <div class="flex flex-col md:flex-row items-center justify-between bg-white p-6 rounded-lg shadow-lg">
    <div class="md:w-1/2 flex justify-center">
      <img src="../assets/img/mercadolibre.png" alt="Mercado Libre" class="w-48">
    </div>
    <div class="md:w-1/2 mt-6 md:mt-0 text-center md:text-left">
      <p class="text-gray-700 text-lg"><span class="font-bold">Somos Mercado Líder</span> con excelente reputación</p>
    </div>
  </div>
</section>

<div class="my-8 border-t border-gray-200"></div>

<section class="container mx-auto my-8 px-4">
  <h2 class="text-3xl font-bold text-center mb-6">Formas de pago</h2>
  <div class="flex flex-col md:flex-row items-center justify-between">
    <div class="md:w-1/3 flex justify-center mb-4 md:mb-0">
      <img src="../assets/img/transferencia.png" alt="Transferencia" class="w-32">
    </div>
    <div class="md:w-1/3 flex justify-center mb-4 md:mb-0">
      <img src="../assets/img/paypal.png" alt="PayPal" class="w-32">
    </div>
    <div class="md:w-1/3 flex justify-center">
      <img src="../assets/img/mercado-pago.png" alt="Mercado Pago" class="w-32">
    </div>
  </div>
</section>

<div class="my-8 border-t border-gray-200"></div>

<section class="container mx-auto my-8 px-4">
  <div class="flex flex-col md:flex-row items-center justify-between">
    <div class="md:w-1/3 bg-white p-6 rounded-lg shadow-lg text-center mb-4 md:mb-0">
      <h2 class="text-2xl font-bold mb-4">1</h2>
      <p class="text-gray-700 mb-4">Puede realizar su compra vía llamada telefónica, en la misma puede despejar dudas y se le informará de precios y formas de envío.</p>
      <a href="tel:+525562516687" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105">Llamar al +52 5562516687</a>
    </div>
    <div class="md:w-1/3 bg-white p-6 rounded-lg shadow-lg text-center mb-4 md:mb-0">
      <h2 class="text-2xl font-bold mb-4">2</h2>
      <p class="text-gray-700 mb-4">Si deseas mensajería, puedes escribirnos a nuestro WhatsApp y pedir informes o realizar la compra, se brindará toda la información requerida.</p>
      <a href="https://api.whatsapp.com/send?phone=525562516687&text=Hola!%20Quiero%20información%20del%20producto!" target="_blank" rel="noopener noreferrer" class="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105"><i class="fab fa-whatsapp mr-2"></i> Escríbenos por WhatsApp</a>
    </div>
    <div class="md:w-1/3 bg-white p-6 rounded-lg shadow-lg text-center">
      <h2 class="text-2xl font-bold mb-4">3</h2>
      <p class="text-gray-700 mb-4">Llena el formulario y nosotros nos contactaremos dependiendo el medio que hayas seleccionado, brindando información y haciendo procesos de compra.</p>
      <RouterLink to="/contacto" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105">Llenar Formulario</RouterLink>
    </div>
  </div>
</section>

<div class="my-8 border-t border-gray-200"></div>

<section class="bg-gradient-to-r from-blue-50 to-gray-50 py-12">
  <div class="container mx-auto text-center px-4">
    <h2 class="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
      Realice su compra de forma segura
    </h2>
    <p class="text-gray-600 text-lg max-w-2xl mx-auto">
      Ofrecemos múltiples opciones de pago y métodos de contacto para brindarte la mejor experiencia de compra.
    </p>
  </div>
</section>

<!-- Sección Mercado Libre -->
<section class="container mx-auto my-12 px-4">
  <div class="flex flex-col md:flex-row items-center justify-between bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
    <div class="md:w-1/2 flex justify-center">
      <img src="../assets/img/mercadolibre.png" alt="Mercado Libre" class="w-48 hover:scale-105 transition-transform duration-300">
    </div>
    <div class="md:w-1/2 mt-6 md:mt-0 text-center md:text-left">
      <p class="text-gray-700 text-xl">
        <span class="font-bold text-blue-600">Somos Mercado Líder</span> con excelente reputación y ventas verificadas.
      </p>
    </div>
  </div>
</section>

<!-- Divisor -->
<div class="my-12 border-t border-gray-200 max-w-4xl mx-auto"></div>

<!-- Sección Formas de Pago -->
<section class="container mx-auto my-12 px-4">
  <h2 class="text-3xl md:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
    Formas de Pago
  </h2>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
    <div class="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
      <img src="../assets/img/transferencia.png" alt="Transferencia" class="w-32 mx-auto mb-4 hover:scale-105 transition-transform duration-300">
      <p class="text-gray-700 font-semibold">Transferencia Bancaria</p>
    </div>
    <div class="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
      <img src="../assets/img/paypal.png" alt="PayPal" class="w-32 mx-auto mb-4 hover:scale-105 transition-transform duration-300">
      <p class="text-gray-700 font-semibold">PayPal</p>
    </div>
    <div class="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
      <img src="../assets/img/mercado-pago.png" alt="Mercado Pago" class="w-32 mx-auto mb-4 hover:scale-105 transition-transform duration-300">
      <p class="text-gray-700 font-semibold">Mercado Pago</p>
    </div>
  </div>
</section>

<!-- Divisor -->
<div class="my-12 border-t border-gray-200 max-w-4xl mx-auto"></div>

<!-- Sección Métodos de Compra -->
<section class="container mx-auto my-12 px-4">
  <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
    <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
      <h2 class="text-4xl font-bold text-blue-600 mb-4">1</h2>
      <p class="text-gray-700 mb-6">
        Realice su compra vía llamada telefónica. Despeje dudas y obtenga información sobre precios y envíos.
      </p>
      <a href="tel:+525562516687" class="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105 shadow-md">
        Llamar al +52 5562516687
      </a>
    </div>
    <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
      <h2 class="text-4xl font-bold text-green-600 mb-4">2</h2>
      <p class="text-gray-700 mb-6">
        Escríbenos por WhatsApp para pedir informes, realizar tu compra o solicitar mensajería.
      </p>
      <a href="https://api.whatsapp.com/send?phone=525562516687&text=Hola!%20Quiero%20información%20del%20producto!" target="_blank" rel="noopener noreferrer" class="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105 shadow-md">
        <i class="fab fa-whatsapp mr-2"></i> WhatsApp
      </a>
    </div>
    <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
      <h2 class="text-4xl font-bold text-blue-600 mb-4">3</h2>
      <p class="text-gray-700 mb-6">
        Llena el formulario y nosotros nos contactaremos contigo para brindarte información y procesar tu compra.
      </p>
      <a href="./contacto.html#contacto" class="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105 shadow-md">
        Llenar Formulario
      </a>
    </div>
  </div>
</section>

<!-- Divisor -->
<div class="my-12 border-t border-gray-200 max-w-4xl mx-auto"></div>

<!-- Sección de Contacto -->
<section id="contacto" class="container mx-auto my-12 px-4">
  <div class="bg-gradient-to-r from-blue-50 to-gray-50 rounded-2xl shadow-xl p-8 md:p-12">
    <form class="formulario" action="enviar-mensaje.php" method="post">
      <div class="text-center mb-8">
        <h3 class="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
          Contáctanos
        </h3>
        <p class="text-gray-600 mt-2">Estamos aquí para ayudarte. Envíanos un mensaje.</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="mb-4">
          <label for="nombre" class="block text-gray-700 font-semibold mb-2">Nombre:</label>
          <input class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300" type="text" name="name" id="nombre" required placeholder="Tu nombre">
        </div>
        <div class="mb-4">
          <label for="email" class="block text-gray-700 font-semibold mb-2">Correo Electrónico:</label>
          <input class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300" type="email" name="email" id="email" required placeholder="Ejemplo: name@mail.com">
        </div>
        <div class="mb-4">
          <label for="tel" class="block text-gray-700 font-semibold mb-2">Teléfono:</label>
          <input class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300" type="tel" name="tel" id="tel" placeholder="+525566778899">
        </div>
        <div class="mb-4 md:col-span-2">
          <label for="mensaje" class="block text-gray-700 font-semibold mb-2">Mensaje:</label>
          <textarea name="mensaje" id="mensaje" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300" rows="4" placeholder="Escribe tu mensaje aquí"></textarea>
        </div>
        <div class="mb-4 md:col-span-2">
          <p class="text-gray-700 font-semibold mb-2">¿Cuánto es 4 x 2?</p>
          <div class="flex justify-center space-x-6">
            <div>
              <label for="tres" class="text-gray-700">3</label>
              <input type="radio" name="robot" id="tres" value="3" class="ml-2">
            </div>
            <div>
              <label for="seis" class="text-gray-700">6</label>
              <input type="radio" name="robot" id="seis" value="6" class="ml-2">
            </div>
            <div>
              <label for="ocho" class="text-gray-700">8</label>
              <input type="radio" name="robot" id="ocho" value="8" class="ml-2">
            </div>
          </div>
        </div>
      </div>
      <div class="text-center mt-6">
        <input class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105 shadow-md cursor-pointer" type="submit" value="Enviar Mensaje">
      </div>
    </form>
  </div>
</section>

    </template>
   </MainLayout>
</template>

<script lang="ts" setup>
import MainLayout from '@/layouts/MainLayout.vue';


</script>

<style scoped>

</style>
