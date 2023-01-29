<template>
  <!-- 不设置默认key，以文件名区分(Vue默认)，确保复用最外层容器 -->
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component
        :is="Component"
      />
    </keep-alive>
  </router-view>
</template>

<style>
</style>
