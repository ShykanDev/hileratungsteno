<template>
   <MainLayout>
    <template #main>
      <section ref="articleHtml" class="sticky top-20 z-40 text-blue-800 rounded-b-3xl" :class="userHasScrolled ? 'animate-fade-up  backdrop-blur-2xl shadow-xl w-3/4 mx-auto' : 'animate-fade-down bg-white '">
  <div class="mx-auto w-full h-auto text-center transition-all ease-in-out animate-duration-1000"  :class="userHasScrolled ? 'bg-0' : 'bg-transparent'">
    <article v-if="!userHasScrolled" class="py-3 animate-fade-down animate-delay-100">
      <h2 class="mb-4 text-3xl font-bold">Conozca todos los productos de la barra trefiladora de tungsteno</h2>
      <p class="mb-6 text-lg">Las hileras de tungsteno se diferencian por forma, cantidad de hoyos y dimensiones</p>
    </article>
    <div class="flex overflow-x-scroll gap-4 justify-center py-2 ">
      <a href="#p-circulo" class="flex gap-2 items-center px-1 py-1 font-bold text-white bg-blue-500 rounded-full transition duration-300 ease-in-out transform hover:bg-blue-700 hover:scale-105"><v-icon name='bi-circle'/>Círculo</a>
      <a href="#p-cuadrado" class="flex gap-2 items-center px-1 py-1 font-bold text-white bg-blue-500 rounded-full transition duration-300 ease-in-out transform hover:bg-blue-700 hover:scale-105"><v-icon name='bi-square'/>Cuadrado</a>
      <a href="#p-semi-circulo" class="flex gap-2 items-center px-1 py-1 font-bold text-white bg-blue-500 rounded-full transition duration-300 ease-in-out transform hover:bg-blue-700 hover:scale-105"><v-icon name='bi-circle-half'/>Semi-Círculo</a>
      <a href="#p-ovalo" class="flex gap-2 items-center px-1 py-1 font-bold text-white bg-blue-500 rounded-full transition duration-300 ease-in-out transform hover:bg-blue-700 hover:scale-105"><v-icon name='bi-circle'/>Óvalo</a>
      <a href="#p-triangulo" class="flex gap-2 items-center px-1 py-1 font-bold text-white bg-blue-500 rounded-full transition duration-300 ease-in-out transform hover:bg-blue-700 hover:scale-105"><v-icon name='bi-triangle'/>Triángulo</a>
      <a href="#p-luna" class="flex gap-2 items-center px-1 py-1 font-bold text-white bg-blue-500 rounded-full transition duration-300 ease-in-out transform hover:bg-blue-700 hover:scale-105"><v-icon name='bi-circle'/>Luna</a>
      <a href="#p-hexagono" class="px-4 py-2 font-bold text-white bg-blue-500 rounded-full transition duration-300 ease-in-out transform hover:bg-blue-700 hover:scale-105"><v-icon name='bi-hexagon'/>Hexágono</a>
    </div>
  </div>
</section>

<section id="p-circulo" class="container px-4 mx-auto my-8">
  <div class="flex flex-col justify-between items-center md:flex-row">
    <div class="text-center md:w-1/2 md:text-left">
      <img src="../assets/img/round.png" alt="Hilera de Tungsteno con forma circular" class="mx-auto mb-4 rounded-lg shadow-lg md:mx-0">
      <h3 class="mb-2 text-2xl font-bold">Hilera de Tungsteno con forma circular</h3>
    </div>
    <div class="flex justify-center mt-6 md:w-1/2 md:mt-0">
      <RouterLink :to="{ name: 'producto' }" class="px-6 py-3 font-bold text-white bg-blue-500 rounded-full transition duration-300 ease-in-out transform hover:bg-blue-700 hover:scale-105">Comprar</RouterLink>
    </div>
  </div>

  <div class="overflow-x-auto mt-8">
    <table class="min-w-full bg-white rounded-lg shadow-lg">
      <thead>
        <tr class="text-sm leading-normal text-gray-600 uppercase bg-gray-200">
          <th class="px-6 py-3 text-left">Modelo</th>
          <th class="px-6 py-3 text-left">Número de Agujeros</th>
          <th class="px-6 py-3 text-left">Medida de Agujeros</th>
          <th class="px-6 py-3 text-left">Tamaño y Peso</th>
        </tr>
      </thead>
      <tbody class="text-sm font-light text-gray-600">
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="px-6 py-3 text-left">R-410</td>
          <td class="px-6 py-3 text-left">52</td>
          <td class="px-6 py-3 text-left">Del 0.26 al 4.10</td>
          <td class="px-6 py-3 text-left">205 * 56 * 6mm (470g)</td>
        </tr>
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="px-6 py-3 text-left">R-280</td>
          <td class="px-6 py-3 text-left">39</td>
          <td class="px-6 py-3 text-left">Del 0.26 al 2.80</td>
          <td class="px-6 py-3 text-left">204 * 46 * 7mm (465g)</td>
        </tr>
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="px-6 py-3 text-left">R-500</td>
          <td class="px-6 py-3 text-left">24</td>
          <td class="px-6 py-3 text-left">Del 2.70 al 5.00</td>
          <td class="px-6 py-3 text-left">204 * 46 * 7mm (465g)</td>
        </tr>
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="px-6 py-3 text-left">R-700</td>
          <td class="px-6 py-3 text-left">20</td>
          <td class="px-6 py-3 text-left">Del 5.10 al 7.00</td>
          <td class="px-6 py-3 text-left">204 * 46 * 7mm (450g)</td>
        </tr>
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="px-6 py-3 text-left">R-900</td>
          <td class="px-6 py-3 text-left">20</td>
          <td class="px-6 py-3 text-left">Del 7.10 al 9.00</td>
          <td class="px-6 py-3 text-left">204 * 46 * 7mm (475g)</td>
        </tr>
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="px-6 py-3 text-left">R-220</td>
          <td class="px-6 py-3 text-left">36</td>
          <td class="px-6 py-3 text-left">Del 0.26 al 2.20</td>
          <td class="px-6 py-3 text-left">204 * 46 * 7mm (470g)</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="p-6 mt-8 text-center bg-purple-200 rounded-lg shadow-lg">
    <p class="text-gray-700">Si necesitas o buscas una medida o marca específica puedes preguntarnos <RouterLink :to="{name:'contacto'}" class="text-blue-500 hover:underline">aquí</RouterLink></p>
  </div>
