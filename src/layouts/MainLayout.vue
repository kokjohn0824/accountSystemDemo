<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          帳務系統
        </q-toolbar-title>

        <q-btn-dropdown flat class="text-white" :label="userName">
          <q-list>
            <q-item clickable v-close-popup to="/user/edit">
              <q-item-section>
                <q-item-label class="float-left">個人資料編輯</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable v-close-popup to="/user/reset">
              <q-item-section>
                <q-item-label>修改密碼</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable v-close-popup to="/login">
              <q-item-section>
                <q-item-label>登出</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          功能選單
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, onMounted, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: '訂單類型管理',
    icon: 'person_add',
    link: '/account'
  },
  {
    title: '虛擬帳號編碼管理',
    icon: 'person_add',
  },
  {
    title: '訂單資料管理',
    icon: 'person_add',
  },
  {
    title: '訂單資料查詢',
    icon: 'person_add',
  },
  {
    title: '發票資料查詢',
    icon: 'person_add',
    link:'/invoice',
  },
  {
    title: '收據資料管理',
    icon: 'person_add',
    link: '/receipt',
  },
  {
    title: '收據換章管理',
    icon: 'person_add',
    link: '/stampIndex',
  },
  {
    title: '帳號管理',
    icon: 'person_add',
    link: '/account'
  },
  {
    title: '角色管理',
    icon: 'person_add',
  },
  {
    title: '功能管理',
    icon: 'person_add',
  },
]

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)
    const userName = ref('');

    onMounted(()=>{
      userName.value = "訪客"
    })

    return {
      userName,
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
