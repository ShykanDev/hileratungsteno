<template>
   <MainLayout>
    <template #main>
      <section class="bg-gray-800 text-white py-6 animate-fade-up">
  <div class="container mx-auto text-center px-4">
    <h2 class="text-3xl font-bold mb-4">Conozca todos los productos de la barra trefiladora de tungsteno</h2>
    <p class="text-lg mb-6">Las hileras de tungsteno se diferencian por forma, cantidad de hoyos y dimensiones</p>
    <div class="flex flex-wrap justify-center gap-4">
      <a href="#p-circulo" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105">Círculo</a>
      <a href="#p-cuadrado" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105">Cuadrado</a>
      <a href="#p-semi-circulo" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105">Semi-Círculo</a>
      <a href="#p-ovalo" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105">Óvalo</a>
      <a href="#p-triangulo" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105">Triángulo</a>
      <a href="#p-luna" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105">Luna</a>
      <a href="#p-hexagono" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105">Hexágono</a>
    </div>
  </div>
</section>

<section id="p-circulo" class="container mx-auto my-8 px-4">
  <div class="flex flex-col md:flex-row items-center justify-between">
    <div class="md:w-1/2 text-center md:text-left">
      <img src="../assets/img/round.png" alt="Hilera de Tungsteno con forma circular" class="mx-auto md:mx-0 rounded-lg shadow-lg mb-4">
      <h3 class="text-2xl font-bold mb-2">Hilera de Tungsteno con forma circular</h3>
    </div>
    <div class="md:w-1/2 mt-6 md:mt-0 flex justify-center">
      <RouterLink :to="{ name: 'producto' }" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105">Comprar</RouterLink>
    </div>
  </div>

  <div class="overflow-x-auto mt-8">
    <table class="min-w-full bg-white rounded-lg shadow-lg">
      <thead>
        <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
          <th class="py-3 px-6 text-left">Modelo</th>
          <th class="py-3 px-6 text-left">Número de Agujeros</th>
          <th class="py-3 px-6 text-left">Medida de Agujeros</th>
          <th class="py-3 px-6 text-left">Tamaño y Peso</th>
        </tr>
      </thead>
      <tbody class="text-gray-600 text-sm font-light">
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="py-3 px-6 text-left">R-410</td>
          <td class="py-3 px-6 text-left">52</td>
          <td class="py-3 px-6 text-left">Del 0.26 al 4.10</td>
          <td class="py-3 px-6 text-left">205 * 56 * 6mm (470g)</td>
        </tr>
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="py-3 px-6 text-left">R-280</td>
          <td class="py-3 px-6 text-left">39</td>
          <td class="py-3 px-6 text-left">Del 0.26 al 2.80</td>
          <td class="py-3 px-6 text-left">204 * 46 * 7mm (465g)</td>
        </tr>
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="py-3 px-6 text-left">R-500</td>
          <td class="py-3 px-6 text-left">24</td>
          <td class="py-3 px-6 text-left">Del 2.70 al 5.00</td>
          <td class="py-3 px-6 text-left">204 * 46 * 7mm (465g)</td>
        </tr>
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="py-3 px-6 text-left">R-700</td>
          <td class="py-3 px-6 text-left">20</td>
          <td class="py-3 px-6 text-left">Del 5.10 al 7.00</td>
          <td class="py-3 px-6 text-left">204 * 46 * 7mm (450g)</td>
        </tr>
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="py-3 px-6 text-left">R-900</td>
          <td class="py-3 px-6 text-left">20</td>
          <td class="py-3 px-6 text-left">Del 7.10 al 9.00</td>
          <td class="py-3 px-6 text-left">204 * 46 * 7mm (475g)</td>
        </tr>
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="py-3 px-6 text-left">R-220</td>
          <td class="py-3 px-6 text-left">36</td>
          <td class="py-3 px-6 text-left">Del 0.26 al 2.20</td>
          <td class="py-3 px-6 text-left">204 * 46 * 7mm (470g)</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="bg-purple-200 p-6 rounded-lg shadow-lg mt-8 text-center">
    <p class="text-gray-700">Si necesitas o buscas una medida o marca específica puedes preguntarnos <RouterLink :to="{name:'contacto'}" class="text-blue-500 hover:underline">aquí</RouterLink></p>
  </div>
