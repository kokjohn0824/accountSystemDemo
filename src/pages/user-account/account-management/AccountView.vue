<template>
  <q-page class="q-px-lg q-py-lg">
    <div class="">
      <span class="title-size">檢視帳號</span>
    </div>

    <hr class="q-my-lg" />

    <div class="form-input-80">
      <q-markup-table class="my-card" flat bordered>
        <tbody>
          <tr>
            <td class="td-left">帳號類型</td>
            <td class="td-right">{{ user.type }}</td>
          </tr>
          <tr>
            <td class="td-left">登入帳號</td>
            <td class="td-right">{{ user.loginId }}</td>
          </tr>
          <tr>
            <td class="td-left">使用者名稱</td>
            <td class="td-right">{{ user.name }}</td>
          </tr>
          <tr>
            <td class="td-left">連絡電話</td>
            <td class="td-right">{{ user.phone }}</td>
          </tr>
          <tr>
            <td class="td-left">Email</td>
            <td class="td-right">{{ user.email }}</td>
          </tr>
          <tr>
            <td class="td-left">帳號狀態</td>
            <td class="td-right">{{ user.status }}</td>
          </tr>
        </tbody>
      </q-markup-table>

      <q-btn label="返回" color="grey" class="q-mt-lg" to="/account" />
    </div>
  </q-page>
</template>

<script setup>
import { ref, onMounted } from "vue";
const user = ref({
  loginId: "aaabb",
  name: "Jacques Luter",
  type: "guest",
  phone: "825-304-6758",
  email: "jluter7@bluehost.com",
  status: false,
});
</script>
