<template>
  <h4>BaseCard.vue</h4>
  <div>
    <slot></slot>
    <template v-if="$slots.namedSlot">
      <!-- for optimization reasons, we should not render a named slot if no named slot markup is sent (not entirely sure about this, check lesson 111 again) -->
      <slot name="namedSlot"></slot>
    </template>
    <slot name="namedSlotTwo">default content for this second named slot</slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
div {
  margin: 2rem auto;
  max-width: 70rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}
</style>