</section>

<section class="container mx-auto my-8 px-4">
  <div class="flex flex-col md:flex-row items-center justify-between">
    <div class="md:w-1/2 flex justify-center md:justify-start">
      <img src="../assets/img/barras-izquierda.png" alt="Imagen de barras" class="rounded-lg shadow-lg mb-4 md:mb-0">
    </div>
    <div class="md:w-1/2 mt-6 md:mt-0">
      <h2 class="text-3xl font-bold text-center md:text-left mb-4">Características Generales</h2>
      <ul class="text-gray-700 text-lg list-disc list-inside">
        <li>Acero resistente y con acabados finos.</li>
        <li>Durabilidad y resistencia al desgaste.</li>
        <li>Perforaciones milimétricas secuenciales y precisas.</li>
        <li>Grabados de sellos y números en la placa.</li>
        <li>Terminados en semi-pulido y esquinas redondeadas.</li>
        <li>Tirones suaves cuando se realiza el trefilado.</li>
        <li>Uso rudo y profesional.</li>
      </ul>
      <div class="text-center md:text-right mt-4">
        <RouterLink :to="{name:'comprar'}" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105">Comprar</RouterLink>
      </div>
    </div>
  </div>
</section>

<section class="container mx-auto my-8 px-4">
  <h3 class="text-3xl font-bold text-center mb-6">¿Qué viene incluido?</h3>
  <p class="text-gray-700 text-center mb-6">Estuche de piel sintética con broches + hilera de tungsteno con empaque de celofán.</p>
  <div class="flex flex-col md:flex-row items-center justify-between">
    <div class="md:w-1/2 flex justify-center">
      <img src="../assets/img/funda-placa.png" alt="Estuche de piel sintética" class="rounded-lg shadow-lg mb-4 md:mb-0">
    </div>
    <div class="md:w-1/2 mt-6 md:mt-0 flex justify-center">
      <RouterLink :to="{name:'comprar'}" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105">Comprar</RouterLink>
      <RouterLink :to="{name:'contacto'}" class="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 ml-4">Informes y/o dudas</RouterLink>
    </div>
  </div>
</section>

<div class="my-8 border-t border-gray-200"></div>

<section id="p-cuadrado" class="container mx-auto my-8 px-4 bg-gray-100 rounded-lg shadow-lg">
  <div class="flex flex-col md:flex-row items-center justify-between">
    <div class="md:w-1/2 text-center md:text-left">
      <img src="../assets/img/square.png" alt="Hilera de Tungsteno con forma cuadrada" class="mx-auto md:mx-0 rounded-lg shadow-lg mb-4">
      <h3 class="text-2xl font-bold mb-2">Hilera de Tungsteno con forma cuadrada</h3>
    </div>
    <div class="md:w-1/2 mt-6 md:mt-0 flex justify-center">
      <RouterLink :to="{name:'comprar'}" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105">Comprar</RouterLink>
    </div>
  </div>

  <div class="overflow-x-auto mt-8">
    <table class="min-w-full bg-white rounded-lg shadow-lg">
      <thead>
        <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
          <th class="py-3 px-6 text-left">Modelo</th>
          <th class="py-3 px-6 text-left">Número de Agujeros</th>
          <th class="py-3 px-6 text-left">Medida de Agujeros</th>
          <th class="py-3 px-6 text-left">Tamaño y Peso</th>
        </tr>
      </thead>
      <tbody class="text-gray-600 text-sm font-light">
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="py-3 px-6 text-left">Rec-300</td>
          <td class="py-3 px-6 text-left">30</td>
          <td class="py-3 px-6 text-left">Del 0.55 al 3.00</td>
          <td class="py-3 px-6 text-left">204 * 46 * 7mm (470g)</td>
        </tr>
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="py-3 px-6 text-left">Rec-500</td>
          <td class="py-3 px-6 text-left">20</td>
          <td class="py-3 px-6 text-left">Del 3.10 al 5.00</td>
          <td class="py-3 px-6 text-left">204 * 46 * 7mm (500g)</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="bg-purple-200 p-6 rounded-lg shadow-lg mt-8 text-center">
    <p class="text-gray-700">Si necesitas o buscas una medida o marca específica puedes preguntarnos <RouterLink :to="{name:'contacto'}" class="text-blue-500 hover:underline">aquí</RouterLink></p>
  </div>
