<template>
  <div class="min-h-screen flex flex-col overflow-hidden bg-linear-gradient-to-b from-blue-50 to-white">
    <!-- Navbar -->
    <nav class="flex items-center justify-between px-8 py-5 bg-white shadow-md z-10">
      <h1 class="text-2xl font-bold text-blue-600">TicketMaster</h1>
      <div class="flex gap-4">
        <router-link
          to="/login"
          class="text-blue-600 font-semibold hover:text-blue-800 transition"
        >
          Login
        </router-link>
        <router-link
          to="/register"
          class="bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Get Started
        </router-link>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="relative flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-20 max-w-7xl mx-auto w-full">
      <div class="flex-1 z-10">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Manage Your <span class="text-blue-600">Tickets</span> Easily
        </h2>
        <p class="text-gray-600 mb-8 text-lg max-w-lg">
          Track, manage, and resolve all your issues in one place — simple, secure, and efficient.
        </p>
        <div class="flex gap-4">
          <router-link
            to="/register"
            class="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Get Started
          </router-link>
          <router-link
            to="/login"
            class="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
          >
            Login
          </router-link>
        </div>
      </div>

      <div class="flex-1 mt-10 md:mt-0 flex justify-center relative">
        <!-- Decorative Circle -->
        <div class="absolute w-64 h-64 bg-blue-100 rounded-full -top-10 -right-10 blur-2xl opacity-50"></div>

        <!-- Hero Image Placeholder -->
        <img
          src="https://cdn-icons-png.flaticon.com/512/4319/4319104.png"
          alt="Ticket Illustration"
          class="w-80 md:w-96 relative z-10"
        />
      </div>

      <!-- Wave SVG -->
      <svg
        class="absolute bottom-0 left-0 w-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#2563eb"
          fill-opacity="1"
          d="M0,192L48,186.7C96,181,192,171,288,176C384,181,480,203,576,197.3C672,192,768,160,864,154.7C960,149,1056,171,1152,192C1248,213,1344,235,1392,245.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </section>

    <!-- Features Section -->
    <section class="py-20 bg-white relative z-10">
      <div class="max-w-6xl mx-auto px-8 grid md:grid-cols-3 gap-8">
        <div class="bg-blue-50 rounded-2xl shadow-md p-6 hover:shadow-lg transition">
          <h3 class="text-xl font-semibold text-blue-700 mb-2">Quick Setup</h3>
          <p class="text-gray-600">Get started in minutes with a clean, intuitive interface.</p>
        </div>
        <div class="bg-blue-50 rounded-2xl shadow-md p-6 hover:shadow-lg transition">
          <h3 class="text-xl font-semibold text-blue-700 mb-2">Track Progress</h3>
          <p class="text-gray-600">Monitor ticket status from open to closed in real-time.</p>
        </div>
        <div class="bg-blue-50 rounded-2xl shadow-md p-6 hover:shadow-lg transition">
          <h3 class="text-xl font-semibold text-blue-700 mb-2">Stay Organized</h3>
          <p class="text-gray-600">Centralize your team’s workflow with simple, effective management.</p>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-blue-600 text-white text-center py-6 mt-auto">
      <p>&copy; 2025 TicketMaster. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
// no script logic needed for landing page yet
</script>