</section>

<section class="container px-4 mx-auto my-8">
  <div class="flex flex-col justify-between items-center md:flex-row">
    <div class="flex justify-center md:w-1/2 md:justify-start">
      <img src="../assets/img/barras-izquierda.png" alt="Imagen de barras" class="mb-4 rounded-lg shadow-lg md:mb-0">
    </div>
    <div class="mt-6 md:w-1/2 md:mt-0">
      <h2 class="mb-4 text-3xl font-bold text-center md:text-left">Características Generales</h2>
      <ul class="text-lg list-disc list-inside text-gray-700">
        <li>Acero resistente y con acabados finos.</li>
        <li>Durabilidad y resistencia al desgaste.</li>
        <li>Perforaciones milimétricas secuenciales y precisas.</li>
        <li>Grabados de sellos y números en la placa.</li>
        <li>Terminados en semi-pulido y esquinas redondeadas.</li>
        <li>Tirones suaves cuando se realiza el trefilado.</li>
        <li>Uso rudo y profesional.</li>
      </ul>
      <div class="mt-4 text-center md:text-right">
        <RouterLink :to="{name:'comprar'}" class="px-6 py-3 font-bold text-white bg-blue-500 rounded-full transition duration-300 ease-in-out transform hover:bg-blue-700 hover:scale-105">Comprar</RouterLink>
      </div>
    </div>
  </div>
</section>

<section class="container px-4 mx-auto my-8">
  <h3 class="mb-6 text-3xl font-bold text-center">¿Qué viene incluido?</h3>
  <p class="mb-6 text-center text-gray-700">Estuche de piel sintética con broches + hilera de tungsteno con empaque de celofán.</p>
  <div class="flex flex-col justify-between items-center md:flex-row">
    <div class="flex justify-center md:w-1/2">
      <img src="../assets/img/funda-placa.png" alt="Estuche de piel sintética" class="mb-4 rounded-lg shadow-lg md:mb-0">
    </div>
    <div class="flex justify-center mt-6 md:w-1/2 md:mt-0">
      <RouterLink :to="{name:'comprar'}" class="px-6 py-3 font-bold text-white bg-blue-500 rounded-full transition duration-300 ease-in-out transform hover:bg-blue-700 hover:scale-105">Comprar</RouterLink>
      <RouterLink :to="{name:'contacto'}" class="px-6 py-3 ml-4 font-bold text-white bg-green-500 rounded-full transition duration-300 ease-in-out transform hover:bg-green-700 hover:scale-105">Informes y/o dudas</RouterLink>
    </div>
  </div>
</section>

<div class="my-8 border-t border-gray-200"></div>

