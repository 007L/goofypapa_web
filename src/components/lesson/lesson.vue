<template>
    <div class="others" style="padding-top: 1.667vw;">
      <nav style="font-family: 微软雅黑;color: #000;border-radius: 4px">

        <router-link style="color: #000"  to="/lesson">全部</router-link>


        <router-link style="color: #000" to="/lesson">第一季</router-link>

        <router-link style="color: #000"  to="/lesson">第二季</router-link>

        <div class="input">
          <el-input
            placeholder="请输入内容"
            v-model="input23">
            <i slot="prefix" class="el-input__icon el-icon-search" style="line-height: 1.267vw;"></i>
          </el-input>
        </div>

      </nav>

      <div class="lesson" style="font-family: 微软雅黑">
        <div class="inlesson">
            <Row class="image-list" :gutter="16" style="margin-left: 0px;margin-right: 0px;">
              <Col :lg="6" :sm="12" class="vm-margin" v-for="lesson in lessons" :key="lesson.courseId" style="padding-left: 0px; padding-right: 0px;">
                <span  @click="showLessonDetail(lesson)">
                  <img class="topimg" :src="'http://www.dadpat.com/'+lesson.coverImage" alt="">
                  <h3>{{lesson.courseTitle}}</h3>
                  <img src="./lala.jpeg" style="float: left; margin-left: 5%; margin-top: 1.5%;"></img>
                  <div style="overflow : hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;">{{lesson.courseDesc}}</div>
                </span>
              </Col>
            </Row>
          </div>

          <Row class="image-list-heading vm-panel" style="display: flex;justify-content: center;width: 89%;">
            <Row type="flex" align="middle" justify="space-between" class="panel-body">
              <Row type="flex" align="middle" class="page" >
                <page :total="lessons.length" :current="currentPage" :pageSize="showNum" @on-change="pageChange" style="font-size: 14px;margin-top: 34px;margin-bottom: 20px;"></page>
              </Row>
            </Row>
          </Row>
      </div>

      <goTop/>
    </div>
</template>
<script>
    import {mapState} from 'vuex'
    import {setStore,getStore} from '../../common/utils/storageUtil'
    export default {
      data () {
          return {
            input23: '',
            currentPage: 1,
            pagesize:5,
            lesson:[],

            keyword: '', // keyword for search
            dataShow: [], // data for showing
            showNum: 20, // number of item per page
          }
      },
      mounted(){
        this.$store.dispatch('requestLesson')

        this.dataShow = this.lessons.slice(0, this.showNum)


      },
      methods: {

        showLessonDetail(lesson){
          this.lesson = lesson

          // $.ajax({
          //   type: "post",
          //   url: "http://www.dadpat.com/comment/course/list.do",
          //   dataType: "jsonp",
          //   data: {
          //     commentType:'course',
          //     commentFor:lesson.courseId,
          //     start:0,
          //     limit:50
          //   },
          //   async: true,
          //   success: (data) =>{
          //     var comment = data.data
          //
          //     this.$refs.lesson.toggleShow(comment)
          //   }
          // });
          setStore('lesson',lesson)
          this.$router.push('/lessonDetail')
        },

        updateDataShow() {
          let startPage = (this.currentPage - 1) * this.showNum
          let endPage = startPage + this.showNum
          console.log(this.lessons)
          this.dataShow = this.lessons.slice(startPage, endPage)

        },
        pageChange(page) {
          this.currentPage = page
          this.updateDataShow()
        },


      },

      watch: {
        data: function () {
          this.dataShow = this.lessons.slice(0, this.showNum) // update dataShow once data changed
          console.log(this.dataShow)
        }
      },

      computed: {
        ...mapState(['lessons'])
      }
    }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .others
    width 100%
    height 100%
    background: #F2F2F2
    &>nav
      border-radius: .267vw;
      margin-left: 20%;
      background-color: #fff;
      width: 61.8%;
      height: 100%;
      box-sizing: border-box;
      overflow: hidden;
      line-height: 1.6vw;
      padding-left: 1%;
      .el-input
        top 0px
        left -100%
        color #000000
        .el-input__inner
          color #000000
      &>a
        font-size 6px
        float left
        margin-right 16px
      .input
        /*display none*/
        float: right;
        position: relative;
        width: 10%;
        height: 1.288vw;

    .lesson
      width: 70%;
      height: 100%;
      margin: 1.667vw 35.067vw 0 20%;
      z-index: 600;
      box-sizing: border-box;
      font-size: .8vw;
      .inlesson
        width: 100%;
        overflow: hidden;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        .image-list
          .vm-margin
            border-radius: .267vw;
            cursor: pointer;
            border: 1px solid #e6e6e6;
            float: left;
            margin-right: 3.7vw;
            flex-align: end;
            background-color: #fff;
            margin-bottom: 1.5vw;
            width: 18%;
            height: 11.5rem;
            &>span
              position: relative;
              display: block;
              width: 100%;
              height: 100%;
              .topimg
                border-radius: .267vw 0 0 0;
                width: 70%;
                height: 60%;
              &>h3
                font-size: .833vw;
                margin: .267vw 5%;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
              &>div
                height: 20%;
                box-sizing: border-box;
                font-size: .533vw;
                color: #999;
                padding-left: 2%;
                padding-right: 4%;
                vertical-align: middle;
                display: table-cell;
                margin-top 2.5%
</style>
