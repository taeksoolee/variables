<script setup lang="ts">
import type { Todo } from '~/interface';

const todos = await useFetch<Todo[]>('/api/todos').then(res => res.data);

const handleClick = () => {
  message.error('Hello World');
}
</script>

<template>
  <a-space direction="vertical" style="width: 100%;">
    <a-space align="baseline">
      <a-typography-title :level="1">Variables</a-typography-title>
      
      <a-button type="link" shape="circle">
        <template #icon>
          <NuxtLink href="/create">
            <PlusCircleOutlined style="font-size: 20px;"/>
          </NuxtLink>
        </template>
      </a-button>
    </a-space>

    <a-row :gutter="[16, 16]">
      <template v-for="item in todos" :key="item.id">
        <a-col :xs="12" :lg="8">
          <a-card :title="item.title">
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
                      <NuxtLink>
                        1st menu item
                      </NuxtLink>
                    </a-menu-item>
                    <a-menu-item key="1">
                      <NuxtLink>
                        2nd menu item
                      </NuxtLink>
                    </a-menu-item>
                    <a-menu-divider />
                    <a-menu-item key="3" disabled>3rd menu item（disabled）</a-menu-item>
                  </a-menu>
                </template>
              </a-dropdown>
            </template>
            <a-typography-text>{{ item.description }}</a-typography-text>
          </a-card>
        </a-col>
      </template>
    </a-row>
  </a-space>
  
</template>