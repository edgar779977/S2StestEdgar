<template>
  <div>
    <Navbar/>
    <MarketingAgencySection/>
    <Services/>
    <SocialNetworks/>
    <SeoSection/>
  </div>
</template>

<script>
import Navbar from './components/Navbar/Navbar.vue';
import MarketingAgencySection from './components/Marketing/MarketingAgencySection.vue';
import Services from './components/Services/Services.vue';
import SocialNetworks from './components/SocialNetworks/SocialNetworks.vue';
import SeoSection from './components/Seo/SeoSection.vue';

export default {
  components: {
    Navbar,
    MarketingAgencySection,
    Services,
    SocialNetworks,
    SeoSection
  },
};
</script>
<style>

</style>