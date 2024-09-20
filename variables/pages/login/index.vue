<script setup lang="ts">
const access = useCookie('access', {
  // secure: true,
});

const sign = () => {
  // TODO: sign api 처리
  $fetch('/api/auth/sign', {
    method: 'POST',
    body: {
      email: 'leets1490@gmail.com',
      password: 'test',
    },
  });
}
</script>

<template>
  <a-flex justify="center" algin="center" style="width: 100dvw; height: 100dvh;">
    <a-form style="margin: auto;" @submit.prevent="sign">
      <a-flex justify="center" style="margin-bottom: 20px;">
        <a-typography-title :level="1">LOGIN</a-typography-title>
      </a-flex>
      <a-form-item label="Username">
        <a-input name="username" />
      </a-form-item>
      <a-form-item label="Password">
        <a-input name="password" />
      </a-form-item>
      <a-flex justify="end" style="margin-top: 20px;">
        <a-button type="primary" html-type="submit">SIGN</a-button>
      </a-flex>
    </a-form>
  </a-flex>
</template>