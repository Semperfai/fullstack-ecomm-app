<template>
  <div id="MainHeader" class="flex items-center w-full bg-white">
    <div
      class="flex lg:justify-start justify-between gap-10 max-w-[1150px] w-full px-3 py-5 mx-auto"
    >
      <NuxtLink to="/" class="min-w-[170px]">
        <NuxtImg
          quality="80"
          width="160"
          src="/logo.png"
          class="w-24 sm:w-28 md:w-28 lg:w-40"
          alt="Shop App"
        />
      </NuxtLink>
      <div class="max-w-[700px] w-full md:block hidden">
        <div class="relative">
          <div class="flex items-center border-2 border-[#d12f2f] rounded-md w-full">
            <input
              class="w-full placeholder-gray-400 text-sm pl-3 focus:outline-none"
              type="text"
              placeholder="Search for products, brands and more"
              v-model="searchItem"
            />
            <Icon v-if="isSearching" name="eos-icons:loading" size="25" class="mr-2" />
            <button class="flex items-center h-[100%] p-1.5 px-2 bg-[#FF4646]">
              <Icon name="ph:magnifying-glass" size="20" color="#ffffff" />
            </button>
          </div>
          <div>
            <div class="absolute bg-white max-w-[700px] h-auto w-full">
              <NuxtLink
                v-if="items"
                v-for="item in items"
                :to="`/item/${item.id}`"
                class="flex items-center justify-between w-full cursor-pointer hover:bg-gray-100"
              >
                <div class="flex items-center">
                  <img class="rounded-md" width="40" :src="item.url" />
                  <div class="truncate ml-2">{{ item.title }}</div>
                </div>
                <div class="truncate text-red-500 font-medium">${{ item.price / 100 }}</div>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
      <NuxtLink to="/shoppingcart" class="flex items-center">
        <button
          class="relative md:block hidden"
          @mouseenter="isCartHover = true"
          @mouseleave="isCartHover = false"
        >
          <span
            class="absolute flex items-center justify-center -right-[3px] top-0 bg-[#FF4646] h-[17px] text-xs text-white px-0.5 rounded-full"
          >
            {{ userStore.cart.length }}
          </span>
          <div class="min-w-[40px]">
            <Icon
              name="ph:shopping-cart-simple-light"
              size="33"
              :color="isCartHover ? '#FF4646' : ''"
            />
          </div>
        </button>
      </NuxtLink>
      <button
        @click="userStore.isMenuOverlay = true"
        class="md:hidden block rounded-full p-1.5 -mt-[4px] hover:bg-gray-200"
      >
        <Icon name="radix-icons:hamburger-menu" size="33" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/user'
import { ISearchItem } from './types'

const userStore = useUserStore()

const items = ref<ISearchItem[]>([])
const searchByName = useDebounce(async () => {
  isSearching.value = true
  const response = await useFetch(`/api/prisma/search-by-name/${searchItem.value}`)
  if (response.data.value && !response.error.value) {
    items.value = response.data.value as unknown as ISearchItem[]
  } else {
    console.log(response.error.value)
  }
}, 100)
const isSearching = ref<boolean>(false)
const searchItem = ref<string>('')

watch(
  () => searchItem.value,
  () => {
    if (!searchItem.value) {
      setTimeout(() => {
        items.value = []
        isSearching.value = false
        return
      }, 500)
    }
    searchByName()
  }
)
onMounted(() => {
  isSearching.value = false
})
const isCartHover = ref<boolean>(false)
</script>
