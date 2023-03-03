<template>
  <div class="border-b">
    <div class="container flex flex-wrap items-center justify-between mx-auto my-4">
      <img
        src="../assets/logo.svg"
        alt="Somidam Logo"
        width="110"
        height="110"
      >
      <div class="flex md:space-x-10 sm:space-x-8">
        <router-link
          to="/"
          class="text-somidam font-bold hover:bg-gray-100 rounded px-2 py-2"
        >
          브랜드
        </router-link>
        <router-link
          to="/menu"
          class="text-somidam font-bold hover:bg-gray-100 rounded px-2 py-2"
        >
          메뉴
        </router-link>
        <router-link
          to="/start"
          class="text-somidam font-bold hover:bg-gray-100 rounded px-2 py-2"
        >
          창업안내
        </router-link>
        <router-link
          to="/join"
          class="text-somidam font-bold hover:bg-gray-100 rounded px-2 py-2"
        >
          가맹안내
        </router-link>
        <div class="flex space-x-3">
          <img
            src="../assets/sns/facebook.svg"
            alt="facebook"
            width="12"
            height="12"
          >
          <img
            src="../assets/sns/instagram.svg"
            alt="instagram"
            width="12"
            height="12"
          >
          <img
            src="../assets/sns/youtube.svg"
            alt="youtube"
            width="12"
            height="12"
          >
          <!-- 네이버 svg 만들어야 함 -->
          <img
            src="../assets/sns/naver.svg"
            alt="naver"
            width="12"
            height="12"
          >
          <img
            src="../assets/sns/tiktok.svg"
            alt="tiktok"
            width="12"
            height="12"
          >
        </div>
      </div>
    </div>
  </div>
</template>