<template>
  <HeaderSection />
  <FirstSection />
  <FooterSection />
</template>

<script>
import HeaderSection from './components/HeaderSection.vue';
import FirstSection from './components/FirstSection.vue';
import FooterSection from './components/FooterSection.vue';
export default {
  name: 'App',
  components: {
    HeaderSection,
    FirstSection,
    FooterSection,
  }
}
</script>

<style lang="scss" scoped></style>