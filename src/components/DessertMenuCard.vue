<script>
export default {
  name: 'DessertMenuCard',
  props: {
    dessertName: {
      type: String,
      default: '',
      required: true
    },
    dessertImage: {
      type: String,
      default: '',
      required: true
    },
    dessertPrice: {
      type: String,
      default: '',
      required: true
    }
  }
}
</script>

<template>
  <div class="overflow-hidden shadow-lg">
    <img
      class="w-full"
      :src="'src/assets/dessert/' + dessertImage"
      alt=""
    >
    <div class="flex flex-col items-center py-10">
      <div class="font-bold text-3xl text-somidam mb-1">
        {{ dessertName }}
      </div>
      <span class="text-gray-400 text-base mb-6">
        {{ dessertPrice }}
      </span>
      <router-link
        to="/"
        type="button"
        class="text-somidam bg-white border-2 border-somidam focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-bold rounded-full text-xl px-6"
      >
        자세히보기
      </router-link>
    </div>
  </div>
</template>