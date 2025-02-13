<template>
    <div class="bg-light min-h-screen">
      <!-- Header -->
    <header 
      :class="['bg-light shadow-md fixed top-0 left-0 w-full transition-transform duration-300', showHeader ? 'translate-y-0' : '-translate-y-full']"
    >
      <div class="container mx-auto flex items-center justify-between py-4 px-3">
        
        <!-- Menú  SOLO en móviles -->
        <button @click="menuOpen = !menuOpen" class="md:hidden text-dark hover:text-primary transition">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
          </svg>
        </button>

        <!-- Titulo -->
        <h1 class="font-serif text-3xl">SUNVEGAN</h1>

        <!-- Menú de Navegación (DESKTOP) -->
        <nav class="hidden md:flex space-x-8 text-dark font-serif text-2xl">
          <a @click="goToProductSection" class="cursor-pointer hover:text-primary transition">Nuestros Productos</a>
          <router-link to="/la-marca" class="hover:text-primary transition">Nuestra Marca</router-link>
        </nav>

        <!-- Iconos de búsqueda y usuario -->
        <div class="flex items-center space-x-6">
          <button class="text-dark hover:text-primary transition">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
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
    <a @click="goToProductSection" class="block text-xl text-dark cursor-pointer hover:text-primary transition">Nuestros Productos</a>
    <router-link to="/la-marca" class="block text-xl text-dark hover:text-primary transition">Nuestra Marca</router-link>
  </nav>
    </header>
  
      <!-- Navegación superior -->
      <section class="container mx-auto py-8 px-6 mt-20">
        <nav class="text-lg md:text-xl font-medium text-gray-600">
          <a href="/" class="hover:text-primary transition hover:underline">INICIO</a> / <span class="text-primary">NUESTRO-PRODUCTO</span>
        </nav>
      </section>
  
      <!-- Producto -->
      <section class="container mx-auto py-8 px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        <!-- Mientras carga -->
        <div v-if="loading" class="col-span-2 text-center">
          <p class="text-lg md:text-xl font-bold text-gray-600">Cargando producto...</p>
        </div>
  
        <!-- Producto no encontrado -->
        <div v-else-if="!productData" class="text-center col-span-2">
          <p class="text-lg md:text-xl font-bold text-gray-600">Producto no encontrado</p>
        </div>
  
        <!-- Producto encontrado -->
        <template v-else>
          <div class="space-y-4">
            <!-- Imagen Principal -->
            <div class="bg-light rounded-lg shadow-lg p-6 flex justify-center items-center min-h-[350px]">
              <img :src="productData.image" :alt="productData.name" class="w-[250px] object-contain">
            </div>
  
            <!-- Imágenes Secundarias -->
            <div class="grid grid-cols-3 gap-4">
              <img 
                v-for="(img, index) in productData.secondaryImages" 
                :key="index" 
                :src="img"
                class="w-full h-[150px] md:h-[180px] lg:h-[200px] object-cover rounded-2xl shadow-lg cursor-pointer hover:opacity-75 transition"
              >
            </div>
          </div>
  
          <!-- Información del Producto -->
          <div class="text-left space-y-4">
            <span class="bg-orange-300 text-white text-xs md:text-sm px-2 md:px-3 py-1 rounded-full font-bold uppercase">Nuevo</span>
            <h1 class="text-2xl md:text-3xl font-bold text-dark">
              {{ productData.name }}
            </h1>
            <p class="text-md md:text-lg text-primary font-bold">
              {{ productData.description }}
            </p>
  
            <div class="flex items-center space-x-1 text-yellow-500 text-sm md:text-base">
            <svg v-for="index in 5" :key="index" xmlns="http://www.w3.org/2000/svg" fill="none" 
       viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" class="w-6 h-6 text-gray-700">
    <path stroke-linecap="round" stroke-linejoin="round"
      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"/>
  </svg><span class="text-gray-600">(0 Opiniones)</span>
          </div>

            <!-- Selector de Tamaño -->
          <select class="border p-2 rounded-lg w-32 md:w-40">
            <option>40 ml</option>
            <option>80 ml</option>
          </select>
  
          <!-- Botones de Acción -->
