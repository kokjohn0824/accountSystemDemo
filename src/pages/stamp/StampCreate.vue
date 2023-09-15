<template>
  <q-page class="q-px-lg q-py-lg">
    <div>
      <span class="title-size">新增簽章</span>
    </div>

    <hr class="q-my-lg" />

    <q-form class="form-input-80" @submit="onSubmit">
      <div class="col">
        <q-input
          outlined
          v-model="code"
          label="覆核人"
          :dense="dense"
          type="text"
          class="q-mb-lg q-mt-lg bg-white"
        />
        <q-uploader
          style="max-width: 300px"
          url="http://localhost:4444/upload"
          label="上傳簽章圖檔"
          multiple
          accept=".jpg, image/*"
          max-file-size="2048"
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
