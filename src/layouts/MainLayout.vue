<template>
  <header
    class="flex sticky top-0 z-50 justify-evenly items-center p-4 py-6 w-full bg-white border-b-2 transition-colors duration-1000 ease-in-out sm:pr-40 sm:py-5 text-slate-800" :class="homeUI().getUserHasScrolled ? 'border-b-2 border-b-black' : 'border-b-2 border-b-gray-200'">
    <div class="flex overflow-scroll justify-between items-center w-full sm:w-auto">
      <!-- <i class="mr-2 fas fa-shield-alt"></i> -->
      <img src="../assets/img/sslLogoV3.png" class="mr-2 w-6 sm:w-8" alt="">
      <!-- md initial-->
      <RouterLink :to="{ name: 'home' }" translate="no" class="bottom-0 text-slate-800 hover:text-sky-800 md:initial md:left-auto md:top-0 sm:absolute sm:left-1/2 sm:-translate-x-1/2v">
        <span class="text-sm font-semibold sm:text-xl" v-html="currentDomain"></span>
      </RouterLink>
      <div class="hidden overflow-auto gap-2 pt-3 pr-2 md:pr-0 sm:flex">
        <img src="../assets/flags/4x3/mx.svg" alt="MX" class="ml-2 w-9 sm:w-9 animate-fade-up animate-delay-75">
        <img src="../assets/flags/4x3/us.svg" alt="US" class="ml-2 w-9 sm:w-9 animate-fade-up animate-delay-150">
        <img src="../assets/flags/4x3/cn.svg" alt="CN" class="ml-2 w-9 sm:w-9 animate-fade-up animate-delay-300">
        <img src="../assets/flags/4x3/in.svg" alt="IN" class="ml-2 w-9 sm:w-9 animate-fade-up animate-delay-500">
      </div>
      <div class="flex absolute bottom-[2px] gap-2 sm:hidden">
        <img src="../assets/flags/4x3/mx.svg" alt="MX" class="ml-2 w-6 rounded-sm animate-fade-right animate-delay-75">
        <img src="../assets/flags/4x3/us.svg" alt="US" class="ml-2 w-6 rounded-sm animate-fade-right animate-delay-150">
        <img src="../assets/flags/4x3/cn.svg" alt="CN" class="ml-2 w-6 rounded-sm animate-fade-right animate-delay-300">
        <img src="../assets/flags/4x3/in.svg" alt="IN" class="ml-2 w-6 rounded-sm animate-fade-right animate-delay-500">
      </div>
      <HamMenu @click="toggleOpenMenu"  class="pl-2 sm:hidden" />
    </div>
    <div class="hidden items-center space-x-4 sm:flex">
      <RouterLink :to="{ name: 'home' }" class="flex items-center text-slate-800 hover:text-sky-800">
        <i class="mr-2 fas fa-home"></i>
        <span>Inicio</span>
      </RouterLink>
      <RouterLink :to="{ name: 'tungsteno' }" class="flex items-center text-slate-800 hover:text-sky-800">
        <i class="mr-2 fas fa-question-circle"></i>
        <span>¿Qué es tungsteno?</span>
      </RouterLink>
      <RouterLink :to="{ name: 'producto' }" class="flex items-center text-slate-800 hover:text-sky-800">
        <i class="mr-2 fas fa-box-open"></i>
        <span>Productos</span>
      </RouterLink>
      <RouterLink :to="{ name: 'comprar' }" class="flex items-center text-slate-800 hover:text-sky-800">
        <i class="mr-2 fas fa-cart-plus"></i>
        <span>Comprar</span>
      </RouterLink>
      <RouterLink :to="{ name: 'contacto' }" class="flex items-center text-slate-800 hover:text-sky-800">
        <i class="mr-2 fas fa-envelope"></i>
        <span>Contacto</span>
      </RouterLink>
    </div>

  </header>
  <main>
    <slot name="main"></slot>
    <!-- menu for mobile-->
    <aside class="flex fixed right-0 bottom-0 left-0 top-20 z-40 justify-center w-full bg-white transition-all ease-in-out animate-duration-1000" :class="isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'">
        <div v-if="isMenuOpen"  class="flex flex-col justify-evenly items-center space-x-4">
      <RouterLink :to="{ name: 'home' }" class="flex items-center border-b border-b-sky-900  text-slate-800 animate-fade-left animate-delay-[0ms] hover:text-sky-800">
        <i class="mr-2 fas fa-home"></i>
        <span>Inicio</span>
      </RouterLink>
      <RouterLink :to="{ name: 'tungsteno' }" class="flex items-center border-b border-b-sky-900 text-slate-800 animate-fade-left animate-delay-[100ms] hover:text-sky-800">
        <i class="mr-2 fas fa-question-circle"></i>
        <span>¿Qué es tungsteno?</span>
      </RouterLink>
      <RouterLink :to="{ name: 'producto' }" class="flex items-center border-b border-b-sky-900 text-slate-800 animate-fade-left animate-delay-[200ms] hover:text-sky-800">
        <i class="mr-2 fas fa-box-open"></i>
        <span>Productos</span>
      </RouterLink>
      <RouterLink :to="{ name: 'comprar' }" class="flex items-center border-b border-b-sky-900 text-slate-800 animate-fade-left animate-delay-[300ms] hover:text-sky-800">
        <i class="mr-2 fas fa-cart-plus"></i>
        <span>Comprar</span>
      </RouterLink>
      <RouterLink :to="{ name: 'contacto' }" class="flex items-center border-b border-b-sky-900 text-slate-800 animate-fade-left animate-delay-[400ms] hover:text-sky-800">
        <i class="mr-2 fas fa-envelope"></i>
        <span>Contacto</span>
      </RouterLink>
    </div>
    </aside>
  </main>
  <footer>
    <section class="py-8 text-white bg-gray-800">
      <div class="container px-4 mx-auto">
        <div class="flex flex-col justify-between items-center md:flex-row">
          <div class="mb-4 text-center md:text-left md:mb-0">
            <h3 class="text-xl font-semibold">HileraJoyeria.com</h3>
            <p class="text-sm">Hilera de tungsteno, barra de tungsteno, barra para trefilado, trefiladora, tungsten
              carbide, herramienta para joyero o artesano joyero ideal para reducir el radio de diferentes materiales
              ferrosos o no ferrosos.</p>
          </div>
          <div class="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-4">
            <!-- changing a to RouterLink -->

            <RouterLink to="/tungsteno" class="hover:text-gray-400"><i class="fas fa-question-circle"></i> ¿Qué es
              tungsteno?</RouterLink>
            <RouterLink to="/producto" class="hover:text-gray-400"><i class="fas fa-box"></i> Productos</RouterLink>
            <RouterLink to="/comprar" class="hover:text-gray-400"><i class="fas fa-shopping-cart"></i> Comprar
            </RouterLink>
            <RouterLink to="/contacto" class="hover:text-gray-400"><i class="fas fa-envelope"></i> Contacto</RouterLink>
          </div>
        </div>
        <div class="mt-8 text-sm text-center">
          <p>&copy; 2025 Todos los derechos reservados. Design by: JAAC <small>Updated by: PACA</small></p>
        </div>
      </div>
    </section>

  </footer>
</template>

<script lang="ts" setup>
import HamMenu from '@/animations/HamMenu.vue';
import { homeUI } from '@/stores/homeUI';
import { onMounted, onUnmounted, ref } from 'vue'
import { useRouter } from 'vue-router';
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

const isMenuOpen = ref(false)
const toggleOpenMenu = () => isMenuOpen.value = !isMenuOpen.value;


onMounted(() => {
  toggleDomauns()
})






</script>

<style scoped></style>