</section>

<section class="container mx-auto my-8 px-4">
  <div class="flex flex-col md:flex-row items-center justify-between">
    <div class="md:w-1/2 flex justify-center md:justify-start">
      <img src="../assets/img/barra-cuadrada.png" alt="Imagen de barras" class="rounded-lg shadow-lg mb-4 md:mb-0">
    </div>
    <div class="md:w-1/2 mt-6 md:mt-0">
      <h2 class="text-3xl font-bold text-center md:text-left mb-4">Características Generales</h2>
      <ul class="text-gray-700 text-lg list-disc list-inside">
        <li>Acero resistente y con acabados finos.</li>
        <li>Durabilidad y resistencia al desgaste.</li>
        <li>Perforaciones milimétricas secuenciales y precisas.</li>
        <li>Grabados de sellos y números en la placa.</li>
        <li>Terminados en semi-pulido y esquinas redondeadas.</li>
        <li>Tirones suaves cuando se realiza el trefilado.</li>
        <li>Uso rudo y profesional.</li>
      </ul>
      <div class="text-center md:text-right mt-4">
        <RouterLink :to="{name:'comprar'}" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105">Comprar</RouterLink>
      </div>
    </div>
  </div>
</section>

<section class="container mx-auto my-8 px-4">
  <h3 class="text-3xl font-bold text-center mb-6">¿Qué viene incluido?</h3>
  <p class="text-gray-700 text-center mb-6">Estuche de piel sintética con broches + hilera de tungsteno con empaque de celofán.</p>
  <div class="flex flex-col md:flex-row items-center justify-between">
    <div class="md:w-1/2 flex justify-center">
      <img src="../assets/img/funda-placa.png" alt="Estuche de piel sintética" class="rounded-lg shadow-lg mb-4 md:mb-0">
    </div>
    <div class="md:w-1/2 mt-6 md:mt-0 flex justify-center">
      <RouterLink :to="{name:'comprar'}" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105">Comprar</RouterLink>
      <RouterLink :to="{name:'contacto'}" class="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 ml-4">Informes y/o dudas</RouterLink>
    </div>
  </div>
</section>

<div class="my-8 border-t border-gray-200"></div>

<section id="p-semi-circulo" class="container mx-auto my-8 px-4">
  <div class="flex flex-col md:flex-row items-center justify-between">
    <div class="md:w-1/2 text-center md:text-left">
      <img src="../assets/img/half-round.png" alt="Hilera de Tungsteno con forma Semi-Circulo" class="mx-auto md:mx-0 rounded-lg shadow-lg mb-4">
      <h3 class="text-2xl font-bold mb-2">Hilera de Tungsteno con forma Semi-Círculo</h3>
    </div>
    <div class="md:w-1/2 mt-6 md:mt-0 flex justify-center">
      <RouterLink :to="{name:'comprar'}" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105">Comprar</RouterLink>
    </div>
  </div>

  <div class="overflow-x-auto mt-8">
    <table class="min-w-full bg-white rounded-lg shadow-lg">
      <thead>
        <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
          <th class="py-3 px-6 text-left">Modelo</th>
          <th class="py-3 px-6 text-left">Número de Agujeros</th>
          <th class="py-3 px-6 text-left">Medida de Agujeros</th>
          <th class="py-3 px-6 text-left">Tamaño y Peso</th>
        </tr>
      </thead>
      <tbody class="text-gray-600 text-sm font-light">
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="py-3 px-6 text-left">HR-300</td>
          <td class="py-3 px-6 text-left">30</td>
          <td class="py-3 px-6 text-left">Del 0.55 al 3.00</td>
          <td class="py-3 px-6 text-left">204 * 46 * 7mm (495g)</td>
        </tr>
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="py-3 px-6 text-left">HR-500</td>
          <td class="py-3 px-6 text-left">20</td>
          <td class="py-3 px-6 text-left">Del 3.10 al 5.00</td>
          <td class="py-3 px-6 text-left">204 * 46 * 7mm (480g)</td>
        </tr>
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="py-3 px-6 text-left">HR-700</td>
          <td class="py-3 px-6 text-left">20</td>
          <td class="py-3 px-6 text-left">Del 5.10 al 7.00</td>
          <td class="py-3 px-6 text-left">204 * 46 * 7mm (455g)</td>
        </tr>
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="py-3 px-6 text-left">HR-900</td>
          <td class="py-3 px-6 text-left">20</td>
          <td class="py-3 px-6 text-left">Del 7.10 al 9.00</td>
          <td class="py-3 px-6 text-left">204 * 46 * 7mm (470g)</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="bg-purple-200 p-6 rounded-lg shadow-lg mt-8 text-center">
    <p class="text-gray-700">Si necesitas o buscas una medida o marca específica puedes preguntarnos <RouterLink :to="{name:'contacto'}" class="text-blue-500 hover:underline">aquí</RouterLink></p>
  </div>
