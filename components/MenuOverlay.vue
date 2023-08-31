<template>
  <div id="MenuOverlay" class="fixed z-50 bottom-0 h-full w-full bg-white px-3">
    <div class="flex items-center justify-between py-5">
      <NuxtLink to="/" @click="userStore.isMenuOverlay = false">
        <NuxtImg width="170" src="/logo.png" />
      </NuxtLink>

      <button @click="userStore.isMenuOverlay = false" class="rounded-full p-1 hover:bg-gray-200">
        <Icon name="mdi:close" size="30" />
      </button>
    </div>

    <div class="flex items-center justify-between pt-5">
      <ul class="w-full">
        <li v-for="{ url, name, icon, method, requireUser } in menuOverlayItems" :key="name">
          <div
            v-if="!requireUser && (!user || !requireUser)"
            @click="executeMethod(method, url)"
            class="relative flex items-center justify-between py-2.5 border-b px-3 hover:bg-gray-100 cursor-pointer"
          >
            <div class="flex items-center text-[20px] font-semibold">
              <Icon :name="icon" size="33" />
              <span class="pl-4">{{ name }}</span>
            </div>
            <div
              v-if="url === 'shoppingcart'"
              class="flex items-center justify-center bg-[#FF4646] h-[35px] min-w-[35px] text-lg text-white rounded-full"
            >
              {{ userStore.cart.length }}
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/user'
import { ExecuteMethodType, IMenuOverlayItems } from '@/components/types'
const userStore = useUserStore()

const client = useSupabaseClient()
const user = false

const goTo = (url: string | undefined) => {
  userStore.isMenuOverlay = false
  if (!url) return navigateTo('/')
  return navigateTo(`/${url}`)
}

const signOut = () => {
  client.auth.signOut()
  userStore.isMenuOverlay = false
  return navigateTo('/')
}

const signIn = () => {
  userStore.isMenuOverlay = false
  return navigateTo('/auth')
}

const executeMethod = (method: ExecuteMethodType, url: string | undefined) => {
  if (url) {
    method(url)
  } else {
    method()
  }
}

const menuOverlayItems: IMenuOverlayItems[] = [
  {
    name: 'Orders',
    icon: 'ph:pen-light',
    method: goTo,
    url: 'orders',
    requireUser: false
  },
  {
    name: 'Cart',
    icon: 'ph:shopping-cart-simple-light',
    method: goTo,
    url: 'shoppingcart',
    requireUser: false
  },
  {
    name: 'Sign Out',
    method: signOut,
    icon: 'ph:sign-out-light',
    requireUser: true
  },
  {
    name: 'Sign in / Register',
    method: signIn,
    icon: 'ph:sign-in-light',
    requireUser: false
  }
]
</script>