<section id="p-cuadrado" class="container px-4 mx-auto my-8 bg-gray-100 rounded-lg shadow-lg">
  <div class="flex flex-col justify-between items-center md:flex-row">
    <div class="text-center md:w-1/2 md:text-left">
      <img src="../assets/img/square.png" alt="Hilera de Tungsteno con forma cuadrada" class="mx-auto mb-4 rounded-lg shadow-lg md:mx-0">
      <h3 class="mb-2 text-2xl font-bold">Hilera de Tungsteno con forma cuadrada</h3>
    </div>
    <div class="flex justify-center mt-6 md:w-1/2 md:mt-0">
      <RouterLink :to="{name:'comprar'}" class="px-6 py-3 font-bold text-white bg-blue-500 rounded-full transition duration-300 ease-in-out transform hover:bg-blue-700 hover:scale-105">Comprar</RouterLink>
    </div>
  </div>

  <div class="overflow-x-auto mt-8">
    <table class="min-w-full bg-white rounded-lg shadow-lg">
      <thead>
        <tr class="text-sm leading-normal text-gray-600 uppercase bg-gray-200">
          <th class="px-6 py-3 text-left">Modelo</th>
          <th class="px-6 py-3 text-left">Número de Agujeros</th>
          <th class="px-6 py-3 text-left">Medida de Agujeros</th>
          <th class="px-6 py-3 text-left">Tamaño y Peso</th>
        </tr>
      </thead>
      <tbody class="text-sm font-light text-gray-600">
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="px-6 py-3 text-left">Rec-300</td>
          <td class="px-6 py-3 text-left">30</td>
          <td class="px-6 py-3 text-left">Del 0.55 al 3.00</td>
          <td class="px-6 py-3 text-left">204 * 46 * 7mm (470g)</td>
        </tr>
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="px-6 py-3 text-left">Rec-500</td>
          <td class="px-6 py-3 text-left">20</td>
          <td class="px-6 py-3 text-left">Del 3.10 al 5.00</td>
          <td class="px-6 py-3 text-left">204 * 46 * 7mm (500g)</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="p-6 mt-8 text-center bg-purple-200 rounded-lg shadow-lg">
    <p class="text-gray-700">Si necesitas o buscas una medida o marca específica puedes preguntarnos <RouterLink :to="{name:'contacto'}" class="text-blue-500 hover:underline">aquí</RouterLink></p>
  </div>
</section>

<section class="container px-4 mx-auto my-8">
  <div class="flex flex-col justify-between items-center md:flex-row">
    <div class="flex justify-center md:w-1/2 md:justify-start">
      <img src="../assets/img/barra-cuadrada.png" alt="Imagen de barras" class="mb-4 rounded-lg shadow-lg md:mb-0">
    </div>
    <div class="mt-6 md:w-1/2 md:mt-0">
      <h2 class="mb-4 text-3xl font-bold text-center md:text-left">Características Generales</h2>
      <ul class="text-lg list-disc list-inside text-gray-700">
        <li>Acero resistente y con acabados finos.</li>
        <li>Durabilidad y resistencia al desgaste.</li>
        <li>Perforaciones milimétricas secuenciales y precisas.</li>
        <li>Grabados de sellos y números en la placa.</li>
        <li>Terminados en semi-pulido y esquinas redondeadas.</li>
        <li>Tirones suaves cuando se realiza el trefilado.</li>
        <li>Uso rudo y profesional.</li>
      </ul>
      <div class="mt-4 text-center md:text-right">
        <RouterLink :to="{name:'comprar'}" class="px-6 py-3 font-bold text-white bg-blue-500 rounded-full transition duration-300 ease-in-out transform hover:bg-blue-700 hover:scale-105">Comprar</RouterLink>
      </div>
    </div>
  </div>
</section>

<section class="container px-4 mx-auto my-8">
  <h3 class="mb-6 text-3xl font-bold text-center">¿Qué viene incluido?</h3>
  <p class="mb-6 text-center text-gray-700">Estuche de piel sintética con broches + hilera de tungsteno con empaque de celofán.</p>
  <div class="flex flex-col justify-between items-center md:flex-row">
    <div class="flex justify-center md:w-1/2">
      <img src="../assets/img/funda-placa.png" alt="Estuche de piel sintética" class="mb-4 rounded-lg shadow-lg md:mb-0">
    </div>
    <div class="flex justify-center mt-6 md:w-1/2 md:mt-0">
      <RouterLink :to="{name:'comprar'}" class="px-6 py-3 font-bold text-white bg-blue-500 rounded-full transition duration-300 ease-in-out transform hover:bg-blue-700 hover:scale-105">Comprar</RouterLink>
      <RouterLink :to="{name:'contacto'}" class="px-6 py-3 ml-4 font-bold text-white bg-green-500 rounded-full transition duration-300 ease-in-out transform hover:bg-green-700 hover:scale-105">Informes y/o dudas</RouterLink>
    </div>
  </div>
</section>

<div class="my-8 border-t border-gray-200"></div>

