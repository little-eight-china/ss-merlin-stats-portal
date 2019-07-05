var app = new Vue({
    el: '#app',
    data: {
        totalUser: 0,
        stats: []
    },
    mounted () {
        this.loadData()
    },
    methods: {
        async loadData () {
            await axios.get('https://ss-merlin.iloli.li/stats')
                .then(function (response) {
                    console.log(response)
                    let data = response.data
                    this.totalUser = data.reduce((a, b) => a + b.count, 0)
                    this.stats = data
                })
                .catch(function (error) {
                    console.error(error)
                });
        }
    }
})
