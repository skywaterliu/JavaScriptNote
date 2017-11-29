/**
 * 寄生组合式继承
 */
(function () {

    function Person(name, age) {
        this.name = name;
        this.age = age;
    }

    Person.prototype.sayName = function () {
        alert("my name is " + this.name);
    }

    function Student(name, age, grade) {
        Person.call(this);
        this.grade = grade;
    }

    function inheritSuper(SuperType, SubType) {
        var prototype = Object.create(SuperType);
        prototype.constructor = SubType;
        SubType.prototype = prototype;
    }

    inheritSuper(Person, Student);

    Student.prototype.study = function () {
        alert("I learn " + this.grade + " knowledge");
    }


    var studentA = new Student("李雷",17,"高二");

    /**
     * 总结：
     * 寄生组合式继承结合了寄生式继承和组合继承的优点，解决了寄生式继承不利于方法复用和组合继承多次调用构造的问题。
     *
     */

})();