<section id="p-semi-circulo" class="container px-4 mx-auto my-8">
  <div class="flex flex-col justify-between items-center md:flex-row">
    <div class="text-center md:w-1/2 md:text-left">
      <img src="../assets/img/half-round.png" alt="Hilera de Tungsteno con forma Semi-Circulo" class="mx-auto mb-4 rounded-lg shadow-lg md:mx-0">
      <h3 class="mb-2 text-2xl font-bold">Hilera de Tungsteno con forma Semi-Círculo</h3>
    </div>
    <div class="flex justify-center mt-6 md:w-1/2 md:mt-0">
      <RouterLink :to="{name:'comprar'}" class="px-6 py-3 font-bold text-white bg-blue-500 rounded-full transition duration-300 ease-in-out transform hover:bg-blue-700 hover:scale-105">Comprar</RouterLink>
    </div>
  </div>

  <div class="overflow-x-auto mt-8">
    <table class="min-w-full bg-white rounded-lg shadow-lg">
      <thead>
        <tr class="text-sm leading-normal text-gray-600 uppercase bg-gray-200">
          <th class="px-6 py-3 text-left">Modelo</th>
          <th class="px-6 py-3 text-left">Número de Agujeros</th>
          <th class="px-6 py-3 text-left">Medida de Agujeros</th>
          <th class="px-6 py-3 text-left">Tamaño y Peso</th>
        </tr>
      </thead>
      <tbody class="text-sm font-light text-gray-600">
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="px-6 py-3 text-left">HR-300</td>
          <td class="px-6 py-3 text-left">30</td>
          <td class="px-6 py-3 text-left">Del 0.55 al 3.00</td>
          <td class="px-6 py-3 text-left">204 * 46 * 7mm (495g)</td>
        </tr>
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="px-6 py-3 text-left">HR-500</td>
          <td class="px-6 py-3 text-left">20</td>
          <td class="px-6 py-3 text-left">Del 3.10 al 5.00</td>
          <td class="px-6 py-3 text-left">204 * 46 * 7mm (480g)</td>
        </tr>
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="px-6 py-3 text-left">HR-700</td>
          <td class="px-6 py-3 text-left">20</td>
          <td class="px-6 py-3 text-left">Del 5.10 al 7.00</td>
          <td class="px-6 py-3 text-left">204 * 46 * 7mm (455g)</td>
        </tr>
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="px-6 py-3 text-left">HR-900</td>
          <td class="px-6 py-3 text-left">20</td>
          <td class="px-6 py-3 text-left">Del 7.10 al 9.00</td>
          <td class="px-6 py-3 text-left">204 * 46 * 7mm (470g)</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="p-6 mt-8 text-center bg-purple-200 rounded-lg shadow-lg">
    <p class="text-gray-700">Si necesitas o buscas una medida o marca específica puedes preguntarnos <RouterLink :to="{name:'contacto'}" class="text-blue-500 hover:underline">aquí</RouterLink></p>
  </div>
</section>

<section class="container px-4 mx-auto my-8">
  <div class="flex flex-col justify-between items-center md:flex-row">
    <div class="flex justify-center md:w-1/2 md:justify-start">
      <img src="../assets/img/barra-semicirculo.png" alt="Imagen de barras" class="mb-4 rounded-lg shadow-lg md:mb-0">
    </div>
    <div class="mt-6 md:w-1/2 md:mt-0">
      <h2 class="mb-4 text-3xl font-bold text-center md:text-left">Características Generales</h2>
      <ul class="text-lg list-disc list-inside text-gray-700">
        <li>Acero resistente y con acabados finos.</li>
        <li>Durabilidad y resistencia al desgaste.</li>
        <li>Perforaciones milimétricas secuenciales y precisas.</li>
        <li>Grabados de sellos y números en la placa.</li>
        <li>Terminados en semi-pulido y esquinas redondeadas.</li>
        <li>Tirones suaves cuando se realiza el trefilado.</li>
        <li>Uso rudo y profesional.</li>
      </ul>
      <div class="mt-4 text-center md:text-right">
        <RouterLink :to="{name:'comprar'}" class="px-6 py-3 font-bold text-white bg-blue-500 rounded-full transition duration-300 ease-in-out transform hover:bg-blue-700 hover:scale-105">Comprar</RouterLink>
      </div>
    </div>
  </div>
</section>

<section class="container px-4 mx-auto my-8">
  <h3 class="mb-6 text-3xl font-bold text-center">¿Qué viene incluido?</h3>
  <p class="mb-6 text-center text-gray-700">Estuche de piel sintética con broches + hilera de tungsteno con empaque de celofán.</p>
  <div class="flex flex-col justify-between items-center md:flex-row">
    <div class="flex justify-center md:w-1/2">
      <img src="../assets/img/funda-placa.png" alt="Estuche de piel sintética" class="mb-4 rounded-lg shadow-lg md:mb-0">
    </div>
    <div class="flex justify-center mt-6 md:w-1/2 md:mt-0">
      <RouterLink :to="{name:'comprar'}" class="px-6 py-3 font-bold text-white bg-blue-500 rounded-full transition duration-300 ease-in-out transform hover:bg-blue-700 hover:scale-105">Comprar</RouterLink>
      <RouterLink :to="{name:'contacto'}" class="px-6 py-3 ml-4 font-bold text-white bg-green-500 rounded-full transition duration-300 ease-in-out transform hover:bg-green-700 hover:scale-105">Informes y/o dudas</RouterLink>
    </div>
  </div>
</section>

<div class="my-8 border-t border-gray-200"></div>

