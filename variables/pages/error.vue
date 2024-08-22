<script lang="ts" setup>
import type { NuxtError } from '#app';

defineProps<{
  error: NuxtError
}>()
</script>

<template>
  <h1>Not Found</h1>
  <div>
    <h1>{{ error?.statusCode }}</h1>
  </div>
</template>