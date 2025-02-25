<template>
  <MainLayout>
    <template #main>
      <section class="py-8 text-white bg-gradient-to-r from-blue-800 to-sky-950 animate-fade-up">
        <div class="container flex flex-col items-start justify-between px-4 mx-auto md:flex-row">
          <div class="text-center md:w-1/2 md:text-left">
            <h1 class="mb-4 text-5xl font-extrabold">Hilera de Tungsteno</h1>
            <p class="mb-4 text-lg">Herramienta para trefilado de metales ferrosos y no ferrosos, especial para la elaboración de productos de joyería de uso manual con alta resistencia al desgaste y con tirones suaves al realizar el trefilado.</p>
            <div class="flex justify-center space-x-4 md:justify-start">
              <RouterLink :to="{ name: 'tungsteno' }"  class="px-6 py-3 font-bold text-white transition duration-300 ease-in-out transform bg-blue-500 rounded-full hover:bg-blue-700 hover:scale-105">Saber más</RouterLink>
              <a href="https://www.mercadolibre.com.mx" target="_blank" rel="noopener noreferrer" class="flex items-center">
                <img src="../assets/img/mercadolibre.png" alt="MercadoLibre" class="box-border h-10 p-1 bg-white rounded-2xl">
              </a>
            </div>
            <div class="flex items-center gap-4 my-3">
              <img src="https://www.etiquetajoyeria.com/assets/MercadoLiderCapture-B_99mu2n.png" class="border-2 border-green-400 rounded-2xl" alt="">
              <img class="border-2 rounded-2xl border-sky-400" src="data:image/png;base64,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" alt="">
            </div>
            <div>
              <img src="../assets/img/shenhwa.png" alt="">
            </div>
            <p class="mt-4 text-lg">¿Tienes dudas? Puedes ponerte en contacto <RouterLink :to="{ name: 'contacto' }" class="text-blue-400 hover:underline">aquí</RouterLink></p>
          </div>
          <div class="flex flex-wrap items-center justify-between mt-6 md:w-1/2 md:mt-0 sm:flex-nowrap">
            <img src="../assets/img/site-header.png" alt="Imagen de fondo" class="mx-auto rounded-lg shadow-lg md:mx-0">
            <img src="../assets/img/Logo-quality.png" alt="Quality Logo" class="w-64 p-4 mb-4 bg-white rounded-2xlA">

          </div>
        </div>
      </section>

      <section class="container px-4 mx-auto my-8">
        <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div class="p-6 transition duration-300 ease-in-out transform bg-white rounded-lg shadow-lg hover:shadow-xl hover:scale-105">
            <h3 class="mb-2 text-2xl font-semibold text-gray-800">Publicidad</h3>
            <a href="https://arcosegueta.com/" target="_blank" rel="noopener noreferrer">
              <div class="flex items-center">
                <div class="w-3/4">
                  <h2 class="text-3xl font-bold text-gray-900">Arco Alemán</h2>
                  <p class="text-gray-700">Arcos y seguetas premium para diferentes usos y profesiones</p>
                </div>
                <div class="flex justify-center w-1/4">
                  <img src="../assets/img/ArcoSinFondo.png" alt="Arco Alemán" class="h-24">
                </div>
              </div>
            </a>
          </div>
          <div class="p-6 transition duration-300 ease-in-out transform bg-white rounded-lg shadow-lg hover:shadow-xl hover:scale-105">
            <h3 class="mb-2 text-2xl font-semibold text-gray-800">Publicidad</h3>
            <a href="https://etiquetastyvek.com/" target="_blank" rel="noopener noreferrer">
              <div class="flex items-center">
                <div class="w-3/4">
                  <h2 class="text-3xl font-bold text-gray-900">Etiquetas Premium Tyvek</h2>
                  <p class="text-gray-700">Etiquetas premium resistentes al vapor, humedad y a deformaciones</p>
                </div>
                <div class="flex justify-center w-1/4">
                  <img src="../assets/img/Caja3EtiquetasCirculares.png" alt="Etiquetas Tyvek" class="h-24">
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section id="saber-mas" class="container px-4 mx-auto my-8">
        <div class="flex flex-col items-center justify-between md:flex-row">
          <div class="md:w-1/2">
            <h2 class="mb-4 text-4xl font-bold text-gray-800">Reduce el grosor de diferentes metales</h2>
            <p class="mb-4 text-gray-700">Reducción del grosor de varios tipos de alambre de diferentes metales como oro, plata, cobre, platino, entre otros.</p>
            <p class="mb-4 text-gray-700">Al brindar una nueva forma la longitud aumenta mientras que el diámetro disminuye.</p>
            <p class="mb-4 font-semibold text-gray-800">Metales con los que se pueden trabajar:</p>
            <div class="grid grid-cols-2 gap-4">
              <ul class="text-gray-700 list-disc list-inside">
                <li>Acero de carbono</li>
                <li>Aluminio</li>
                <li>Bronce</li>
                <li>Cobre</li>
                <li>Cuproníquel</li>
              </ul>
              <ul class="text-gray-700 list-disc list-inside">
                <li>Latón</li>
                <li>Magnesio</li>
                <li>Metal Galvanizado</li>
                <li>Oro</li>
                <li>Platino</li>
              </ul>
            </div>
          </div>
          <div class="mt-6 md:w-1/2 md:mt-0">
            <img src="../assets/img/plata-oro-cobre.png" alt="Metales" class="mx-auto rounded-lg shadow-lg md:mx-0">
          </div>
        </div>
      </section>

      <section class="container px-4 mx-auto my-8">
        <h2 class="mb-6 text-4xl font-bold text-center text-gray-800">Calidad y eficiencia</h2>
        <div class="flex flex-col items-center justify-between md:flex-row">
          <div class="flex justify-center md:w-1/4">
            <img src="../assets/img/shenhwa.png" alt="Shenhwa" class="h-24">
          </div>
          <div class="mt-6 md:w-3/4 md:mt-0">
            <p class="text-gray-700">Altamente resistente al desgaste y a los impactos, proporciona un tirón más suave y una durabilidad significativa de la herramienta por la calidad del tungsteno que se empleó para la fabricación de la hilera.</p>
          </div>
        </div>
      </section>

      <section class="py-8 bg-gray-100">
        <div class="container flex flex-col items-center justify-between px-4 mx-auto md:flex-row">
          <div class="text-center md:w-1/2 md:text-left">
            <img src="../assets/img/fondo-materiales.png" alt="Materiales" class="mx-auto rounded-lg shadow-lg md:mx-0">
          </div>
          <div class="mt-6 ml-3 md:w-1/2 md:mt-0">
            <h2 class="mb-4 text-4xl font-bold text-gray-800">Materiales</h2>
            <p class="mb-4 text-gray-700">La hilera de tungsteno está hecha con Tungsteno Carbide y acero altamente templado que proporciona una rigidez y resistencia superior, proporcionando una mejora en el trabajo manual del trefilado y una mejor resistencia al tensar, trefilar, golpes y uso de la hilera.</p>
            <RouterLink :to="{ name: 'producto' }" class="px-6 py-3 font-bold text-white transition duration-300 ease-in-out transform bg-blue-500 rounded-full hover:bg-blue-700 hover:scale-105">Conocer Más</RouterLink>
          </div>
        </div>
      </section>

      <section class="container px-4 mx-auto my-8">
        <h2 class="mb-6 text-4xl font-bold text-center text-gray-800">¿Por qué y qué es el tungsteno?</h2>
        <p class="mb-6 text-center text-gray-700">Es un metal escaso en la corteza terrestre, pero se encuentra en determinados minerales en forma de óxidos o sales. Es de color gris acerado, muy duro y denso, tiene el punto de fusión más elevado de todos los metales y el punto de ebullición más alto de todos los elementos conocidos.</p>
        <div class="flex flex-col items-center justify-between md:flex-row">
          <div class="flex justify-center md:w-1/2">
            <img src="../assets/img/zoom-1.png" alt="Insertos fijos" class="h-48 rounded-lg shadow-lg">
          </div>
          <div class="mt-6 md:w-1/2 md:mt-0">
            <h2 class="mb-2 text-3xl font-bold text-gray-800">Insertos fijos permanentemente</h2>
            <p class="text-gray-700">Cada placa tiene un inserto dependiendo la medida, estos están colocados de forma segura y fijas para un desempeño óptimo en el trabajo.</p>
          </div>
        </div>
        <div class="flex flex-col items-center justify-between mt-8 md:flex-row">
          <div class="mt-6 md:w-1/2 md:mt-0">
            <h2 class="mb-2 text-3xl font-bold text-gray-800">Ángulos de reducción exactos</h2>
            <p class="text-gray-700">El radio de cada tamaño son exactas a las especificaciones para una tracción más suave al tirar del alambre.</p>
          </div>
          <div class="flex justify-center md:w-1/2">
            <img src="../assets/img/zoom-2.png" alt="Ángulos de reducción" class="h-48 rounded-lg shadow-lg">
          </div>
        </div>
        <div class="flex flex-col items-center justify-between mt-8 md:flex-row">
          <div class="flex justify-center md:w-1/2">
            <img src="../assets/img/hilera-dos-partes.jpg" alt="Durabilidad" class="h-48 rounded-lg shadow-lg">
          </div>
          <div class="mt-6 md:w-1/2 md:mt-0">
            <h2 class="mb-2 text-3xl font-bold text-gray-800">Durabilidad y rigidez para las demandas de trabajo más altas</h2>
            <p class="text-gray-700">Acero altamente templado para una durabilidad mayor y vida útil prolongada, cuenta con un acabado libre de rebaba y con una sólida estructura resistente a golpes y a presiones altas, manteniendo la forma y su vida útil en óptimas condiciones después de un trabajo rudo.</p>
          </div>
        </div>
      </section>

      <section class="py-8 bg-gray-100">
        <div class="container mx-auto">
          <h2 class="mb-6 text-4xl font-bold text-center text-gray-800">Acabados premium y de calidad</h2>
          <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div class="text-center">
              <img src="../assets/img/card-1.png" alt="Cuerpo de acero" class="w-full mx-auto mb-4 rounded-lg shadow-lg">
              <p class="font-semibold text-gray-800">Cuerpo de acero semi-pulido brillante</p>
              <p class="text-gray-700">Todo el cuerpo de la hilera, tiene un acabado brillante y semi-pulido.</p>
            </div>
            <div class="text-center">
              <img src="../assets/img/card-2.png" alt="Sin residuos" class="w-full mx-auto mb-4 rounded-lg shadow-lg">
              <p class="font-semibold text-gray-800">Sin residuos de rebaba o imperfecciones</p>
              <p class="text-gray-700">Se cuida que no queden rebabas del acero en el cuerpo de la barra, evitando accidentes al manipular.</p>
            </div>
            <div class="text-center">
              <img src="../assets/img/card-3.png" alt="Bordes redondeados" class="w-full mx-auto mb-4 rounded-lg shadow-lg">
              <p class="font-semibold text-gray-800">Bordes finamente redondeados</p>
              <p class="text-gray-700">Para evitar cortaduras se pulen las esquinas dando un acabado con un sutil borde para poder hacer una sujeción correcta de la hilera.</p>
            </div>
          </div>
          <p class="mt-6 text-center text-gray-700">Conoce las propiedades del Tungsteno (Wolframio) <RouterLink  :to="{ name: 'tungsteno' }" class="text-blue-500 hover:underline">aquí</RouterLink></p>
        </div>
      </section>

      <section class="container px-4 mx-auto my-8">
        <div class="flex flex-col items-center justify-between md:flex-row">
          <div class="md:w-1/2">
            <h2 class="mb-4 text-4xl font-bold text-gray-800">Para uso manual y con máquina trefiladora</h2>
            <p class="mb-4 text-gray-700">Para un uso diverso la hilera de tungsteno puede ser usada en máquina o de forma manual con prensa para sujetarlo.</p>
            <p class="text-gray-700">Por sus materiales podrá trabajar de forma óptima con tirones suaves por la calidad y una resistencia al desgaste mayor.</p>
          </div>
          <div class="flex justify-center mt-6 md:w-1/2 md:mt-0">
            <img src="../assets/img/maquina.png" alt="Máquina trefiladora" class="h-64 rounded-lg shadow-lg">
          </div>
        </div>
      </section>

      <section class="container px-4 mx-auto my-8">
        <h2 class="mb-6 text-4xl font-bold text-center text-gray-800">Productos</h2>
        <div class="flex flex-col items-center justify-between md:flex-row">
          <div class="md:w-1/2">
            <h3 class="mb-2 text-3xl font-semibold text-blue-500">Por formas</h3>
            <p class="mb-4 text-gray-700">Las hileras de tungsteno tienen diferentes formas, tamaños y número de hoyos. Seleccione una forma para conocer todos los tamaños disponibles y aperturas en milímetros.</p>
            <div class="flex justify-center">
              <img src="../assets/img/Logo-quality.png" alt="Quality Logo" class="h-16 mb-4">
            </div>
            <div class="flex justify-center">
              <RouterLink :to="{name:'producto'}" class="px-6 py-3 font-bold text-white transition duration-300 ease-in-out transform bg-blue-500 rounded-full hover:bg-blue-700 hover:scale-105">Ver Productos</RouterLink>
            </div>
          </div>
          <div class="mt-6 md:w-1/2 md:mt-0">
            <h3 class="mb-2 text-3xl font-semibold text-green-500">Seleccione una forma para saber más del producto</h3>
            <div class="grid grid-cols-2 gap-4 md:grid-cols-4">
              <div class="text-center">
                <RouterLink :to="{name:'home'}"><img src="../assets/img/rectangle.png" alt="Rectángulo" class="h-16 mx-auto mb-2 rounded-lg shadow-lg"></RouterLink>
                <p class="text-gray-700">Rectángulo</p>
              </div>
              <div class="text-center">
                <RouterLink :to="{name:'home'}"><img src="../assets/img/square.png" alt="Cuadrado" class="h-16 mx-auto mb-2 rounded-lg shadow-lg"></RouterLink>
                <p class="text-gray-700">Cuadrado</p>
              </div>
              <div class="text-center">
                <RouterLink :to="{name:'producto'}"><img src="../assets/img/oval.png" alt="Óvalo" class="h-16 mx-auto mb-2 rounded-lg shadow-lg"></RouterLink>
                <p class="text-gray-700">Óvalo</p>
              </div>
              <div class="text-center">
                <RouterLink :to="{name:'producto'}"><img src="../assets/img/triangle.png" alt="Triángulo" class="h-16 mx-auto mb-2 rounded-lg shadow-lg"></RouterLink>
                <p class="text-gray-700">Triángulo</p>
              </div>
              <div class="text-center">
                <RouterLink :to="{name:'producto'}" ><img src="../assets/img/moon.png" alt="Luna" class="h-16 mx-auto mb-2 rounded-lg shadow-lg"></RouterLink>
                <p class="text-gray-700">Luna</p>
              </div>
              <div class="text-center">
                <RouterLink :to="{name:'producto'}" ><img src="../assets/img/round.png" alt="Círculo" class="h-16 mx-auto mb-2 rounded-lg shadow-lg"></RouterLink>
                <p class="text-gray-700">Círculo</p>
              </div>
              <div class="text-center">
                <RouterLink :to="{name:'producto'}" ><img src="../assets/img/hexagon.png" alt="Hexágono" class="h-16 mx-auto mb-2 rounded-lg shadow-lg"></RouterLink>
                <p class="text-gray-700">Hexágono</p>
              </div>
              <div class="text-center">
                <RouterLink :to="{name:'producto'}" ><img src="../assets/img/half-round.png" alt="Semi-Círculo" class="h-16 mx-auto mb-2 rounded-lg shadow-lg"></RouterLink>
                <p class="text-gray-700">Semi-Círculo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="container px-4 mx-auto my-8">
        <h2 class="mb-6 text-4xl font-bold text-center text-gray-800">Métodos de Compra</h2>
        <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div class="p-6 text-center transition duration-300 ease-in-out transform bg-white rounded-lg shadow-lg hover:shadow-xl hover:scale-105">
            <h3 class="mb-2 text-2xl font-semibold text-gray-800">Por correo</h3>
            <p class="mb-4 text-gray-700">Puede enviarnos un correo a <span class="text-blue-500">contacto@hilerajoyeria.com</span> y mencionarnos el producto que desea adquirir, cantidades y más.</p>
            <a href="mailto:informes@grupochimex.com" class="inline-block px-6 py-3 font-bold text-white transition duration-300 ease-in-out transform bg-blue-500 rounded-full hover:bg-blue-700 hover:scale-105">Enviar Correo</a>
          </div>
          <div class="p-6 text-center transition duration-300 ease-in-out transform bg-white rounded-lg shadow-lg hover:shadow-xl hover:scale-105">
            <h3 class="mb-2 text-2xl font-semibold text-gray-800">Por WhatsApp</h3>
            <p class="mb-4 text-gray-700">Para facilitar la compra puede ponerse en contacto con nosotros vía WhatsApp, con gusto un agente responderá sus requerimientos.</p>
            <a href="https://api.whatsapp.com/send?phone=525562516687&text=Hola!%20Quiero%20información%20del%20producto!" target="_blank" rel="noopener noreferrer" class="inline-block px-6 py-3 font-bold text-white transition duration-300 ease-in-out transform bg-green-500 rounded-full hover:bg-green-700 hover:scale-105"><i class="fab fa-whatsapp"></i> WhatsApp</a>
          </div>
          <div class="p-6 text-center transition duration-300 ease-in-out transform bg-white rounded-lg shadow-lg hover:shadow-xl hover:scale-105">
            <h3 class="mb-2 text-2xl font-semibold text-gray-800">Nosotros nos ponemos en contacto</h3>
            <p class="mb-4 text-gray-700">Si deseas que un agente se ponga en contacto contigo, llena el siguiente formulario.</p>
            <RouterLink :to="{ name: 'contacto' }"  class="inline-block px-6 py-3 font-bold text-white transition duration-300 ease-in-out transform bg-blue-500 rounded-full hover:bg-blue-700 hover:scale-105">Llenar el formulario</RouterLink>
          </div>
        </div>
        <div class="flex justify-center mt-8 space-x-4">
          <img src="../assets/img/transferencia.png" alt="Transferencia" class="h-12">
          <img src="../assets/img/paypal.png" alt="PayPal" class="h-12">
          <img src="../assets/img/mercado-pago.png" alt="Mercado Pago" class="h-12">
        </div>
      </section>

      <section class="container px-4 mx-auto my-8">
        <h2 class="mb-6 text-4xl font-bold text-center text-gray-800">Conoce lo que nuestros clientes piensan</h2>
        <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div class="p-6 text-center transition duration-300 ease-in-out transform bg-white rounded-lg shadow-lg hover:shadow-xl hover:scale-105">
            <div class="flex justify-center mb-2">
              <i class="text-yellow-500 fas fa-star"></i>
              <i class="text-yellow-500 fas fa-star"></i>
              <i class="text-yellow-500 fas fa-star"></i>
              <i class="text-yellow-500 fas fa-star"></i>
              <i class="text-yellow-500 fas fa-star"></i>
            </div>
            <h3 class="mb-2 text-2xl font-semibold text-gray-800">Mauricio Ramírez</h3>
            <p class="text-gray-700">"Excelente calidad en materiales, muy duradero y excelentes precios"</p>
          </div>
          <div class="p-6 text-center transition duration-300 ease-in-out transform bg-white rounded-lg shadow-lg hover:shadow-xl hover:scale-105">
            <div class="flex justify-center mb-2">
              <i class="text-yellow-500 fas fa-star"></i>
              <i class="text-yellow-500 fas fa-star"></i>
              <i class="text-yellow-500 fas fa-star"></i>
              <i class="text-yellow-500 fas fa-star"></i>
              <i class="text-yellow-500 fas fa-star"></i>
            </div>
            <h3 class="mb-2 text-2xl font-semibold text-gray-800">Armando Pérez</h3>
            <p class="text-gray-700">"Me dedico de forma diaria a crear rollos de hilo de plata y ha durado de forma eficiente la placa"</p>
          </div>
          <div class="p-6 text-center transition duration-300 ease-in-out transform bg-white rounded-lg shadow-lg hover:shadow-xl hover:scale-105">
            <div class="flex justify-center mb-2">
              <i class="text-yellow-500 fas fa-star"></i>
              <i class="text-yellow-500 fas fa-star"></i>
              <i class="text-yellow-500 fas fa-star"></i>
              <i class="text-yellow-500 fas fa-star"></i>
              <i class="text-yellow-500 fas fa-star"></i>
            </div>
            <h3 class="mb-2 text-2xl font-semibold text-gray-800">Jorge Estrada</h3>
            <p class="text-gray-700">"Encontré justo lo que necesitaba, solo que compré uno que no era"</p>
          </div>
          <div class="p-6 text-center transition duration-300 ease-in-out transform bg-white rounded-lg shadow-lg hover:shadow-xl hover:scale-105">
            <div class="flex justify-center mb-2">
              <i class="text-yellow-500 fas fa-star"></i>
              <i class="text-yellow-500 fas fa-star"></i>
              <i class="text-yellow-500 fas fa-star"></i>
              <i class="text-yellow-500 fas fa-star"></i>
              <i class="text-yellow-500 fas fa-star"></i>
            </div>
            <h3 class="mb-2 text-2xl font-semibold text-gray-800">Aldo Martínez</h3>
            <p class="text-gray-700">"El terminado y el precio fueron muy buenos, viene con estuche y todo"</p>
          </div>
          <div class="p-6 text-center transition duration-300 ease-in-out transform bg-white rounded-lg shadow-lg hover:shadow-xl hover:scale-105">
            <div class="flex justify-center mb-2">
              <i class="text-yellow-500 fas fa-star"></i>
              <i class="text-yellow-500 fas fa-star"></i>
              <i class="text-yellow-500 fas fa-star"></i>
              <i class="text-yellow-500 fas fa-star"></i>
              <i class="text-yellow-500 fas fa-star"></i>
            </div>
            <h3 class="mb-2 text-2xl font-semibold text-gray-800">Mauricio Pineda</h3>
            <p class="text-gray-700">"La entrega fue muy rápida y tuve la atención en todo momento. Saludos."</p>
          </div>
          <div class="p-6 text-center transition duration-300 ease-in-out transform bg-white rounded-lg shadow-lg hover:shadow-xl hover:scale-105">
            <div class="flex justify-center mb-2">
              <i class="text-yellow-500 fas fa-star"></i>
              <i class="text-yellow-500 fas fa-star"></i>
              <i class="text-yellow-500 fas fa-star"></i>
              <i class="text-yellow-500 fas fa-star"></i>
              <i class="text-yellow-500 fas fa-star"></i>
            </div>
            <h3 class="mb-2 text-2xl font-semibold text-gray-800">Mónica Coronel</h3>
            <p class="text-gray-700">"Los precios para mayoreo fueron correctos y justos, excelente atención"</p>
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
/* No additional CSS needed */
</style>
