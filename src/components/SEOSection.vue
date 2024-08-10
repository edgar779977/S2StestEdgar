<template>
  <section>
    <div class="seo-section centered-row">
      <div class="container">
        <div class="row justify-content-between">
          <div class="seo-content col-xxl-5 px-md-0">
            <p class="seo-title p-md-0 mb-4">SEO</p>
            <p class="seo-subtitle">SEO արշավներ, որոնք իսկապես աշխատում են</p>
            <p class="seo-description p-md-0">
              Մենք մշտապես հետևում ենք թե ինչպես են փոխվում Google-ի և Yandex-ի ալգորիթմերը և դրան համապատասխան կազմում
              ենք մեր ռազմավարությունը, որպեսզի մեր հաճախորդի կայքը լինի իր ոլորտի լավագույններից մեկը որոնման
              արդյունքներում այլ ոչ թե մնա անհայտ Google-ի արդյունքների երկրորդ էջում:
            </p>
          </div>
          <div class="offer-form col-xxl-6 p-0 p-md-4">
            <div class="form-wrapper">
              <h4 class="mb-5">Ստանալ Առաջարկ</h4>
              <form class="d-flex flex-column gap-5" @submit.prevent="handleSubmit">
                <div class="input-group flex-nowrap" :class="{ 'has-error': submitted && errors.name }">
                  <span class="input-group-text custom-addon">
                    <User/>
                  </span>
                  <input class="form-control custom-input" id="name" v-model="form.name" type="text"
                         placeholder="Անուն Ազգանուն*"/>
                </div>
                <span v-if="submitted && errors.name" class="error-message">{{ errors.name }}</span>

                <div class="input-group flex-nowrap" :class="{ 'has-error': submitted && errors.company }">
                  <span class="input-group-text custom-addon">
                    <Building/>
                  </span>
                  <input class="form-control custom-input" v-model="form.company" type="text"
                         placeholder="Կազմակերպություն*"/>
                </div>
                <span v-if="submitted && errors.company" class="error-message">{{ errors.company }}</span>

                <div class="input-group flex-nowrap" :class="{ 'has-error': submitted && errors.email }">
                  <span class="input-group-text custom-addon">
                    <Message/>
                  </span>
                  <input class="form-control custom-input" v-model="form.email" type="text" placeholder="Էլ. հասցե*"/>
                </div>
                <span v-if="submitted && errors.email" class="error-message">{{ errors.email }}</span>

                <div class="input-group flex-nowrap" :class="{ 'has-error': submitted && errors.phoneNumber }">
                  <span class="input-group-text custom-addon">
                    <Phone/>
                  </span>
                  <input class="form-control custom-input" v-model="form.phoneNumber" type="text"
                         placeholder="Հեռախոսահամար*"/>
                </div>
                <span v-if="submitted && errors.phoneNumber" class="error-message">{{ errors.phoneNumber }}</span>

                <div class="input-group flex-nowrap" :class="{ 'has-error': submitted && errors.message }">
                  <span class="input-group-text custom-addon">
                    <Chat/>
                  </span>
                  <textarea rows="5" class="form-control custom-input" v-model="form.message"
                            placeholder="Հաղորդագրություն*"></textarea>
                </div>
                <span v-if="submitted && errors.message" class="error-message">{{ errors.message }}</span>

                <div class="d-flex justify-content-between">
                  <button class="btn btn-light contact-us-btn" type="submit">Ստանալ Առաջարկ</button>
                  <div class="d-flex gap-3">
                    <button class="social-btn" type="button">
                      <WhatsApp/>
                    </button>
                    <button class="social-btn" type="button">
                      <Viber/>
                    </button>
                    <button class="social-btn" type="button">
                      <Telegram/>
                    </button>
                    <button class="social-btn" type="button">
                      <Messenger/>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import User from '../components/Icons/User.vue';
import Building from '../components/Icons/Building.vue';
import Message from '../components/Icons/Message.vue';
import Phone from '../components/Icons/Phone.vue';
import Chat from '../components/Icons/Chat.vue';
import WhatsApp from '../components/Icons/social/WhatsApp.vue';
import Viber from '../components/Icons/social/Viber.vue';
import Telegram from '../components/Icons/social/Telegram.vue';
import Messenger from '../components/Icons/social/Messenger.vue';

