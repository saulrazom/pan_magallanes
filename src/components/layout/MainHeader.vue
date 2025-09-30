<script setup lang="ts">
import logoUrl from '@/assets/bmagallanes_logo.png?url';
import { useMobileDetection } from '@/composables/useMobileDetection';
import { useScrollLock } from '@/composables/useScrollLock';
import { ref, watch, onMounted, onUnmounted } from 'vue';

// Composables
const { isMobile } = useMobileDetection(768);
const { lockScroll, unlockScroll } = useScrollLock();

// State
const isMenuOpen = ref(false);
const isScrolled = ref(false);

// Menu handlers
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

// Scroll detection
const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

// Watch menu state for scroll lock
watch(isMenuOpen, (isOpen) => {
  if (isMobile.value) {
    isOpen ? lockScroll() : unlockScroll();
  }
});

// Lifecycle
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  if (isMenuOpen.value && isMobile.value) {
    unlockScroll();
  }
});

// Menu items configuration
const mainMenuItems = [
  { label: 'Nosotros', href: '#' },
  { label: 'Catálogo', href: '#' },
  { label: 'Contáctanos', href: '#' }
];

const dropdownItems = [
  { label: 'Preguntas Frecuentes', href: '#' },
  { label: 'Testimonios', href: '#' }
];

const mobileMenuItems = [
  ...mainMenuItems,
  ...dropdownItems
];
</script>

<template>
  <header 
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300" 
    :class="isScrolled ? 'backdrop-blur-md bg-cream/80 shadow-lg' : 'bg-transparent'">
    
    <nav class="flex justify-between items-center w-[90%] mx-auto relative">
      <!-- Logo -->
      <img :src="logoUrl" alt="Logo" class="w-36 h-auto">

      <!-- Desktop Menu -->
      <div v-if="!isMobile" class="desktop-menu">
        <ul class="flex list-none m-0 gap-8 text-xl">
          <li v-for="item in mainMenuItems" :key="item.label">
            <a 
              :href="item.href" 
              class="text-black hover:text-gray-600 transition-colors duration-200">
              {{ item.label }}
            </a>
          </li>
          
          <!-- Dropdown -->
          <div class="dropdown dropdown-bottom dropdown-end">
            <div tabindex="0">Más</div>
            <ul tabindex="0" class="dropdown-content menu bg-cream text-lg rounded-box z-1 w-52 p-2 shadow-sm">
              <li v-for="item in dropdownItems" :key="item.label">
                <a :href="item.href">{{ item.label }}</a>
              </li>
            </ul>
          </div>
        </ul>
      </div>

      <!-- Mobile Hamburger Button -->
      <button 
        v-if="isMobile" 
        @click="toggleMenu" 
        class="flex flex-col justify-around w-8 h-8 bg-transparent border-none cursor-pointer p-0 z-[1001]" 
        :class="{ active: isMenuOpen }"
        aria-label="Toggle menu">
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
      </button>

      <!-- Mobile Menu -->
      <div 
        v-if="isMobile && isMenuOpen"
        class="menu-overlay fixed inset-0 w-screen h-screen bg-black/50 backdrop-blur-md z-[1000]" 
        @click="closeMenu">
        <div class="menu-content w-full h-full bg-cream/80 backdrop-blur-md flex items-center justify-center overflow-y-auto" @click.stop>
          <ul class="list-none p-0 m-0 text-center space-y-8 py-20">
            <li v-for="item in mobileMenuItems" :key="item.label">
              <a 
                :href="item.href" 
                @click="closeMenu"
                class="block text-4xl font-semibold text-gray-800 py-4 transition-colors duration-200 hover:text-blue-500">
                {{ item.label }}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.hamburger-line {
  width: 2rem;
  height: 0.15rem;
  background-color: #1f2937;
  border-radius: 0.75rem;
  position: relative;
  transition: all 0.3s ease;
  transform-origin: left;
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

.menu-overlay {
  animation: fadeIn 0.3s ease-in-out;
  overscroll-behavior: contain;
  -webkit-overflow-scrolling: touch;
}

.menu-content {
  overscroll-behavior: contain;
  -webkit-overflow-scrolling: touch;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>