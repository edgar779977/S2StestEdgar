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
                  <input class="form-control custom-input" v-model="form.email" type="email" placeholder="Էլ. հասցե*"/>
                </div>
                <span v-if="submitted && errors.email" class="error-message">{{ errors.email }}</span>

                <div class="input-group flex-nowrap" :class="{ 'has-error': submitted && errors.phone }">
                  <span class="input-group-text custom-addon">
                    <Phone/>
                  </span>
                  <input class="form-control custom-input" v-model="form.phone" type="tel"
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
import {defineComponent, reactive, ref, watch} from 'vue';
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
import Swal from 'sweetalert2';

export default defineComponent({
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
  setup() {
    const form = reactive({
      name: '',
      company: '',
      email: '',
      phone: '',
      message: ''
    });

    const errors = reactive({});
    const submitted = ref(false);

    const validateForm = () => {
      const errorsObj = {};

      if (!form.name) {
        errorsObj.name = 'Name is required';
      }

      if (!form.company) {
        errorsObj.company = 'Company is required';
      }

      if (!form.email) {
        errorsObj.email = 'Email is required';
      } else if (!validEmail(form.email)) {
        errorsObj.email = 'Invalid email address';
      }

      if (!form.phone) {
        errorsObj.phone = 'Phone number is required';
      } else if (!validPhone(form.phone)) {
        errorsObj.phone = 'Phone number must contain only digits';
      }

      if (!form.message) {
        errorsObj.message = 'Message is required';
      }

      return errorsObj;
    };

    const validPhone = (phone) => {
      const re = /^\d+$/; // Regular expression to match only digits
      return re.test(phone);
    };

    const validEmail = (email) => {
      const re = /\S+@\S+\.\S+/;
      return re.test(email);
    };

    const handleResponseErrors = (serverErrors) => {
      if (serverErrors) {
        // Merge server-side errors with client-side validation errors
        Object.assign(errors, serverErrors);
      }
    };

    const handleSubmit = async () => {
      submitted.value = true;
      Object.assign(errors, validateForm());

      if (Object.keys(errors).length === 0) {
        Object.keys(errors).forEach(key => delete errors[key]);
        const session_url = 'https://test-admin.s2s.am/api/sendMessage';
        const username = 's2s_test_exercise';
        const password = 'xE1727}IHxiO';
        const credentials = btoa(`${username}:${password}`);
        const basicAuth = `Basic ${credentials}`;

        try {
          const response = await axios.post(session_url, form, {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': basicAuth,
            },
          });

          if (response.data.status === 200) {
            await Swal.fire({
              title: 'Success!',
              text: response.data.message,
              icon: 'success',
              confirmButtonText: 'Close',
            });

            // Reset form fields after successful submission
            Object.keys(form).forEach(key => form[key] = '');
            submitted.value = false;

          } else if (response.data.status === 500) {
            handleResponseErrors(response.data.errors);

            await Swal.fire({
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
    };

// Function to clear errors for a specific field
    const clearError = (field) => {
      if (errors[field]) {
        delete errors[field];
      }
    };

// Function to handle phone number validation
    const validatePhone = (phone) => {
      if (!validPhone(phone)) {
        errors.phone = 'Phone number must contain only digits';
      } else {
        delete errors.phone;
      }
    };

// Watch for changes in form inputs
    watch(() => form.name, () => clearError('name'));
    watch(() => form.company, () => clearError('company'));
    watch(() => form.email, () => clearError('email'));
    watch(() => form.phone, (newVal) => validatePhone(newVal));
    watch(() => form.message, () => clearError('message'));

    return {
      form,
      errors,
      submitted,
      handleSubmit,
      validEmail,
      validPhone
    };
  }
});
</script>

<style lang="scss" scoped>
@import "./SeoSection.scss";
</style>