</section>

<section class="container mx-auto my-8 px-4">
  <div class="flex flex-col md:flex-row items-center justify-between">
    <div class="md:w-1/2 flex justify-center md:justify-start">
      <img src="../assets/img/barra-semicirculo.png" alt="Imagen de barras" class="rounded-lg shadow-lg mb-4 md:mb-0">
    </div>
    <div class="md:w-1/2 mt-6 md:mt-0">
      <h2 class="text-3xl font-bold text-center md:text-left mb-4">Características Generales</h2>
      <ul class="text-gray-700 text-lg list-disc list-inside">
        <li>Acero resistente y con acabados finos.</li>
        <li>Durabilidad y resistencia al desgaste.</li>
        <li>Perforaciones milimétricas secuenciales y precisas.</li>
        <li>Grabados de sellos y números en la placa.</li>
        <li>Terminados en semi-pulido y esquinas redondeadas.</li>
        <li>Tirones suaves cuando se realiza el trefilado.</li>
        <li>Uso rudo y profesional.</li>
      </ul>
      <div class="text-center md:text-right mt-4">
        <RouterLink :to="{name:'comprar'}" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105">Comprar</RouterLink>
      </div>
    </div>
  </div>
</section>

<section class="container mx-auto my-8 px-4">
  <h3 class="text-3xl font-bold text-center mb-6">¿Qué viene incluido?</h3>
  <p class="text-gray-700 text-center mb-6">Estuche de piel sintética con broches + hilera de tungsteno con empaque de celofán.</p>
  <div class="flex flex-col md:flex-row items-center justify-between">
    <div class="md:w-1/2 flex justify-center">
      <img src="../assets/img/funda-placa.png" alt="Estuche de piel sintética" class="rounded-lg shadow-lg mb-4 md:mb-0">
    </div>
    <div class="md:w-1/2 mt-6 md:mt-0 flex justify-center">
      <RouterLink :to="{name:'comprar'}" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105">Comprar</RouterLink>
      <RouterLink :to="{name:'contacto'}" class="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 ml-4">Informes y/o dudas</RouterLink>
    </div>
  </div>
</section>

<div class="my-8 border-t border-gray-200"></div>

