(function() {
    return{
        title: '',
        hint: '',
        formatTitle: function() {},
        dateFormat: 'd.MM.y HH:mm',
        sliceCount: '250',
        newsStyles: function() {
            return {
                container: {},
                news: {},
                tittle: {},
                date: {},
                description: {}
            }
        },
        init: function() {
            let executeQuery = {
                queryCode: '',
                limit: -1,
                parameterValues: []
            };
            this.queryExecutor(executeQuery, this.load, this);
        }
    }
})()