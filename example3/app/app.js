(function(){
    'use strict';


    var helloComponent = {
        bindings : {
            name: "=",
        },
        templateUrl : './app/partials/hello.html',
    };

    angular
        .module("myapp",[])
        .component("hello", helloComponent);


})();
