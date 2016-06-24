(function(){
    'use strict';

    var helloComponent = {
        template: "hello",
    };

    angular
        .module("myapp",[])
        .component("hello", helloComponent);


})();