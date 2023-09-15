<template>
  <q-page class="q-px-lg q-py-lg">
    <div class="row">
      <span class="title-size">收據資料管理</span>
      <div class="col">
        <q-btn-group class="float-right">
          <q-btn
            label="建立新收據"
            color="primary"
            icon="add"
            to="/receipt/create"
          />
        </q-btn-group>
      </div>
    </div>
    <q-form class="form-input-filled" @submit="onSubmit" @reset="onReset">
      <q-input
        outlined
        v-model="inputAccount"
        label="請輸入收據流水號"
        placeholder=""
        type="text"
        class="q-mb-lg q-mt-lg bg-white"
      />
      <q-input
        outlined
        v-model="inputAccount"
        label="請輸入訂單編號"
        placeholder=""
        type="text"
        class="q-mb-lg q-mt-lg bg-white"
      />

      <div class="q-mb-lg q-mt-lg row">
        <q-input
          label="請選擇收據建立日期(起)"
          outlined
          v-model="caseStartDate"
          mask="date"
          style="width: 50%"
        >
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy
                cover
                transition-show="scale"
                transition-hide="scale"
              >
                <q-date v-model="caseStartDate" minimal>
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>

        <q-input
          label="請選擇收據建立日期(迄)"
          outlined
          v-model="caseEndDate"
          mask="date"
          style="width: 50%"
        >
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy
                cover
                transition-show="scale"
                transition-hide="scale"
              >
                <q-date v-model="caseEndDate" minimal>
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </div>
      <div class="row">
        <div class="col">
          <q-btn-group class="float-right">
            <q-btn
              label="匯出CSV"
              @click="downCSV()"
              icon="cloud_download"
              color="primary"
            />
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
                to="/receipt/view"
              />
              <q-btn
                push
                label="覆核"
                icon="edit"
                color="positive"
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
                label="作廢"
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
    label: "收據流水號",
    align: "center",
    sortable: true,
    field: (row) => row.id,
  },
  {
    name: "caseId",
    label: "訂單編號",
    align: "center",
    sortable: true,
    field: (row) => row.caseId,
  },
  {
    name: "invoiceMoney",
    label: "收據金額",
    align: "center",
    sortable: true,
    field: (row) => row.money,
  },
  {
    name: "signedBy",
    label: "覆核人",
    align: "center",
    sortable: true,
    field: (row) => row.signedBy,
  },
  {
    name: "createDate",
    label: "建立日期",
    align: "center",
    sortable: true,
    field: (row) => row.createDate,
  },
  {
    name: "lastUpdateDate",
    label: "最後修改日期",
    align: "center",
    sortable: true,
    field: (row) => row.lastUpdateDate,
  },
  {
    name: "status",
    label: "收據狀態",
    align: "center",
    sortable: true,
    field: (row) => row.status,
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
    {
      id: 1,
      caseId: "4230a33f-095c-4249-9574-46a25dec25c9",
      money: "$165728.04",
      signedBy: "Letizia Plastow",
      createDate: "$326499.28",
      lastUpdateDate: "$671860.38",
      status: "覆核中",
    },
    {
      id: 2,
      caseId: "a340b266-b6d5-4447-9038-2c5933a1a790",
      money: "$39305.00",
      signedBy: "Alyce Banbridge",
      createDate: "$943850.92",
      lastUpdateDate: "$102502.95",
      status: "覆核中",
    },
    {
      id: 3,
      caseId: "7219bf25-c89e-4bb0-90d4-61c52f55d6a3",
      money: "$171670.52",
      signedBy: "Adi Keiling",
      createDate: "$122859.59",
      lastUpdateDate: "$165000.69",
      status: "已作廢",
    },
    {
      id: 4,
      caseId: "7dd0ba8c-19a9-4f12-b46b-fedeffd4755d",
      money: "$740099.41",
      signedBy: "Augustine Olerenshaw",
      createDate: "$753881.89",
      lastUpdateDate: "$433820.49",
      status: "已作廢",
    },
    {
      id: 5,
      caseId: "77d4ee97-d665-47fd-b6dd-fb5e03f6958a",
      money: "$640863.80",
      signedBy: "Talia Bonniface",
      createDate: "$896146.33",
      lastUpdateDate: "$163757.91",
      status: "已覆核待開立",
    },
    {
      id: 6,
      caseId: "c4d2f729-210c-462a-b0f9-d642a1738639",
      money: "$548016.09",
      signedBy: "Elka Grogor",
      createDate: "$560418.39",
      lastUpdateDate: "$281493.20",
      status: "已覆核待開立",
    },
    {
      id: 7,
      caseId: "8872ca24-92ed-4b07-b415-1079042ba247",
      money: "$388771.24",
      signedBy: "Heath Hugo",
      createDate: "$962585.86",
      lastUpdateDate: "$982338.89",
      status: "已作廢",
    },
    {
      id: 8,
      caseId: "db87beaf-7acb-4655-8549-d912420614ed",
      money: "$859156.13",
      signedBy: "Stu Lardez",
      createDate: "$864937.35",
      lastUpdateDate: "$420273.77",
      status: "覆核中",
    },
    {
      id: 9,
      caseId: "b81dcc20-c3a3-40ca-b55d-76b615dd0583",
      money: "$814896.00",
      signedBy: "Stillman Chelley",
      createDate: "$105738.28",
      lastUpdateDate: "$997159.54",
      status: "已覆核待開立",
    },
    {
      id: 10,
      caseId: "410af5ff-94d7-428d-8c11-4e8ae05d4273",
      money: "$103269.27",
      signedBy: "Mace Kobus",
      createDate: "$318602.12",
      lastUpdateDate: "$788889.80",
      status: "已作廢",
    },
    {
      id: 11,
      caseId: "f00709ea-2bcc-440f-9431-c7cb0fb01393",
      money: "$92577.47",
      signedBy: "Tarrance Sewards",
      createDate: "$114814.40",
      lastUpdateDate: "$567904.55",
      status: "覆核中",
    },
    {
      id: 12,
      caseId: "e2e3c6a7-fb30-42b1-b1d6-e0f8e6186b01",
      money: "$342650.05",
      signedBy: "Tammara Barmby",
      createDate: "$748225.94",
      lastUpdateDate: "$837231.26",
      status: "已覆核待開立",
    },
    {
      id: 13,
      caseId: "dc01569f-f270-4d9e-8dca-a8e38435ee34",
      money: "$424141.20",
      signedBy: "Clarice Aspinall",
      createDate: "$112669.81",
      lastUpdateDate: "$990013.80",
      status: "已開立",
    },
    {
      id: 14,
      caseId: "cee211d6-2ec8-4420-ab79-305b96650795",
      money: "$670887.89",
      signedBy: "Giraud Gawith",
      createDate: "$781447.49",
      lastUpdateDate: "$832405.57",
      status: "已開立",
    },
    {
      id: 15,
      caseId: "91facc85-2a9b-4adc-b5c7-dfbf1af2505c",
      money: "$818525.90",
      signedBy: "Alley Yakovitch",
      createDate: "$437667.48",
      lastUpdateDate: "$757553.20",
      status: "已覆核待開立",
    },
    {
      id: 16,
      caseId: "4ce93de0-f903-4f53-a5d7-c6b2d211550e",
      money: "$648027.69",
      signedBy: "Jolyn Cluckie",
      createDate: "$842764.93",
      lastUpdateDate: "$531738.39",
      status: "已開立",
    },
    {
      id: 17,
      caseId: "4687ec19-9fb0-4fea-9670-648741a3ebd6",
      money: "$268281.79",
      signedBy: "Dru Daldan",
      createDate: "$400799.92",
      lastUpdateDate: "$977766.42",
      status: "覆核中",
    },
    {
      id: 18,
      caseId: "748ad04c-e6dd-4500-a51e-9bc98c38d741",
      money: "$935088.61",
      signedBy: "Jori Empson",
      createDate: "$12064.49",
      lastUpdateDate: "$30582.81",
      status: "已開立",
    },
    {
      id: 19,
      caseId: "aabadef2-5c40-4369-a025-c35e04ff8905",
      money: "$428860.49",
      signedBy: "Deanna Feedome",
      createDate: "$266649.20",
      lastUpdateDate: "$334769.97",
      status: "已開立",
    },
    {
      id: 20,
      caseId: "b46f7785-c2e6-4a75-9090-33518d10a3e8",
      money: "$817184.69",
      signedBy: "Danice Quinnelly",
      createDate: "$432635.76",
      lastUpdateDate: "$200089.47",
      status: "已作廢",
    },
  ];
});
</script>
