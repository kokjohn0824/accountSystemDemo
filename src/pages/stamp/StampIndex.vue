<template>
  <q-page class="q-px-lg q-py-lg">
    <div class="row">
      <span class="title-size">收據換章管理</span>
      <div class="col">
        <q-btn-group class="float-right">
          <q-btn
            label="上傳新印章"
            color="primary"
            icon="add"
            to="/stamp/create"
          />
        </q-btn-group>
      </div>
    </div>
    <q-form class="form-input-filled" @submit="onSubmit" @reset="onReset">
      <q-input
        outlined
        label="請輸入印章流水號"
        placeholder=""
        type="text"
        class="q-mb-lg q-mt-lg bg-white"
      />

      <div class="row">
        <div class="col">
          <q-btn-group class="float-right">
            <q-btn
              label="清除"
              type="reset"
              icon="delete"
              color="primary"
              class="bg-white"
              outline
            />
            <q-btn label="搜尋" type="submit" icon="search" color="primary" />
          </q-btn-group>
        </div>
      </div>
    </q-form>

    <hr class="q-my-lg" />

    <div>
      <q-table
        :rows="rows"
        :columns="columns"
        :rows-per-page-options="[5, 10, 20]"
        :loading="loading"
        row-key="name"
        v-model:pagination="pagination"
        no-data-label="查無資料"
      >
        <template v-slot:body-cell-btn="props">
          <q-td :props="props">
            <q-btn-group push class="">
              <q-btn
                push
                label="檢視"
                icon="visibility"
                color="secondary"
                @click="onView(props.row.id)"
              />
              <q-btn
                push
                label="修改"
                icon="edit"
                color="primary"
                @click="onView(props.row.id)"
              />
              <q-btn
                push
                label="刪除"
                icon="delete"
                color="negative"
                @click="onView(props.row.id)"
              />
            </q-btn-group>
          </q-td>
        </template>
      </q-table>
    </div>
  </q-page>
</template>
<script setup>
import { ref, onMounted } from "vue";

const rows = ref([]);
const columns = [
  {
    name: "id",
    label: "印章流水號",
    align: "center",
    sortable: true,
    field: (row) => row.id,
  },
  {
    name: "person",
    label: "印章擁有者",
    align: "center",
    sortable: true,
    field: (row) => row.person,
  },
  {
    name: "uploadDate",
    label: "上傳日期",
    align: "center",
    sortable: true,
    field: (row) => row.uploadDate,
  },
  {
    name: "updateDate",
    label: "最後更新日期",
    align: "center",
    sortable: true,
    field: (row) => row.updateDate,
  },
  { name: "btn" },
];

const loading = ref(false);
const pagination = ref({});
const inputAccount = ref("");
const onSubmit = () => {};
const onReset = () => {};
const onResetPWD = () => {};
const onRequest = () => {
  alert("hihi");
};
onMounted(() => {
  rows.value = [
    { id: "12333", person: "Justin Wang", uploadDate: "112/08/22", updateDate:"112/08/22" },
    { id: "22333", person: "Alex Ken", uploadDate: "112/03/22" ,updateDate:"112/08/22"},
    { id: "55688", person: "Bally Hu", uploadDate: "112/08/22" ,updateDate:"112/09/11"},
  ];
});
</script>