<section id="p-ovalo" class="container mx-auto my-8 px-4 bg-gray-100 rounded-lg shadow-lg">
  <div class="flex flex-col md:flex-row items-center justify-between">
    <div class="md:w-1/2 text-center md:text-left">
      <img src="../assets/img/oval.png" alt="Hilera de Tungsteno con forma Ovalada" class="mx-auto md:mx-0 rounded-lg shadow-lg mb-4">
      <h3 class="text-2xl font-bold mb-2">Hilera de Tungsteno con forma Ovalada</h3>
    </div>
    <div class="md:w-1/2 mt-6 md:mt-0 flex justify-center">
      <RouterLink :to="{name:'comprar'}" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105">Comprar</RouterLink>
    </div>
  </div>

  <div class="overflow-x-auto mt-8">
    <table class="min-w-full bg-white rounded-lg shadow-lg">
      <thead>
        <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
          <th class="py-3 px-6 text-left">Modelo</th>
          <th class="py-3 px-6 text-left">Número de Agujeros</th>
          <th class="py-3 px-6 text-left">Medida de Agujeros</th>
          <th class="py-3 px-6 text-left">Tamaño y Peso</th>
        </tr>
      </thead>
      <tbody class="text-gray-600 text-sm font-light">
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="py-3 px-6 text-left">Ova-500</td>
          <td class="py-3 px-6 text-left">20</td>
          <td class="py-3 px-6 text-left">Del 3.10 al 5.00</td>
          <td class="py-3 px-6 text-left">204 * 46 * 7mm (480g)</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="bg-purple-200 p-6 rounded-lg shadow-lg mt-8 text-center">
    <p class="text-gray-700">Si necesitas o buscas una medida o marca específica puedes preguntarnos <RouterLink :to="{name:'contacto'}" class="text-blue-500 hover:underline">aquí</RouterLink></p>
  </div>
</section>

<section class="container mx-auto my-8 px-4">
  <div class="flex flex-col md:flex-row items-center justify-between">
    <div class="md:w-1/2 flex justify-center md:justify-start">
      <img src="../assets/img/barra-ovalo.png" alt="Imagen de barras" class="rounded-lg shadow-lg mb-4 md:mb-0">
    </div>
    <div class="md:w-1/2 mt-6 md:mt-0">
      <h2 class="text-3xl font-bold text-center md:text-left mb-4">Características Generales</h2>
      <ul class="text-gray-700 text-lg list-disc list-inside">
        <li>Acero resistente y con acabados finos.</li>
        <li>Durabilidad y resistencia al desgaste.</li>
        <li>Perforaciones milimétricas secuenciales y precisas.</li>
        <li>Grabados de sellos y números en la placa.</li>
        <li>Terminados en semi-pulido y esquinas redondeadas.</li>
        <li>Tirones suaves cuando se realiza el trefilado.</li>
        <li>Uso rudo y profesional.</li>
      </ul>
      <div class="text-center md:text-right mt-4">
        <RouterLink :to="{name:'comprar'}" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105">Comprar</RouterLink>
      </div>
    </div>
  </div>
</section>

<section class="container mx-auto my-8 px-4">
  <h3 class="text-3xl font-bold text-center mb-6">¿Qué viene incluido?</h3>
  <p class="text-gray-700 text-center mb-6">Estuche de piel sintética con broches + hilera de tungsteno con empaque de celofán.</p>
  <div class="flex flex-col md:flex-row items-center justify-between">
    <div class="md:w-1/2 flex justify-center">
      <img src="../assets/img/funda-placa.png" alt="Estuche de piel sintética" class="rounded-lg shadow-lg mb-4 md:mb-0">
    </div>
    <div class="md:w-1/2 mt-6 md:mt-0 flex justify-center">
      <RouterLink :to="{name:'comprar'}" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105">Comprar</RouterLink>
      <RouterLink :to="{name:'contacto'}" class="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 ml-4">Informes y/o dudas</RouterLink>
    </div>
  </div>
</section>

<div class="my-8 border-t border-gray-200"></div>

