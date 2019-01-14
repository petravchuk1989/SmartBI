(function() {
    return{
        config: {
            query: {
                queryCode: 'queryCode',
                parameterValues: [],
                filterColumns: [],
                skipNotVisibleColumns: true,
                chunkSize: 1000
            },
            fields: [
                {
                    caption: 'caption for column',
                    dataField: 'column code',
                    area: 'row',
                    customizeText: function(cellInfo) {
                        return cellInfo.valueText + ' some text!';
                    }
                },
                {
                    caption: 'caption for column',
                    width: 120,
                    dataField: 'column code',
                    area: 'row'
                },
                {
                    caption: 'caption for column',
                    area: 'column',
                    dataField: 'column code',
                    dataType: "date"
                },
                {
                    caption: 'caption for column',
                    dataField: 'column code',
                    width: 120,
                    dataType: 'number',
                    summaryType: 'sum',
                    format: { style: "currency", currency: "UAH", useGrouping: true, minimumSignificantDigits: 3 },
                    area: 'data'
                }
            ],
            allowSortingBySummary: true,
            allowSorting: true,
            allowFiltering: true,
            allowExpandAll: true,
            showBorders: true,
            showColumnGrandTotals: true,
            showRowGrandTotals: true,
            showRowTotals: true,
            showColumnTotals: true,
            showTotalsPrior: 'rows',
            height: 400,
            export: {
                enabled: true,
                fileName: 'File_name'
            },
            fieldChooser: {
                enabled: true,
                height: 500
            },
            fieldPanel: {
                visible: true,
                showDataFields: true,
                showRowFields: true,
                showColumnFields: true,
                showFilterFields: true,
                allowFieldDragging: true,
            },
            scrollingMode: 'virtual',
            chart: {
                dataFieldsDisplayMode: 'splitPanes',
                alternateDataFields: false,
                type: 'bar',
                height: 200,
                tooltipEnabled: true,
                customizeTooltip: function(args) {
                    return {
                        html: args.seriesName + " | Всего: <span style='color: blue'>" + args.valueText + "</span>"
                    };
                }
            }
        },
        init: function() {
            this.load();
        },
        load: function() {
        }
    }
})()