<section id="p-ovalo" class="container px-4 mx-auto my-8 bg-gray-100 rounded-lg shadow-lg">
  <div class="flex flex-col justify-between items-center md:flex-row">
    <div class="text-center md:w-1/2 md:text-left">
      <img src="../assets/img/oval.png" alt="Hilera de Tungsteno con forma Ovalada" class="mx-auto mb-4 rounded-lg shadow-lg md:mx-0">
      <h3 class="mb-2 text-2xl font-bold">Hilera de Tungsteno con forma Ovalada</h3>
    </div>
    <div class="flex justify-center mt-6 md:w-1/2 md:mt-0">
      <RouterLink :to="{name:'comprar'}" class="px-6 py-3 font-bold text-white bg-blue-500 rounded-full transition duration-300 ease-in-out transform hover:bg-blue-700 hover:scale-105">Comprar</RouterLink>
    </div>
  </div>

  <div class="overflow-x-auto mt-8">
    <table class="min-w-full bg-white rounded-lg shadow-lg">
      <thead>
        <tr class="text-sm leading-normal text-gray-600 uppercase bg-gray-200">
          <th class="px-6 py-3 text-left">Modelo</th>
          <th class="px-6 py-3 text-left">Número de Agujeros</th>
          <th class="px-6 py-3 text-left">Medida de Agujeros</th>
          <th class="px-6 py-3 text-left">Tamaño y Peso</th>
        </tr>
      </thead>
      <tbody class="text-sm font-light text-gray-600">
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="px-6 py-3 text-left">Ova-500</td>
          <td class="px-6 py-3 text-left">20</td>
          <td class="px-6 py-3 text-left">Del 3.10 al 5.00</td>
          <td class="px-6 py-3 text-left">204 * 46 * 7mm (480g)</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="p-6 mt-8 text-center bg-purple-200 rounded-lg shadow-lg">
    <p class="text-gray-700">Si necesitas o buscas una medida o marca específica puedes preguntarnos <RouterLink :to="{name:'contacto'}" class="text-blue-500 hover:underline">aquí</RouterLink></p>
  </div>
</section>

<section class="container px-4 mx-auto my-8">
  <div class="flex flex-col justify-between items-center md:flex-row">
    <div class="flex justify-center md:w-1/2 md:justify-start">
      <img src="../assets/img/barra-ovalo.png" alt="Imagen de barras" class="mb-4 rounded-lg shadow-lg md:mb-0">
    </div>
    <div class="mt-6 md:w-1/2 md:mt-0">
      <h2 class="mb-4 text-3xl font-bold text-center md:text-left">Características Generales</h2>
      <ul class="text-lg list-disc list-inside text-gray-700">
        <li>Acero resistente y con acabados finos.</li>
        <li>Durabilidad y resistencia al desgaste.</li>
        <li>Perforaciones milimétricas secuenciales y precisas.</li>
        <li>Grabados de sellos y números en la placa.</li>
        <li>Terminados en semi-pulido y esquinas redondeadas.</li>
        <li>Tirones suaves cuando se realiza el trefilado.</li>
        <li>Uso rudo y profesional.</li>
      </ul>
      <div class="mt-4 text-center md:text-right">
        <RouterLink :to="{name:'comprar'}" class="px-6 py-3 font-bold text-white bg-blue-500 rounded-full transition duration-300 ease-in-out transform hover:bg-blue-700 hover:scale-105">Comprar</RouterLink>
      </div>
    </div>
  </div>
</section>

<section class="container px-4 mx-auto my-8">
  <h3 class="mb-6 text-3xl font-bold text-center">¿Qué viene incluido?</h3>
  <p class="mb-6 text-center text-gray-700">Estuche de piel sintética con broches + hilera de tungsteno con empaque de celofán.</p>
  <div class="flex flex-col justify-between items-center md:flex-row">
    <div class="flex justify-center md:w-1/2">
      <img src="../assets/img/funda-placa.png" alt="Estuche de piel sintética" class="mb-4 rounded-lg shadow-lg md:mb-0">
    </div>
    <div class="flex justify-center mt-6 md:w-1/2 md:mt-0">
      <RouterLink :to="{name:'comprar'}" class="px-6 py-3 font-bold text-white bg-blue-500 rounded-full transition duration-300 ease-in-out transform hover:bg-blue-700 hover:scale-105">Comprar</RouterLink>
      <RouterLink :to="{name:'contacto'}" class="px-6 py-3 ml-4 font-bold text-white bg-green-500 rounded-full transition duration-300 ease-in-out transform hover:bg-green-700 hover:scale-105">Informes y/o dudas</RouterLink>
    </div>
  </div>
</section>

<div class="my-8 border-t border-gray-200"></div>

