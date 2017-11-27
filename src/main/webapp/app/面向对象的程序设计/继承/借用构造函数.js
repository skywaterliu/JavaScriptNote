/**
 * 借用构造函数
 */
(function(){
    /**
     * 通过call()或apply()方法，将父类构造的上下文变为子类的上下文，并在子类的构造函数中调用父类构造,
     * 相当于在子类中生成了父类的实例属性，从而覆盖了父类实例属性（子类原型属性）
     */

    function Room(){
        this.things = ["table","chair","wall"];
    }

    function ClassRoom(){
        Room.call(this);
    }

    ClassRoom.prototype = new Room();

    var classRoomA = new ClassRoom();

    classRoomA.things.push("students");

    var classRoomB = new ClassRoom();

    console.info(classRoomA.things);    //["table","chair","wall","students"]
    console.info(classRoomB.things);    //["table","chair","wall"]

    /**
     * call()与apply()
     * superObj.funA.call(obj,arg1,arg2...)
     * superObj.funA.apply(obj,[arg1,arg2...])
     * 都将superObj的上下文切换为obj的上下文，类似于在obj中调用了superObj的funA()方法
     * 不同的是call()接收多个参数，而apply()接收数组参数
     */


    /**
     * 总结：
     * 解决了原型链中修改子类实例属性会影响同类型子类属性的缺陷
     * 但是，属性和方法都只能定义在构造函数中，降低了函数的复用性。
     */

})();