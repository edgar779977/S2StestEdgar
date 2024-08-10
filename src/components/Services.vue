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
          img: 'src/assets/images/6dda272c652d788ffeef44d232ef1a11.png',
          title: 'ԱՎՏՈՄԱՏԱՑՈՒՄ',
          points: ['Call Center', 'CRM', 'ERP']
        },
        {
          img: 'src/assets/images/7697f8b11d3de1f657d05e56e88d43e2.png',
          title: 'ԹՎԱՅԻՆ ՄԱՐՔԵԹԻՆԳ',
          points: ['Call Center', 'CRM', 'ERP']
        },
        {
          img: 'src/assets/images/a5d1f46a670f77d3092d7666b7cd8a38.png',
          title: 'ԱՎԱՆԴԱԿԱՆ ՄԱՐՔԵԹԻՆԳ',
          points: ['Call Center', 'CRM', 'ERP']
        },
        {
          img: 'src/assets/images/d3de72a5051781ffc27a658d19c74868.png',
          title: 'ԾՐԱԳՐԱՎՈՐՈՒՄ',
          points: ['Call Center', 'CRM', 'ERP']
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.glob-img {
  max-width: 200px;
  filter: grayscale(100%);
  transition: all 0.3s ease;
}

.box {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  border-radius: 24px;
  transition: all 0.3s ease;
  padding: 10px;

  p, .divider {
    opacity: 0;
    transition: all 0.3s ease;
  }

  &:hover {
    box-shadow: -41.87px 41.87px 41.87px 0px #FFFFFF1A inset;
    background-color: #2d2d2d66;

    p, .divider {
      opacity: 1;
    }

    .glob-img {
      filter: none;
    }
  }
}

.divider {
  margin: 0;
  width: 100%;
  color: #41B663;
  border-width: 2px;
}
</style>