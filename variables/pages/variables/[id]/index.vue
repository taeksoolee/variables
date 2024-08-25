<script setup lang="ts">
import type { Variable } from '~/interface';
import { isId } from '~/lib';

const route = useRoute();

const id = route.params.id;

if (!isId(id)) {
  throw Error('Invalid Id');
}

const variable = await useFetch<Variable>(`/api/variables/${id}`)
  .then(res => res.data);
</script>

<template>
  <a-space>
    <a-typography-title :level="1">
      {{ variable?.name }}
    </a-typography-title>
  </a-space>
</template>