(function(){
    'use strict';


    var helloComponent = {
        bindings : {
            name: "=",
        },
        template : 'hello {{$ctrl.name}}',
    };

    angular
        .module("myapp",[])
        .component("hello", helloComponent);


})();
