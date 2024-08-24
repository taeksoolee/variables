<script lang="ts" setup>
const handleClick = () => {
  message.error('Hello World');
}
</script>

<template>
  <h1>About</h1>
  <div>
    <a-button @click="handleClick">Click</a-button>
    <NuxtLink href="/">Home</NuxtLink> 
  </div>
</template>