'use strict';

/**
 * @ngdoc overview
 * @name wcprototype.tooltip
 *
 * @description
 * 这个模块包含了工具提示框的所有指令。
 *
 */
angular.module('wcprototype.tooltip', ['ui.bootstrap.tooltip'])

/**
 * @ngdoc directive
 * @module wcprototype.tooltip
 * @name wcprototype.tooltip.directive:acdTooltipClasses
 * @restrict A
 *
 * @description
 *
 * acdTooltipClasses用于向工具提示框添加样式。
 *
 * **如无重新构建工具提示框需要，一般开发不需要使用此指令**
 *
 */
.directive('acdTooltipClasses', ['$uibPosition', function($uibPosition) {
  return {
  	restrict: 'A',
  	link: function(scope, element, attrs) {
  	  if (scope.placement) {
  	  	var position = $uibPosition.parsePlacement(scope.placement);
  	  	element.addClass(position[0]);
  	  }

  	  if (scope.popupClass) {
  	  	element.addClass(scope.popupClass);
  	  }

  	  if (scope.animation()) {
  	  	element.addClass(attrs.tooltipAnimationClass);
  	  }
  	}
  };
}])

/**
 * @ngdoc directive
 * @module wcprototype.tooltip
 * @name wcprototype.tooltip.directive:acdTooltipTemplateTransclude
 * @restrict A
 *
 * @description
 *
 * acdTooltipTemplateTransclude指令作用在将用户自定义内容模板进行转换并嵌入工具提示框中。
 *
 * **如无重新构建工具提示框需要，一般开发不需要使用此指令**
 *
 */
.directive('acdTooltipTemplateTransclude', ['$animate', '$sce', '$compile', '$templateRequest',
function ($animate, $sce, $compile, $templateRequest) {
  return {
    link: function(scope, elem, attrs) {
      var origScope = scope.$eval(attrs.tooltipTemplateTranscludeScope);

      var changeCounter = 0,
        currentScope,
        previousElement,
        currentElement;

      var cleanupLastIncludeContent = function() {
        if (previousElement) {
          previousElement.remove();
          previousElement = null;
        }

        if (currentScope) {
          currentScope.$destroy();
          currentScope = null;
        }

        if (currentElement) {
          $animate.leave(currentElement).then(function() {
            previousElement = null;
          });
          previousElement = currentElement;
          currentElement = null;
        }
      };

      scope.$watch($sce.parseAsResourceUrl(attrs.uibTooltipTemplateTransclude), function(src) {
        var thisChangeId = ++changeCounter;

        if (src) {
          //set the 2nd param to true to ignore the template request error so that the inner
          //contents and scope can be cleaned up.
          $templateRequest(src, true).then(function(response) {
            if (thisChangeId !== changeCounter) { return; }
            var newScope = origScope.$new();
            var template = response;

            var clone = $compile(template)(newScope, function(clone) {
              cleanupLastIncludeContent();
              $animate.enter(clone, elem);
            });

            currentScope = newScope;
            currentElement = clone;

            currentScope.$emit('$includeContentLoaded', src);
          }, function() {
            if (thisChangeId === changeCounter) {
              cleanupLastIncludeContent();
              scope.$emit('$includeContentError', src);
            }
          });
          scope.$emit('$includeContentRequested', src);
        } else {
          cleanupLastIncludeContent();
        }
      });

      scope.$on('$destroy', cleanupLastIncludeContent);
    }
  };
}])

/**
 * @ngdoc directive
 * @module wcprototype.tooltip
 * @name wcprototype.tooltip.directive:acdTooltip
 * @restrict A
 *
 * @description
 *
 * acdTooltip指令包装了angular-bootstrap模块的[uib-tooltip指令](https://github.com/angular-ui/bootstrap/blob/master/src/tooltip/tooltip.js)，官方[示例参见](http://angular-ui.github.io/bootstrap/#/tooltip)。
 * 此指令只可显示普通文本，支持格式化显示。
 *
 * @param {string} tooltip-placement 提示框出现位置(默认:top)
 *   - top
 *   - top-left
 *   - top-right
 *   - bottom
 *   - bottom-left
 *   - bottom-right
 *   - left
 *   - left-top
 *   - left-bottom
 *   - right
 *   - right-top
 *   - right-bottom
 * @param {boolean} tooltip-animation 提示框出现或消失是否使用动画(默认:true)
 * @param {string} tooltip-popupClass 自定义样式
 * @param {boolean} tooltip-is-open 是否显示提示框
 * @param {string} tooltip-trigger 触发显示提示框方式(默认:mouseenter)
 *   - mouseenter
 *   - click
 *   - outsideClick
 *   - focus
 *   - none
 *
 * @example
 * <example module="ngView">
 *   <file name="index.html">
 *     <div ng-controller="demoCtrl">
 *       <div class="form-group">
 *	       <label>提示框位置</label>
 *	       <select class="form-control" ng-model="placement.selected" ng-options="o as o for o in placement.options"></select>
 *	     </div>
 *       <div class="form-group">
 *	       <label>显示信息</label>
 *	       <input type="text" ng-model="placement.content" class="form-control">
 *	     </div>
 *       <button tooltip-placement="{{placement.selected}}" acd-tooltip="{{placement.content}} | On the {{placement.selected}}" type="button" class="btn btn-default">鼠标移上弹出</button>
 *     </div>
 *   </file>
 *   <file name="script.js">
 *     angular.module('ngView', ['wcprototype', 'wcprototype.tooltip'])
 *
 *     .controller('demoCtrl', function($scope) {
 *        $scope.placement = {
 *          options: [
 *            'top',
 *            'top-left',
 *            'top-right',
 *            'bottom',
 *            'bottom-left',
 *            'bottom-right',
 *            'left',
 *            'left-top',
 *            'left-bottom',
 *            'right',
 *            'right-top',
 *            'right-bottom'
 *          ],
 *          selected: 'top',
 *          content: '这是一个提示框信息'
 *        };
 *     });
 *   </file>
 * </example>
 */
