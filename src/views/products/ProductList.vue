<script setup>
const products = [
  {
    id: 1,
    name: 'Rolex Submariner',
    brand: 'Rolex',
    price: 7500,
    stock: 5,
    status: 'Active',
  },
  {
    id: 2,
    name: 'Casio G-Shock GA2100',
    brand: 'Casio',
    price: 99,
    stock: 12,
    status: 'Active',
  },
  {
    id: 3,
    name: 'Omega Seamaster',
    brand: 'Omega',
    price: 4800,
    stock: 3,
    status: 'Inactive',
  },
]
</script>

<template>
  <div>
    <CRow class="mb-4">
      <CCol>
        <h4>Product List</h4>
      </CCol>
      <CCol class="text-end">
        <CButton color="primary" href="/products/create">Add New Watch</CButton>
      </CCol>
    </CRow>

    <CTable striped responsive hover>
      <CTableHead>
        <CTableRow>
          <CTableHeaderCell>#</CTableHeaderCell>
          <CTableHeaderCell>Name</CTableHeaderCell>
          <CTableHeaderCell>Brand</CTableHeaderCell>
          <CTableHeaderCell>Price ($)</CTableHeaderCell>
          <CTableHeaderCell>Stock</CTableHeaderCell>
          <CTableHeaderCell>Status</CTableHeaderCell>
          <CTableHeaderCell>Action</CTableHeaderCell>
        </CTableRow>
      </CTableHead>
      <CTableBody>
        <CTableRow v-for="(product, index) in products" :key="product.id">
          <CTableDataCell>{{ index + 1 }}</CTableDataCell>
          <CTableDataCell>{{ product.name }}</CTableDataCell>
          <CTableDataCell>{{ product.brand }}</CTableDataCell>
          <CTableDataCell>{{ product.price }}</CTableDataCell>
          <CTableDataCell>{{ product.stock }}</CTableDataCell>
          <CTableDataCell>{{ product.status }}</CTableDataCell>
          <CTableDataCell>
            <CButton color="info" size="sm" :href="`/products/${product.id}`">Edit</CButton>
          </CTableDataCell>
        </CTableRow>
      </CTableBody>
    </CTable>
  </div>
</template>
