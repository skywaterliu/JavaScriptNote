/**
 * 寄生式继承
 */
(function(){

    function createStudent(obj){
        var person = createPerson(obj);    //通过一个能够返回对象的函数获得一个对象（任意一个能够返回对象的函数均可）
        person.study = function(){      //给这个对象添加属性
            alert("i can study");
        }
        return person;                  //返回这个对象
    }

    function createPerson(obj){
        obj.name = "李雷";
        obj.age = "1";

        return obj;
    }

    var studentA = createStudent(new Object());

    studentA.study();

    /**
     * 类似于构造函数模式，不利于方法的复用
     */


})();