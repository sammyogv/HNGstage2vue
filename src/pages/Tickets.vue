<template>
  <div class="min-h-screen bg-gray-50 flex flex-col">
    <!-- Navbar -->
    <nav class="bg-blue-600 text-white px-6 py-4 flex justify-between items-center">
      <h1 class="text-xl font-bold">Ticket Management</h1>
      <router-link
        to="/dashboard"
        class="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition"
      >
        Back to Dashboard
      </router-link>
    </nav>

    <div class="flex-1 p-8 max-w-5xl mx-auto w-full">
      <!-- Create Ticket Form -->
      <form
        @submit.prevent="addTicket"
        class="bg-white shadow-md rounded-xl p-6 mb-8 flex flex-col gap-4"
      >
        <h2 class="text-2xl font-bold text-blue-600 mb-2">Create New Ticket</h2>

        <input
          v-model="newTicket.title"
          type="text"
          placeholder="Ticket Title"
          class="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
          required
        />

        <textarea
          v-model="newTicket.description"
          placeholder="Ticket Description"
          class="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
          rows="3"
          required
        ></textarea>

        <select
          v-model="newTicket.status"
          class="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
        >
          <option value="Open">Open</option>
          <option value="In Progress">In Progress</option>
          <option value="Closed">Closed</option>
        </select>

        <button
          type="submit"
          class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Add Ticket
        </button>

        <p v-if="errorMessage" class="text-red-500 text-sm mt-2">{{ errorMessage }}</p>
        <p v-if="successMessage" class="text-green-600 text-sm mt-2">{{ successMessage }}</p>
      </form>

      <!-- Ticket List -->
      <div v-if="tickets.length" class="grid md:grid-cols-2 gap-6">
        <div
          v-for="(ticket, index) in tickets"
          :key="ticket.id"
          class="bg-white shadow-lg rounded-xl p-5 flex flex-col justify-between"
        >
          <div>
            <h3 class="text-xl font-semibold mb-2 text-gray-800">{{ ticket.title }}</h3>
            <p class="text-gray-600 mb-3">{{ ticket.description }}</p>
            <span
              :class="{
                'bg-green-100 text-green-700': ticket.status === 'Closed',
                'bg-yellow-100 text-yellow-700': ticket.status === 'In Progress',
                'bg-blue-100 text-blue-700': ticket.status === 'Open'
              }"
              class="px-3 py-1 rounded-full text-sm font-semibold"
            >
              {{ ticket.status }}
            </span>
          </div>

          <div class="flex justify-end gap-3 mt-4">
            <button
              @click="editTicket(index)"
              class="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition"
            >
              Edit
            </button>
            <button
              @click="deleteTicket(index)"
              class="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
            >
              Delete
            </button>
          </div>
        </div>
      </div>

      <p v-else class="text-center text-gray-500 mt-8">No tickets available.</p>

      <!-- Edit Modal -->
      <div
        v-if="isEditing"
        class="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center"
      >
        <div class="bg-white rounded-lg p-6 w-full max-w-md shadow-xl">
          <h3 class="text-xl font-bold mb-4 text-blue-600">Edit Ticket</h3>

          <input
            v-model="editForm.title"
            type="text"
            placeholder="Ticket Title"
            class="w-full border rounded-lg px-4 py-2 mb-3 focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            v-model="editForm.description"
            placeholder="Ticket Description"
            class="w-full border rounded-lg px-4 py-2 mb-3 focus:ring-2 focus:ring-blue-500"
            rows="3"
          ></textarea>
          <select
            v-model="editForm.status"
            class="w-full border rounded-lg px-4 py-2 mb-3 focus:ring-2 focus:ring-blue-500"
          >
            <option value="Open">Open</option>
            <option value="In Progress">In Progress</option>
            <option value="Closed">Closed</option>
          </select>

          <div class="flex justify-end gap-3">
            <button
              @click="cancelEdit"
              class="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition"
            >
              Cancel
            </button>
            <button
              @click="updateTicket"
              class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'

interface Ticket {
  id: number
  title: string
  description: string
  status: string
}

const tickets = ref<Ticket[]>([])
const newTicket = ref({ title: '', description: '', status: 'Open' })
const isEditing = ref(false)
const editForm = ref<Ticket>({ id: 0, title: '', description: '', status: 'Open' })
const errorMessage = ref('')
const successMessage = ref('')

// Load tickets from localStorage
onMounted(() => {
  const savedTickets = localStorage.getItem('tickets')
  if (savedTickets) tickets.value = JSON.parse(savedTickets)
})

// Save tickets whenever they change
watch(tickets, (newVal) => {
  localStorage.setItem('tickets', JSON.stringify(newVal))
}, { deep: true })

const addTicket = () => {
  if (!newTicket.value.title || !newTicket.value.description) {
    errorMessage.value = 'Please fill out all fields.'
    successMessage.value = ''
    return
  }

  const ticket: Ticket = {
    id: Date.now(),
    title: newTicket.value.title,
    description: newTicket.value.description,
    status: newTicket.value.status
  }

  tickets.value.push(ticket)
  newTicket.value = { title: '', description: '', status: 'Open' }
  errorMessage.value = ''
  successMessage.value = 'Ticket added successfully!'
  setTimeout(() => (successMessage.value = ''), 2000)
}

const deleteTicket = (index: number) => {
  if (confirm('Are you sure you want to delete this ticket?')) {
    tickets.value.splice(index, 1)
    successMessage.value = 'Ticket deleted successfully!'
    setTimeout(() => (successMessage.value = ''), 2000)
  }
}

const editTicket = (index: number) => {
  
const ticket = tickets.value[index]
if (!ticket) {
    errorMessage.value = 'Ticket not found.'
    return
}
editForm.value = { ...ticket }
  isEditing.value = true
}

const cancelEdit = () => {
  isEditing.value = false
}

const updateTicket = () => {
  const index = tickets.value.findIndex((t) => t.id === editForm.value.id)
  if (index !== -1) {
    tickets.value[index] = { ...editForm.value }
    successMessage.value = 'Ticket updated successfully!'
  }
  isEditing.value = false
  setTimeout(() => (successMessage.value = ''), 2000)
}
</script>
