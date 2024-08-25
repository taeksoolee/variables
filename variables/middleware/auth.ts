export default defineNuxtRouteMiddleware(async (to, from) => {
  console.log('auth...');

  const cookie = useCookie('access');
  const access = cookie.value ?? null;
  
  const body = {
    access: '',
  };

  if (access) {
    body.access = access;
  }
  
  try {
    await $fetch('/api/auth/verify', {
      method: 'POST',
      body,
    });
    return;
  } catch (err) {
    return navigateTo('/login', { redirectCode: 301 });
  }
});