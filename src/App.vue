<template>
  <div>
    <Navbar/>
    <SectionOne />
    <SectionTwo />
    <SectionThree />
    <SectionFour />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import SectionOne from './components/SectionOne.vue';
import SectionTwo from './components/SectionTwo.vue';
import SectionThree from './components/SectionThree.vue';
import SectionFour from './components/SectionFour.vue';

export default {
  components: {
    Navbar,
    SectionOne,
    SectionTwo,
    SectionThree,
    SectionFour
  },
};
</script>
<style>

</style>