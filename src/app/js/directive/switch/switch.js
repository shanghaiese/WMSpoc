//'use strict';

angular.module('wcprototype')

.directive('acdSwitch', AcdSwitchDirective);

/**
 * @ngdoc directive
 * @module wcprototype
 * @name wcprototype.directive:acdSwitch
 * @restrict E
 *
 * @description
 *
 * acdSwitch指令使用场景非常与checkbox相类似。但也有少数场景表现得与radiobox类似。
 *
 * @param {string} ng-model 可以进行数据绑定的表达式
 *
 * @usage
 * <hljs lang="html">
 * <acd-switch ng-model="isActive" aria-label="完成？">
 *   完成？
 * </acd-switch>
 * </hljs>
 *
 */
function AcdSwitchDirective() {

}
