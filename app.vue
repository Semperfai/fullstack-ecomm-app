<template>
  <div class="fixed z-[-1] bg-[#F2F2F2] w-full h-[100vh]"></div>
  <NuxtPage />
  <MenuOverlay
    :class="[
      {
        'max-h-[100vh] transition-all duration-200 ease-in visible': userStore.isMenuOverlay
      },
      {
        'max-h-0 transition-all duration-200 ease-out invisible': !userStore.isMenuOverlay
      }
    ]"
  />
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()
const route = useRoute()

let windowWidth = ref(process.client ? window.innerWidth : 0)

onMounted(() => {
  userStore.isLoading = false
  window.addEventListener('resize', () => {
    windowWidth.value = window.innerWidth
  })
})

watch(
  () => windowWidth.value,
  () => {
    if (windowWidth.value > 768) {
      userStore.isMenuOverlay = false
    }
  }
)

watch(
  () => route.fullPath,
  () => {
    userStore.isMenuOverlay = false
  }
)
</script>
