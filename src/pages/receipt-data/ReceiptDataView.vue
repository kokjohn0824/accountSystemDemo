<template>
  <q-page class="q-px-lg q-py-lg">
    <div class="">
      <span class="title-size">檢視收據資訊</span>
    </div>

    <hr class="q-my-lg" />

    <div class="form-input-80">
      <q-markup-table class="my-card" flat bordered>
        <tbody>
          <tr>
            <td class="td-left">收據流水號</td>
            <td class="td-right">T123789</td>
          </tr>
          <tr>
            <td class="td-left">訂單編號</td>
            <td class="td-right">XXX-asd1232333</td>
          </tr>
          <tr>
            <td class="td-left">收據金額</td>
            <td class="td-right">$123</td>
          </tr>
          <tr>
            <td class="td-left">覆核人</td>
            <td class="td-right">王寶強</td>
          </tr>
          <tr>
            <td class="td-left">建立日期</td>
            <td class="td-right">112/08/24</td>
          </tr>
          <tr>
            <td class="td-left">最後修改日期</td>
            <td class="td-right">112/08/24</td>
          </tr>
          <tr>
            <td class="td-left">收據狀態</td>
            <td class="td-right">未開立</td>
          </tr>
        </tbody>
      </q-markup-table>

      <q-btn label="返回" color="grey" class="q-mt-lg" to="/account" />
    </div>
  </q-page>
</template>
