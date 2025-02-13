
<template>
    <div class="bg-light min-h-screen">
      <header 
        class="bg-light shadow-md fixed top-0 left-0 w-full transition-transform duration-300 ease-in-out z-50"
              :class="{ '-translate-y-full': !showHeader, 'translate-y-0': showHeader }"
>
        <div class="container mx-auto flex items-center justify-between py-4 px-3">
    
        <!-- Menú SOLO en móviles -->
          <button @click="menuOpen = !menuOpen" class="md:hidden text-dark hover:text-primary transition">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/></svg>
          </button>

          <!-- Titulo -->
          <h1 class="font-serif  text-3xl">SUNVEGAN</h1>

        <!-- Menú de Navegación (DESKTOP) -->
          <nav class="hidden md:flex space-x-8 text-dark font-serif text-2xl">
            <a href="#" @click.prevent="scrollToSection('nuestro-producto')" class="cursor-pointer hover:text-primary transition">Nuestros Productos</a>
                <router-link to="/la-marca" class="hover:text-primary transition">Nuestra Marca</router-link>
          </nav>

        <!-- Iconos de búsqueda y usuario -->
          <div class="flex items-center space-x-6">
              <button class="text-dark hover:text-primary transition">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" /></svg>
              </button>
              <button class="text-dark hover:text-primary transition">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
              </button>
          </div>
        </div>

      <!-- Menú desplegable en móviles -->
       <nav v-if="menuOpen" class="md:hidden bg-light shadow-md py-4 px-6 space-y-3">
          <a href="#" @click.prevent="scrollToSection('nuestro-producto')" class="block text-xl text-dark hover:text-primary transition">Nuestro Producto</a>
            <router-link to="/la-marca" class="block text-xl text-dark hover:text-primary transition">Nuestra Marca</router-link>
        </nav>
    </header>

  
      <!-- Sección 1 con imagen y texto -->
    <section class="container mx-auto flex flex-wrap items-center justify-center md:justify-between py-8 px-3 mt-20 text-dark">
      <div class="w-full md:w-1/2 flex justify-center items-center">
          <img src="/src/images/modelsun.webp" alt="Descripción" class="w-full max-w-[350px] md:max-w-[500px] h-auto rounded-lg shadow-lg" />
      </div>
  
      <div class="w-full md:w-1/2 text-center md:text-left mt-6 md:mt-0 px-4">
          <p class="font-sans  text-lg md:text-2xl mt-2">Protección solar consciente y responsable para tu piel.</p>
          <p class="font-sans text-lg md:text-2xl mt-2">Bloqueador solar 100% vegano, libre de crueldad animal y amigable con el medio ambiente.</p>
      </div>
    </section>


    <section id="nuestro-producto" class="container mx-auto py-12 px-6">
        <!-- Título -->
        <h2 class="text-xl md:text-xl font-sans text-dark text-end mb-8">1 PRODUCTOS</h2>

        <!-- Grid de Productos -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    
            <!-- Producto 1 -->
            <div class="text-center">
              <!-- Imagen con evento @click para redireccionar -->
              <div @click="goToProduct('sun-vegan-fps50')" class="bg-light rounded-lg shadow-lg p-6 flex justify-center items-center min-h-[380px] cursor-pointer  hover:shadow-xl transition">
                <img src="/src/images/productTienda.png" alt="Protector Solar Sun Vegan" class="w-full max-w-[200px] mx-auto h-[250px] hover:opacity-50 object-cover">
              </div>

                <h3 class="text-lg font-bold mt-4">SUNVEGAN</h3>
                <p class="text-primary font-bold uppercase">Protección Solar FPS 50+</p>
                <p class="text-gray-600 text-sm mt-2">Bloqueador solar 100% vegano con ingredientes naturales y empaque sostenible.</p>
      
              <div class="flex justify-center items-center space-x-1 mt-2">
                <svg v-for="index in 5" :key="index" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" class="w-6 h-6 text-gray-700">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"/>
                </svg> <span class="text-gray-600 text-sm">(0 Opinión)</span>
              </div>


              </div>

        </div>
    </section>

        <div class="container mx-auto py-8 px-6 flex flex-col items-center text-center">
        <!-- Título centrado -->
          <h1 class="mt-2 text-3xl md:text-5xl font-serif text-primary leading-tight">Preguntas frecuentes</h1>
            <h2 class="mt-2 text-xl md:text-3xl font-serif text-primary leading-tight">Acerca de Protectores Solares</h2>

        <!-- Contenedor de preguntas centrado -->
        <div class="w-full md:w-3/4 lg:w-2/3">
         <!-- Preguntas -->
            <details class="border-b py-4"> <summary class="cursor-pointer font-semibold text-left">P1: ¿EL PROTECTOR SOLAR CADUCA?</summary>
              <p class="text-gray-600 mt-2 text-left">Los protectores solares tienen fecha de caducidad, y SUNVEGAN no es la excepción. Gracias a su fórmula 100% natural y 
                                                        libre de conservantes artificiales, su efectividad se mantiene óptima hasta 2 años después de su apertura. Para garantizar su máxima protección, evita 
                                                        exponerlo a temperaturas extremas y verifica su color, textura y aroma. Si notas cambios inusuales, es momento de reemplazarlo.</p>
            </details>

            <details class="border-b py-4"><summary class="cursor-pointer font-semibold text-left">P2: ¿LOS PROTECTORES SOLARES IMPIDEN BRONCEADO?</summary>
              <p class="text-gray-600 mt-2 text-left">SUNVEGAN actúa como un escudo natural contra los rayos UV, protegiendo tu piel de los daños causados por la radiación solar. 
                                                        Su fórmula 100% vegana y enriquecida con ingredientes naturales ayuda a prevenir quemaduras, reduce el riesgo de cáncer de piel y combate el envejecimiento prematuro. 
                                                        Aunque su filtro solar bloquea un alto porcentaje de rayos UV, una pequeña cantidad puede llegar a la piel, permitiendo un bronceado saludable sin comprometer su protección.</p>
            </details>

            <details class="border-b py-4"><summary class="cursor-pointer font-semibold text-left">P3: ¿CUÁNTO TIEMPO DURA EL PROTECTOR SOLAR?</summary>
              <p class="text-gray-600 mt-2 text-left">SUNVEGAN, independientemente de su FPS 50+, ofrece una protección efectiva hasta por 2 horas después de su aplicación. Para mantener una cobertura óptima, 
                                                        se recomienda reaplicarlo especialmente después de nadar, sudar o secarse con una toalla, asegurando así el máximo cuidado para tu piel de manera natural y vegana.</p>
            </details>
        </div>
      </div>


    <footer class="bg-light py-10 border-t mt-20 w-full overflow-hidden">
      <div class="container mx-auto px-6 md:px-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-left max-w-[90%] lg:max-w-[1200px]">
    
        <!-- Columna 1: Nuestra Política -->
        <div>
          <h3 class="text-xl font-semibold text-dark">NUESTRA POLÍTICA</h3>
            <ul class="mt-4 space-y-2 text-gray-700">
              <li><a class="hover:underline block">Política de Privacidad</a></li>
              <li><a class="hover:underline block">Política de Cookies</a></li>
              <li><a class="hover:underline block">Términos y Condiciones</a></li>
              <li><a class="hover:underline block">Personalizar mi Elección</a></li>
            </ul>
        </div>

        <!-- Columna 2: Atención al Cliente -->
        <div>
          <h3 class="text-xl font-semibold text-dark">ATENCIÓN AL CLIENTE</h3>
            <ul class="mt-4 space-y-2 text-gray-700">
              <li><a class="hover:underline block">Contacta con Nosotros</a></li>
              <li><a class="hover:underline block">Encontrar una Farmacia</a></li>
            </ul>
        </div>

        <!-- Columna 3: Permanece en Contacto -->
        <div>
          <h3 class="text-xl font-semibold text-dark">PERMANECE EN CONTACTO</h3>
            <p class="mt-4 text-gray-700">Suscríbete a nuestro boletín para recibir novedades y ofertas exclusivas.</p>
      
        <!-- Input + Botón -->
          <div class="mt-4 flex flex-col md:flex-row items-start gap-2 w-full">
            <input type="email" placeholder="Tu correo electrónico" 
               class="border p-2 rounded-lg w-full md:w-auto text-left focus:outline-none focus:ring-2 focus:ring-primary">
        
            <button class="bg-primary text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"> Suscribirse</button>
          </div>
          </div>
        </div>
      </footer>
      <!-- Pie de Pagina-->
      <footer class="bg-secondary text-dark p-4 text-center mt-10">
        &copy; 2025 SUNVEGAN - Todos los derechos reservados
      </footer>
    </div>
  </template>



<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const menuOpen = ref(false);
const showHeader = ref(true);
let lastScrollY = window.scrollY;

// Detectar el scroll para mostrar/ocultar el header
const handleScroll = () => {
  const currentScrollY = window.scrollY;

  // Si el usuario sube, mostrar el header
  if (currentScrollY < lastScrollY) {
    showHeader.value = true;
  } else {
    // Si el usuario baja, ocultar el header
    showHeader.value = false;
  }
  lastScrollY = currentScrollY;
};

// Agregar evento de scroll
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

// Eliminar el evento cuando el componente se desmonta
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

// Función para redirigir a otra página
const gotoMarca = () => {
  router.push('/la-marca');
};

// Función para redirigir a la página del producto
const goToProduct = (productId) => {
  router.push(`/producto/${productId}`);
};

// Función para redirigir a la sección de productos
const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

</script>

  
  
  