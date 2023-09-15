<template>
  <q-page class="q-px-lg q-py-lg">
    <div class="row">
      <span class="title-size">帳號管理</span>
      <div class="col">
        <q-btn-group class="float-right">
          <q-btn
            label="建立新帳號"
            color="primary"
            icon="add"
            to="/finance/account/create"
          />
        </q-btn-group>
      </div>
    </div>
    <q-form class="form-input-filled" @submit="onSubmit" @reset="onReset">
      <q-input
        outlined
        v-model="inputAccount"
        label="(登入帳號)"
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
                label="編輯"
                icon="edit"
                color="primary"
                @click="onEdit(props.row.id)"
              />
              <q-btn
                v-if="!props.row.status"
                push
                label="啟用"
                icon="done"
                color="positive"
                @click="onEnabled(props.row)"
              />
              <q-btn
                v-else
                push
                label="停用"
                icon="clear"
                color="negative"
                @click="onEnabled(props.row)"
              />
              <q-btn
                push
                label="重置密碼"
                icon="settings_backup_restore"
                :color="
                  !props.row.bwdResetFlag && props.row.enabled === false
                    ? 'amber-2'
                    : 'amber-7'
                "
                :disable="
                  !props.row.bwdResetFlag && props.row.enabled === false
                    ? true
                    : false
                "
                @click="onResetPWD(props.row)"
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
import { useRouter } from "vue-router";

const rows = ref([]);
const columns = [
  {
    name: "loginId",
    label: "帳號",
    align: "center",
    sortable: "啟用中",
    field: (row) => row.loginId,
  },
  {
    name: "name",
    label: "姓名",
    align: "center",
    sortable: "啟用中",
    field: (row) => row.name,
  },
  {
    name: "type",
    label: "帳號類型",
    align: "center",
    sortable: "啟用中",
    field: (row) => row.type,
  },
  {
    name: "phone",
    label: "電話",
    align: "center",
    sortable: "啟用中",
    field: (row) => row.phone,
  },
  {
    name: "email",
    label: "電子郵件",
    align: "center",
    sortable: "啟用中",
    field: (row) => row.email,
  },
  {
    name: "status",
    label: "狀態",
    align: "center",
    sortable: "啟用中",
    field: (row) => row.status,
  },
  { name: "btn" },
];

const router = useRouter();
const loading = ref(false);
const pagination = ref({});
const inputAccount = ref("");
const onSubmit = () => {};
const onView = () => {
  router.push("/account/view");
};
const onReset = () => {};
const onResetPWD = () => {};
const onRequest = () => {
  alert("hihi");
};

onMounted(() => {
  rows.value = [
    {
      loginId: "aaabb",
      name: "Kaia Sorel",
      type: "user",
      phone: "217-341-4590",
      email: "ksorel0@xing.com",
      status: "啟用中",
    },
    {
      loginId: "aaabb11",
      name: "Dinnie Dilston",
      type: "user",
      phone: "552-496-0904",
      email: "ddilston1@goo.ne.jp",
      status: "啟用中",
    },
    {
      loginId: "aaabb123",
      name: "Reinhard Crichton",
      type: "user",
      phone: "938-823-0875",
      email: "rcrichton2@sitemeter.com",
      status: "停用中",
    },
    {
      loginId: "aaabbxxy",
      name: "Slade Skelhorn",
      type: "user",
      phone: "207-901-8151",
      email: "sskelhorn3@weather.com",
      status: "停用中",
    },
    {
      loginId: "aaabb",
      name: "Thaddus Mayhead",
      type: "guest",
      phone: "745-800-1240",
      email: "tmayhead4@usgs.gov",
      status: "停用中",
    },
    {
      loginId: "aaabb",
      name: "Tamma Dufoure",
      type: "guest",
      phone: "152-159-4776",
      email: "tdufoure5@dailymail.co.uk",
      status: "停用中",
    },
    {
      loginId: "aaabb",
      name: "Silvanus Mazzilli",
      type: "user",
      phone: "230-169-5436",
      email: "smazzilli6@goo.ne.jp",
      status: "啟用中",
    },
    {
      loginId: "aaabb",
      name: "Jacques Luter",
      type: "guest",
      phone: "825-304-6758",
      email: "jluter7@bluehost.com",
      status: "停用中",
    },
    {
      loginId: "aaabb",
      name: "Essa Henker",
      type: "guest",
      phone: "604-490-0805",
      email: "ehenker8@last.fm",
      status: "停用中",
    },
    {
      loginId: "aaabb",
      name: "Myer Narey",
      type: "user",
      phone: "253-998-3924",
      email: "mnarey9@guardian.co.uk",
      status: "啟用中",
    },
  ];
});
</script>
