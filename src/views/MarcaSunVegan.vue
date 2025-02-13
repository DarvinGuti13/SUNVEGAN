    <template>
        <div class="bg-light min-h-screen">
            <header 
                :class="['bg-light shadow-md fixed top-0 left-0 w-full transition-transform duration-300', showHeader ? 'translate-y-0' : '-translate-y-full']">
                <div class="container mx-auto flex items-center justify-between py-4 px-3">

                    <!-- Menú hamburguesa SOLO en móviles -->
                    <button @click="menuOpen = !menuOpen" class="md:hidden text-dark hover:text-primary transition">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/></svg></button>

                    <!-- Logo -->
                    <h1 class="font-serif text-3xl">SUNVEGAN</h1>

                    <!-- Menú de Navegación (DESKTOP) -->
                    <nav class="hidden md:flex space-x-8 text-dark font-serif text-2xl">
                    <a @click="goToProductSection" class="cursor-pointer hover:text-primary transition">Nuestros Productos</a></nav>
    
                    <!-- Iconos de búsqueda y usuario -->
                    <div class="flex items-center space-x-6">
                        <button class="text-dark hover:text-primary transition">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" /></svg>
                        </button>
                        <button class="text-dark hover:text-primary transition">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" /></svg>
                        </button>
                    </div>
                </div>

                <!-- Menú desplegable en móviles -->
                <nav v-if="menuOpen" class="md:hidden bg-light shadow-md py-4 px-6 space-y-3">
                    <a @click="goToProductSection" class="block text-xl text-dark cursor-pointer hover:text-primary transition">Nuestros Productos</a></nav>
            </header>


        <!--Seccion 1-->
        <section class="container mx-auto py-8 px-6 mt-20 ">
            <nav class="text-lg md:text-xl font-medium text-gray-600">
                <a href="/" class="hover:text-primary transition hover:underline">INICIO</a> / <span class="text-primary">NUESTRA-MARCA</span></nav>

            <!-- Título principal -->
            <h1 class="mt-2 text-3xl md:text-5xl font-serif text-primary leading-tight">SUNVEGAN: SALUD DE LA PIEL Y CUIDADO NATURAL</h1>
        </section>

        <!--Seccion 2-->
        <section class="container mx-auto flex flex-col items-end py-8 px-3 text-dark">
        <!-- Imagen alineada a la derecha -->
            <div class="w-full md:w-3/4 lg:w-2/3 flex justify-end">
                <img src="/src/images/marcaloding.png" alt="Descripción" class="w-full md:w-[60vw] max-h-[70vh] h-auto rounded-lg shadow-lg object-cover" />
            </div>

        <!-- Texto debajo de la imagen y alineado a la derecha -->
            <div class="w-full md:w-3/4 lg:w-2/3 flex justify-center md:justify-end mt-6">
                <p class="text-xl text-center md:text-left font-semibold leading-relaxed w-full md:w-[60vw] px-4">El proposito de SUNVEGAN ahora es mas fuerte que nunca. Revolucionar la industria del protector solar con un enfoque vegano, 
                    sostenible y libre de crueldad animal, estableciendo nuevos estándares éticos y de calidad.</p>
            </div>
        </section>

        <!--Seccion 3-->
        <section class="container mx-auto flex flex-col items-first py-8 px-3 text-dark">
            <!-- Imagen alineada a la derecha -->
            <div class="w-full md:w-3/4 lg:w-2/3 flex justify-first">
                <img src="/src/images/derma_c3.png" alt="Descripción" class="w-full md:w-[60vw] max-h-[70vh] h-auto rounded-lg shadow-lg object-cover" />
            </div>

        <!-- Texto debajo de la imagen y alineado a la derecha -->
            <div class="w-full md:w-3/4 lg:w-2/3 flex justify-center md:justify-first mt-6">
                <p class="text-xl text-center md:text-left font-semibold leading-relaxed w-full md:w-[60vw] px-4">La Visión de SUNVEGAN es ser la marca lider en protección solar ética,
                    promoviendo el bienestar de la piel y la preservación del medio ambiente. 
                </p>
            </div>

        <!--Seccion 4-->
        </section>
            <div class="container mx-auto py-8 px-6 ">
                <h1 class="mt-2 text-3xl md:text-5xl font-serif text-primary leading-tight">RECOMENDADO POR ESPECIALISTAS</h1>
            </div>
    
        <!--Seccion 5-->
        <section class="container mx-auto flex flex-col items-end py-8 px-3 text-dark">
            <!-- Imagen alineada a la derecha -->
            <div class="w-full md:w-3/4 lg:w-2/3 flex justify-end">
                <img src="/src/images/derma.jpg" alt="Descripción" class="w-full md:w-[60vw] max-h-[70vh] h-auto rounded-lg shadow-lg object-cover" />
            </div>

        <!-- Texto debajo de la imagen y alineado a la derecha -->
            <div class="w-full md:w-3/4 lg:w-2/3 flex justify-center md:justify-end mt-6">
                <p class="text-xl text-center md:text-left font-semibold leading-relaxed w-full md:w-[60vw] px-4">
                    SUNVEGAN es la elección de expertos en el cuidado de la piel y el medio ambiente. Nuestro bloqueador solar 100%
                    vegano y libre de crueldad animal ha sido desarrollado con el respaldo de especialistas en dermocosmética natural. 
                    Trabajamos de la mano con profesionales en bienestar y sostenibilidadd para crear soluciones innovadoras que protegen tu piel y el planeta.
                </p>
            </div>
        </section>

            <div class="container mx-auto py-8 px-6 ">
                <h1 class="mt-2 text-3xl md:text-5xl font-serif text-primary leading-tight">PROTECCIÓN NATURAL PARA CADA ETAPA DE TU VIDA</h1>
            </div>

        <!--Seccion 6-->
        <section class="container mx-auto py-8 px-6">
            <!-- Grid de imágenes -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
    
             <!-- Imagen 1 -->
            <div class="flex justify-center">
                <img src="/src/images/niño.jpg" alt="Imagen 1" class="w-full h-auto max-w-[300px] object-cover rounded-lg shadow-lg">
            </div>

            <!-- Imagen 2 -->
            <div class="flex justify-center">
                <img src="/src/images/mujer.jpg" alt="Imagen 2" class="w-full h-auto max-w-[300px] object-cover rounded-lg shadow-lg">
            </div>

            <!-- Imagen 3 -->
            <div class="flex justify-center">
                <img src="/src/images/man.jpg" alt="Imagen 3" class="w-full h-auto max-w-[300px] object-cover rounded-lg shadow-lg">
            </div>

            <!-- Imagen 4 -->
            <div class="flex justify-center">
                <img src="/src/images/adultgirl.png" alt="Imagen 4" class="w-full h-auto max-w-[300px] object-cover rounded-lg shadow-lg">
            </div>
            </div>

        <!-- Contenedor del texto completamente alineado al ancho del grid -->
            <div class="w-full flex justify-center mt-6">
                <p class="text-xl font-semibold leading-relaxed text-center w-full px-6">La mayor fortaleza de SUNVEGAN es ofrecer una protección solar natural y efectiva para todos, sin importar el tipo de piel 
                    o tono. Nuestra fórmula vegana y libre de químicos agresivos es ideal para hombres, mujeres y niños, brindando cuidado seguro y sostenible en cada etapa de la vida.</p>
            </div>
        </section>

        <!-- Sección 7: Compromiso con el Medio Ambiente -->
        <section class="container mx-auto py-12 px-6 text-dark">
        <!-- Título alineado a la izquierda -->
            <h2 class="mt-2 text-3xl md:text-5xl font-serif text-primary leading-tight w-full text-left">SUNVEGAN COMPROMETIDO CON EL MEDIO AMBIENTE</h2>

        <!-- Contenedor principal con Grid para mejor distribución -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-center mt-12 w-full max-w-5xl mx-auto">
            <!-- Primera columna: Beneficios Izquierda -->
            <div class="flex flex-col items-end text-right space-y-6">
            <div class="flex items-center gap-2">
                <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path></svg>
                    <p class="text-lg font-semibold">Empaque reciclable y biodegradable</p>
            </div>
            <div class="flex items-center gap-2">
                <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path></svg>
                    <p class="text-lg font-semibold">Colaboraciones con fundaciones ambientales</p>
            </div>
        </div>

        <!-- Segunda columna: Imagen Central -->
        <div class="flex justify-center">
             <img src="/src/images/reci.webp" alt="Reciclaje" class="w-full max-w-[300px] md:max-w-[400px] h-auto rounded-lg shadow-lg" />
        </div>

        <!-- Tercera columna: Beneficios Derecha -->
        <div class="flex flex-col items-start text-left space-y-6">
         <div class="flex items-center gap-2">
            <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path></svg>
                <p class="text-lg font-semibold">Iniciativas de reciclaje con descuentos</p>
        </div>
        <div class="flex items-center gap-2">
            <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path></svg>
                <p class="text-lg font-semibold">Campañas contra el cáncer de piel</p>
        </div>
        </div>

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
                <button class="bg-primary text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">Suscribirse</button>
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

// Función para redirigir a la sección de productos
const goToProductSection = () => {
  router.push('/'); // Asegurar que está en la página principal antes de hacer scroll
  setTimeout(() => {
    const section = document.getElementById("nuestro-producto");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, 500);
};

const showHeader = ref(true);  // Iniciar con el header visible
let lastScrollY = 0;

const handleScroll = () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY < lastScrollY) {
    showHeader.value = true; // Mostrar si el usuario sube
  } else {
    showHeader.value = false; // Ocultar si el usuario baja
  }

  lastScrollY = currentScrollY;
};

onMounted(() => {
  showHeader.value = true;  // Forzar que el header aparezca al entrar a la vista
  window.scrollTo(0, 0); // Asegurar que la página inicie en el top
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

