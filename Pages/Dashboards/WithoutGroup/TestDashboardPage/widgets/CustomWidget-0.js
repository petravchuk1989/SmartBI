(function() {
    return {
        title: '',
        hint: '',
        formatTitle: function() {},
        customConfig: ``,
        init: function() {
            let executeQuery = {
                queryCode: '',
                limit: -1,
                parameterValues: []
            };
            this.queryExecutor(executeQuery, this.load);
        },
        load: function(data) {
        }
    }
})()