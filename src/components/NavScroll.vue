<script>
export default {
  name: 'NavScroll',
};

</script>


<template>
  <nav>
    <div class="flex flex-col items-end space-y-4 pb-8 fixed top-96 left-0 right-10 ">
      <img
        class="navmenu bg-[#946045]"
        src="../assets/bars2.svg"
        alt=""
      >
      <img
        class="navmenu bg-[#946045]"
        src="../assets/bars3.svg"
        alt=""
      >
      <img
        class="navmenu bg-[#946045]"
        src="../assets/bars4.svg"
        alt=""
      >
    </div>
  </nav>
</template>

<style scoped>
.navmenu {
width: 70px;
height: 70px;
border-radius: 50%;

}


</style>