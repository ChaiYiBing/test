<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const isEdit = !!route.params.id

const product = ref({
  name: '',
  brand: '',
  price: 0,
  stock: 0,
  status: 'Active',
})

// Simulated API fetch if editing
onMounted(() => {
  if (isEdit) {
    const id = route.params.id
    // Simulated fetch logic
    if (id === '1') {
      product.value = {
        name: 'Rolex Submariner',
        brand: 'Rolex',
        price: 7500,
        stock: 5,
        status: 'Active',
      }
    }
  }
})

const submitForm = () => {
  console.log('Saving...', product.value)
  router.push('/products') // Redirect to product list
}
</script>

<template>
  <CCard>
    <CCardHeader>
      <strong>{{ isEdit ? 'Edit' : 'Add New' }} Watch</strong>
    </CCardHeader>
    <CCardBody>
      <CForm @submit.prevent="submitForm">
        <CFormInput v-model="product.name" label="Watch Name" required />
        <CFormInput v-model="product.brand" label="Brand" required />
        <CFormInput
          v-model.number="product.price"
          label="Price ($)"
          type="number"
          required
        />
        <CFormInput
          v-model.number="product.stock"
          label="Stock Quantity"
          type="number"
          required
        />
        <CFormSelect v-model="product.status" label="Status">
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </CFormSelect>
        <CButton type="submit" color="primary" class="mt-3">
          {{ isEdit ? 'Update' : 'Create' }} Product
        </CButton>
      </CForm>
    </CCardBody>
  </CCard>
</template>
