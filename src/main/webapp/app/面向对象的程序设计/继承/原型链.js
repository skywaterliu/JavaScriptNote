/**
 * 原型链
 */
(function () {

    /**--------父类部分-------**/
    function SuperClass() {
        this.property = true;  //该属性为SuperType的实例属性，出现在SuperType的实例当中
        this.name = "super"
    }

    SuperClass.prototype.getSuperValue = function(){ //该方法存在于SuperType的原型对象中
        return this.property;
    }

    /**--------子类部分-------**/
    function SubClass() {
        this.subProperty = false;
        this.name = "sub"
    }

    /**
     * 继承操作
     */
    SubClass.prototype = new SuperClass();


    SubClass.prototype.getSubValue = function () {
        return this.subProperty;
    }

    /**---------测试--------**/

    var subObj = new SubClass();
    var superObj = new SuperClass();

    console.info(subObj.getSubValue());     //false
    console.info(subObj.getSuperValue());   //true
    console.info(subObj.property);          //true
    console.info(subObj.__proto__);         //superObj
    console.info(subObj.name);              //sub
    console.info(superObj.name);            //super


    /**
     * 将父类实例赋予子类原型，则子类原型包含了父类的所有属性，
     * 由于每个实例对象都有[[prototype]]属性，指向其构造函数的原型对象，
     * 所以子类的原型对象的[[prototype]]属性指向父类原型对象，形成了“原型链”
     */

    /**
     * 当以读取模式访问实例属性时，会优先搜索当前实例对象，然后沿原型链向上搜索，直到原型链末端
     */




    /**-----------原型链存在的问题----------**/

    function Room(){
        this.things = ["table","chair","wall"];
    }

    function ClassRoom(){
    }

    ClassRoom.prototype = new Room();

    var classRoomA = new ClassRoom();

    classRoomA.things.push("students");

    var classRoomB = new ClassRoom();

    console.info(classRoomB.things);    //["table","chair","wall","students"]

    /**
     * 由此可见，这种情况修改父类的实例属性会影响到所有的子类实例，因为父类的实例是所有子类实例的原型对象，
     * 改变父类实例则会改变所有子类实例的共有方法或属性。
     */



})();