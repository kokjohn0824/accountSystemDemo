<template>
  <q-page class="q-px-lg q-py-lg">
    <div>
      <span class="title-size">新增收據</span>
    </div>

    <hr class="q-my-lg" />

    <q-form class="form-input-80" @submit="onSubmit">
      <div class="col">
        <q-input
          outlined
          v-model="code"
          label="訂單編號"
          :dense="dense"
          type="text"
          class="q-mb-lg q-mt-lg bg-white"
        />

        <q-input
          outlined
          v-model="code"
          label="收據金額"
          :dense="dense"
          type="text"
          class="q-mb-lg q-mt-lg bg-white"
        />
        <q-input
          outlined
          v-model="code"
          label="付款方式"
          :dense="dense"
          type="text"
          class="q-mb-lg q-mt-lg bg-white"
        />
        <q-input
          outlined
          v-model="code"
          label="交易日期"
          :dense="dense"
          type="text"
          class="q-mb-lg q-mt-lg bg-white"
        />
        <q-input
          outlined
          v-model="code"
          label="收據詳細資訊"
          :dense="dense"
          type="text"
          class="q-mb-lg q-mt-lg bg-white"
        />
      </div>

      <div class="q-mb-lg">
        <q-btn
          label="取消"
          type="button"
          to="/finance/branch"
          class="q-mr-md q-px-lg q-py-sm"
          color="grey"
        />
        <q-btn
          label="儲存"
          type="submit"
          to=""
          class="q-px-lg q-py-sm"
          color="primary"
        />
      </div>
    </q-form>
  </q-page>
  <q-dialog v-model="alertDialog">
    <q-card style="width: 400px; max-width: 100vw">
      <q-card-section>
        <div class="text-h6">alert</div>
      </q-card-section>

      <q-card-section class="q-pt-none">{{ alertText }}</q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="OK" color="primary" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup></script>
