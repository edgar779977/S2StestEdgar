<template>
  <section class="position-relative section-wrapper">
    <div class="container-fluid h-100">
      <div class="fixed-dimension-box">
        <img src="../../assets/Images/Rectangle%209.png">
      </div>
      <div class="row align-items-center h-100">
        <div class="col-12 col-lg-7 px-5">
          <div>
            <p class="text-success header-text">
              MARKETING AGENCY <span class="text-white">ARMENIA’S LEADING DIGITAL BRINGS BIG RESULTS THAT</span>
            </p>
          </div>
        </div>
        <div class="col-5 px-5">
          <img class="img-fluid img-figure d-none d-md-block" src="../../assets/Images/Fog%202%20(1)%201.png">
        </div>
      </div>
      <div class="social-pin-group">
        <button class="social-btn" type="submit">
          <FbSquare/>
        </button>
        <button class="social-btn" type="submit">
          <InstaSquare/>
        </button>
        <button class="social-btn" type="submit">
          <LinkedinSquare/>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import FbSquare from '../Icons/Social/FbSquare.vue'
import InstaSquare from '../Icons/Social/InstaSquare.vue'
import LinkedinSquare from '../Icons/Social/LinkedinSquare.vue'

export default {
  name: "MarketingAgencySection",
  components: {
    FbSquare,
    InstaSquare,
    LinkedinSquare,
  }
}
</script>

<style lang="scss" scoped>

@import "./MarketingAgency";

</style>