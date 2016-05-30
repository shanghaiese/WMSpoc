/**
 * Created by luyongjie on 2016/5/23.
 */
(function() {

    angular
        .module('wcprototype')
        .directive('datePicker1', datePicker1);

    datePicker1.$inject = [];

    function datePicker1() {
        return {
            restrict : 'EA',
            scope:{
                model:"=ngModel"
            },
            link : function(scope,element,attrs,ctrl){
                var datepicker1 = $(element).datepicker()
                    .on('changeDate',function (ev){
                        var newDate = new Date(ev.date)
                        datepicker1.hide()

                        alert(newDate)
                    })
                    .data('datepicker1')
            }
        }
    }

})();
