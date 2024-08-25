<script setup lang="ts">
const router = useRouter();

const canGoBack = ref(false);
onMounted(() => {
  // 히스토리 길이를 이용하여 뒤로 가기 가능 여부를 판단
  canGoBack.value = window.history.length > 1;
});

const props = defineProps<{
  title: string;
  subTitle?: string;
}>();
</script>

<template>
  <a-page-header
    v-if="canGoBack"
    style="border: 1px solid rgb(235, 237, 240)"
    v-bind="props"
    @back="router.back"
  />
  <a-page-header
    v-else
    style="border: 1px solid rgb(235, 237, 240)"
    v-bind="props"
  />
</template>