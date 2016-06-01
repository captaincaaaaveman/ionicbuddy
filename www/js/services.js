angular.module('starter.services', ['ngResource'])

.factory('Session', function ($resource) {
    return $resource('http://localhost:8080/sessions/:sessionId');
 //  return $resource('http://dbservice-captaincaaveman.rhcloud.com/sessions/:sessionId');
})

.factory('Location', function ($resource) {
    return $resource('http://localhost:8080/locations/:locationId');
 //  return $resource('http://dbservice-captaincaaveman.rhcloud.com/locations/:locationId');
})

.factory('Buddy', function ($resource) {
    return $resource('http://localhost:8080/buddys/:buddyId',{},
    {getData: {method:'GET', isArray:false}});
 //  return $resource('http://dbservice-captaincaaveman.rhcloud.com/buddys/:buddyId');
})
;

