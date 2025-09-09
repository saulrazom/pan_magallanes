<script setup lang="ts">
import HeroImage from '@/assets/img/hero_image.JPG?url';
import { useMobileDetection } from '@/composables/useMobileDetection';

const { isMobile } = useMobileDetection(768);
</script>

<template>
    <section class="h-svh flex items-end justify-center">
        <div 
            class="w-[90%] mb-5 rounded-3xl relative flex flex-col items-start p-8 md:p-12 lg:p-16"
            :class="isMobile ? 'flex justify-end' : 'flex justify-center'"
            style="height: calc(85vh - 1.25rem);"
        >
            <!-- Imagen de fondo como elemento separado -->
            <div 
                class="absolute inset-0 bg-cover bg-center bg-no-repeat rounded-3xl"
                :style="{ backgroundImage: `url(${HeroImage})` }"
            ></div>
            
            <!-- Overlay opcional para mejorar legibilidad -->
            <div class="absolute inset-0 bg-black/50 rounded-3xl"></div>
            
            <!-- Contenido sobre el fondo -->
            <div class="relative z-10 " :class="isMobile ? 'mb-8': ''">
                <div class="mb-8">
                    <h1 class="text-white text-4xl sm:text-5xl lg:text-6xl  font-light leading-tight mb-4 w-[60%]" :class="{ 'w-full': isMobile }">
                        El mejor pan tradicional de Guadalajara
                    </h1>
                    <p class="text-white text-2xl font-light opacity-90 w-[60%]" :class="{ 'w-full': isMobile }">
                        Horneado con amor y tradición desde 1985
                    </p>
                </div>
                
                <div class="w-full" :class="isMobile ? 'flex justify-center' : 'flex justify-start'">
                    <button class="bg-white px-8 py-4 text-2xl md:px-12 md:py-4 md:text-4xl lg:px-18 rounded-xl border-3 border-black hover:bg-gray-100 transition-all duration-200">
                        Conócenos
                    </button>
                </div>
            </div>

        </div>
    </section>
</template>