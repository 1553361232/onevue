<template>
<div>
    <div class="introduceTop">
      <a href="#">这是去了趟阿拉善吗？</a>
    </div>

    <el-row>
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <img class="car" src="../assets/img/car1.png" />
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <img class="car" src="../assets/img/car2.png" />
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <img class="car" src="../assets/img/car3.png" />
        </div>
      </el-col>
    </el-row>
    <el-row class="carcontent">
      <el-col :span="2">
        <div class="grid-content bg-purple-dark">
          <a class="small_tag" href="#">
            <span>#自驾旅行</span>
          </a>
        </div>
      </el-col>
      <el-col :span="2">
        <div class="grid-content bg-purple-dark">
          <a class="small_tag" href="#">
            <span>#汽车展示</span>
          </a>
        </div>
      </el-col>
    </el-row>
</div>
</template>