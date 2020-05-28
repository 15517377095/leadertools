<template>
    <div class="index">
        <img class="error_img" src="../../assets/404.svg" />
        <div class="error_text">功能正在开发中...</div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
    .index {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .error_img {
        width: 70%;
    }
    .error_text {
        font-size: 20px;
        line-height: 60px;
        color: #444;
    }
</style>
