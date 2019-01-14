(function() {
    return {
        queryCode: 'rep_1',
        limit: -1,
        table: {
            style: {
                    header: {
                        row: 'color: #fff; background-color: #69afdd; height: 56px',
                        cell: 'border: 1px solid #5b5b5b'
                    },
                body: {
                        row: 'border: none; border-bottom: 1px dashed #8a8a5c',
                        cell: 'padding: 20px 10px; text-align:center; color: #5b5b5b; font-size: 1.2em;'
                }
            },
            header: [
                       {
                           title: 'Код',
                           columnCode: 'ActivityType_CodeName'
                       },
                  {
                      title: 'Вид діяльності',
                      columnCode: 'ActivityType_CodeNameRU'
                  },
                  {
                      title: 'Я виконавець робіт',
                      columnCode: '',
                      subHeaders: [{
                          title: 'Нова',
                          columnCode: 'Value1'
                      },
                          {
                              title: 'В роботі',
                              columnCode: 'Value2'
                          },
                          {
                              title: 'Просточена',
                              columnCode: 'Value3'
                          }]
                  },
              {
                  title: 'По моїх об`єктах',
                  columnCode: '',
                  subHeaders: [{
                      title: 'Нова',
                      columnCode: 'Value4'
                  },
                      {
                          title: 'В роботі',
                          columnCode: 'Value5'
                      },
                      {
                          title: 'Просточена',
                          columnCode: 'Value6'
                      }]
              },
              {
                  title: 'Я автор задач',
                  columnCode: '',
                  subHeaders: [{
                      title: 'Нова',
                      columnCode: 'Value7'
                  },
                      {
                          title: 'В роботі',
                          columnCode: 'Value8'
                      },
                      {
                          title: 'Просточена',
                          columnCode: 'Value9'
                      }]
              }],
            columns: [
                {
                    columnCode: 'ActivityType_CodeName',
                    visible: false
                },
                            {
                                columnCode: 'ActivityType_CodeNameRU',
                                visible: true
                            },
                {
                    columnCode: 'Value1',
                    onCellClick(cell, column, row, value, rowIndex, config){
                        config.mySuperFunction(row.values[0],cell.columnCode);
                    },
                    format(cell, column, row, value, rowIndex){
                        row.setStyle('background-color: #fff');
                        if (value == 0)
                        {
                            return '<button style="color: #bfbfbf; background-color: #fff; padding: 6px 12px; width: 6em;    font-size: 1.2em;">' + value + '</button>';
                        }
                        else {
                            return '<button style="color: #5b5b5b; background-color: #fff; padding: 6px 12px; width: 6em;    font-size: 1.2em;">' + value; 
                        };
                    }
                },
                  {
                      columnCode: 'Value2',
                      onCellClick(cell, column, row, value, rowIndex, config){
                          config.mySuperFunction(row.values[0],cell.columnCode);
                      },
                      format(cell, column, row, value, rowIndex){
                          row.setStyle('background-color: #fff');
                          if (value == 0)
                          {
                              return '<button style="color: #bfbfbf; background-color: #fff; padding: 6px 12px; width: 6em;    font-size: 1.2em;">' + value + '</button>';
                          }
                          else {
                              return '<button style="color: #5b5b5b; background-color: #fff; padding: 6px 12px; width: 6em;    font-size: 1.2em;">' + value + '</button>'; 
                          };
                      }
                  },
                            {
                                columnCode: 'Value3',
                                onCellClick(cell, column, row, value, rowIndex, config){
                                    config.mySuperFunction(row.values[0],cell.columnCode);
                                },
                                format(cell, column, row, value, rowIndex){
                                    row.setStyle('background-color: #fff');
                                    if (value == 0)
                                    {
                                        return '<button style="color: #bfbfbf; background-color: #fff; padding: 6px 12px; width: 6em;    font-size: 1.2em;">' + value + '</button>';
                                    }
                                    else {
                                        return '<button style="color: #5b5b5b; background-color: #fff; padding: 6px 12px; width: 6em;    font-size: 1.2em;">' + value + '</button>'; 
                                    };
                                }
                            },
                            {
                                columnCode: 'Value4',
                                onCellClick(cell, column, row, value, rowIndex, config){
                                    config.mySuperFunction(row.values[0],cell.columnCode);
                                },
                                format(cell, column, row, value, rowIndex){
                                    row.setStyle('background-color: #fff');
                                    if (value == 0)
                                    {
                                        return '<button style="color: #bfbfbf; background-color: #fff; padding: 6px 12px; width: 6em;    font-size: 1.2em;">' + value + '</button>';
                                    }
                                    else {
                                        return '<button style="color: #5b5b5b; background-color: #fff; padding: 6px 12px; width: 6em;    font-size: 1.2em;">' + value + '</button>'; 
                                    };
                                }
                            },
                            {
                                columnCode: 'Value5',
                                onCellClick(cell, column, row, value, rowIndex, config){
                                    config.mySuperFunction(row.values[0],cell.columnCode);
                                },
                                format(cell, column, row, value, rowIndex){
                                    row.setStyle('background-color: #fff');
                                    if (value == 0)
                                    {
                                        return '<button style="color: #bfbfbf; background-color: #fff; padding: 6px 12px; width: 6em;    font-size: 1.2em;">' + value + '</button>';
                                    }
                                    else {
                                        return '<button style="color: #5b5b5b; background-color: #fff; padding: 6px 12px; width: 6em;    font-size: 1.2em;">' + value + '</button>'; 
                                    };
                                }
                            },
                            {
                                columnCode: 'Value6',
                                onCellClick(cell, column, row, value, rowIndex, config){
                                    config.mySuperFunction(row.values[0],cell.columnCode);
                                },
                                format(cell, column, row, value, rowIndex){
                                    row.setStyle('background-color: #fff');
                                    if (value == 0)
                                    {
                                        return '<button style="color: #bfbfbf; background-color: #fff; padding: 6px 12px; width: 6em;    font-size: 1.2em;">' + value + '</button>' 
                                        ;
                                    }
                                    else {
                                        return '<button style="color: #5b5b5b; background-color: #fff; padding: 6px 12px; width: 6em;    font-size: 1.2em;">' + value + '</button>'; 
                                    };
                                }
                            },
                            {
                                columnCode: 'Value7',
                                onCellClick(cell, column, row, value, rowIndex, config){
                                    config.mySuperFunction(row.values[0],cell.columnCode);
                                },
                                format(cell, column, row, value, rowIndex){
                                    row.setStyle('background-color: #fff');
                                    if (value == 0)
                                    {
                                        return '<button style="color: #bfbfbf; background-color: #fff; padding: 6px 12px; width: 6em;    font-size: 1.2em;">' + value + '</button>' 
                                        ;
                                    }
                                    else {
                                        return '<button style="color: #5b5b5b; background-color: #fff; padding: 6px 12px; width: 6em;    font-size: 1.2em;">' + value + '</button>'; 
                                    };
                                }
                            },
                            {
                                columnCode: 'Value8',
                                onCellClick(cell, column, row, value, rowIndex, config){
                                    config.mySuperFunction(row.values[0],cell.columnCode);
                                },
                                format(cell, column, row, value, rowIndex){
                                    row.setStyle('background-color: #fff');
                                    if (value == 0)
                                    {
                                        return '<button style="color: #bfbfbf; background-color: #fff; padding: 6px 12px; width: 6em;    font-size: 1.2em;">' + value + '</button>' 
                                        ;
                                    }
                                    else {
                                        return '<button style="color: #5b5b5b; background-color: #fff; padding: 6px 12px; width: 6em;    font-size: 1.2em;">' + value + '</button>'; 
                                    };
                                }
                            },
                            {
                                columnCode: 'Value9',
                                onCellClick(cell, column, row, value, rowIndex, config){
                                    config.mySuperFunction(row.values[0],cell.columnCode);
                                },
                                format(cell, column, row, value, rowIndex){
                                    row.setStyle('background-color: #fff');
                                    if (value == 0)
                                    {
                                        return '<button style="color: #bfbfbf; background-color: #fff; padding: 6px 12px; width: 6em;    font-size: 1.2em;">' + value + '</button>' 
                                        ;
                                    }
                                    else {
                                        return '<button style="color: #5b5b5b; background-color: #fff; padding: 6px 12px; width: 6em;    font-size: 1.2em;">' + value + '</button>'; 
                                    };
                                }
                            }
            ]
        },
        mySuperFunction: function(arg1, arg2) {
            var arg_temp = 0;
            if (arg2 == 'Value1') {arg_temp = 1};
            if (arg2 == 'Value2') {arg_temp = 2};        
            if (arg2 == 'Value3') {arg_temp = 3};
            if (arg2 == 'Value4') {arg_temp = 4};
            if (arg2 == 'Value5') {arg_temp = 5};
            if (arg2 == 'Value6') {arg_temp = 6};
            if (arg2 == 'Value7') {arg_temp = 7};
            if (arg2 == 'Value8') {arg_temp = 8};
            if (arg2 == 'Value9') {arg_temp = 9};
            window.open(location.origin + localStorage.getItem('VirtualPath') + "/dashboard/page/Rep2?CodeTask="+arg1+"&Status="+arg_temp);
        }
    }
})()