<div class="space-y-2 flex flex-col items-start">
  <button class="bg-primary text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
    Comprar Ahora
  </button>
  
</div>

            <!-- Beneficios -->
            <ul class="text-sm space-y-2 mt-4">
              <li v-for="(benefit, index) in benefits" :key="index" class="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="1.5" class="w-6 h-6 text-green-600">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <span class="text-lg">{{ benefit }}</span>
              </li>
            </ul>

            <!-- Sección de Descripción y Composición -->
          <details class="border-b py-2">
            <summary class="cursor-pointer font-semibold">Descripción</summary>
            <p class="text-gray-600 mt-2">{{ productData.longDescription }}</p>
          </details>
  
          <details class="border-b py-2">
            <summary class="cursor-pointer font-semibold">Composición</summary>
            <p class="text-gray-600 mt-2">{{ productData.composition }}</p>
          </details>
          </div>

        </template>
      </section>
  
      <!-- Sección "¿Cómo usar Sunvegan?" solo si hay producto -->
      <section v-if="productData" class="container mx-auto flex flex-col items-center md:items-end py-8 px-4 text-dark">
        <h2 class="mt-2 text-3xl md:text-5xl font-serif text-primary leading-tight w-full text-left">
          ¿CÓMO USAR SUNVEGAN FPS 50+?
        </h2>
        <div class="w-full md:w-3/4 lg:w-2/3 flex justify-center mt-12 md:justify-end">
          <img src="/src/images/usarlo.webp" alt="Descripción" class="w-full md:w-[60vw] h-auto rounded-lg shadow-lg object-cover" />
        </div>
        <div class="w-full md:w-3/4 lg:w-2/3 flex justify-center md:justify-end mt-6">
          <p class="text-xl text-center md:text-left font-semibold leading-relaxed w-full md:w-[60vw] px-4">
            Aplicar una fina capa para mayor absorción sobre piel limpia antes de la exposición al sol, evitar el contacto con los ojos y no ingerir,
            volver a aplicar con frecuencia, en especial después de nadar, sudar o secarte.
          </p>
        </div>
      </section>

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
        
        <button class="bg-primary text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
          Suscribirse
        </button>
      </div>
    </div>

  </div>
</footer>

<footer class="bg-secondary text-dark p-4 text-center mt-10">
    &copy; 2025 SUNVEGAN - Todos los derechos reservados
</footer>

    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  
  const route = useRoute();
  const router = useRouter();
  const productData = ref(null);
  const menuOpen = ref(false);
  const showHeader = ref(true);
  const loading = ref(true);
  let lastScrollY = 0;
  
    const benefits = ["No deshidrata la piel (a diferencias de otros bloqueadores).",
                    "Textura cremosa sinresiduos grasos.",
                    "Apto para pieles sensibles."];
  
  const handleScroll = () => {
    showHeader.value = window.scrollY < lastScrollY;
    lastScrollY = window.scrollY;
  };
  
  // Función para redirigir a la sección de productos
   const goToProductSection = () => {
    router.push('/'); // Asegurar que está en la página principal antes de hacer scroll
        setTimeout(() => { const section = document.getElementById("nuestro-producto");
                if (section) { section.scrollIntoView({ behavior: "smooth" });}}, 500);};

    onMounted(async () => {
        try {
            const response = await fetch('/src/data/products.json');
            const products = await response.json();
            productData.value = products.find(product => product.id === route.params.id) || null;
            } catch (error) {
            console.error("Error cargando productos:", error);}
            loading.value = false;
            window.addEventListener("scroll", handleScroll);});

    onUnmounted(() => {
            window.removeEventListener("scroll", handleScroll);});
  </script>
  



  
  
  