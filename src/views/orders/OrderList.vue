<script setup>
const orders = [
  {
    id: 101,
    customer: 'Alice Tan',
    product: 'Seiko Prospex',
    quantity: 1,
    total: 320,
    status: 'Shipped',
    date: '2025-06-18',
  },
  {
    id: 102,
    customer: 'Ben Lim',
    product: 'Casio Edifice',
    quantity: 2,
    total: 480,
    status: 'Pending',
    date: '2025-06-17',
  },
]
</script>

<template>
  <div>
    <h4 class="mb-4">Order List</h4>
    <CTable striped hover responsive>
      <CTableHead>
        <CTableRow>
          <CTableHeaderCell>Order ID</CTableHeaderCell>
          <CTableHeaderCell>Customer</CTableHeaderCell>
          <CTableHeaderCell>Product</CTableHeaderCell>
          <CTableHeaderCell>Quantity</CTableHeaderCell>
          <CTableHeaderCell>Total ($)</CTableHeaderCell>
          <CTableHeaderCell>Status</CTableHeaderCell>
          <CTableHeaderCell>Date</CTableHeaderCell>
        </CTableRow>
      </CTableHead>
      <CTableBody>
        <CTableRow v-for="order in orders" :key="order.id">
          <CTableDataCell>{{ order.id }}</CTableDataCell>
          <CTableDataCell>{{ order.customer }}</CTableDataCell>
          <CTableDataCell>{{ order.product }}</CTableDataCell>
          <CTableDataCell>{{ order.quantity }}</CTableDataCell>
          <CTableDataCell>{{ order.total }}</CTableDataCell>
          <CTableDataCell>{{ order.status }}</CTableDataCell>
          <CTableDataCell>{{ order.date }}</CTableDataCell>
        </CTableRow>
      </CTableBody>
    </CTable>
  </div>
</template>
