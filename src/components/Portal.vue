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
        let data = res.data[0]
        this.hash = data.hash
        this.count = data.count
      })
    }
  },
  mounted () {
    let _this = this
    _this.$axios.get('/stats').then(res => {
      let data = res.data[0]
      _this.hash = data.hash
      _this.count = data.count
    })
  }
}
</script>

<style>
</style>
