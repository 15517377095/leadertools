<template>
  <div id="app">
    <!-- Main / -->
    <div class="container-fluid">
      <div class="row">
        <div class="col-auto menu_box">
          <el-menu default-active="1-4-1" class="el-menu-vertical-demo" :collapse="isCollapse">
            <el-menu-item index="1" @click="tabCollapse()">
              <i class="el-icon-bottom-right"></i>
              <span slot="title">展开/收起</span>
            </el-menu-item>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-scissors"></i>
                <span slot="title">详情页抓取</span>
              </template>
              <el-menu-item-group>
                <span slot="title">主图抓取</span>
                <el-menu-item index="2-1">京东主图抓取</el-menu-item>
                <el-menu-item index="2-2">天猫主图抓取</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="详情抓取">
                <el-menu-item index="2-3">京东详情抓取</el-menu-item>
                <el-menu-item index="2-4">天猫详情抓取</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-picture-outline"></i>
                <span slot="title">图像处理</span>
              </template>
              <router-link to="/imageProcessing_Compression"><el-menu-item index="3-1">图像压缩</el-menu-item></router-link>
              <el-menu-item index="3-2">格式转换</el-menu-item>
            </el-submenu>
          </el-menu>
        </div>
        <div class="col content_box">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      isCollapse: true
    };
  },
  methods: {
    tabCollapse() {
      this.isCollapse = !this.isCollapse;
    }
  }
}
</script>

<style>
  .el-menu-vertical-demo {
    height: 100vh;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .menu_box {
    padding: 0 !important;
  }
  .content_box {
    background: #fff;
    padding: 10px !important;
  }
</style>
