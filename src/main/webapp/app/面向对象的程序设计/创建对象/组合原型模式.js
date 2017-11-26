(function () {
    /**
     * 一般使用构造和原型相结合的方式
     */
    function Animal(name, age, sex) {
    }

    // Animal.prototype.eat = function(foodName){
    //     alert(this.name + " eat "+foodName);
    // }
    Animal.prototype = {
        constructor: Animal,
        eat: function (foodName) {
            alert(this.name + " eat " + foodName);
        }
    }
})();