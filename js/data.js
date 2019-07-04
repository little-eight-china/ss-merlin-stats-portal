var app = new Vue({
    el: '#app',
    data: {
        totalUser: 0,
        stats: []
    },
    created: function () {
        this.loadData()
    },
    methods: {
        loadData: function () {
            axios.get('https://ss-merlin.iloli.li/stats')
                .then(function (response) {
                    console.log(response)
                    self.totalUser = response.reduce((a, b) => a + b.count, 0)
                    self.stats = response
                })
                .catch(function (error) {
                    console.error(error)
                });
        }
    }
})