<section id="p-triangulo" class="container mx-auto my-8 px-4">
  <div class="flex flex-col md:flex-row items-center justify-between">
    <div class="md:w-1/2 text-center md:text-left">
      <img src="../assets/img/triangle.png" alt="Hilera de Tungsteno con forma Triangular" class="mx-auto md:mx-0 rounded-lg shadow-lg mb-4">
      <h3 class="text-2xl font-bold mb-2">Hilera de Tungsteno con forma Triangular</h3>
    </div>
    <div class="md:w-1/2 mt-6 md:mt-0 flex justify-center">
      <RouterLink :to="{name:'comprar'}" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105">Comprar</RouterLink>
    </div>
  </div>

  <div class="overflow-x-auto mt-8">
    <table class="min-w-full bg-white rounded-lg shadow-lg">
      <thead>
        <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
          <th class="py-3 px-6 text-left">Modelo</th>
          <th class="py-3 px-6 text-left">Número de Agujeros</th>
          <th class="py-3 px-6 text-left">Medida de Agujeros</th>
          <th class="py-3 px-6 text-left">Tamaño y Peso</th>
        </tr>
      </thead>
      <tbody class="text-gray-600 text-sm font-light">
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="py-3 px-6 text-left">Tri-300</td>
          <td class="py-3 px-6 text-left">20</td>
          <td class="py-3 px-6 text-left">Del 1.10 al 3.00</td>
          <td class="py-3 px-6 text-left">204 * 46 * 7mm (480g)</td>
        </tr>
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="py-3 px-6 text-left">Tri-500</td>
          <td class="py-3 px-6 text-left">20</td>
          <td class="py-3 px-6 text-left">Del 3.10 al 5.00</td>
          <td class="py-3 px-6 text-left">204 * 46 * 7mm (475g)</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="bg-purple-200 p-6 rounded-lg shadow-lg mt-8 text-center">
    <p class="text-gray-700">Si necesitas o buscas una medida o marca específica puedes preguntarnos <RouterLink :to="{name:'contacto'}" class="text-blue-500 hover:underline">aquí</RouterLink></p>
  </div>
</section>

<section class="container mx-auto my-8 px-4">
  <div class="flex flex-col md:flex-row items-center justify-between">
    <div class="md:w-1/2 flex justify-center md:justify-start">
      <img src="../assets/img/barra-triangulo.png" alt="Imagen de barras" class="rounded-lg shadow-lg mb-4 md:mb-0">
    </div>
    <div class="md:w-1/2 mt-6 md:mt-0">
      <h2 class="text-3xl font-bold text-center md:text-left mb-4">Características Generales</h2>
      <ul class="text-gray-700 text-lg list-disc list-inside">
        <li>Acero resistente y con acabados finos.</li>
        <li>Durabilidad y resistencia al desgaste.</li>
        <li>Perforaciones milimétricas secuenciales y precisas.</li>
        <li>Grabados de sellos y números en la placa.</li>
        <li>Terminados en semi-pulido y esquinas redondeadas.</li>
        <li>Tirones suaves cuando se realiza el trefilado.</li>
        <li>Uso rudo y profesional.</li>
      </ul>
      <div class="text-center md:text-right mt-4">
        <RouterLink :to="{name:'comprar'}" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105">Comprar</RouterLink>
      </div>
    </div>
  </div>
</section>

<section class="container mx-auto my-8 px-4">
  <h3 class="text-3xl font-bold text-center mb-6">¿Qué viene incluido?</h3>
  <p class="text-gray-700 text-center mb-6">Estuche de piel sintética con broches + hilera de tungsteno con empaque de celofán.</p>
  <div class="flex flex-col md:flex-row items-center justify-between">
    <div class="md:w-1/2 flex justify-center">
      <img src="../assets/img/funda-placa.png" alt="Estuche de piel sintética" class="rounded-lg shadow-lg mb-4 md:mb-0">
    </div>
    <div class="md:w-1/2 mt-6 md:mt-0 flex justify-center">
      <RouterLink :to="{name:'comprar'}" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105">Comprar</RouterLink>
      <RouterLink :to="{name:'contacto'}" class="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 ml-4">Informes y/o dudas</RouterLink>
    </div>
  </div>
</section>

<div class="my-8 border-t border-gray-200"></div>

