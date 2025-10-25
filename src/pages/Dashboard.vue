<template>
  <div class="min-h-screen flex flex-col">
    <nav class="bg-blue-600 text-white px-6 py-4 flex justify-between items-center">
      <h1 class="text-xl font-bold">Dashboard</h1>
      <button
        @click="logout"
        class="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition"
      >
        Logout
      </button>
    </nav>

    <div class="flex-1 flex flex-col items-center justify-center text-center bg-gray-50">
      <h2 class="text-3xl font-semibold mb-4">Welcome, {{ user?.name || 'User' }} 👋</h2>
      <p class="text-gray-600 mb-6">Manage your tickets efficiently from one place.</p>

      <router-link
        to="/tickets"
        class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Go to Ticket Management
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const user = ref<{ name?: string; email?: string } | null>(null)

onMounted(() => {
  const saved = localStorage.getItem('user')
  if (!saved) router.push('/login')
  else user.value = JSON.parse(saved)
})

const logout = () => {
  localStorage.removeItem('user')
router.push('/')
}
</script>
