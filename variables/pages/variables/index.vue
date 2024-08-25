<script setup lang="ts">
import type { Variable } from '~/interface';

definePageMeta({
  middleware: [
    'auth',
  ],
});

const variable = await useFetch<Variable[]>('/api/variables').then(res => res.data);
</script>

<template>
  <AppHeader title="Variables" sub-title="List" />

  <a-space direction="vertical" style="width: 100%; padding: 20px;">
    <a-flex justify="end" style="width: 100%; margin-bottom: 20px;">
      <NuxtLink href="/variables/add">
        <a-button type="primary" shape="round">
          <template #icon>
            <PlusCircleOutlined />
          </template>
          ADD
        </a-button>
      </NuxtLink>
    </a-flex>

    <a-row :gutter="[16, 16]">
      <template v-for="item in variable" :key="item.id">
        <a-col :xs="12" :lg="8">
          <a-card :title="item.name">
            <template #extra>
              <a-dropdown trigger="click">
                <a-button type="text" shape="circle">
                  <template #icon>
                    <MoreOutlined style="font-size: 16px;" />
                  </template>
                </a-button>
                <template #overlay>
                  <a-menu>
                    <a-menu-item key="0">
                      <NuxtLink :href="`/variables/${item.id}`">
                        MORE
                      </NuxtLink>
                    </a-menu-item>
                    <a-menu-item key="1">
                      <NuxtLink>
                        EDIT
                      </NuxtLink>
                    </a-menu-item>
                    <a-menu-divider />
                    <a-menu-item key="3" disabled>
                      DELETE
                    </a-menu-item>
                  </a-menu>
                </template>
              </a-dropdown>
            </template>
            <a-typography-text>
              {{ item.description }}
            </a-typography-text>
          </a-card>
        </a-col>
      </template>
    </a-row>
  </a-space>
</template>