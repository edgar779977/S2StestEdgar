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
import Navbar from './components/Navbar/Navbar.vue';
import MarketingAgencySection from './components/Marketing/MarketingAgencySection.vue';
import Services from './components/Services/Services.vue';
import SocialNetworks from './components/SocialNetworks/SocialNetworks.vue';
import SEOSection from './components/Seo/SEOSection.vue';

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