/**
 * Created by luyongjie on 2016/5/20.
 */
(function() {

    angular
        .module('wcprototype')
        .directive('datePicker', datePicker);

    datePicker.$inject = [];

    function datePicker() {
        return {
            restrict: 'A',
            scope: {

            },
            link: function(scope, element, attrs) {
                console.log('1');
               /* element.datepicker({




                    inline: true,
                    dateFormat: 'dd.mm.yy',
                    onSelect: function(dateText) {
                        var modelPath = $(this).attr('ng-model');
                        putObject(modelPath, scope, dateText);
                        scope.$apply();
                    },
                    clearBtn: true,
                    language: "zh-CN",
                    daysOfWeekHighlighted: "0,6",
                    todayHighlight: true
                });*/

                $element.datepicker({
                    clearBtn: true,
                    language: "zh-CN",
                    daysOfWeekHighlighted: "0,6",
                    todayHighlight: true
                })
                .on('changeDate',function (ev){
                    var newDate = new Date(ev.date)
                    datepicker1.hide()

                    alert(newDate)
                })
                .data('datepicker')
            }

        };

    }
})();

