<template>
    <router-link :to="to" class="link">
      <div class="item">
          <div class="item-logo" :style="{background:color}">
            <slot name="icon"></slot>
          </div>
          <div class="item-title pl-2">
            <slot></slot>
          </div>
      </div>
    </router-link>
</template>

<script>
export default {
  props: [
    "color",
    "to"
  ]
}
</script>

<style scoped>
  .link {
    color: #000;
  }
  .link:hover {
    text-decoration: none;
  }
  .item {
    width: 140px;
    display: flex;
    justify-content: left;
    align-items: center;
    margin: 14px 0;
  }
  .item-logo {
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 16px;
    color: #fff;
    font-size: 20px;
  }
  .item-title {
    font-size: 14px;
  }
</style>
