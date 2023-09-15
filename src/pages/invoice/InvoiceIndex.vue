<template>
  <q-page class="q-px-lg q-py-lg">
    <div class="row">
      <span class="title-size">發票管理</span>
      <div class="col">
      </div>
    </div>
    <q-form class="form-input-filled" @submit="onSubmit" @reset="onReset">
      <q-input
        outlined
        v-model="inputAccount"
        label="請輸入發票號碼"
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
          label="請選擇發票開立日期(起)"
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
          label="請選擇發票開立日期(迄)"
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
                to="/invoice/view"
              />
              <q-btn
                push
                label="作廢"
                icon="delete"
                color="negative"
                to="/invoice/view"
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
    label: "發票號碼",
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
    label: "發票金額",
    align: "center",
    sortable: true,
    field: (row) => row.invoiceMoney,
  },
  {
    name: "x09",
    label: "統一編號",
    align: "center",
    sortable: true,
    field: (row) => row.x09,
  },
  {
    name: "createDate",
    label: "開立日期",
    align: "center",
    sortable: true,
    field: (row) => row.createDate,
  },
  {
    name: "uploadDate",
    label: "上傳日期",
    align: "center",
    sortable: true,
    field: (row) => row.uploadDate,
  },
  {
    name: "receiveDate",
    label: "接收日期",
    align: "center",
    sortable: true,
    field: (row) => row.receiveDate,
  },
  {
    name: "status",
    label: "開立狀態",
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
      id: "833098183-5",
      caseId: "236e591e-0b42-4cae-95a0-aa7915829856",
      invoiceMoney: "$2035.34",
      x09: "6759715796399114",
      createDate: "2022/08/12",
      uploadDate: "2022/09/26",
      recieveDate: "2022/08/05",
      status: "已開立",
    },
    {
      id: "634543424-8",
      caseId: "346338c6-2fb7-4d68-b8a5-5bdfd13f9fb7",
      invoiceMoney: "$42390.98",
      x09: "3588004309203566",
      createDate: "2022/08/10",
      uploadDate: "2022/10/26",
      recieveDate: "2022/09/07",
      status: "已開立",
    },
    {
      id: "662299225-8",
      caseId: "62f84e9a-46fa-4068-9d6a-fd29fa1989b4",
      invoiceMoney: "$85199.43",
      x09: "3584985471076356",
      createDate: "2023/01/06",
      uploadDate: "2022/10/23",
      recieveDate: "2023/05/07",
      status: "已開立",
    },
    {
      id: "005745588-0",
      caseId: "f5d87b50-3440-4dd0-9867-a88cf655bf46",
      invoiceMoney: "$98952.71",
      x09: "6759364590167631618",
      createDate: "2023/03/22",
      uploadDate: "2022/10/19",
      recieveDate: "2022/10/02",
      status: "已開立",
    },
    {
      id: "676572802-3",
      caseId: "f8a53179-d0fd-4681-87f0-cd61a181c98b",
      invoiceMoney: "$77910.17",
      x09: "4844477050424920",
      createDate: "2022/11/25",
      uploadDate: "2022/10/25",
      recieveDate: "2023/05/11",
      status: "已開立",
    },
    {
      id: "148716543-9",
      caseId: "77d6bcb0-5149-46ae-a442-c00290d79be5",
      invoiceMoney: "$45386.93",
      x09: "56022326727409737",
      createDate: "2023/07/06",
      uploadDate: "2023/07/12",
      recieveDate: "2023/05/12",
      status: "已開立",
    },
    {
      id: "156899228-9",
      caseId: "63c9a768-70f6-4bee-91ea-508b2e5bc161",
      invoiceMoney: "$47947.90",
      x09: "5167959700248276",
      createDate: "2022/12/23",
      uploadDate: "2023/05/25",
      recieveDate: "2023/02/08",
      status: "已開立",
    },
    {
      id: "692165215-7",
      caseId: "335127c3-af71-4c05-9003-ec28f19a345d",
      invoiceMoney: "$95491.16",
      x09: "201969106344321",
      createDate: "2023/05/30",
      uploadDate: "2022/09/03",
      recieveDate: "2023/07/26",
      status: "已開立",
    },
    {
      id: "759272184-8",
      caseId: "9081db5d-eb4c-457a-aec4-88f63fc66354",
      invoiceMoney: "$22358.00",
      x09: "3581349413266190",
      createDate: "2022/09/19",
      uploadDate: "2023/04/03",
      recieveDate: "2023/05/29",
      status: "已開立",
    },
    {
      id: "991373518-1",
      caseId: "3a6c3d64-35ce-44f6-8d18-d043552e3426",
      invoiceMoney: "$1065.64",
      x09: "5641827214362394",
      createDate: "2023/05/25",
      uploadDate: "2022/11/17",
      recieveDate: "2023/07/08",
      status: "已開立",
    },
    {
      id: "039538900-3",
      caseId: "d0e26adf-3c56-44c0-8edb-c6d6ea1d6188",
      invoiceMoney: "$50770.30",
      x09: "372301599351592",
      createDate: "2022/09/21",
      uploadDate: "2023/05/01",
      recieveDate: "2022/08/08",
      status: "已開立",
    },
    {
      id: "681198303-5",
      caseId: "a2f8aceb-7710-42da-8c19-773387cf909c",
      invoiceMoney: "$14282.04",
      x09: "30033820074461",
      createDate: "2022/10/15",
      uploadDate: "2023/03/04",
      recieveDate: "2023/02/11",
      status: "未開立",
    },
    {
      id: "768965713-3",
      caseId: "5bdd3aed-2845-4daa-bb08-f09be55098e8",
      invoiceMoney: "$33986.69",
      x09: "3583582312840263",
      createDate: "2023/01/29",
      uploadDate: "2023/03/25",
      recieveDate: "2023/03/20",
      status: "未開立",
    },
    {
      id: "188181065-8",
      caseId: "4537859b-eb0c-4495-b535-65d0c1b40b38",
      invoiceMoney: "$58202.67",
      x09: "3581466677601548",
      createDate: "2023/07/01",
      uploadDate: "2023/02/06",
      recieveDate: "2023/01/04",
      status: "已開立",
    },
    {
      id: "044296870-1",
      caseId: "82d2078e-b2c7-46c8-b7e5-3199784e3209",
      invoiceMoney: "$80577.29",
      x09: "675979640652531988",
      createDate: "2022/11/10",
      uploadDate: "2022/10/24",
      recieveDate: "2022/10/04",
      status: "已開立",
    },
    {
      id: "614185513-X",
      caseId: "61fbccb9-a5b7-4c00-8983-6f9759c1891d",
      invoiceMoney: "$25362.03",
      x09: "3587756112807724",
      createDate: "2022/12/16",
      uploadDate: "2023/01/21",
      recieveDate: "2023/03/06",
      status: "已開立",
    },
    {
      id: "473080621-2",
      caseId: "122a85f5-0f8c-4c4f-ab34-b6767f36480d",
      invoiceMoney: "$84430.19",
      x09: "3528957162129462",
      createDate: "2022/12/22",
      uploadDate: "2023/03/03",
      recieveDate: "2023/07/03",
      status: "未開立",
    },
    {
      id: "481238023-5",
      caseId: "d6d094ed-34e7-45fa-bd27-fb25b0c26c3a",
      invoiceMoney: "$58447.61",
      x09: "6334233336491532796",
      createDate: "2022/10/24",
      uploadDate: "2023/07/01",
      recieveDate: "2023/04/09",
      status: "已開立",
    },
    {
      id: "105563953-5",
      caseId: "271e05d7-77c4-44c4-a5ca-df154d3d1e3d",
      invoiceMoney: "$4825.97",
      x09: "3542356044402746",
      createDate: "2023/03/27",
      uploadDate: "2022/11/07",
      recieveDate: "2023/04/16",
      status: "已開立",
    },
    {
      id: "203871962-4",
      caseId: "29823ecb-5568-4e3e-a5eb-943f077049db",
      invoiceMoney: "$1815.18",
      x09: "3585293037058151",
      createDate: "2023/01/24",
      uploadDate: "2023/02/21",
      recieveDate: "2023/06/28",
      status: "已開立",
    },
  ];
});
</script>
