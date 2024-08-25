<script setup lang="ts">
const data = [
  {
    title: 'Variables',
    link: '/variables',
    description: 'Variable Management Application',
  },
];

const access = useCookie('access');
const isSigned = computed(() => access.value === 'abc');

const signout = () => {
  access.value = null;
};
</script>

<template>
  <a-flex justify="center" align="center" style="width: 100dvw; height: 100dvh;">
    <a-flex vertical justify="center">
      <a-flex justify="space-between" align="center">
        <a-typography-title :level="1">Home</a-typography-title>

        <template v-if="isSigned">
          <a-tooltip>
            <template #title>Logout</template>
            <a-button type="link" size="large" @click="signout">
              <template #icon>
                <LogoutOutlined />
              </template>
            </a-button>
          </a-tooltip>
        </template>
        <template v-else>
          <a-tooltip>
            <template #title>Login</template>
            <NuxtLink href="/login">
              <a-button type="link" size="large">
                <template #icon>
                  <LoginOutlined />
                </template>
              </a-button>
            </NuxtLink>
          </a-tooltip>
        </template>
      </a-flex>
      <a-list bordered :data-source="data" style="width: 500px;">
        <template #renderItem="{ item }">
          <a-list-item>
            <a-list-item-meta :description="item.description">
              <template #title>
                {{ item.title }}
              </template>
            </a-list-item-meta>
            <template #actions>
              <NuxtLink :href="item.link">
                <a-button type="link">
                  <template #icon>
                    <LinkOutlined />
                  </template>
                </a-button>
              </NuxtLink>
            </template>
          </a-list-item>
        </template>
      </a-list>
    </a-flex>
  </a-flex>
</template>