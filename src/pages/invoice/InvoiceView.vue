<template>
  <q-page class="q-px-lg q-py-lg">
    <div class="">
      <span class="title-size">檢視發票資訊</span>
    </div>

    <hr class="q-my-lg" />

    <div class="form-input-80">
      <q-markup-table class="my-card" flat bordered>
        <tbody>
          <tr>
            <td class="td-left">發票號碼</td>
            <td class="td-right">T123789</td>
          </tr>
          <tr>
            <td class="td-left">訂單編號</td>
            <td class="td-right">XXX-asd1232333</td>
          </tr>
          <tr>
            <td class="td-left">發票金額</td>
            <td class="td-right">$123</td>
          </tr>
          <tr>
            <td class="td-left">統一編號</td>
            <td class="td-right">33333332</td>
          </tr>
          <tr>
            <td class="td-left">開立日期</td>
            <td class="td-right">112/08/24</td>
          </tr>
          <tr>
            <td class="td-left">上傳日期</td>
            <td class="td-right">112/08/24</td>
          </tr>
          <tr>
            <td class="td-left">接收日期</td>
            <td class="td-right">--</td>
          </tr>
          <tr>
            <td class="td-left">開立狀態</td>
            <td class="td-right">未開立</td>
          </tr>
        </tbody>
      </q-markup-table>

      <q-btn label="返回" color="grey" class="q-mt-lg" to="/account" />
    </div>
  </q-page>
</template>
