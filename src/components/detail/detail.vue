<template>
    <div class="outdetails" ref="animal" v-if="animal">
      <div class="details" >
        <div @click="toggleShow" style="width: 73px;
                                      height: 24px;
                                      cursor: pointer;
                                      position: absolute;
                                      left: 43%;"></div>
        <div class="top">
          <span @click="toggleShow">动物&nbsp;&nbsp;&nbsp;&gt;</span>
          <span style="color: #000">{{animal.animalName}}</span>
        </div>

        <div class="bottom">
          <div class="left">
            <div class="title">
              <video class="audio" :src="'http://www.dadpat.com/'+animal.animalVideo"  controls>1111</video>
              <div style="padding: 24px">
                <p style="font-family: 微软雅黑">{{animal.animalName}}</p>
                <el-button type="primary" class="btn"><a href="#goto" style="color: #fff">我要提问</a></el-button>
              </div>
            </div>

            <div class="note" v-if="animal" v-html="animal.animalPage">
              {{animal.animalPage}}
            </div>

            <div class="rating">

              <div class="mark" style="padding: 20px">
                <a name="goto"><span>评论</span>
                  <div class="split"></div></a>
                               <!--<el-input-->
                <!--type="textarea"-->
                <!--:rows="2"-->
                <!--placeholder="请输入评论"-->
                <!--class="inpput">-->
                <!--</el-input>-->
                <!--<el-button type="primary" class="btn1" >评论</el-button>-->


                  <el-input
                    type="textarea"
                    :rows="2"
                    placeholder="请输入评论"
                    suffix-icon="el-icon-more"
                    v-model="commentContent"
                    @keyup.enter="send_commont(commentContent)"
                  ></el-input>
                  <el-button @click="send_commont(commentContent)" type="primary" class="btn1">评论</el-button>



              </div>

              <ul class="ul" v-if="comment">
                <li v-for="rating in comment" :key="rating.commentId">
                  <img src="./5.jpg" alt="">
                  <span class="span1">{{rating.userName}}</span>
                  <span class="span2">回复我&nbsp;:&nbsp;</span>
                  <div class="input">
                    我的评论&nbsp;:&nbsp;{{decodeURIComponent(rating.commentContent)}}
                  </div>
                  <div class="splita">
                    <div class="split2"></div>
                  </div>
                </li>
              </ul>

            </div>
          </div>
          <div class="right" style="height: 100%;">
            <div class="update" style="display: flex">
              <p style="margin-right: 42%" >更多视频推荐</p>
              <img class="updateimg" @click="changeOthers" style="cursor: pointer;width: .8vw;height: .8vw;margin-top: 6%;" src="./update.png" alt="">
            </div>
            <ul class="classUl" v-if="animalss">
              <li v-for="(animal_ , index) in animalss" :key="index">
                <span @click="goothers(animal_)">
                  <img :src="'http://www.dadpat.com/'+animal_.coverImage" alt="">
                  <span class="name">{{animal_.animalName}}</span>
                  <span class="time">2018-3-14</span>
                </span>
              </li>
            </ul>

          </div>

        </div>
      </div>
      <goTop/>
    </div>
