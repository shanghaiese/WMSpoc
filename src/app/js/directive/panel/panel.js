//'use strict';

angular.module('wcprototype')

.directive('acdPanel', AcdPanelDirective);

/**
 * @ngdoc directive
 * @module wcprototype
 * @name wcprototype.directive:acdPanel
 * @restrict E
 *
 * @description
 *
 * acdPanel指令实现了一个面板的功能，包含区域功能：
 * -- 面板头(Panel Header)：包含左边标题显示显示区域及右边的工具栏
 * -- 面板内部(Panel Content)：里面可以放置任何标签
 * -- 面板底(Panel Foot)：默认情况是一个工具栏，也可以用户自定义模板
 *
 *
 *
 * @usage
 *
 *
 *
 */
function AcdPanelDirective() {
}
