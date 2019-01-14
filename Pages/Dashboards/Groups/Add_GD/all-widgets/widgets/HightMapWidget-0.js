(function() {
    return{
        title: '',
        hint: '',
        formatTitle: function() {},
        chartConfig: {
            chart: {
                spacingBottom: 0
            },
            title: {
                text: 'Tittle'
            },
            legend: {
                enabled: true
            },
            plotOptions: {
                map: {
                    allAreas: false,
                    joinBy: ['label', 'code'],
                    dataLabels: {
                        enabled: true,
                        color: '#EEEEEE',
                        formatter: function() {
                            if (this.point.properties) {
                                return this.point.properties['label'];
                            }
                        },
                        format: null,
                        style: {
                            fontWeight: 'bold'
                        }
                    },
                    mapData: {
                        "type": "FeatureCollection",
                        "hc-transform": {
                            "default": {
                                "crs":
                                    "+proj=lcc +lat_1=43 +lat_2=62 +lat_0=30 +lon_0=10 +x_0=0 +y_0=0 +ellps=intl +units=m +no_defs"
                            }
                        },
                        "features": []
                    },
                    tooltip: {
                        headerFormat: '',
                        pointFormat: '{point.name}: <b>{series.name}</b>'
                    }

                }
            },
            series: [
                {
                    name: 'series 1',
                    data: []
                }, {
                    name: 'series 2',
                    data: []
                }, {
                    name: 'series 3',
                    data: []
                }
            ]
        },
        init: function() {
            let executeQuery = {
                queryCode: '',
                limit: -1,
                parameterValues: []
            };
            this.queryExecutor(executeQuery, this.load, this);
        },
        load: function(data, options) {
            this.renderHidhtMap();
        }
    }
})()