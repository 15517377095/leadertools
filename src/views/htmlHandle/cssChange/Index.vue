<template>
    <div class="css-change-index">
        <div class="steps">
            <el-steps class="steps" :active="contentActice">
                <el-step title="输入源"></el-step>
                <el-step title="进行转换"></el-step>
                <el-step title="输出目标"></el-step>
            </el-steps>
        </div>
        <div class="content content-1" :class="{'content-active': contentActice == 1}">
            <div class="info-text">请输入要转换的 DOM 和 STYLE 节点代码：</div>
            <el-input class="source-text" type="textarea" v-model="sourceText"></el-input>
        </div>
        <div class="content content-2" :class="{'content-active': contentActice == 2}">
            <el-progress type="circle" :percentage="progressNum" status="success"></el-progress>
        </div>
        <div class="content content-3" :class="{'content-active': contentActice == 3}">
            content3
        </div>
        <div class="next-step">
            <el-button @click="previousStep()" :disabled="previousStepButtonDis">回退</el-button>
            <el-button @click="nextStep()">{{ nextStepButtonValue }}</el-button>
        </div>
    </div>
</template>

<script>


export default {
    data() {
        return {
            stepsCount: 3,
            contentActice: 1,
            previousStepButtonDis: true,
            nextStepButtonValue: '下一步',
            sourceText: '',
            targetText: '',
            progressNum: 0
        }
    },
    methods: {
        previousStep() {
            this.contentActice--;
            if(this.nextStepButtonValue != "下一步") {
                this.nextStepButtonValue = "下一步";
            }
            if (this.contentActice <= 1) {
                this.previousStepButtonDis = true;
            }

            if (this.contentActice == 1) {
                this.progressNum = 0;
            }
        },
        nextStep() {
            this.contentActice++;
            this.previousStepButtonDis = false;
            if (this.contentActice >= this.stepsCount) {
                this.nextStepButtonValue = "回到第一步";
            }
            if (this.contentActice >= this.stepsCount+1) {
                this.nextStepButtonValue = "下一步";
                this.contentActice = 1;
                this.previousStepButtonDis = true;
            }

            if (this.contentActice == 2) {
                this.changeData();
            }
            if (this.contentActice == 1) {
                this.progressNum = 0;
            }
        },
        changeData() {
            if (this.sourceText != '') {
                this.progressNum = 100;
                this.targetText = juice(this.sourceText);
            } else {
                this.progressNum = 100;
            }
        }
    }
}
</script>

<style>
    .css-change-index {
        height: 100%;
        padding: 20px;
    }
    .steps {
        height: 60px;
    }
    .next-step {
        height: 40px;
        margin-bottom: 10px;
    }
    .content {
        height: 0;
        visibility: hidden;
    }
    .content-active {
        visibility: visible;
        height: calc(100% - 115px);
    }
    .info-text {
        height: 40px;
        display: flex;
        align-items: center;
        font-size: 16px;
        color: #333;
    }
    .source-text {
        height: 80%;
    }
    .source-text textarea {
        min-height: 100% !important;
    }
    .content-2 {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .content-2 .el-icon-check {
        font-size: 30px;
    }
</style>
