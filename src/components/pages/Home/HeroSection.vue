<script setup lang="ts">
import HeroImage from '@/assets/img/hero_image.JPG?url';
import { useMobileDetection } from '@/composables/useMobileDetection';

const { isMobile } = useMobileDetection(768);
</script>

<template>
    <section class="h-screen flex items-end justify-center py-20">
        <div 
            class="w-[90%] h-[93%] bg-cover bg-center bg-no-repeat rounded-3xl relative flex flex-col justify-center items-start p-8 md:p-12 lg:p-16"
            :style="{ backgroundImage: `url(${HeroImage})` }"
        >
            <!-- Overlay opcional para mejorar legibilidad -->
            <div class="absolute inset-0 bg-black/50 rounded-3xl"></div>
            
            <!-- Contenido sobre el fondo -->
            <div class="relative z-10">
                <div class="mb-8">
                    <h1 class="text-white text-7xl font-light leading-tight mb-4 w-[60%]" :class="{ 'w-full': isMobile }">
                        El mejor pan tradicional de Guadalajara
                    </h1>
                    <p class="text-white text-xl font-light opacity-90">
                        Horneado con amor y tradición desde 1985
                    </p>
                </div>
                
                <div class="w-full" :class="isMobile ? 'flex justify-center' : 'flex justify-start'">
                    <button class="bg-white text-black border-2 border-black px-18 py-4 text-4xl rounded-xl hover:bg-gray-100 transition-all duration-200">
                        Conócenos
                    </button>
                </div>
            </div>

        </div>
    </section>
</template>