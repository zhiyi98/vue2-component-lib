<template>
  <div class="simple-counter">
    <button class="simple-counter__btn simple-counter__btn--minus" @click="decrement">-</button>
    <span class="simple-counter__value">{{ current }}</span>
    <button class="simple-counter__btn simple-counter__btn--plus" @click="increment">+</button>
  </div>
</template>

<script>
export default {
  name: 'SimpleCounter',
  props: {
    initialValue: {
      type: Number,
      default: 0
    },
    step: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      current: this.initialValue
    }
  },
  methods: {
    increment() {
      this.current += this.step
      this.$emit('change', this.current)
    },
    decrement() {
      this.current -= this.step
      this.$emit('change', this.current)
    }
  }
}
</script>

<style>
.simple-counter {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}
.simple-counter__value {
  min-width: 48px;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
}
.simple-counter__btn {
  width: 32px;
  height: 32px;
  border-radius: 4px;
  border: 1px solid #d9d9d9;
  background: #fff;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
.simple-counter__btn:hover {
  background: #f5f5f5;
}
</style>
