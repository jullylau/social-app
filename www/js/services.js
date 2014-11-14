/* 
 * 
 */

angular.module('starter.services', ['ngResource'])

.factory('MyGroups', function ($resource) {
    return $resource('http://dev.intl2.babycenter.ca:8080/ws/myGroups');
})

.factory('PopularGroups', function ($resource) {
    return $resource('http://dev.intl2.babycenter.ca:8080/ws/popularGroups');
})

.factory('Group', function ($resource) {
    return $resource('http://dev.intl2.babycenter.ca:8080/ws/groups/:groupId');
})

.factory('Threads', function ($resource) {
    return $resource('http://dev.intl2.babycenter.ca:8080/ws/groups/:groupId/threads/', {}, {query:{isArray: true}});
});