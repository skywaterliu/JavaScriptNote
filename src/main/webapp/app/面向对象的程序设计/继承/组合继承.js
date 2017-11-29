/**
 * 组合继承
 */
(function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }

    Person.prototype.selfIntroduce = function () {
        console.info("name : " + this.name + "\nage : " + age);
    }

    function Student(name, age, grade) {
        Person.call(this,name,age);
        this.grade = grade;
    }

    Student.prototype = new Person();
    Student.prototype.constructor = Student;
    Student.prototype.study = function () {
        console.info(this.name + " study "+this.grade +" knowledge");
    }

    var studentA = new Student("李雷",17,"高二");

    var studentB = new Student("韩梅梅",16,"高一");

    studentA.study(); // 李雷 study 高二 knowledge

    studentB.study(); // 韩梅梅 study 高一 knowledge


    /**
     * 步骤：
     * 1.父类构造中定义实例属性，父类原型中定义父类方法
     * 2.先使用借用构造函数的方法，子类调用父类构造，然后子类可在构造中定义自身的实例属性，
     * 3.再使用原型链的方式，将子类原型对象指向父类实例，使子类原型具有父类所有属性
     * 4.由于子类原型对象是父类的实例对象，实例中有[[prototype]]属性，而没有constructor属性，
     *   所以，在子类原型中添加constructor属性，并将子类构造方法的引用付给他
     * 5.给子类原型中添加子类方法
     *
     * 总结：
     * 优点：组合继承使子类实例拥有了不同的属性与相同的方法，避免了原型链与借用构造的缺陷，使用最多。
     * 缺点：会调用两次构造：在子类构造中的call()方法会调用一次父类构造，在将父类实例赋给子类原型时又调用一次父类构造
     */


})();