<template>
  <MainLayout>
    <div class="mt-4 max-w-[1200px] mx-auto px-2" id="CheckoutPage">
      <div class="md:flex gap-4 justify-between mx-auto w-full">
        <div class="md:w-[65%]">
          <div class="bg-white rounded-lg p-4">
            <div class="text-xl font semibold mb-2">Shipping Adress</div>

            <div v-if="false">
              <NuxtLink
                to="/adress"
                class="flex items-center pb-2 text-blue-500 hover:text-red-400"
              >
                <Icon class="mr-2" name="mdi:plus" size="18" />
                Update Adress
              </NuxtLink>
              <div class="pt-2 border-t">
                <div class="underline pb-1">Delivery Address</div>
                <ul class="text-xs">
                  <li class="flex items-center gap-2">
                    <div>Contact name:</div>
                    <div class="font-bold">
                      {{ currentAddress?.data?.name || "Test" }}
                    </div>
                  </li>
                  <li class="flex items-center gap-2">
                    <div>Address:</div>
                    <div class="font-bold">
                      {{ currentAddress?.data?.address || "Test" }}
                    </div>
                  </li>
                  <li class="flex items-center gap-2">
                    <div>Zip Code:</div>
                    <div class="font-bold">
                      {{ currentAddress?.data?.zipcode || "Test" }}
                    </div>
                  </li>
                  <li class="flex items-center gap-2">
                    <div>City:</div>
                    <div class="font-bold">
                      {{ currentAddress?.data?.city || "Test" }}
                    </div>
                  </li>
                  <li class="flex items-center gap-2">
                    <div>Country:</div>
                    <div class="font-bold">
                      {{ currentAddress?.data?.country || "Test" }}
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <NuxtLink
              v-else
              to="/adress"
              class="flex items-center text-blue-500 hover:text-red-400"
            >
              <Icon name="mdi:plus" size="18" class="mr-2" />
              Add New Adress
            </NuxtLink>
          </div>
          <div id="Items" class="bg-white rounded-lg p-4 mt-4">
            <div v-for="product in mockProducts">
              <CheckoutItem :product="product" />
            </div>
          </div>
        </div>
        <div class="md:hidden block my-4" />

        <div class="md:w-[35%]">
          <div id="PlaceOrder" class="bg-white rounded-lg p-4">
            <p class="text-2xl font-extrabold mb-2">Summary</p>
            <div class="flex items-center justify-between my-4">
              <p>Total Shipping</p>
              <p>Free</p>
            </div>
            <div class="border-t" />
            <div class="flex items-center justify-between my-4">
              <p class="font-semibold">Total</p>
              <p class="text-2xl font-semibold">
                $ <span class="font-extrabold">{{ total / 100 }}</span>
              </p>
            </div>

            <form @submit.prevent="pay()">
              <div
                class="border border-gray-500 p-2 rounded-sm"
                id="card-elemnt"
              />
              <p
                id="card-error"
                role="alert"
                class="text-red-600 text-center font-semibold"
              />
              <button
                :disabled="isProcessing"
                type="submit"
                class="mt-4 bg-gradient-to-r from-[#FE630C] to-[#FF3200] w-full text-white text-[21px] font-semibold p-1.5 rounded-full"
                :class="isProcessing ? 'opacity-70' : 'opacity-100'"
              >
                <Icon v-if="isProcessing" name="eos-icons:loading" />
                <div v-else>Place order</div>
              </button>
            </form>
          </div>
          <div class="bg-white rounded-lg p-4 mt-4">
            <div class="text-lg font-semibold mb-2 mt-2">Shop App</div>
            <p class="my-2">Shop App keeps your information and payment safe</p>
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from "@/layouts/MainLayout.vue";
import { useUserStore } from "@/stores/user";
import { products } from "@/__mocks__/products";

const userStore = useUserStore();
const router = useRouter();

let stripe = null;
let elements = null;
let card = null;
let total = ref(0);
let clientSecret = null;
let currentAddress = ref(null);
let isProcessing = ref(false);
const mockProducts = ref(products).value.slice(0, 2);

const stripeInit = async () => {};

const pay = async () => {};

const createOrder = async (stipeId) => {};

const showError = (errorMsgTxt) => {};

watch(
  () => total.value,
  () => {
    if (total.value > 0) {
      stripeInit();
    }
  },
);

onMounted(() => {
  isProcessing.value = true;

  userStore.checkout.forEach((item) => {
    total.value += item.price;
  });
});
</script>
