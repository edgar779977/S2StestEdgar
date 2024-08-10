<template>
  <div>
    <Navbar/>
    <MarketingAgencySection/>
    <Services/>
    <SocialNetworks/>
    <SEOSection/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import MarketingAgencySection from './components/MarketingAgencySection.vue';
import Services from './components/Services.vue';
import SocialNetworks from './components/SocialNetworks.vue';
import SEOSection from './components/SEOSection.vue';

export default {
  components: {
    Navbar,
    MarketingAgencySection,
    Services,
    SocialNetworks,
    SEOSection
  },
};
</script>
<style>

</style>