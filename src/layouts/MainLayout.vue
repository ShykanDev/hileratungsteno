<template>
    <header class="sticky top-0 w-full z-50 flex justify-between items-center bg-white border-b-2 border-sky-900 text-slate-800 p-4 py-5 pr-40 animate-fade-down">
    <div class="flex items-center">
      <!-- <i class="fas fa-shield-alt mr-2"></i> -->
       <img src="../assets/img/sslLogoV3.png" class="w-8 mr-2" alt="">
      <RouterLink :to="{ name: 'home' }" translate="no" class="text-slate-800 hover:text-gray-300">
        <span class="text-xl font-semibold" v-html="currentDomain"></span>
      </RouterLink>
      <div class="flex gap-2">
        <img src="../assets/flags/4x3/mx.svg" alt="" class="w-9 animate-fade-up animate-delay-75 ml-2">
        <img src="../assets/flags/4x3/us.svg" alt="" class="w-9 animate-fade-up animate-delay-150 ml-2">
        <img src="../assets/flags/4x3/cn.svg" alt="" class="w-9 animate-fade-up animate-delay-300 ml-2">
        <img src="../assets/flags/4x3/in.svg" alt="" class="w-9 animate-fade-up animate-delay-500 ml-2">
      </div>
    </div>
    <div class="flex items-center space-x-4">
      <RouterLink :to="{ name: 'home' }" class="flex items-center text-slate-800 hover:text-gray-300">
        <i class="fas fa-home mr-2"></i>
        <span>Inicio</span>
      </RouterLink>
      <RouterLink :to="{ name: 'tungsteno' }" class="flex items-center text-slate-800 hover:text-gray-300">
        <i class="fas fa-question-circle mr-2"></i>
        <span>¿Qué es tungsteno?</span>
      </RouterLink>
      <RouterLink :to="{ name: 'producto' }" class="flex items-center text-slate-800 hover:text-gray-300">
        <i class="fas fa-box-open mr-2"></i>
        <span>Productos</span>
      </RouterLink>
      <RouterLink :to="{ name: 'comprar' }" class="flex items-center text-slate-800 hover:text-gray-300">
        <i class="fas fa-cart-plus mr-2"></i>
        <span>Comprar</span>
      </RouterLink>
      <RouterLink :to="{ name: 'contacto' }" class="flex items-center text-slate-800 hover:text-gray-300">
        <i class="fas fa-envelope mr-2"></i>
        <span>Contacto</span>
      </RouterLink>
    </div>
  </header>
  <main>
    <slot name="main"></slot>
  </main>
  <footer>
    <section class="bg-gray-800 text-white py-8">
  <div class="container mx-auto px-4">
    <div class="flex flex-col md:flex-row justify-between items-center">
      <div class="text-center md:text-left mb-4 md:mb-0">
        <h3 class="text-xl font-semibold">HileraJoyeria.com</h3>
        <p class="text-sm">Hilera de tungsteno, barra de tungsteno, barra para trefilado, trefiladora, tungsten carbide, herramienta para joyero o artesano joyero ideal para reducir el radio de diferentes materiales ferrosos o no ferrosos.</p>
      </div>
      <div class="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
        <!-- changing a to RouterLink -->

        <RouterLink to="/tungsteno" class="hover:text-gray-400"><i class="fas fa-question-circle"></i> ¿Qué es tungsteno?</RouterLink>
        <RouterLink to="/producto" class="hover:text-gray-400"><i class="fas fa-box"></i> Productos</RouterLink>
        <RouterLink to="/comprar" class="hover:text-gray-400"><i class="fas fa-shopping-cart"></i> Comprar</RouterLink>
        <RouterLink to="/contacto" class="hover:text-gray-400"><i class="fas fa-envelope"></i> Contacto</RouterLink>
      </div>
    </div>
    <div class="mt-8 text-center text-sm">
      <p>&copy; 2025 Todos los derechos reservados. Design by: JAAC <small>Updated by: PACA</small></p>
    </div>
  </div>
</section>

  </footer>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'

// const domains = ['<span>www.</span><span>hilera</span><span>tungsteno</span><span>.com</span>', '<span>www.</span><span>hilera</span><span>joyeria</span><span>.com</span>']
const domains = [
  // Primer dominio (animate-fade-up)
  `
    <span class="text-sky-800 animate-fade-up animate-delay-[0ms]">www.</span><span class="text-black animate-fade-up animate-delay-[100ms]">hilera</span><span class="text-emerald-800 animate-fade-up animate-delay-[200ms]">tungsteno</span><span class="text-sky-800 animate-fade-up animate-delay-[300ms]">.com</span>
  `,

  // Segundo dominio (animate-fade-down)
  `
    <span class="text-sky-800 animate-fade-down animate-delay-[0ms]">www.</span><span class="text-black animate-fade-down animate-delay-[100ms]">hilera</span><span class="text-emerald-800 animate-fade-down animate-delay-[200ms]">joyeria</span><span class="text-sky-800 animate-fade-down animate-delay-[300ms]">.com</span>
  `
];
const currentDomain = ref(domains[0])

const toggleDomauns = () => {
  setInterval(() => {
    const domain = domains[Math.floor(Math.random() * domains.length)]
    currentDomain.value = domain
  }, 3000);
}


onMounted(() => {
  toggleDomauns()
})
</script>

<style scoped>

</style>
