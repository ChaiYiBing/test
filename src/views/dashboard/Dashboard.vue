<script setup>
import MainChart from './MainChart.vue'
import WidgetsStatsA from './../widgets/WidgetsStatsTypeA.vue'
import WidgetsStatsD from './../widgets/WidgetsStatsTypeD.vue'

const salesByDay = [
  { title: 'Monday', orders: 12, revenue: 3200 },
  { title: 'Tuesday', orders: 18, revenue: 4500 },
  { title: 'Wednesday', orders: 9, revenue: 2200 },
  { title: 'Thursday', orders: 15, revenue: 4000 },
  { title: 'Friday', orders: 25, revenue: 6700 },
  { title: 'Saturday', orders: 28, revenue: 7100 },
  { title: 'Sunday', orders: 14, revenue: 3600 },
]

const recentOrders = [
  {
    customer: 'John Doe',
    watch: 'Omega Speedmaster',
    quantity: 1,
    status: 'Pending',
    payment: 'Visa',
    date: '2025-06-18',
  },
  {
    customer: 'Jane Smith',
    watch: 'Rolex Submariner',
    quantity: 2,
    status: 'Completed',
    payment: 'PayPal',
    date: '2025-06-17',
  },
  {
    customer: 'David Chan',
    watch: 'Casio G-Shock',
    quantity: 1,
    status: 'Shipped',
    payment: 'Amex',
    date: '2025-06-16',
  },
]
</script>

<template>
  <div>
    <WidgetsStatsA class="mb-4" />
    <CRow>
      <CCol :md="12">
        <CCard class="mb-4">
          <CCardBody>
            <CRow>
              <CCol :sm="6">
                <h4 class="card-title mb-0">Sales Trend</h4>
                <div class="small text-body-secondary">Past 7 Days</div>
              </CCol>
            </CRow>
            <MainChart style="height: 300px; margin-top: 40px" />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>

    <CRow>
      <CCol :md="12">
        <CCard>
          <CCardHeader> Recent Orders </CCardHeader>
          <CCardBody>
            <CTable hover responsive>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell>Customer</CTableHeaderCell>
                  <CTableHeaderCell>Watch</CTableHeaderCell>
                  <CTableHeaderCell>Quantity</CTableHeaderCell>
                  <CTableHeaderCell>Status</CTableHeaderCell>
                  <CTableHeaderCell>Payment</CTableHeaderCell>
                  <CTableHeaderCell>Date</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                <CTableRow v-for="order in recentOrders" :key="order.customer + order.date">
                  <CTableDataCell>{{ order.customer }}</CTableDataCell>
                  <CTableDataCell>{{ order.watch }}</CTableDataCell>
                  <CTableDataCell>{{ order.quantity }}</CTableDataCell>
                  <CTableDataCell>{{ order.status }}</CTableDataCell>
                  <CTableDataCell>{{ order.payment }}</CTableDataCell>
                  <CTableDataCell>{{ order.date }}</CTableDataCell>
                </CTableRow>
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>

    <WidgetsStatsD class="mb-4" />
  </div>
</template>
