<script setup>
import { ref } from 'vue'

const name = ref('Admin')
const email = ref('admin@example.com')
const notifications = ref(true)
const theme = ref('light')

const saveSettings = () => {
  console.log('Saved Settings:', {
    name: name.value,
    email: email.value,
    notifications: notifications.value,
    theme: theme.value,
  })
}
</script>

<template>
  <CCard>
    <CCardHeader>
      <strong>Settings</strong>
    </CCardHeader>
    <CCardBody>
      <CForm @submit.prevent="saveSettings">
        <CFormInput v-model="name" label="Admin Name" class="mb-3" required />
        <CFormInput v-model="email" label="Email Address" type="email" class="mb-3" required />

        <CFormCheck
          v-model="notifications"
          label="Enable Notifications"
          class="mb-3"
        />

        <CFormSelect v-model="theme" label="Theme" class="mb-3">
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </CFormSelect>

        <CButton type="submit" color="primary">Save Settings</CButton>
      </CForm>
    </CCardBody>
  </CCard>
</template>
