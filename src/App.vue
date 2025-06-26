<script setup>
import { onBeforeMount } from 'vue'
import { useColorModes } from '@coreui/vue'
import { useThemeStore } from '@/stores/theme.js'
import Sidebar from '@/components/AppSidebar.vue'
import Topbar from '@/components/AppHeader.vue'

// Firebase Firestore Imports
import { db } from '@/firebase' // <-- Make sure the path is correct
import { collection, addDoc } from 'firebase/firestore'

// Firebase Test Function: Add a test user
const addTestUser = async () => {
  try {
    await addDoc(collection(db, "users"), {
      name: "Test User",
      age: 30
    })
    console.log("User added to Firestore.")
  } catch (err) {
    console.error("Error adding user:", err)
  }
}

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

  // Call Firestore test function
  addTestUser()
})
</script>
