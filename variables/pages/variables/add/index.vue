<script setup lang="ts">
function handleSubmit(event: Event) {
  console.log('submited', event.currentTarget);
  const fd = new FormData(event.currentTarget as HTMLFormElement);
  console.log([...fd.entries()]);
  const body = Object.fromEntries(fd.entries());

  debugger;
  $fetch('/api/variables', {
    method: 'POST',
    body,
  }).then(() => {
    console.log('success');
  });
}
</script>

<template>
  <AppHeader title="Variables" />

  <a-space direction="vertical" style="width: 100%; padding: 20px;">
    <a-form :label-col="{ style: { width: '140px' } }" @submit.prevent="handleSubmit">
      <a-form-item label="name">
        <a-input name="name" />
      </a-form-item>
      <a-form-item label="description">
        <a-textarea name="description" />
      </a-form-item>
      <a-flex justify="end">
        <a-button type="primary" html-type="submit" shape="round">
          ADD
        </a-button>
      </a-flex>
    </a-form>
  </a-space>
</template>