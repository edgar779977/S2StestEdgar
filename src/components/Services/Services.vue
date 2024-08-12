<template>
  <section class="mt-5 mb-5 pb-5 pt-5">
    <div class="container">
      <div class="row">
        <div v-for="item in items" class="col-12 col-md-6 col-lg-3">
          <div class="box">
            <img class="img-fluid glob-img" :src="item.img" alt="glob">
            <h5 class="m-0">{{ item.title }}</h5>
            <hr class="divider">
            <p v-for="point in item.points" class="m-0">{{ point }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Services",
  data: () => {
    return {
      items: [
        {
          img: 'src/assets/Images/6dda272c652d788ffeef44d232ef1a11.png',
          title: 'ԱՎՏՈՄԱՏԱՑՈՒՄ',
          points: ['Call Center', 'CRM', 'ERP']
        },
        {
          img: 'src/assets/Images/7697f8b11d3de1f657d05e56e88d43e2.png',
          title: 'ԹՎԱՅԻՆ ՄԱՐՔԵԹԻՆԳ',
          points: ['Call Center', 'CRM', 'ERP']
        },
        {
          img: 'src/assets/Images/a5d1f46a670f77d3092d7666b7cd8a38.png',
          title: 'ԱՎԱՆԴԱԿԱՆ ՄԱՐՔԵԹԻՆԳ',
          points: ['Call Center', 'CRM', 'ERP']
        },
        {
          img: 'src/assets/Images/d3de72a5051781ffc27a658d19c74868.png',
          title: 'ԾՐԱԳՐԱՎՈՐՈՒՄ',
          points: ['Call Center', 'CRM', 'ERP']
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./Services.scss";

</style>