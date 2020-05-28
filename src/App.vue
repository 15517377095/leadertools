<template>
  <div id="app">
    <!-- 标题栏 -->
    <div id="title-block">
      <!-- 操作菜单 -->
      <el-tooltip class="item" effect="dark" content="主页" placement="bottom">
        <i class="icon-button el-icon-house" @click="goHome()"></i>
      </el-tooltip>
      <div class="hr"></div>
      <el-tooltip class="item" effect="dark" content="刷新" placement="bottom">
        <i class="icon-button el-icon-refresh" @click="refreshPage()"></i>
      </el-tooltip>
      <el-tooltip class="item" effect="dark" content="最大化" placement="bottom">
        <i class="icon-button el-icon-full-screen" @click="maximizeWin()"></i>
      </el-tooltip>
      <!-- 窗口标题 -->
      <el-popover
        placement="top-start"
        title="Powered By 繁花落幕"
        width="200"
        trigger="hover"
        content="这是一款基于 H5 + Node.js 技术，使用 electron 构建的乐德美工定制桌面端 APP"
        class="win-title ml-auto">
        <div slot="reference">leaderTools</div>
      </el-popover>
      <!-- 窗口操作 -->
      <div class="win-contoller ml-auto">
        <i class="el-icon-minus" @click="minimizeWin()"></i>
      </div>
      <div class="win-contoller">
        <i class="el-icon-copy-document" @click="maximizeWin()"></i>
      </div>
      <div class="win-contoller">
        <i class="el-icon-close" @click="closeWin()"></i>
      </div>
    </div>
    <!-- 主界面 -->
    <div class="view-box">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
const { remote } = window.require('electron');

export default {
  name: 'App',
  data() {
    return {
      
    };
  },
  methods: {
    goHome () {
      this.$router.push({
        path: '/'
      })
    },
    refreshPage () {
      location.reload();
    },
    minimizeWin(){
      remote.getCurrentWindow().minimize(); // 窗口最小化
    },
    maximizeWin(){
      const win=remote.getCurrentWindow();
      if(win.isMaximized()){ // 判断 窗口是否已最大化 
        win.restore();// 恢复原窗口大小
      }else{
         win.maximize();  //最大化窗口
      }
    },
    closeWin(){
      remote.getCurrentWindow().close(); // 关闭窗口，也结束了所有进程
    }
  }
}
</script>

<style>
  * {
    user-select: none;
  }
  #title-block {
    -webkit-app-region: drag;
    width: 100%;
    height: 40px;
    padding-left: 10px;
    display: flex;
    align-items: center;
    background: #e9ecf2;
  }

  #title-block * {
    -webkit-app-region: no-drag;
  }

  #title-block i {
    font-size: 18px;
    color: #373f47;
  }

  .icon-button {
    cursor: pointer;
    padding: 0 10px;
  }

  .hr {
    width: 1px;
    height: 14px;
    margin: 0 10px;
    background: #c2c6ca;
  }

  .win-title {
    font-size: 15px;
    color: #444;
  }

  .win-contoller {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .win-contoller i {
    font-size: 15px !important;
  }

  .win-contoller i:hover {
    cursor: pointer;
    color: #000000 !important;
  }

  .view-box {
    width: 100%;
    height: calc(100vh - 40px);
  }
</style>