<section id="p-luna" class="container mx-auto my-8 px-4 bg-gray-100 rounded-lg shadow-lg">
  <div class="flex flex-col md:flex-row items-center justify-between">
    <div class="md:w-1/2 text-center md:text-left">
      <img src="../assets/img/moon.png" alt="Hilera de Tungsteno con forma de Luna" class="mx-auto md:mx-0 rounded-lg shadow-lg mb-4">
      <h3 class="text-2xl font-bold mb-2">Hilera de Tungsteno con forma de Luna</h3>
    </div>
    <div class="md:w-1/2 mt-6 md:mt-0 flex justify-center">
      <RouterLink :to="{name:'comprar'}" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105">Comprar</RouterLink>
    </div>
  </div>

  <div class="overflow-x-auto mt-8">
    <table class="min-w-full bg-white rounded-lg shadow-lg">
      <thead>
        <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
          <th class="py-3 px-6 text-left">Modelo</th>
          <th class="py-3 px-6 text-left">Número de Agujeros</th>
          <th class="py-3 px-6 text-left">Medida de Agujeros</th>
          <th class="py-3 px-6 text-left">Tamaño y Peso</th>
        </tr>
      </thead>
      <tbody class="text-gray-600 text-sm font-light">
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="py-3 px-6 text-left">Moon-300</td>
          <td class="py-3 px-6 text-left">20</td>
          <td class="py-3 px-6 text-left">Del 1.10 al 3.00</td>
          <td class="py-3 px-6 text-left">204 * 46 * 7mm (480g)</td>
        </tr>
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="py-3 px-6 text-left">Moon-500</td>
          <td class="py-3 px-6 text-left">20</td>
          <td class="py-3 px-6 text-left">Del 3.10 al 5.00</td>
          <td class="py-3 px-6 text-left">204 * 46 * 7mm (485g)</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="bg-purple-200 p-6 rounded-lg shadow-lg mt-8 text-center">
    <p class="text-gray-700">Si necesitas o buscas una medida o marca específica puedes preguntarnos <RouterLink :to="{name:'contacto'}" class="text-blue-500 hover:underline">aquí</RouterLink></p>
  </div>
</section>

<section class="container mx-auto my-8 px-4">
  <div class="flex flex-col md:flex-row items-center justify-between">
    <div class="md:w-1/2 flex justify-center md:justify-start">
      <img src="../assets/img/barra-luna.png" alt="Imagen de barras" class="rounded-lg shadow-lg mb-4 md:mb-0">
    </div>
    <div class="md:w-1/2 mt-6 md:mt-0">
      <h2 class="text-3xl font-bold text-center md:text-left mb-4">Características Generales</h2>
      <ul class="text-gray-700 text-lg list-disc list-inside">
        <li>Acero resistente y con acabados finos.</li>
        <li>Durabilidad y resistencia al desgaste.</li>
        <li>Perforaciones milimétricas secuenciales y precisas.</li>
        <li>Grabados de sellos y números en la placa.</li>
        <li>Terminados en semi-pulido y esquinas redondeadas.</li>
        <li>Tirones suaves cuando se realiza el trefilado.</li>
        <li>Uso rudo y profesional.</li>
      </ul>
      <div class="text-center md:text-right mt-4">
        <RouterLink :to="{name:'comprar'}" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105">Comprar</RouterLink>
      </div>
    </div>
  </div>
</section>

<section class="container mx-auto my-8 px-4">
  <h3 class="text-3xl font-bold text-center mb-6">¿Qué viene incluido?</h3>
  <p class="text-gray-700 text-center mb-6">Estuche de piel sintética con broches + hilera de tungsteno con empaque de celofán.</p>
  <div class="flex flex-col md:flex-row items-center justify-between">
    <div class="md:w-1/2 flex justify-center">
      <img src="../assets/img/funda-placa.png" alt="Estuche de piel sintética" class="rounded-lg shadow-lg mb-4 md:mb-0">
    </div>
    <div class="md:w-1/2 mt-6 md:mt-0 flex justify-center">
      <RouterLink :to="{name:'comprar'}" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105">Comprar</RouterLink>
      <RouterLink :to="{name:'contacto'}" class="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 ml-4">Informes y/o dudas</RouterLink>
    </div>
  </div>
</section>

<div class="my-8 border-t border-gray-200"></div>

