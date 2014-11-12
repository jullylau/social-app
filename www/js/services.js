/* 
 * 
 */

angular.module('starter.services', ['ngResource'])

.factory('MyGroups', function ($resource) {
    return $resource('http://dev.intl2.babycenter.ca:8080/myGroups');
})

.factory('PopularGroups', function ($resource) {
    return $resource('http://dev.intl2.babycenter.ca:8080/popularGroups');
})

.factory('Group', function ($resource) {
    return $resource('http://dev.intl2.babycenter.ca:8080/groups/:groupId');
});