<section id="p-triangulo" class="container px-4 mx-auto my-8">
  <div class="flex flex-col justify-between items-center md:flex-row">
    <div class="text-center md:w-1/2 md:text-left">
      <img src="../assets/img/triangle.png" alt="Hilera de Tungsteno con forma Triangular" class="mx-auto mb-4 rounded-lg shadow-lg md:mx-0">
      <h3 class="mb-2 text-2xl font-bold">Hilera de Tungsteno con forma Triangular</h3>
    </div>
    <div class="flex justify-center mt-6 md:w-1/2 md:mt-0">
      <RouterLink :to="{name:'comprar'}" class="px-6 py-3 font-bold text-white bg-blue-500 rounded-full transition duration-300 ease-in-out transform hover:bg-blue-700 hover:scale-105">Comprar</RouterLink>
    </div>
  </div>

  <div class="overflow-x-auto mt-8">
    <table class="min-w-full bg-white rounded-lg shadow-lg">
      <thead>
        <tr class="text-sm leading-normal text-gray-600 uppercase bg-gray-200">
          <th class="px-6 py-3 text-left">Modelo</th>
          <th class="px-6 py-3 text-left">Número de Agujeros</th>
          <th class="px-6 py-3 text-left">Medida de Agujeros</th>
          <th class="px-6 py-3 text-left">Tamaño y Peso</th>
        </tr>
      </thead>
      <tbody class="text-sm font-light text-gray-600">
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="px-6 py-3 text-left">Tri-300</td>
          <td class="px-6 py-3 text-left">20</td>
          <td class="px-6 py-3 text-left">Del 1.10 al 3.00</td>
          <td class="px-6 py-3 text-left">204 * 46 * 7mm (480g)</td>
        </tr>
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="px-6 py-3 text-left">Tri-500</td>
          <td class="px-6 py-3 text-left">20</td>
          <td class="px-6 py-3 text-left">Del 3.10 al 5.00</td>
          <td class="px-6 py-3 text-left">204 * 46 * 7mm (475g)</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="p-6 mt-8 text-center bg-purple-200 rounded-lg shadow-lg">
    <p class="text-gray-700">Si necesitas o buscas una medida o marca específica puedes preguntarnos <RouterLink :to="{name:'contacto'}" class="text-blue-500 hover:underline">aquí</RouterLink></p>
  </div>
</section>

<section class="container px-4 mx-auto my-8">
  <div class="flex flex-col justify-between items-center md:flex-row">
    <div class="flex justify-center md:w-1/2 md:justify-start">
      <img src="../assets/img/barra-triangulo.png" alt="Imagen de barras" class="mb-4 rounded-lg shadow-lg md:mb-0">
    </div>
    <div class="mt-6 md:w-1/2 md:mt-0">
      <h2 class="mb-4 text-3xl font-bold text-center md:text-left">Características Generales</h2>
      <ul class="text-lg list-disc list-inside text-gray-700">
        <li>Acero resistente y con acabados finos.</li>
        <li>Durabilidad y resistencia al desgaste.</li>
        <li>Perforaciones milimétricas secuenciales y precisas.</li>
        <li>Grabados de sellos y números en la placa.</li>
        <li>Terminados en semi-pulido y esquinas redondeadas.</li>
        <li>Tirones suaves cuando se realiza el trefilado.</li>
        <li>Uso rudo y profesional.</li>
      </ul>
      <div class="mt-4 text-center md:text-right">
        <RouterLink :to="{name:'comprar'}" class="px-6 py-3 font-bold text-white bg-blue-500 rounded-full transition duration-300 ease-in-out transform hover:bg-blue-700 hover:scale-105">Comprar</RouterLink>
      </div>
    </div>
  </div>
</section>

<section class="container px-4 mx-auto my-8">
  <h3 class="mb-6 text-3xl font-bold text-center">¿Qué viene incluido?</h3>
  <p class="mb-6 text-center text-gray-700">Estuche de piel sintética con broches + hilera de tungsteno con empaque de celofán.</p>
  <div class="flex flex-col justify-between items-center md:flex-row">
    <div class="flex justify-center md:w-1/2">
      <img src="../assets/img/funda-placa.png" alt="Estuche de piel sintética" class="mb-4 rounded-lg shadow-lg md:mb-0">
    </div>
    <div class="flex justify-center mt-6 md:w-1/2 md:mt-0">
      <RouterLink :to="{name:'comprar'}" class="px-6 py-3 font-bold text-white bg-blue-500 rounded-full transition duration-300 ease-in-out transform hover:bg-blue-700 hover:scale-105">Comprar</RouterLink>
      <RouterLink :to="{name:'contacto'}" class="px-6 py-3 ml-4 font-bold text-white bg-green-500 rounded-full transition duration-300 ease-in-out transform hover:bg-green-700 hover:scale-105">Informes y/o dudas</RouterLink>
    </div>
  </div>
</section>

<div class="my-8 border-t border-gray-200"></div>

