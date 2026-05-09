<template>
  <button
    :class="['styled-btn', `styled-btn--${type}`]"
    @click="$emit('click', $event)"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'StyledButton',
  props: {
    type: {
      type: String,
      default: 'default',
      validator: (v) => ['primary', 'default'].includes(v)
    },
    text: {
      type: String,
      default: 'Button'
    }
  }
}
</script>

<style>
.styled-btn {
  padding: 8px 20px;
  border-radius: 4px;
  border: 1px solid #d9d9d9;
  font-size: 14px;
  cursor: pointer;
  transition: opacity 0.2s;
}
.styled-btn:hover {
  opacity: 0.85;
}
.styled-btn--default {
  background-color: #fff;
  color: #333;
}
.styled-btn--primary {
  background-color: #1890ff;
  color: #fff;
  border-color: #1890ff;
}
</style>
