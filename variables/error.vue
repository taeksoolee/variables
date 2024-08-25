<script lang="ts" setup>
import type { NuxtError } from '#app';

defineProps<{
  error: NuxtError
}>()
</script>

<template>
  <div>
    <h1>{{ error?.statusCode }}</h1>
  </div>
</template>