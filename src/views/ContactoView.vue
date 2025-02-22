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


</script>

<style scoped>

</style>
