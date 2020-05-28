<template>
  <div class="index">
    <div class="container-fluid">
      <div class="row">
        <div class="col-8 pl-4 pr-1">
          <div class="group">
            <div class="group-title">图像处理</div>
            <div class="group-items pb-1 mb-4">
              <Item color="#0089ff" to="/error_404">
                <template v-slot:default>
                  图像缩放
                </template>
                <template v-slot:icon>
                  <i class="el-icon-full-screen"></i>
                </template>
              </Item>
              <Item color="#ff9f00" to="/error_404">
                <template v-slot:default>
                  图像压缩
                </template>
                <template v-slot:icon>
                  <i class="el-icon-box"></i>
                </template>
              </Item>
              <Item color="#0089ff" to="/imageProcessing_imgCut">
                <template v-slot:default>
                  长图切割
                </template>
                <template v-slot:icon>
                  <i class="el-icon-full-screen"></i>
                </template>
              </Item>
            </div>
          </div>
          <div class="group">
            <div class="group-title">商品抓图</div>
            <div class="group-items pb-1 mb-4">
              <Item color="#0089ff" to="/error_404">
                <template v-slot:default>
                  有赞
                </template>
                <template v-slot:icon>
                  <i class="el-icon-full-screen"></i>
                </template>
              </Item>
              <Item color="#ff9f00" to="/error_404">
                <template v-slot:default>
                  京东商城
                </template>
                <template v-slot:icon>
                  <i class="el-icon-box"></i>
                </template>
              </Item>
              <Item color="#ff9f00" to="/error_404">
                <template v-slot:default>
                  天猫商城
                </template>
                <template v-slot:icon>
                  <i class="el-icon-box"></i>
                </template>
              </Item>
            </div>
          </div>
          <div class="group">
            <div class="group-title">H5处理</div>
            <div class="group-items pb-1 mb-4">
              <Item color="#0089ff" to="/htmlHandlr_cssChange">
                <template v-slot:default>
                  CSS转行内
                </template>
                <template v-slot:icon>
                  <i class="el-icon-full-screen"></i>
                </template>
              </Item>
            </div>
          </div>
        </div>
        <div class="col-4 pl-2 pr-4">
          <div class="group-title pb-2">人工提交</div>
          <div class="group">
            ...
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Item from './compomemts/Item';

export default {
  components: {
    Item
  }
}
</script>

<style>
  .index {
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
  .group-items {
    display: flex;
    flex-wrap: wrap;
  }
</style>
