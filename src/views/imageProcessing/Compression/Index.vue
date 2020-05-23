<template>
  <div class="index">
    <form method="post" encype="multipart/form-data" class="d-none">
      <input type="file" id="pic_input">
    </form>
    <el-button type="primary" @click="clickPicInput()">选择图像<i class="el-icon-upload el-icon--right"></i></el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    };
  },
  methods: {
    /* 调整图像大小
    * {输入路径，输出路径，调整后宽度，调整后高度，输出数据大小}
    */
    resize(inputPath, outputPath, width, height, outputDataSize, outputQuality) {
      if(outputQuality == null) {
        outputQuality = 100;
      }
      sharp(inputPath)
      .jpeg({
        quality: outputQuality
      })
      .rotate()
      .resize(width, height, {
        fit: 'fill'  // 缩放调整
      })
      .toFile(outputPath)
      .then( data => {
        console.log(data);
        if(data.size > outputDataSize) {
          this.resize(inputPath, outputPath, width, height, outputDataSize, outputQuality - 10);
        }
      })
      .catch( err => {
        console.log(err);
      });
    },
    clickPicInput() {
      $('#pic_input').click();
    }
  },
  mounted() {
    // this.resize('./800x800.jpg', './a.jpg', 500, 500, 30000);

    /* pic_input change 事件处理 */
    let picInput = $('#pic_input');
    picInput.on('change',() => {
      let ImgFile = picInput.val();  // 文件绝对路径
      let ImgType = ImgFile.substring(ImgFile.lastIndexOf(".")).toLowerCase();  // 文件类型
      picInput.val("");  // 清空文件上传框
      if(!(ImgType == '.jpg'||ImgType == '.png')){  // 图片类型验证
        this.$notify.error({
          title: '类型错误',
          message: '请上传jpg、png类型的图片'
        });
        return false;
      }
      this.$notify({
        title: '完成',
        message: '图片上传成功',
        type: 'success'
      });
    });

  }
}
</script>

<style>
  
</style>