</template>
<script>
  import $ from 'jquery'
  import {mapState} from 'vuex'
  import {getStore} from '../../common/utils/storageUtil'
    export default {
      data () {
          return {
            animal:JSON.parse(getStore('animal'))?JSON.parse(getStore('animal')):[],
            commentContent: '',
            comment:Array,
            username:getStore('user'),
            animalss:[],
            aaa:Function
          }
      },

      mounted(){

        var split_array =(data,len)=>{
          let arr_length = data.length;
          let newArr = [];
          for(let i=0;i<arr_length;i+=len){
            newArr.push(data.slice(i,i+len));
          }
          return newArr;
        }
        let result = split_array(JSON.parse(getStore('animals')), 5);


        var index = Math.floor(Math.random()*14)
        this.animalss = result[index]

        var picUrl =[]

        for(var i=0;i<$('.note').find('img').length;i++){

          picUrl.push("http://www.dadpat.com/upload"+$('.note').find('img')[i].src.split('/upload')[1])

          $('.note').find('img')[i].src = "http://www.dadpat.com/upload"+$('.note').find('img')[i].src.split('/upload')[1]

          $('.note').find('img')[i].style.width = "60%"
        }
        var rotateNum = 360; //旋转角度
        this.aaa = function () {
            $('.updateimg').css({
              'transition': 'all 1s',
              '-webkit-transition': 'all 1s', /* Safari */
              'transform':'rotate('+rotateNum+'deg)',
              '-ms-transform':'rotate('+rotateNum+'deg)',
              '-webkit-transform':'rotate('+rotateNum+'deg)'
            });

            rotateNum=360+rotateNum;




          var split_array =(data,len)=>{
            let arr_length = data.length;
            let newArr = [];
            for(let i=0;i<arr_length;i+=len){
              newArr.push(data.slice(i,i+len));
            }
            return newArr;
          }
          let result = split_array(JSON.parse(getStore('animals')), 5);


          var index = Math.floor(Math.random()*14)
          this.animalss = result[index]

          var picUrl =[]

          for(var i=0;i<$('.note').find('img').length;i++){

            picUrl.push("http://www.dadpat.com/upload"+$('.note').find('img')[i].src.split('/upload')[1])

            $('.note').find('img')[i].src = "http://www.dadpat.com/upload"+$('.note').find('img')[i].src.split('/upload')[1]

            $('.note').find('img')[i].style.width = "60%"
          }
        }


      },

      methods:{
        toggleShow(){
          this.$router.push('/animals')
        },


        changeOthers() {
          this.aaa()
        },

        // send_commont:function (info) {
        //
        //   if (this.username){
        //     $.ajax({
        //       type: "post",
        //       url: "http://www.dadpat.com/comment/animal/save.do",
        //       dataType: "jsonp",
        //       data:{
        //         commentType:'animal',
        //         commentFor:this.animal.animalId,
        //         commentContent:encodeURI(this.commentContent)
        //       },
        //       async: true,
        //       success:(data)=> {}
        //     })
        //   }else{
        //     this.$router.push({
        //       path: '/login'
        //     });
        //
        //     this.$message.error(
        //       '登录才能评论哦'
        //
        //     );
        //   }
        //
        // }

        goothers(animal_){
          this.animal = animal_
        }
      },

    }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .outdetails
    margin-top 0%
    width 100%
    height 100%
    position relative
    top 0px
    left 0px
    right 0px
    bottom 0px
    z-index 1000
    background-color: #f0f3ef;
    /*#f1f3ee*/
    .details
      width 60%
      height 100%
      margin 0 auto
      .top
        width 88%
        font-size 6px
        color #000000
        position relative
        height: 3vw;
        line-height: 3vw;
      span:hover
        cursor:pointer;
        color #BABABA
      .bottom
        height 100%
        display flex
        .left
          border-radius 2px
          justify-content space-between
          float left
          width 79%
          height 100%
          margin-right .69vw
          .title
            border-radius 2px
            background-color: #fff;
            overflow hidden
            .audio
              margin-left 3.2475px
              margin-top 3.2475px
              width 98%
              height 72%
            &>div
              &>p
                margin-left 3px
                margin-top 2.4975px
                float left
                font-size 7px
                font-weight 600
              .btn
                margin 2.4975px
                float right
          .note
            margin-bottom 10px
            border-radius 2px
            background-color: #fff;
            width 100%
            box-sizing border-box
            padding 1.57vw
            font-size 6px
            line-height 10px
            text-align justify
            &>p
              font-weight 600
              margin-bottom -12.5025px
            &>img
              width 80%
              margin 15px 0px
          .rating
            border-radius 2px
            background-color: #fff;
            width 100%
            height 100%
            font-size 6px
            .mark
              position relative
              width 100%
              height 100%
              overflow hidden
              &>a
                &>span
                  display block
                  margin 3% 1% 0.2%
                  color #000
              .split
                width 5%
                height 2px
                background-color: #2e95db;
                margin-left 0.5%
                margin-bottom 2%
              .inpput
                margin 2%

              .spilt1
                width 100%
                height 1px
                background-color: rgb(93,177,233);
              &>li
                width 100%
                height 100%
                box-sizing border-box
                padding 0px
              .btn1
                float right
                margin-right 0.75px
                margin-top 10px
                &>ul
                  margin-top 35px
                  position relative
                  height 100%
                  &>li
                    position relative
                    height 60px
                    margin-top 10px
                    &>img
                      border-radius 50%
                      width 4.8%
                      height 26%
                      margin-top 1px
                      margin-left 0px
                    .span1
                      position absolute
                      top 0%
                      left 6%
                      color #000
                    .input
                      width: 87%;
                      height: 45%;
                      background-color: hsla(0,0%,96%,.24);
                      position: absolute;
                      top: 35%;
                      left: 6%;
                      line-height: 3vw;
                      color: #000;
                      &>span
                        position absolute
                        top 0px
                        right 1px
                        color #D4D4D4
                    .span2
                      color #000
                      position absolute
                      top 28%
                      left 8%
                    .splita
                      width 100%
                      height 3px
                      position absolute
                      top 110%
                      .split2
                        width 100%
                        height 1px
                        background-color: #F7F7F7;
                        margin-bottom 1px
                    &>i
                      display block
                      width 0px
                      height 0px
                      border-width: 10px;
                      border-style: solid;
                      border-color:  rgba(46, 149, 219,.1)  rgba(46, 149, 219,.1) #70B7E7  rgba(46, 149, 219,.1);
                      position absolute
                      top 73%
                      left 11%
            .ul
              position relative
              height 180px
              padding: 7px
              &>li
                position relative
                margin-bottom 8%
                &>img
                  border-radius 50%
                  width 4.5%
                  height 3%
                  margin 2% 2%
                .span1
                  position absolute
                  top 18%
                  left 8%
                  color #000
                .span2
                  color #000
                  position absolute
                  top 52%
                  left 8%
                &>i
                  display block
                  width 0px
                  height 0px
                  border-width: 10px;
                  border-style: solid;
                  border-color:  rgba(46, 149, 219,.1)  rgba(46, 149, 219,.1) #70B7E7  rgba(46, 149, 219,.1);
                  position absolute
                  top 73%
                  left 11%
                .input
                  width 87%
                  height 22.5px
                  background-color: rgba(244,244,244,.24);
                  position absolute
                  top 92%
                  left 8%
                  line-height 22.5px
                  color #000
                .splita
                  width 100%
                  height 3px
                  position absolute
                  top 180%
                  .split2
                    width 100%
                    height 1px
                    background-color: #F7F7F7;
                    margin-bottom 1px


        .right
          border-radius 2px
          justify-content space-between
          float left
          width 20%
          height 15%
          background-color: #fff;
          .update
            &>p
              color #A8A8A8
              font-size 6px
              margin-left 3.9975px
              margin-top 3.9975px
          &>ul
            border-radius 2px
            margin-bottom 4%
            width 100%
            height 100%
            overflow hidden


            &>li
              width 100%
              height 35px
              float left
              background-color: #fff;
              font-size 6px
              &>span
                &>img
                  width 45%
                  height 80%
                  float left
                  margin 4.5px
                .name
                  float left
                  margin-top 10%
                  margin-left 8%
                  white-space: nowrap;
                  text-overflow: ellipsis;
                  overflow: hidden;
                  display:block;
                .time
                  float left
                  margin-top 0
                  margin-left 8%

          .classUl::-webkit-scrollbar
            width 0
    .gotop
      width 30px
      height 30px
      position fixed
      bottom 1%
      right 1%
      box-sizing border-box
      padding .5%
      border-radius 50%
      box-shadow:0 0.1vw 0.2vw 0 rgba(0,0,0,0.1), 0 0.1vw 0.3vw 0 rgba(0,0,0,.1);
      &>a
        &>img
          width 100%
          height 100%
          animation: boxAnimation 4s infinite linear alternate-reverse
        @keyframes boxAnimation {
          0%{opacity: 1;}
          50%{opacity: 0.5;}
          100%{opacity: 1;}
        }

</style>
