﻿(function() {
    return {
        placeholder: 'Дата створення *',
        gl_value: '',
        onItemSelect: function(date) {
            var message = {
                name: 'chance_filter_DateCreated',
                value: date
            };
            this.messageService.publish(message);
            this.gl_value = date;
            console.log('onItemSelect: ', date);
        }
    }
})()