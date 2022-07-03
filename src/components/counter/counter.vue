<template>
  <button @click="add">Add</button>
  <button @click="subtract">Subtract</button>

  {{ counter }}
</template>

<script>
import createVueComponent from '../../factory/factory';
import Counter from './counter';

export default createVueComponent(Counter);
</script>

<style scoped lang="scss">@import './counter.scss';</style>
