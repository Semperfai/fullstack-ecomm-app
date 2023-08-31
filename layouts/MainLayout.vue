<template>
  <div id="MainLayout" class="w-full fixed z-50">
    <TopMenu />
    <MainHeader />
  </div>

  <Loading v-if="userStore.isLoading" />

  <div class="lg:pt-[150px] md:pt-[130px] pt-[80px]" />
  <slot />

  <Footer v-if="!userStore.isLoading" />
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()
</script>
