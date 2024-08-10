<template>
  <section class="position-relative section-wrapper">
    <div class="container-fluid h-100">
      <div class="fixed-dimension-box">
        <img src="../assets/images/Rectangle%209.png">
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
          <img class="img-fluid img-figure d-none d-md-block" src="../assets/images/Fog%202%20(1)%201.png">
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
import FbSquare from '../components/Icons/social/FbSquare.vue'
import InstaSquare from '../components/Icons/social/InstaSquare.vue'
import LinkedinSquare from '../components/Icons/social/LinkedinSquare.vue'

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
.social-pin-group {
  position: absolute;
  z-index: 21;
  right: 20px;
  top: 50%;
  transform: translateY(-80%);
  display: flex;
  flex-direction: column;
  gap: 20px
}

.social-btn {
  background: transparent !important;
  padding: 0;
  border: none;
}

.img-figure {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-32%);
  z-index: 20;
}

.fixed-dimension-box {
  position: absolute;
  left: 0;

  img {
    max-height: 500px;
  }
}

.section-wrapper {
  height: 100vh
}

.header-text {
  font-size: clamp(20px, 10vw, 68px);
  font-weight: 400;
  font-family: Roboto, serif
}
</style>