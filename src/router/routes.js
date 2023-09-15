
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },

      //發票管理
      { name: "invoice", path: "invoice", component: () => import("pages/invoice/InvoiceIndex.vue")},
      { name: "invoiceView", path: "invoice/view", component: () => import("pages/invoice/InvoiceView.vue")},
      //帳號管理
      { name: "account", path: "account", component: () => import("pages/user-account/account-management/AccountManagement.vue") },
      { name: "account/view", path: "account/view", component: () => import("pages/user-account/account-management/AccountView.vue") },
      //收據資料管理
      { name: "receiptData", path: "receipt", component: () => import("pages/receipt-data/ReceiptData.vue") },
      { name: "receiptDataView", path: "receipt/view", component: () => import("pages/receipt-data/ReceiptDataView.vue") },
      { name: "receiptCreate", path: "receipt/create", component: () => import("pages/receipt-data/ReceiptCreate.vue") },
      //收據換章管理
      { name: "stampIndex", path: "stampindex", component: () => import("pages/stamp/StampIndex.vue") },
      { name: "stampCreate", path: "stamp/create", component: () => import("pages/stamp/StampCreate.vue") },
    ]
  },

  {
    path: '/login',
    component: () => import('layouts/loginLayout.vue'),
    children: [
      { name: "loginIndex", path: "", component: () => import("pages/login/LoginIndex.vue") },
    ]
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