<section id="p-luna" class="container px-4 mx-auto my-8 bg-gray-100 rounded-lg shadow-lg">
  <div class="flex flex-col justify-between items-center md:flex-row">
    <div class="text-center md:w-1/2 md:text-left">
      <img src="../assets/img/moon.png" alt="Hilera de Tungsteno con forma de Luna" class="mx-auto mb-4 rounded-lg shadow-lg md:mx-0">
      <h3 class="mb-2 text-2xl font-bold">Hilera de Tungsteno con forma de Luna</h3>
    </div>
    <div class="flex justify-center mt-6 md:w-1/2 md:mt-0">
      <RouterLink :to="{name:'comprar'}" class="px-6 py-3 font-bold text-white bg-blue-500 rounded-full transition duration-300 ease-in-out transform hover:bg-blue-700 hover:scale-105">Comprar</RouterLink>
    </div>
  </div>

  <div class="overflow-x-auto mt-8">
    <table class="min-w-full bg-white rounded-lg shadow-lg">
      <thead>
        <tr class="text-sm leading-normal text-gray-600 uppercase bg-gray-200">
          <th class="px-6 py-3 text-left">Modelo</th>
          <th class="px-6 py-3 text-left">Número de Agujeros</th>
          <th class="px-6 py-3 text-left">Medida de Agujeros</th>
          <th class="px-6 py-3 text-left">Tamaño y Peso</th>
        </tr>
      </thead>
      <tbody class="text-sm font-light text-gray-600">
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="px-6 py-3 text-left">Moon-300</td>
          <td class="px-6 py-3 text-left">20</td>
          <td class="px-6 py-3 text-left">Del 1.10 al 3.00</td>
          <td class="px-6 py-3 text-left">204 * 46 * 7mm (480g)</td>
        </tr>
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="px-6 py-3 text-left">Moon-500</td>
          <td class="px-6 py-3 text-left">20</td>
          <td class="px-6 py-3 text-left">Del 3.10 al 5.00</td>
          <td class="px-6 py-3 text-left">204 * 46 * 7mm (485g)</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="p-6 mt-8 text-center bg-purple-200 rounded-lg shadow-lg">
    <p class="text-gray-700">Si necesitas o buscas una medida o marca específica puedes preguntarnos <RouterLink :to="{name:'contacto'}" class="text-blue-500 hover:underline">aquí</RouterLink></p>
  </div>
</section>

<section class="container px-4 mx-auto my-8">
  <div class="flex flex-col justify-between items-center md:flex-row">
    <div class="flex justify-center md:w-1/2 md:justify-start">
      <img src="../assets/img/barra-luna.png" alt="Imagen de barras" class="mb-4 rounded-lg shadow-lg md:mb-0">
    </div>
    <div class="mt-6 md:w-1/2 md:mt-0">
      <h2 class="mb-4 text-3xl font-bold text-center md:text-left">Características Generales</h2>
      <ul class="text-lg list-disc list-inside text-gray-700">
        <li>Acero resistente y con acabados finos.</li>
        <li>Durabilidad y resistencia al desgaste.</li>
        <li>Perforaciones milimétricas secuenciales y precisas.</li>
        <li>Grabados de sellos y números en la placa.</li>
        <li>Terminados en semi-pulido y esquinas redondeadas.</li>
        <li>Tirones suaves cuando se realiza el trefilado.</li>
        <li>Uso rudo y profesional.</li>
      </ul>
      <div class="mt-4 text-center md:text-right">
        <RouterLink :to="{name:'comprar'}" class="px-6 py-3 font-bold text-white bg-blue-500 rounded-full transition duration-300 ease-in-out transform hover:bg-blue-700 hover:scale-105">Comprar</RouterLink>
      </div>
    </div>
  </div>
</section>

<section class="container px-4 mx-auto my-8">
  <h3 class="mb-6 text-3xl font-bold text-center">¿Qué viene incluido?</h3>
  <p class="mb-6 text-center text-gray-700">Estuche de piel sintética con broches + hilera de tungsteno con empaque de celofán.</p>
  <div class="flex flex-col justify-between items-center md:flex-row">
    <div class="flex justify-center md:w-1/2">
      <img src="../assets/img/funda-placa.png" alt="Estuche de piel sintética" class="mb-4 rounded-lg shadow-lg md:mb-0">
    </div>
    <div class="flex justify-center mt-6 md:w-1/2 md:mt-0">
      <RouterLink :to="{name:'comprar'}" class="px-6 py-3 font-bold text-white bg-blue-500 rounded-full transition duration-300 ease-in-out transform hover:bg-blue-700 hover:scale-105">Comprar</RouterLink>
      <RouterLink :to="{name:'contacto'}" class="px-6 py-3 ml-4 font-bold text-white bg-green-500 rounded-full transition duration-300 ease-in-out transform hover:bg-green-700 hover:scale-105">Informes y/o dudas</RouterLink>
    </div>
  </div>
</section>

<div class="my-8 border-t border-gray-200"></div>

