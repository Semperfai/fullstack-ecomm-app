<template>
  <div
    id="AccountMenu"
    v-if="isAccountMenu"
    class="absolute bg-white p-2 w-[270px] shadow-[inset_0px_0px_20px_rgba(0,0,0,0.3)] text-[#333333] z-40 top-[38px] -left-[100px] border-x border-b"
  >
    <div v-if="!user">
      <div class="text-semibold text-xl my-4 px-3">Welcom to Shop App !</div>
      <div class="flex items-center gao-1 px-3 mb-3">
        <NuxtLink
          to="/auth"
          class="bg-[#FF4646] text-center text-base rounded-sm text-white font-semibold p-2 hover:bg-red-800 w-full"
        >
          Login/Register
        </NuxtLink>
      </div>
    </div>
    <div class="border-b" />
    <ul class="bg-white text-xl">
      <li @click="navigateTo('/orders')" class="py-2 px-4 w-full hover:bg-gray-200">My Orders</li>
      <li v-if="user" @click="client.auth.signOut()" class="py-2 px-4 w-full hover:bg-gray-200">
        Sign out
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const client = useSupabaseClient()
const user = useSupabaseUser()
const props = defineProps({
  isAccountMenu: {
    type: Boolean
  }
})

const { isAccountMenu } = toRefs(props)
</script>
