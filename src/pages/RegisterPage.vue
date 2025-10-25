<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50">
    <div class="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
      <h2 class="text-2xl font-bold text-center text-blue-600 mb-6">Sign Up</h2>

      <form @submit.prevent="handleRegister" class="space-y-5">
        <input
          v-model="name"
          type="text"
          placeholder="Full Name"
          class="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          v-model="email"
          type="email"
          placeholder="Email"
          class="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          v-model="password"
          type="password"
          placeholder="Password"
          class="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <button
          type="submit"
          class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Register
        </button>
      </form>

      <p class="text-center text-gray-500 mt-4">
        Already have an account?
        <router-link to="/login" class="text-blue-600 hover:underline">Login</router-link>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const name = ref('')
const email = ref('')
const password = ref('')

const handleRegister = () => {
  if (name.value && email.value && password.value) {
    localStorage.setItem('user', JSON.stringify({ name: name.value, email: email.value }))
    router.push('/dashboard')
  }
}
</script>
