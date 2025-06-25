<script setup>
import { onBeforeMount } from 'vue'
import { useColorModes } from '@coreui/vue'
import { useThemeStore } from '@/stores/theme.js'
import Sidebar from '@/components/AppSidebar.vue'
import Topbar from '@/components/AppHeader.vue'

const { isColorModeSet, setColorMode } = useColorModes(
  'coreui-free-vue-admin-template-theme',
)
const currentTheme = useThemeStore()

onBeforeMount(() => {
  const urlParams = new URLSearchParams(window.location.href.split('?')[1])
  let theme = urlParams.get('theme')

  if (theme !== null && theme.match(/^[A-Za-z0-9\s]+/)) {
    theme = theme.match(/^[A-Za-z0-9\s]+/)[0]
  }

  if (theme) {
    setColorMode(theme)
    return
  }

  if (isColorModeSet()) return
  setColorMode(currentTheme.theme)
})
</script>

<template>
  <div class="admin-layout">
    <Sidebar />
    <div class="main-content">
      <Topbar />
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
@use 'styles/style';
@use 'styles/examples';

.admin-layout {
  display: flex;
  min-height: 100vh;

  .main-content {
    flex-grow: 1;
    padding: 1rem;
  }
}
</style>
