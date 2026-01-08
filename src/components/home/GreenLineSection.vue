<script setup lang="ts">
import { homeData } from '@/data/home';
</script>

<template>
  <!-- SECCIÓN LINEA VERDE -->
  <div class="container-fluid fondo-verde">
    <div class="row justify-content-center">

      <div
        v-for="item in homeData.greenLineItems"
        :key="item.id"
        class="col-12 col-sm-12 col-md-12 col-lg-auto d-flex justify-content-center"
      >
        <div class="p-3 d-flex flex-column align-items-center justify-content-center text-center">
          <img :src="item.img" :alt="item.alt" class="img-fluid" :width="item.width" />
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
.fondo-verde {
  background-color: #a8c738;
}
</style>

