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

                <div class="input-group flex-nowrap" :class="{ 'has-error': submitted && errors.phone }">
                  <span class="input-group-text custom-addon">
                    <Phone/>
                  </span>
                  <input class="form-control custom-input" v-model="form.phone" type="text"
                         placeholder="Հեռախոսահամար*"/>
                </div>
                <span v-if="submitted && errors.phone" class="error-message">{{ errors.phone }}</span>

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
                  <div class="d-flex gap-3 social-buttons">
                    <a href="https://wa.me/your-phone-number" class="social-btn" aria-label="WhatsApp" target="_blank"
                       rel="noopener noreferrer">
                      <WhatsApp/>
                    </a>
                    <a href="viber://chat?number=your-phone-number" class="social-btn" aria-label="Viber"
                       target="_blank" rel="noopener noreferrer">
                      <Viber/>
                    </a>
                    <a href="https://t.me/your-telegram-username" class="social-btn" aria-label="Telegram"
                       target="_blank" rel="noopener noreferrer">
                      <Telegram/>
                    </a>
                    <a href="https://m.me/your-facebook-username" class="social-btn" aria-label="Messenger"
                       target="_blank" rel="noopener noreferrer">
                      <Messenger/>
                    </a>
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
import User from '../Icons/User.vue';
import Building from '../Icons/Building.vue';
import Message from '../Icons/Message.vue';
import Phone from '../Icons/Phone.vue';
import Chat from '../Icons/Chat.vue';
import WhatsApp from '../Icons/Social/WhatsApp.vue';
import Viber from '../Icons/Social/Viber.vue';
import Telegram from '../Icons/Social/Telegram.vue';
import Messenger from '../Icons/Social/Messenger.vue';
import axios from 'axios';

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
    Messenger
  },
  data() {
    return {
      form: {
        name: '',
        company: '',
        email: '',
        phone: '',
        message: ''
      },
      errors: {},
      submitted: false,
    };
  },
  methods: {
    async handleSubmit() {
      this.submitted = true;
      this.errors = this.validateForm();

      if (Object.keys(this.errors).length === 0) {
        this.errors = {};
        const session_url = 'https://test-admin.s2s.am/api/sendMessage';
        const username = 's2s_test_exercise';
        const password = 'xE1727}IHxiO';
        const credentials = btoa(`${username}:${password}`);
        const basicAuth = `Basic ${credentials}`;

        try {
          const response = await axios.post(session_url, this.form, {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': basicAuth,
            },
          });

          if (response.data.status === 200) {
            this.$swal.fire({
              title: 'Success!',
              text: response.data.message,
              icon: 'success',
              confirmButtonText: 'Close',
            });

            // Reset form fields after successful submission
            this.form = {
              name: '',
              company: '',
              email: '',
              phone: '',
              message: ''
            };
            this.submitted = false;

          } else if (response.data.status === 500) {
            this.handleResponseErrors(response.data.errors);

            this.$swal.fire({
              title: 'Error!',
              text: response.data.message,
              icon: 'error',
              confirmButtonText: 'Close',
            });
          }
        } catch (error) {
          console.log(error);
        }
      }
    },

    handleResponseErrors(serverErrors) {
      if (serverErrors) {
        // Merge server-side errors with client-side validation errors
        this.errors = {...this.errors, ...serverErrors};
      }
    },

    validateForm() {
      const errors = {};

      if (!this.form.name) {
        errors.name = 'Name is required';
      }

      if (!this.form.company) {
        errors.company = 'Company is required';
      }

      if (!this.form.email) {
        errors.email = 'Email is required';
      } else if (!this.validEmail(this.form.email)) {
        errors.email = 'Invalid email address';
      }

      if (!this.form.phone) {
        errors.phone = 'Phone number is required';
      }

      if (!this.form.message) {
        errors.message = 'Message is required';
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

@import "./SEOSection.scss";

</style>
