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


})();