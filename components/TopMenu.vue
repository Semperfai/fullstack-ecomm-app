<template>
  <div id="TopMenu" class="w-full bg-white border-b md:block hidden">
    <ul
      class="flex items-center justify-end text-xs text-[#333333] font-light px-2 h-10 bg-white max-w-[1200px]"
    >
      <li
        class="border-r font-normal border-r-gray-400 px-3 hover:text-[#FF4646] cursor-pointer"
        v-for="{ title, id, icon_name } in topMenuItems"
        :key="id"
      >
        {{ title }}
        <Icon v-if="icon_name" :name="icon_name" size="17" />
      </li>
      <li
        @mouseenter="isAccountMenu = true"
        @mouseleave="isAccountMenu = false"
        class="relative flex items-center px-2.5 font-normal hover:text-[#FF4646] h-full cursor-pointer"
        :class="
          isAccountMenu
            ? 'bg-white border z-40 shadow-[0_15px_100px_10px_rgba(0,0,0,0.3)]'
            : 'border border-[#FAFAFA]'
        "
      >
        <Icon name="ph:user-thin" size="17" />
        Account
        <Icon name="mdi:chevron-down" size="15" class="ml-5" />
        <Transition
          enter-active-class="transition ease-out duration-300"
          enter-from-class="translate-x-full"
          enter-to-class="translate-x-0"
          leave-active-class="transition ease-in duration-300"
          leave-from-class="translate-x-0"
          leave-to-class="translate-x-full"
        >
          <AccountMenu :is-account-menu="isAccountMenu" />
        </Transition>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ITopMenuItems } from './types'
const isAccountMenu = ref<boolean>(false)

const topMenuItems = ref<ITopMenuItems[]>([
  {
    id: 1,
    title: 'Sell on Shop App',
    link: '/sell'
  },
  {
    id: 2,
    title: 'Cookie Preferences',
    link: '/cookie'
  },
  {
    id: 3,
    title: 'Help',
    link: '/help'
  },
  {
    id: 4,
    title: 'Buyer Protection',
    link: '/buyer'
  },
  {
    id: 5,
    title: 'App',
    link: '/app',
    icon_name: 'ic:sharp-install-mobile'
  }
])
</script>
