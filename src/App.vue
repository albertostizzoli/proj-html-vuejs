<template>
  <HeaderSection />
  <FirstSection />
  <CarouselSection />
  <UniversitySection />
  <EventsSection />
  <CoursesSection />
  <InfoSection />
  <PartnerSection />
  <FooterSection />
</template>

<script>
import HeaderSection from './components/HeaderSection.vue';
import FirstSection from './components/FirstSection.vue';
import CarouselSection from './components/CarouselSection.vue';
import UniversitySection from './components/UniversitySection.vue';
import EventsSection from './components/EventsSection.vue';
import CoursesSection from './components/CoursesSection.vue';
import InfoSection from './components/InfoSection.vue';
import PartnerSection from './components/PartnerSection.vue';
import FooterSection from './components/FooterSection.vue';
export default {
  name: 'App',
  components: {
    HeaderSection,
    FirstSection,
    CarouselSection,
    UniversitySection,
    EventsSection,
    CoursesSection,
    InfoSection,
    PartnerSection,
    FooterSection,
  }
}
</script>

<style lang="scss" scoped></style>