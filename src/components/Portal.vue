<template>
  <div id="portal">
    <el-container >
      <el-main>
        <el-row>
          hash: {{ hash }} ||  count: {{ count }}
        </el-row>
        <el-row>
          <el-button type="primary" @click="refresh" size="small">刷新</el-button>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script>

export default {
  name: 'portal',
  data () {
    return {
      hash: 'aaa',
      count: '1'
    }
  },
  methods: {
    refresh () {
      this.$axios.get('/stats').then(res => {
        console.log(res)
      })
    }
  },
  mounted () {
    let _this = this
    _this.$axios.get('/stats').then(res => {
      console.log(res)
    })
  }
}
</script>

<style>
</style>
