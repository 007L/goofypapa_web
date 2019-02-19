<template>
    <div class="animails" v-if="dataShow">

      <header>

        <el-input placeholder="搜索您感兴趣的动物" v-model="input5" class="input-with-select">

          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>

        <el-carousel :interval="3000" arrow="always">
          <el-carousel-item  style='bottom:130px'>
            <img src="./haitun.jpg" alt="">
          </el-carousel-item>
          <el-carousel-item  style='bottom:130px'>
            <img src="./haitun3.jpg" alt="">
          </el-carousel-item>
          <el-carousel-item  style='bottom:130px'>
            <img src="./haitun2.jpg" alt="">
          </el-carousel-item>
        </el-carousel>
      </header>


      <div class="newvideo">
        <div class="innewvideo" v-if="dataShow">
          <Row class="image-list" :gutter="16" style="margin-left: 0px;margin-right: 0px;" >
            <Col :lg="6" :sm="12" class="vm-margin" v-for="animal in dataShow" :key="animal.animalId" style="padding-left: 0px; padding-right: 0px;">
              <div class="mask" @click="showDetails(animal)" style="font-family: 微软雅黑">
                {{animal.animalDesc}}
              </div>
              <img  :src="'http://www.dadpat.com/'+animal.coverImage" alt="" >
            </Col>
          </Row>
        </div>

        <Row class="image-list-heading vm-panel" style="display: flex;justify-content: center" v-if="animals">
          <Row type="flex" align="middle" justify="space-between" class="panel-body">
            <Row type="flex" align="middle" class="page" >
              <page :total="animals.length" :current="currentPage" :pageSize="showNum" @on-change="pageChange" style="font-size: 14px;margin-top: 34px;"></page>
            </Row>
          </Row>
        </Row>
      </div>

      <goTop/>
    </div>
</template>
<script>
  import axios from 'axios'
  import {mapState} from 'vuex'
  import {setStore,getStore} from '../../common/utils/storageUtil'
  export default {
      data () {
        return {
          currentPage: 1,
          input5: '',
          isShow:false,
          animal:[],
          comment:[],
          pagesize:5,

          keyword: '', // keyword for search
          dataShow: [], // data for showing
          showNum: 20, // number of item per page
          animals:JSON.parse(getStore('animals'))
        }
      },
    mounted(){

      this.dataShow = this.animals.slice(0, this.showNum)
    },
    methods: {
      showDetails(animal){
          // console.log('点击生效',animal)
          // $.ajax({
          //   type: "post",
          //   url: "http://www.dadpat.com/comment/animal/list.do",
          //   dataType: "jsonp",
          //   data: {
          //     commentType:'animal',
          //     commentFor:animal.animalId,
          //     start:0,
          //     limit:50
          //   },
          //   async: true,
          //   success: (data) =>{
          //    var comment = data.data
          //
          //     this.$refs.animal.toggleShow(comment)
          //   }
          // });



        this.$router.push({
          path:'/detail',
          query: { animal: animal}
        })

        setStore('animal',animal)
      },

      updateDataShow() {
        let startPage = (this.currentPage - 1) * this.showNum
        let endPage = startPage + this.showNum
        console.log(this.animals)
        this.dataShow = this.animals.slice(startPage, endPage)

      },
      pageChange(page) {
        this.currentPage = page
        this.updateDataShow()
      },
     /* search: function () {
        let that = this
        let tempData = that.data
        that.dataShow = []
        tempData.forEach(function (elem) {
          for (let i in elem) {
            if (elem[i].toString().indexOf(that.keyword) > -1) {
              that.dataShow.push(elem)
              return
            }
          }
        })
      },
      deleteOk: function (data) {
        this.$emit('delete-ok', data)
      }*/
      },



    watch: {
      data: function () {
        this.dataShow = this.animals.slice(0, this.showNum) // update dataShow once data changed
        console.log(this.dataShow)
      }
    }



  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .animails
    position relative
    &>header
      position relative
      .el-input
        position:absolute
        top:43%
      .logo
        position absolute
        top 5px
        left 20%
        z-index 300
        &>img
          width 90px
          height 50px

      &>nav
        width 100%
        height 60px
        line-height 60px
        margin-left 25%

      .el-select .el-input
        width: 130px;

      .input-with-select .el-input-group__prepend
         background-color: #fff;



      .el-dropdown
        margin-left  50px

      .el-carousel__item
        &>img
          width 100%
          height 100%
      .el-carousel__item h3
        color: #475669;
        font-size: 18px;
        opacity: 0.75;
        line-height: 300px;
        margin: 0;
        .el-carousel__item:nth-child(2n)
          background-color: #99a9bf;
        .el-carousel__item:nth-child(2n+1)
          background-color: #d3dce6;
      .login
        position absolute
        right  20%
        top 5px
        &>a
          float left
    .newvideo
      border-left:0.2525px solid #fff
      box-shadow:0 0.1vw 0.2vw 0 rgba(0,0,0,0.1), 0 0.1vw 0.3vw 0 rgba(0,0,0,.1);
      background-color: #fff;
      margin -5.3vw 17.2vw 0 18.1vw
      position absolute
      z-index 600
      box-sizing border-box
      padding 8px 8px
      padding-right: .47vw;
      .innewvideo
        /*justify-content: space-evenly;*/
        flex-wrap: wrap
        display flex
        /*align-content: space-evenly*/
        /*align-content: flex-start;*/
        .image-list
          flex-wrap: wrap
          display flex
          align-content: space-evenly
          /*justify-content space-between*/

              /*box-shadow:0.1vw 0.1vw 0.2vw 0 rgba(0,0,0,0.1), 0.1vw 0.1vw 0.3vw 0 rgba(0,0,0,.1);*/
    /*box-shadow:-0.1vw 0.1vw 0.2vw 0.1vw rgba(0,0,0,.1), 0.1vw 0.1vw 0.3vw 0.1vw rgba(0,0,0,.1)*/
    .pagination
      margin 30px 0
      text-align center


  .animails .newvideo .innewvideo .image-list .vm-margin:hover .mask{-webkit-transform:translate(0);transform:translate(0)
  }
  .animails .newvideo .innewvideo .image-list .vm-margin{overflow:hidden
  }
  .animails .newvideo .innewvideo .image-list .vm-margin .mask{position:absolute;width:15vw;height:15vw;text-align:center;line-height:15vw;z-index:999;font-size:1.067vw;color:#fff;opacity:0;-webkit-transition:-webkit-transform .3s ease;transition:-webkit-transform .3s ease;transition:transform .3s ease;transition:transform .3s ease,-webkit-transform .3s ease;-webkit-transform:translateY(-100%);transform:translateY(-100%);background:rgba(0,0,0,.7)
  }
  .animails .newvideo .innewvideo .image-list .vm-margin .mask:hover{cursor:pointer;background:rgba(0,0,0,.7);opacity:.7
  }
  .animails .newvideo .innewvideo .image-list .vm-margin>img{width:15vw;height:15vw
  }
</style>

