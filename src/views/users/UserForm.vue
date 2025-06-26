<script setup>
import { ref } from 'vue';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '@/firebase';

const name = ref('');
const age = ref('');

const addUser = async () => {
  try {
    await addDoc(collection(db, 'users'), {
      name: name.value,
      age: parseInt(age.value),
    });
    alert('User added!');
    name.value = '';
    age.value = '';
  } catch (error) {
    console.error('Failed to add user:', error);
  }
};
</script>

<template>
  <div class="user-form">
    <h2>Add New User</h2>
    <input v-model="name" type="text" placeholder="Enter name" />
    <input v-model="age" type="number" placeholder="Enter age" />
    <button @click="addUser">Submit</button>
  </div>
</template>

<style scoped>
.user-form {
  max-width: 400px;
  margin: 0 auto;
  padding: 1rem;
}
.user-form input {
  display: block;
  margin-bottom: 10px;
  padding: 8px;
  width: 100%;
}
.user-form button {
  padding: 8px 12px;
}
</style>
