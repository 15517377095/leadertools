<template>
    <div class="imgcut-index">
        <input type="file" id="imgcut_file" @change="getFilePath()" />
        <el-button class="cutbtn mt-3" @click="cutImg()">切割</el-button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            path: ''
        }
    },
    methods: {
        getFilePath() {
            this.path = $('#imgcut_file')[0].files[0].path;

        },
        cutImg() {
            if (this.path == '') {
                alert('未选择文件');
                return;
            }

            sizeOf(this.path, (err, dimensions) => {
                sharp(this.path)
                        .extract({ left: 0, top: 3000, width: dimensions.width, height: 200})
                        .toFile('./output.png', (err, info) => {
                            if (err != undefined) {
                                console.log("aa")
                            }
                        });
                /*for (let i = 0; i < dimensions.height/500 + 1; i++) {
                    sharp(this.path)
                        .extract({ left: 0, top: 500 * i, width: dimensions.width, height: 500})
                        .toFile('./output' + i + '.png', (err, info) => { });
                    console.log(i + "_" + 500 * i);
                }*/
            });

            alert('已保存至源文件同级目录');
        }
    }
}
</script>

<style>
    .imgcut-index {
        padding: 20px;
        display: flex;
        flex-direction: column;
    }
    .cutbtn {
        width: 100px;
    }
</style>
