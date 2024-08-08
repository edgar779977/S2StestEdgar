<template>
  <section class="mt-5 pt-5 mb-5 pb-5">
    <div class="container">
      <div class="row">
        <div v-for="item in items" class="col-6 col-md-4 col-lg-2">
          <div class="box">
            <img class="img-fluid" :src="item.img">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

// import FacebookIcon from "./Icons/FacebookIcon";
export default {
  name: "SectionThree",
  data: () => {
    return {
      items: [
        {
          img: 'src/assets/images/social/fb.png'
        },
        {
          img: 'src/assets/images/social/linkedin.png'
        },
        {
          img: 'src/assets/images/social/harvard.png'
        },
        {
          img: 'src/assets/images/social/apple.png'
        },
        {
          img: 'src/assets/images/social/google.png'
        },
        {
          img: 'src/assets/images/social/hubspot.png'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.box {
  height: 175px;
  background: #D9D9D91A;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 24px 0px 24px 24px;
  padding: 10px 25px;
  margin-bottom: 20px;
}
</style>