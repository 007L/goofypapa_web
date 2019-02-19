<template>
  <div>
    <Row class="image-list-heading vm-panel">
      <Row type="flex" align="middle" justify="space-between" class="panel-body">
        <Row type="flex" align="middle" class="page">
          <page :total="animals.length" :current="currentPage" :pageSize="showNum" @on-change="pageChange"></page>
        </Row>
      </Row>
    </Row>
  </div>
</template>
<script>
  export default {
    name: 'page',
    props: {
      total: {
        type: String,
        default: 'total'
      },
      current: {
        type: Number,
        default: 'current'
      },
      pageSize: {
        type: Number,
        default: 'pageSize'
      },
      data () {
        return {}
      }
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
/*
  import 'iview/src/styles/components/page.less'
  import '../../theme/index.less'*/
</style>
