/**
 * 原型式继承
 */
(function(){

    /**
     * 该继承方法需要有一个对象作为基础，该对象的引用型属性会被所有子类实例共享，修改子类该属性，则父类o的该属性也会改变
     * @param o
     * @returns {F}
     */
    function object(o){
        function F() {
        }
        F.prototype = o;
        return new F();
    }


    //例
    var person = {
        name:"mitsuha",
        friends:['taki','sayaka','reshi']
    }

    var personA = new object(person);
    personA.name = "A";
    personA.friends.push("T");

    var personB = new object(person);
    personB.name = "B";
    personB.friends.push("U");

    console.info(person.friends);   // ['taki','sayaka','reshi','T','U']


    /**
     * ECMAScript5已新增Object.create(o)方法
     * 可使用  var personA = Object.create(person);
     */



})();