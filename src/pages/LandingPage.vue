<template>
  <div class="flex flex-col items-center justify-center h-screen bg-gray-50 text-center">
    <h1 class="text-5xl font-bold mb-6 text-blue-600">Ticket Management App</h1>
    <p class="text-gray-600 text-lg mb-8">
      Manage, track, and resolve tickets effortlessly.
    </p>

    <div class="flex gap-4">
      <router-link
        to="/login"
        class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Login
      </router-link>
      <router-link
        to="/register"
        class="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
      >
        Sign Up
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
