<template>
  <div class="main">
    <div class="container-fluid">
      <div class="row">
        <div class="col-8 pl-4 pr-1">
          <div class="group">
            <div class="group-title">图像处理</div>
            <div class="group-items">
              <div class="group-item">
                <div class="item-logo"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-4 pl-2 pr-4">
          <div class="group-title pb-2">人工提交</div>
          <div class="group">
            aaa
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'main'
}
</script>

<style>
  .main {
    background: #f5f6f8;
    min-height: 100%;
    padding: 10px 0;
  }
  .group {
    background: #fff;
    border-radius: 8px;
    padding: 10px 16px;
  }
  .group-title {
    font-size: 16px;
    font-weight: bold;
  }
</style>