<section id="p-hexagono" class="container mx-auto my-8 px-4">
  <div class="flex flex-col md:flex-row items-center justify-between">
    <div class="md:w-1/2 text-center md:text-left">
      <img src="../assets/img/hexagon.png" alt="Hilera de Tungsteno con forma de Hexágono" class="mx-auto md:mx-0 rounded-lg shadow-lg mb-4">
      <h3 class="text-2xl font-bold mb-2">Hilera de Tungsteno con forma de Hexágono</h3>
    </div>
    <div class="md:w-1/2 mt-6 md:mt-0 flex justify-center">
      <RouterLink :to="{name:'comprar'}" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105">Comprar</RouterLink>
    </div>
  </div>

  <div class="overflow-x-auto mt-8">
    <table class="min-w-full bg-white rounded-lg shadow-lg">
      <thead>
        <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
          <th class="py-3 px-6 text-left">Modelo</th>
          <th class="py-3 px-6 text-left">Número de Agujeros</th>
          <th class="py-3 px-6 text-left">Medida de Agujeros</th>
          <th class="py-3 px-6 text-left">Tamaño y Peso</th>
        </tr>
      </thead>
      <tbody class="text-gray-600 text-sm font-light">
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="py-3 px-6 text-left">Hex-300</td>
          <td class="py-3 px-6 text-left">30</td>
          <td class="py-3 px-6 text-left">Del 0.55 al 3.00</td>
          <td class="py-3 px-6 text-left">204 * 46 * 7mm (475g)</td>
        </tr>
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="py-3 px-6 text-left">Hex-500</td>
          <td class="py-3 px-6 text-left">20</td>
          <td class="py-3 px-6 text-left">Del 3.10 al 5.00</td>
          <td class="py-3 px-6 text-left">204 * 46 * 7mm (475g)</td>
        </tr>
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="py-3 px-6 text-left">Hex-700</td>
          <td class="py-3 px-6 text-left">20</td>
          <td class="py-3 px-6 text-left">Del 5.10 al 7.00</td>
          <td class="py-3 px-6 text-left">204 * 46 * 7mm (465g)</td>
        </tr>
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="py-3 px-6 text-left">Hex-900</td>
          <td class="py-3 px-6 text-left">20</td>
          <td class="py-3 px-6 text-left">Del 7.10 al 9.00</td>
          <td class="py-3 px-6 text-left">204 * 46 * 7mm (465g)</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="bg-purple-200 p-6 rounded-lg shadow-lg mt-8 text-center">
    <p class="text-gray-700">Si necesitas o buscas una medida o marca específica puedes preguntarnos <RouterLink :to="{name:'contacto'}" class="text-blue-500 hover:underline">aquí</RouterLink></p>
  </div>
</section>

<section class="container mx-auto my-8 px-4">
  <div class="flex flex-col md:flex-row items-center justify-between px-5">
    <div class="md:w-1/2 flex justify-center md:justify-start px-20">
      <img src="../assets/img/barra-hexagono.png" alt="Imagen de barras" class="rounded-lg shadow-lg mb-4 md:mb-0 max-h-[600px] ml-4">
    </div>
    <div class="md:w-1/2 mt-6 md:mt-0">
      <h2 class="text-3xl font-bold text-center md:text-left mb-4">Características Generales</h2>
      <ul class="text-gray-700 text-lg list-disc list-inside">
        <li>Acero resistente y con acabados finos.</li>
        <li>Durabilidad y resistencia al desgaste.</li>
        <li>Perforaciones milimétricas secuenciales y precisas.</li>
        <li>Grabados de sellos y números en la placa.</li>
        <li>Terminados en semi-pulido y esquinas redondeadas.</li>
        <li>Tirones suaves cuando se realiza el trefilado.</li>
        <li>Uso rudo y profesional.</li>
      </ul>
      <div class="text-center md:text-right mt-4">
        <RouterLink :to="{name:'comprar'}" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105">Comprar</RouterLink>
      </div>
    </div>
  </div>
</section>

<section class="container mx-auto my-8 px-4">
  <h3 class="text-3xl font-bold text-center mb-6">¿Qué viene incluido?</h3>
  <p class="text-gray-700 text-center mb-6">Estuche de piel sintética con broches + hilera de tungsteno con empaque de celofán.</p>
  <div class="flex flex-col md:flex-row items-center justify-between">
    <div class="md:w-1/2 flex justify-center">
      <img src="../assets/img/funda-placa.png" alt="Estuche de piel sintética" class="rounded-lg shadow-lg mb-4 md:mb-0">
    </div>
    <div class="md:w-1/2 mt-6 md:mt-0 flex justify-center">
      <RouterLink :to="{name:'comprar'}" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105">Comprar</RouterLink>
      <RouterLink :to="{name:'contacto'}" class="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 ml-4">Informes y/o dudas</RouterLink>
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
