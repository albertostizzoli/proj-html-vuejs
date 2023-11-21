<template>
  <HeaderSection />
  <FirstSection />
  <CarouselSection />
  <FooterSection />
</template>

<script>
import HeaderSection from './components/HeaderSection.vue';
import FirstSection from './components/FirstSection.vue';
import CarouselSection from './components/CarouselSection.vue';
import FooterSection from './components/FooterSection.vue';
export default {
  name: 'App',
  components: {
    HeaderSection,
    FirstSection,
    CarouselSection,
    FooterSection,
  }
}
</script>

<style lang="scss" scoped></style>