.directive('acdTooltip', ['$uibTooltip', function($uibTooltip) {
  return $uibTooltip('acdTooltip', 'tooltip', 'mouseenter');
}])

.directive('acdTooltipPopup', function() {
  return {
  	replace: true,
  	scope: {
  	  content: '@',
  	  placement: '@',
  	  popupClass: '@',
  	  animation: '&',
  	  isOpen: '&'
  	},
  	templateUrl: 'acd/template/tooltip/tooltip-popup.html'
  };
})

/**
 * @ngdoc directive
 * @module wcprototype.tooltip
 * @name wcprototype.tooltip.directive:acdTooltipTemplate
 * @restrict A
 *
 * @description
 *
 * acdTooltipTemplate指令包装了angular-bootstrap模块的[uib-tooltip-tempate指令](https://github.com/angular-ui/bootstrap/blob/master/src/tooltip/tooltip.js)指令，官方[示例参见](http://angular-ui.github.io/bootstrap/#/tooltip)。
 *
 * @param {string} tooltip-placement 提示框出现位置(默认:top)
 *   - top
 *   - top-left
 *   - top-right
 *   - bottom
 *   - bottom-left
 *   - bottom-right
 *   - left
 *   - left-top
 *   - left-bottom
 *   - right
 *   - right-top
 *   - right-bottom
 * @param {boolean} tooltip-animation 提示框出现或消失是否使用动画(默认:true)
 * @param {string} tooltip-popupClass 自定义样式
 * @param {boolean} tooltip-is-open 是否显示提示框
 * @param {string} tooltip-trigger 触发显示提示框方式(默认:mouseenter)
 *   - mouseenter
 *   - click
 *   - outsideClick
 *   - focus
 *   - none
 *
 * @example
 * <example module="ngView2">
 *   <file name="index.html">
 *     <div ng-controller="demoCtrl">
 *       <div class="form-group">
 *	       <label>提示框位置</label>
 *	       <select class="form-control" ng-model="placement.selected" ng-options="o as o for o in placement.options"></select>
 *	     </div>
 		 <div><a href='#' acd-tooltip-template="myTooltipTemplate.html">Selector Text</a></div>
 *       <button tooltip-placement="{{placement.selected}}" acd-tooltip-template="myTooltipTemplate.html" type="button" class="btn btn-default">鼠标移上弹出</button>
 *     </div>
 *   </file>
 *   <file name="myTooltipTemplate.html">
 *     <span>Special Tooltip with <strong>markup</strong> and {{ placement.selected }}</span>
 *   </file>
 *   <file name="script.js">
 *     angular.module('ngView2', ['wcprototype', 'wcprototype.tooltip'])
 *
 *     .controller('demoCtrl', function($scope) {
 *       $scope.placement = {
 *         options: [
 *           'top',
 *           'top-left',
 *           'top-right',
 *           'bottom',
 *           'bottom-left',
 *           'bottom-right',
 *           'left',
 *           'left-top',
 *           'left-bottom',
 *           'right',
 *           'right-top',
 *           'right-bottom'
 *         ],
 *         selected: 'top'
 *       };
 *     });
 *   </file>
 * </example>
 */
.directive('acdTooltipTemplate', ['$uibTooltip', function($uibTooltip) {
  return $uibTooltip('acdTooltipTemplate', 'tooltip', 'mouseenter', {
  	useContentExp: true
  });
}])

.directive('acdTooltipTemplatePopup', function() {
  return {
    replace: true,
    scope: {
      contentExp: '&',
      placement: '@',
      popupClass: '@',
      animation: '&',
      isOpen: '&',
      originScope: '&'
    },
    templateUrl: 'acd/template/tooltip/tooltip-template-popup.html'
  };
})

/**
 * @ngdoc directive
 * @module wcprototype.tooltip
 * @name wcprototype.tooltip.directive:acdTooltipHtml
 * @restrict A
 *
 * @description
 *
 * acdTooltipTemplate指令包装了angular-bootstrap模块的[uib-tooltip-html指令](https://github.com/angular-ui/bootstrap/blob/master/src/tooltip/tooltip.js)指令，官方[示例参见](http://angular-ui.github.io/bootstrap/#/tooltip)。
 *
 */
.directive('acdTooltipHtml', ['$uibTooltip', function($uibTooltip) {
  return $uibTooltip('acdTooltipHtml', 'tooltip', 'mouseenter', {
    useContentExp: true
  });
}])

.directive('acdTooltipHtmlPopup', function() {
  return {
    replace: true,
    scope: {
      contentExp: '&',
      placement: '@',
      popupClass: '@',
      animation: '&',
      isOpen: '&'
    },
    templateUrl: 'acd/template/tooltip/tooltip-html-popup.html'
  };
});
