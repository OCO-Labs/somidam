<script>
import DessertMenuCard from '../components/DessertMenuCard.vue'

export default ({
  name: 'MenuView',
  components: {
    DessertMenuCard
  }
})
</script>

<template>
  <div class="container mx-auto">
    <div class="flex flex-col items-center">
      <img
        class="mt-32"
        src="../assets/logo.svg"
        alt="Somidam Logo"
        width="150"
        height="150"
      >
      <div class="text-somidam text-9xl font-bold mt-3">
        MENU
      </div>
      <div class="text-somidam text-2xl">
        찾으시는 메뉴를 클릭해서 확인해보세요
      </div>
    </div>
    <div class="flex items-center justify-center space-x-6 mt-28">
      <div class="text-somidam text-5xl font-bold">
        DESSERT MENU
      </div>
      <hr class="2xl:w-[52rem] xl:w-[49rem] lg:w-[38rem] hidden md:block md:w-1/2 h-0.5 bg-somidam">
    </div>
    <!-- 후우.. -->
    <div class="grid md:grid-cols-3 sm:grid-cols-1 gap-4 2xl:mx-40 xl:mx-14 lg:mx-4 mt-10 mb-32">
      <DessertMenuCard
        dessert-name="소미담 모듬떡 세트"
        dessert-price="16,800원"
        dessert-image="1.jpg"
      />
      <DessertMenuCard
        dessert-name="자색 고구마 크림떡"
        dessert-price="16,800원"
        dessert-image="2.jpg"
      />
      <DessertMenuCard
        dessert-name="카스테라 옥수수 크림떡"
        dessert-price="16,800원"
        dessert-image="3.jpg"
      />
    </div>
  </div>
</template>

<style scoped></style>
