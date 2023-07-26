<template>
  <div id="AuthPage" class="w-full h-[100vh] bg-white">
    <div class="w-full flex items-center justify-center p-5 border-b border-b-gray">
      <NuxtLink to="/" class="min-w-[170px]">
        <img src="/logo.png" alt="logo" width="170" />
      </NuxtLink>
    </div>
    <div class="max-w-[400px] mx-auto px-2">
      <div class="text-center my-6">Login / Register</div>
      <button
        @click="login('google')"
        class="flex items-center justify-center gap-3 p-1.5 w-full border hover:bg-gray-100 rounded-full text-lg font-semibold"
      >
        <img class="max-w-[30px]" src="/google-logo.png" alt="google-log" />
        <p>Google</p>
      </button>

      <button
        @click="login('github')"
        class="flex items-center justify-center mt-4 gap-3 p-1.5 w-full border hover:bg-gray-100 rounded-full text-lg font-semibold"
      >
        <img class="max-w-[30px]" src="/github-logo.png" alt="google-log" />
        <p>Google</p>
      </button>
    </div>
  </div>
</template>

<script setup>
const client = useSupabaseClient()
const user = useSupabaseUser()

watchEffect(() => {
  if (user.value) {
    navigateTo('/')
  }
})

const login = async (prov) => {
  const { data, error } = await client.auth.signInWithOAuth({ provider: prov })
}
</script>
