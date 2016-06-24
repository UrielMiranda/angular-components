(function(){
    'use strict';


    var helloComponent = {
        bindings : {
            name: "<",
            number: "="
        },
        templateUrl : './app/partials/hello.html',
        controller : helloCtrl
    };

    angular
        .module("myapp",[])
        .controller("homeCtrl",homeCtrl)
        .component("hello", helloComponent);


    function homeCtrl(){
        var home = this;
        home.users = [  //Creamos un array
            {name : 'Uriel', number :  Math.random()},
            {name : 'Josue', number :  Math.random()},
            {name : 'Alan', number :  Math.random()},

        ];
    }

    function helloCtrl(){
        var hello = this;
        hello.click = click;


        function click(){
            hello.number = Math.random();
        }
    }

})();
