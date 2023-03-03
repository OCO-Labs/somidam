<script>
import NavBar from '../components/NavBar.vue'
import AOS from 'aos'

export default {
  components: {
    NavBar
  },
  mounted() {
    AOS.init()
  }
}
</script>

<template>
  <NavBar />
  <div
    class="w-full h-[50rem] bg-[url('@/assets/startPic.webp')] bg-center bg-cover"
  >
    <div class="flex flex-col items-center justify-center w-full h-[50rem] bg-orange-100 bg-opacity-50">
      <img
        src="../assets/logo.svg"
        alt="Somidam Logo"
        width="150"
        height="150"
      >
      <div class="text-7xl font-black mt-2 text-somidam">
        창업안내
      </div>
    </div>
  </div>
  <div class="grid 2xl:grid-cols-5 xl:grid-cols-3 sm:grid-cols-2 gap-y-10 lg:mx-52 sm:mx-auto my-28 justify-items-center">
    <div
      data-aos="fade-down"
      class="flex flex-col items-center justify-center rounded-full bg-[#F4EFEA] w-56 h-56"
    >
      <div class="text-somidam font-semibold underline underline-offset-4 mb-1.5">
        STEP. 01
      </div>
      <div class="text-somidam font-bold text-2xl text-center">
        가맹 상담
      </div>
    </div>
    <div
      data-aos="fade-down"
      class="flex flex-col items-center justify-center rounded-full bg-[#F4EFEA] w-56 h-56"
    >
      <div class="text-somidam font-semibold underline underline-offset-4 mb-1.5">
        STEP. 02
      </div>
      <div class="text-somidam font-bold text-2xl text-center">
        상권 분석
      </div>
    </div>
    <div
      data-aos="fade-down"
      class="flex flex-col items-center justify-center rounded-full bg-[#F4EFEA] w-56 h-56"
    >
      <div class="text-somidam font-semibold underline underline-offset-4 mb-1.5">
        STEP. 03
      </div>
      <div class="text-somidam font-bold text-2xl text-center">
        점포 선정
      </div>
    </div>
    <div
      data-aos="fade-down"
      class="flex flex-col items-center justify-center rounded-full bg-[#F4EFEA] w-56 h-56"
    >
      <div class="text-somidam font-semibold underline underline-offset-4 mb-1.5">
        STEP. 04
      </div>
      <div class="text-somidam font-bold text-2xl text-center">
        가맹 계약
      </div>
    </div>
    <div
      data-aos="fade-down"
      class="flex flex-col items-center justify-center rounded-full bg-[#F4EFEA] w-56 h-56"
    >
      <div class="text-somidam font-semibold underline underline-offset-4 mb-1.5">
        STEP. 05
      </div>
      <div class="text-somidam font-bold text-2xl text-center">
        인테리어 및 <br>집기 계약 체결
      </div>
    </div>
    <div
      data-aos="fade-down"
      class="flex flex-col items-center justify-center rounded-full bg-[#F4EFEA] w-56 h-56"
    >
      <div class="text-somidam font-semibold underline underline-offset-4 mb-1.5">
        STEP. 06
      </div>
      <div class="text-somidam font-bold text-2xl text-center">
        인허가 업무
      </div>
    </div>
    <div
      data-aos="fade-down"
      class="flex flex-col items-center justify-center rounded-full bg-[#F4EFEA] w-56 h-56"
    >
      <div class="text-somidam font-semibold underline underline-offset-4 mb-1.5">
        STEP. 07
      </div>
      <div class="text-somidam font-bold text-2xl text-center">
        개점 일정 확정
      </div>
    </div>
    <div
      data-aos="fade-down"
      class="flex flex-col items-center justify-center rounded-full bg-[#F4EFEA] w-56 h-56"
    >
      <div class="text-somidam font-semibold underline underline-offset-4 mb-1.5">
        STEP. 08
      </div>
      <div class="text-somidam font-bold text-2xl text-center">
        오픈 전 교육
      </div>
    </div>
    <div
      data-aos="fade-down"
      class="flex flex-col items-center justify-center rounded-full bg-[#F4EFEA] w-56 h-56"
    >
      <div class="text-somidam font-semibold underline underline-offset-4 mb-1.5">
        STEP. 09
      </div>
      <div class="text-somidam font-bold text-2xl text-center">
        인테리어 및<br>집기 세팅 후<br>초도물품 입고
      </div>
    </div>
    <div
      data-aos="fade-down"
      class="flex flex-col items-center justify-center rounded-full bg-somidam scale-50 opacity-0 intersect:scale-100 intersect:opacity-100 transition w-56 h-56"
    >
      <div class="text-[#F4EFEA] font-semibold underline underline-offset-4 mb-1.5">
        STEP. 10
      </div>
      <div class="text-[#F4EFEA] font-bold text-2xl text-center">
        오픈
      </div>
    </div>
  </div>
</template>