(function() {
    return {
        title:[

        ],
        hint:'',
        subscriptions:[

        ],
        formatTitle:function()   {

        },
        load_page:0,
        param_hiden2: 0,
        customConfig: "CustomWidget-1.html",
        init:function()   {
            var sub1 = this.messageService.subscribe('showUserData', this.showUserData, this);
            this.subscriptions.push(sub1);
            let executeQuery = {
                queryCode: '',
                accessRights_ListMenu: '',
                limit:-1,
                parameterValues:[
                    {
                        key: '',
                        UserId: '',
                        value: ''
                    }
                ]
            };
            this.queryExecutor(executeQuery, this.load, this);
        },
        load:function(data)   {
            if (this.param_hiden2 == 0)      {
            }              else      {
                document.getElementById('main_menuUser_load').classList.add("hid_elem");
                document.getElementById('main_menuUser').classList.remove("hid_elem");
                document.getElementById('btn_save_data').disabled = "";
            }      ;
            console.log('LIST-MENU - ', data);
            var dropdown = document.getElementsByClassName("dropdown-btn");
            var i; for (i = 0; i < dropdown.length; i++) {
                dropdown            [
                    i
                ]            .addEventListener("click",
                    function()            {
                        this.classList.toggle("active2");            var dropdownContent = this.nextElementSibling;            if (dropdownContent.style.display === "block")               {
                            dropdownContent.style.display = "none";
                        }               else               {
                            dropdownContent.style.display = "block";
                        }               
                    }            );
            }         ;        this.load_page = 1;
        }
    }
})()
