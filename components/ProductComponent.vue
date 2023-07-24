<template>
  <div
    :id="`ProductComponent${product.id}`"
    class="bg-white inline-block rounded hover:shadow-[0_0_13px_3px_rgba(0,0,0,0,15)] cursor-pointer"
  >
    <NuxtLink :to="`/item/${product.id}`">
      <img :src="product.url" alt="product img" class="rounded-t" />
      <div id="ProductDetails">
        <span class="flex items-center justify-between gap-3 px-1 pt-1">
          <span class="text-[#FF6674] font-semibold">${{ price }}</span>
          <span class="text-gray-500 text-sm text-light line-through">${{ oldPrice }}</span>
        </span>

        <span class="px-1 relative -top-1.5 text-[#FF6674] text-xs font-semibol">
          Extra 5% off
        </span>

        <div class="flex items-center gap-1 px-1 relative -top-1">
          <span class="bg-[#FD374F] text-white text-[9px] font-semibold px-1.5 rounded-sm">
            Welcome Deal
          </span>
          <span class="bg-[#F5F5F5] text-[#C08562] text-[9px] font-semibold px-1.5 rounded-sm">
            Top Selling
          </span>
        </div>

        <p class="flex items-center px-1 pt-0.5 text-xs text-[#252525]">
          5,000+ sold<Icon name="material-symbols:star-rate" color="#757575" class="ml-1.5" />
          4.7
        </p>
        <p class="px-1 pt-0.5 text-xs text-[#252525]">
          {{ product.title.substring(0, 60) }}
        </p>

        <p class="px-1 pb-1">
          <span class="text-xs text-[#299129] font-semibold">Free Shipping</span>
        </p>
      </div>
    </NuxtLink>
  </div>
</template>
<script setup>
const props = defineProps(['product'])

const { product } = toRefs(props)

const price = computed(() => {
  return product.value.price / 100
})

const oldPrice = computed(() => {
  return (product.value.price / 100 + (product.value.price / 100) * 0.2).toFixed(2)
})
</script>
