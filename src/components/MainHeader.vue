<script setup lang="ts">
import logoUrl from '@/assets/bmagallanes_logo.png?url';
import { useMobileDetection } from '@/composables/useMobileDetection';
import { ref } from 'vue';

const { isMobile } = useMobileDetection(768);
const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};
</script>

<template>
  <header>
    <nav class="flex justify-between items-center p-4 relative">
      <img :src="logoUrl" alt="Logo" class="w-48 h-auto">    
      
      <!-- Desktop Menu -->
      <div v-if="!isMobile" class="desktop-menu">
        <ul class="flex list-none m-0 p-0 gap-8">
          <li><a href="#" class="no-underline text-inherit font-medium">Nosotros</a></li>
          <li><a href="#" class="no-underline text-inherit font-medium">Catálogo</a></li>
          <li><a href="#" class="no-underline text-inherit font-medium">Contáctanos</a></li>
        </ul>
      </div>

      <!-- Mobile Hamburger Button -->
      <button v-if="isMobile" @click="toggleMenu" class="hamburger-btn" :class="{ active: isMenuOpen }">
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
      </button>

      <!-- Mobile Full Screen Menu -->
      <div v-if="isMobile" 
           class="fixed inset-0 w-screen h-screen bg-black/50 backdrop-blur-md z-[1000] transition-all duration-300 ease-in-out"
           :class="{ 
             'opacity-100 visible': isMenuOpen, 
             'opacity-0 invisible': !isMenuOpen 
           }" 
           @click="closeMenu">
        <div class="w-full h-full bg-gray-50/90 backdrop-blur-md flex items-center justify-center"
             @click.stop>
          <ul class="list-none p-0 m-0 text-center">
            <li class="my-8"><a href="#" @click="closeMenu" class="block no-underline text-4xl font-semibold text-gray-800 py-4 transition-colors duration-200 hover:text-blue-500">Nosotros</a></li>
            <li class="my-8"><a href="#" @click="closeMenu" class="block no-underline text-4xl font-semibold text-gray-800 py-4 transition-colors duration-200 hover:text-blue-500">Catálogo</a></li>
            <li class="my-8"><a href="#" @click="closeMenu" class="block no-underline text-4xl font-semibold text-gray-800 py-4 transition-colors duration-200 hover:text-blue-500">Contáctanos</a></li>
            <li class="my-8"><a href="#" @click="closeMenu" class="block no-underline text-4xl font-semibold text-gray-800 py-4 transition-colors duration-200 hover:text-blue-500">Preguntas Frecuentes</a></li>
            <li class="my-8"><a href="#" @click="closeMenu" class="block no-underline text-4xl font-semibold text-gray-800 py-4 transition-colors duration-200 hover:text-blue-500">Testimonios</a></li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>
/* Desktop menu styles */
.desktop-menu-list {
  margin: 0;
  padding: 0;
}

.desktop-menu-link {
  text-decoration: none;
  color: inherit;
  font-weight: 500;
}

/* Mobile menu styles */
.mobile-menu-list {
  padding: 0;
  margin: 0;
}

.mobile-menu-item {
  margin: 2rem 0;
}

.mobile-menu-link {
  text-decoration: none;
  font-size: 2rem;
  font-weight: 600;
  color: #333;
  display: block;
  padding: 1rem 0;
  transition: color 0.2s ease;
}

/* Hamburger Button - Custom CSS for complex animations */
.hamburger-btn {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 30px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1001;
}

.hamburger-line {
  width: 30px;
  height: 3px;
  background: #333;
  border-radius: 10px;
  position: relative;
  transition: all 0.3s linear;
  transform-origin: 1px;
}

.hamburger-btn.active .hamburger-line:first-child {
  transform: rotate(45deg);
}

.hamburger-btn.active .hamburger-line:nth-child(2) {
  opacity: 0;
  transform: translateX(20px);
}

.hamburger-btn.active .hamburger-line:nth-child(3) {
  transform: rotate(-45deg);
}
</style>