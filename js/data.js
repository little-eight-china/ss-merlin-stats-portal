var app = new Vue({
    el: '#app',
    data: {
        totalUser: 0,
        stats: []
    },
    mounted() {
        this.loadData()
    },
    methods: {
        async loadData() {
            let response = await axios.get('https://ss-merlin.iloli.li/stats')
            let data = response.data
            this.totalUser = data.reduce((a, b) => a + b.count, 0)
            this.stats = data
        }
    }
})