<section id="p-hexagono" class="container px-4 mx-auto my-8">
  <div class="flex flex-col justify-between items-center md:flex-row">
    <div class="text-center md:w-1/2 md:text-left">
      <img src="../assets/img/hexagon.png" alt="Hilera de Tungsteno con forma de Hexágono" class="mx-auto mb-4 rounded-lg shadow-lg md:mx-0">
      <h3 class="mb-2 text-2xl font-bold">Hilera de Tungsteno con forma de Hexágono</h3>
    </div>
    <div class="flex justify-center mt-6 md:w-1/2 md:mt-0">
      <RouterLink :to="{name:'comprar'}" class="px-6 py-3 font-bold text-white bg-blue-500 rounded-full transition duration-300 ease-in-out transform hover:bg-blue-700 hover:scale-105">Comprar</RouterLink>
    </div>
  </div>

  <div class="overflow-x-auto mt-8">
    <table class="min-w-full bg-white rounded-lg shadow-lg">
      <thead>
        <tr class="text-sm leading-normal text-gray-600 uppercase bg-gray-200">
          <th class="px-6 py-3 text-left">Modelo</th>
          <th class="px-6 py-3 text-left">Número de Agujeros</th>
          <th class="px-6 py-3 text-left">Medida de Agujeros</th>
          <th class="px-6 py-3 text-left">Tamaño y Peso</th>
        </tr>
      </thead>
      <tbody class="text-sm font-light text-gray-600">
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="px-6 py-3 text-left">Hex-300</td>
          <td class="px-6 py-3 text-left">30</td>
          <td class="px-6 py-3 text-left">Del 0.55 al 3.00</td>
          <td class="px-6 py-3 text-left">204 * 46 * 7mm (475g)</td>
        </tr>
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="px-6 py-3 text-left">Hex-500</td>
          <td class="px-6 py-3 text-left">20</td>
          <td class="px-6 py-3 text-left">Del 3.10 al 5.00</td>
          <td class="px-6 py-3 text-left">204 * 46 * 7mm (475g)</td>
        </tr>
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="px-6 py-3 text-left">Hex-700</td>
          <td class="px-6 py-3 text-left">20</td>
          <td class="px-6 py-3 text-left">Del 5.10 al 7.00</td>
          <td class="px-6 py-3 text-left">204 * 46 * 7mm (465g)</td>
        </tr>
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="px-6 py-3 text-left">Hex-900</td>
          <td class="px-6 py-3 text-left">20</td>
          <td class="px-6 py-3 text-left">Del 7.10 al 9.00</td>
          <td class="px-6 py-3 text-left">204 * 46 * 7mm (465g)</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="p-6 mt-8 text-center bg-purple-200 rounded-lg shadow-lg">
    <p class="text-gray-700">Si necesitas o buscas una medida o marca específica puedes preguntarnos <RouterLink :to="{name:'contacto'}" class="text-blue-500 hover:underline">aquí</RouterLink></p>
  </div>
</section>

<section class="container px-4 mx-auto my-8">
  <div class="flex flex-col justify-between items-center px-5 md:flex-row">
    <div class="flex justify-center px-20 md:w-1/2 md:justify-start">
      <img src="../assets/img/barra-hexagono.png" alt="Imagen de barras" class="rounded-lg shadow-lg mb-4 md:mb-0 max-h-[600px] ml-4">
    </div>
    <div class="mt-6 md:w-1/2 md:mt-0">
      <h2 class="mb-4 text-3xl font-bold text-center md:text-left">Características Generales</h2>
      <ul class="text-lg list-disc list-inside text-gray-700">
        <li>Acero resistente y con acabados finos.</li>
        <li>Durabilidad y resistencia al desgaste.</li>
        <li>Perforaciones milimétricas secuenciales y precisas.</li>
        <li>Grabados de sellos y números en la placa.</li>
        <li>Terminados en semi-pulido y esquinas redondeadas.</li>
        <li>Tirones suaves cuando se realiza el trefilado.</li>
        <li>Uso rudo y profesional.</li>
      </ul>
      <div class="mt-4 text-center md:text-right">
        <RouterLink :to="{name:'comprar'}" class="px-6 py-3 font-bold text-white bg-blue-500 rounded-full transition duration-300 ease-in-out transform hover:bg-blue-700 hover:scale-105">Comprar</RouterLink>
      </div>
    </div>
  </div>
</section>

<section class="container px-4 mx-auto my-8">
  <h3 class="mb-6 text-3xl font-bold text-center">¿Qué viene incluido?</h3>
  <p class="mb-6 text-center text-gray-700">Estuche de piel sintética con broches + hilera de tungsteno con empaque de celofán.</p>
  <div class="flex flex-col justify-between items-center md:flex-row">
    <div class="flex justify-center md:w-1/2">
      <img src="../assets/img/funda-placa.png" alt="Estuche de piel sintética" class="mb-4 rounded-lg shadow-lg md:mb-0">
    </div>
    <div class="flex justify-center mt-6 md:w-1/2 md:mt-0">
      <RouterLink :to="{name:'comprar'}" class="px-6 py-3 font-bold text-white bg-blue-500 rounded-full transition duration-300 ease-in-out transform hover:bg-blue-700 hover:scale-105">Comprar</RouterLink>
      <RouterLink :to="{name:'contacto'}" class="px-6 py-3 ml-4 font-bold text-white bg-green-500 rounded-full transition duration-300 ease-in-out transform hover:bg-green-700 hover:scale-105">Informes y/o dudas</RouterLink>
    </div>
  </div>
</section>

    </template>
   </MainLayout>
</template>

<script lang="ts" setup>
import MainLayout from '@/layouts/MainLayout.vue';
import { onMounted, onUnmounted, ref } from 'vue';

const articleHtml = ref<HTMLDivElement | null>(null)

const scrollY = ref(0)

const userHasScrolled = ref(false)
const scrollHandler = () => {
  scrollY.value = window.scrollY
  //if scrollY.value is greater than articleHtml height
  if (scrollY.value > .002) {
    userHasScrolled.value = true
  } else {
    userHasScrolled.value = false
  }
}

onMounted(() => {
  window.addEventListener('scroll', scrollHandler)
})

onUnmounted(() => {
  window.removeEventListener('scroll', scrollHandler)
})
</script>

<style scoped>

</style>
