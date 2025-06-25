<script setup>
import { ref, onMounted, watch } from 'vue'

const time = ref(new Date().toLocaleTimeString())

onMounted(() => {
  setInterval(() => {
    time.value = new Date().toLocaleTimeString()
  }, 1000)
})

watch(time, (newTime) => {
  console.log('Current time updated:', newTime)
})
</script>

<template>
  <div>
    <h1>Watch Admin Dashboard</h1>
    <p>The current time is {{ time }}</p>
  </div>
</template>