<template>
  <section class="my-5">
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

export default {
  name: "SocialNetworks",
  data: () => {
    return {
      items: [
        {
          img: 'src/assets/Images/Social/fb.png'
        },
        {
          img: 'src/assets/Images/Social/linkedin.png'
        },
        {
          img: 'src/assets/Images/Social/harvard.png'
        },
        {
          img: 'src/assets/Images/Social/apple.png'
        },
        {
          img: 'src/assets/Images/Social/google.png'
        },
        {
          img: 'src/assets/Images/Social/hubspot.png'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

@import "./SocialNetworks.scss";

</style>