<script setup>
const users = [
  {
    id: 1,
    name: 'Alice Tan',
    email: 'alice@example.com',
    role: 'Customer',
    status: 'Active',
    registered: '2025-06-01',
  },
  {
    id: 2,
    name: 'Ben Lim',
    email: 'ben@example.com',
    role: 'Customer',
    status: 'Blocked',
    registered: '2025-06-05',
  },
  {
    id: 3,
    name: 'Chloe Wong',
    email: 'chloe@example.com',
    role: 'Admin',
    status: 'Active',
    registered: '2025-06-10',
  },
]
</script>

<template>
  <div>
    <h4 class="mb-4">User List</h4>
    <CTable striped hover responsive>
      <CTableHead>
        <CTableRow>
          <CTableHeaderCell>#</CTableHeaderCell>
          <CTableHeaderCell>Name</CTableHeaderCell>
          <CTableHeaderCell>Email</CTableHeaderCell>
          <CTableHeaderCell>Role</CTableHeaderCell>
          <CTableHeaderCell>Status</CTableHeaderCell>
          <CTableHeaderCell>Registered On</CTableHeaderCell>
        </CTableRow>
      </CTableHead>
      <CTableBody>
        <CTableRow v-for="user in users" :key="user.id">
          <CTableDataCell>{{ user.id }}</CTableDataCell>
          <CTableDataCell>{{ user.name }}</CTableDataCell>
          <CTableDataCell>{{ user.email }}</CTableDataCell>
          <CTableDataCell>{{ user.role }}</CTableDataCell>
          <CTableDataCell>{{ user.status }}</CTableDataCell>
          <CTableDataCell>{{ user.registered }}</CTableDataCell>
        </CTableRow>
      </CTableBody>
    </CTable>
  </div>
</template>
