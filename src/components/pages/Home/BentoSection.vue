<script setup lang="ts">
import logo_icon from '@/assets/bicon.png?url';
import social_data from '@/assets/data/contact_data.json';

</script>

<template>
  <section id="about" class="contact-bento lg:h-screen w-screen p-6 md:p-12 lg:p-16 pt-24 lg:pt-36 space-y-6">
    <!-- Primera fila -->
    <div class="first w-full h-1/3 flex flex-col md:flex-row gap-6">
      <div class="company-name p-6 bg-ligth-blue lg:w-2/3 w-full  justify-center items-center rounded-3xl space-y-4">
        <div class="flex flex-col lg:flex-row lg:items-center gap-4 md:gap-6">
          <div class="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg">
            <img :src="logo_icon" alt="Logo" class="w-20 h-20 object-contain" />
          </div>
          <h2 class="text-2xl md:text-2xl lg:text-4xl">Panadería Magallanes</h2>
        </div>
        <p>Panadería Magallanes, desde 1964 siendo una panadería de “barrio”, querida por sus clientes y reconocida como
          un símbolo de las tradiciones mexicanas materializadas en pan.</p>
      </div>
      <div
        class="text-us bg-ligth-blue lg:w-1/3 w-full p-6 flex flex-col items-center justify-center rounded-3xl">
        <h3 class="text-2xl lg:text-2xl mb-4">¡Mándanos un whats!</h3>
        <div>
          <a>
            <button
              class="font-urbanist bg-white text-black xl:text-4xl text-2xl px-4 py-2 tracking-wider transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-dark hover:text-cream duration-300 space-x-2 cursor-pointer">
              {{ social_data.mobileDisplay }}
            </button>
          </a>
        </div>
      </div>
    </div>

    <!-- Segunda fila (Íconos) -->
    <div class="second w-full">
      <ul class="grid grid-cols-2 lg:grid-cols-4 gap-6">
        <li class=" bg-ligth-blue flex justify-center items-center p-6 rounded-3xl">
          <a><i class="pi pi-facebook text-4xl"></i></a>
        </li>
        <li class=" bg-ligth-blue flex justify-center items-center p-6 rounded-3xl">
          <a><i class="pi pi-instagram text-4xl"></i></a>
        </li>
        <li class=" bg-ligth-blue flex justify-center items-center p-6 rounded-3xl">
          <a><i class="pi pi-tiktok text-4xl"></i></a>
        </li>
        <li class=" bg-ligth-blue flex justify-center items-center p-6 rounded-3xl">
          <a><i class="pi pi-envelope text-4xl"></i></a>
        </li>
      </ul>
    </div>

    <!-- Tercera fila -->
    <div class="third w-full h-1/3 flex flex-col md:flex-row gap-6">
      <div class="company-name bg-ligth-blue lg:w-3/4 w-full p-6 rounded-3xl">
        <p class="text-2xl lg:text-4xl">As a family-owned catering business since <span
            class="font-urbanist">2000</span>, Tacos “El Mexicano ” brings the unique traditions & flavors from Jalisco,
          Mexico to you.</p>
      </div>
      <div class="catering bg-ligth-blue lg:w-1/4 w-full p-6 rounded-3xl">
        <h3 class="text-2xl md:text-4xl lg:text-3xl">Catering Service for LA & surrounding areas</h3>
      </div>
    </div>
  </section>

</template>
