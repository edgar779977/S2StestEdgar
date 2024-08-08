<template>
  <section class="position-relative section-wrapper">
    <div class="container-fluid h-100">
          <div class="fixed-dimension-box">
            <img src="../assets/images/Rectangle%209.png">
          </div>
      <div class="row align-items-center h-100">
        <div class="col-12 col-lg-7 px-5">
          <div>
            <p class="text-success" style="font-size: 68px; font-weight: 400;line-height: 95.2px;font-family: Roboto">
              MARKETING AGENCY <span class="text-white"
                                     style="font-size: 68px; font-weight: 700;line-height: 95.2px;font-family: Roboto">ARMENIA’S LEADING DIGITAL BRINGS BIG RESULTS THAT</span>
            </p>
          </div>
        </div>
        <div class="col-5 px-5">
          <img class="img-fluid img-figure" src="../assets/images/Fog%202%20(1)%201.png">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "SectionOne.vue"
}
</script>

<style lang="scss" scoped>
.img-figure {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-32%);
}
.fixed-dimension-box {
  position: absolute;
  img {
    max-height: 500px;
  }
}
.section-wrapper {
  height: 100vh
}
</style>