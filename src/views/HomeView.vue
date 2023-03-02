<script setup>
import FirstBanner from '../components/FirstBanner.vue';
import NavScroll from '../components/NavScroll.vue';
import SecondBanner from '../components/SecondBanner.vue';

</script>

<template>
  <FirstBanner />
  <NavScroll />
  <SecondBanner />
</template>

<!-- css style을 따로 정의할 땐 꼭 scoped 로!! -->
<!-- https://v2.tailwindcss.com/docs/container -->
<!-- tailwindcss는 그냥 이렇게 class안에 정의하면 됩니다. tailwindcss docs에서 원하는 class 명을 찾고 div class에 갖다 붙히깅 하트하트 뾰ㅗㅇ뿅 -->
