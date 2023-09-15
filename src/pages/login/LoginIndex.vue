<template>
  <q-page class="flex flex-center bg-grey-4">
    <q-card class="my-card shadow-box shadow-8 bg-grey-2" bordered>
      <q-card-section>
        <div class="text-h4 flex flex-center q-pt-sm q-pb-sm">登入</div>
      </q-card-section>
      <q-separator />
      <q-card-section class="flex flex-center">
        <q-form class="form-style" @submit="onSubmit">
          <q-input
            outlined
            ref="accountRef"
            v-model="loginForm.userName"
            label="帳號"
            :dense="dense"
            placeholder=""
            name="account"
            type="text"
            class="q-mb-sm q-mt-lg"
            :rules="inputRule"
          />
          <q-input
            outlined
            ref="pwdRef"
            v-model="loginForm.password"
            label="密碼"
            :dense="dense"
            placeholder=""
            name="password"
            type="password"
            class="q-mb-sm q-mt-sm"
            :rules="inputRule"
          />
          <div class="flex q-mb-md">
          </div>

          <div class="q-mb-lg">
            <q-btn
              label="登入"
              to="/"
              color="primary"
              class="q-px-xl q-py-sm"
            />
          </div>

          <div class="q-mb-lg">
            <q-btn
              label="忘記密碼"
              outline
              type="button"
              @click="onForgetPassword()"
              to="/forget"
              class="text-indigo q-mr-md q-px-lg q-py-sm"
            />
            <q-btn
              label="重設密碼"
              outline
              type="button"
              @click="onRestPassword()"
              to="/reset"
              class="text-indigo q-px-lg q-py-sm"
            />
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </q-page>
</template>
<!-- <script src="https://www.google.com/recaptcha/api.js" async defer></script> -->
<script setup>
import { reactive, ref } from "vue";
import vueRecaptcha from "vue3-recaptcha2";
const loginForm = reactive({
  userName: "",
  password: "",
  captchaCode: "",
});
</script>

<style>
.my-card {
  width: 700px;
}
.form-style {
  width: 80%;
}
.img-size {
  width: 140px;
  height: auto;
  margin: 0 !important;
  padding: 0 !important;
}
</style>