export default {
  name: 'SEOSection',
  components: {
    User,
    Building,
    Message,
    Phone,
    Chat,
    WhatsApp,
    Viber,
    Telegram,
    Messenger,
  },
  data() {
    return {
      form: {
        name: '',
        company: '',
        email: '',
        phoneNumber: '',
        message: ''
      },
      errors: {},
      submitted: false
    };
  },
  methods: {
    async handleSubmit() {
      this.submitted = true;
      this.errors = this.validateForm();
      if (Object.keys(this.errors).length === 0) {
        // Handle form submission
        this.errors = {};  // Clear previous errors
        this.successMessage = '';  // Clear previous success message

        try {
          const response = await this.axios.post('https://test-admin.s2s.am/api/sendMessage', this.form, {
            auth: {
              username: 's2s_test_exercise',
              password: JSON.stringify('xE1727}IHxiO')
            },
            headers: {
              'Content-Type': 'application/json'
            }
          });

          if (response.data.status === 200) {
            this.successMessage = response.data.message;
          } else {
            this.errors = response.data.errors;
            console.error('Server responded with:', response.data);
          }
        } catch (error) {
          if (error.response && error.response.data) {
            this.errors = error.response.data.errors;
            console.error('Error from server:', error.response.data.message);
          } else {
            console.error('An unexpected error occurred:', error);
          }
        }
        // Reset submitted state after successful submission
        this.submitted = false;
      }
    },
    validateForm() {
      const errors = {};

      if (!this.form.name) {
        errors.name = 'Անունը պարտադիր է';
      }

      if (!this.form.company) {
        errors.company = 'Կազմակերպությունը պարտադիր է';
      }

      if (!this.form.email) {
        errors.email = 'Էլ. հասցեն պարտադիր է';
      } else if (!this.validEmail(this.form.email)) {
        errors.email = 'Անվավեր էլ. հասցե';
      }

      if (!this.form.phoneNumber) {
        errors.phoneNumber = 'Հեռախոսահամարը պարտադիր է';
      }

      if (!this.form.message) {
        errors.message = 'Հաղորդագրությունը պարտադիր է';
      }

      return errors;
    },
    validEmail(email) {
      const re = /\S+@\S+\.\S+/;
      return re.test(email);
    }
  },
  watch: {
    form: {
      handler() {
        // Re-validate the form when any input changes
        this.errors = this.validateForm();
      },
      deep: true
    }
  }
};
</script>

<style lang="scss" scoped>
section {
  height: 100%;
  background-color: #02030B;
}

.seo-section {
  padding: 100px 0;
}

.social-btn {
  background: transparent !important;
  padding: 0;
}

.centered-row {
  background-image: url('../assets/images/footerbg.png');
  background-repeat: no-repeat;
  background-size: 300px;
  background-position: center left;
}

.seo-content {
  padding-top: 136px;

  p {
    font-weight: 400;
  }

  .seo-title {
    font-size: 36px;
    line-height: 1.4;
    color: #00C9C9;
    letter-spacing: 1.28px;
  }

  .seo-subtitle {
    font-size: 24px;
    line-height: 33.6px;
    letter-spacing: 0.14em;
    color: #41B663;
  }

  .seo-description {
    max-width: 689px !important;
    font-family: 'GHEA Grapalat', sans-serif;
    font-size: 18px;
    line-height: 32.76px;
    color: #fff;
  }
}

.offer-form {
  border-radius: 24px 0 24px 24px;
  background-image: url('../assets/images/footerbg1.png');
  background-size: cover;

  h4 {
    color: #fff;
  }
}

@media (max-width: 992px) {
  .offer-form {
    margin-top: unset;
  }
}

.form-wrapper {
  border: 4px solid #00C9C9;
  border-radius: 8px;
  padding: 36px;
  box-shadow: 0 0 15px rgba(0, 255, 255, 1);
  color: white;
}

.custom-input {
  background-color: transparent;
  color: white;
  border-radius: 0 !important;
  border: none !important;
  border-bottom: 1px solid rgba(0, 201, 201, 1) !important;
  box-shadow: none;

  &::placeholder {
    color: white;
  }
}

.has-error .custom-input {
  border-color: red !important;
}

.error-message {
  color: red;
  font-size: 0.875em;
  margin-top: -10px;
  margin-bottom: 10px;
}
</style>
