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

    Student.prototype.study = function () {
        console.info(this.name + " study "+this.grade +" knowledge");
    }

    var studentA = new Student("李雷",17,"高二");

    var studentB = new Student("韩梅梅",16,"高一");

    studentA.study(); // 李雷 study 高二 knowledge

    studentB.study(); // 韩梅梅 study 高一 knowledge


    /**
     * 组合继承使子类实例拥有了不同的属性与相同的方法，避免了原型链与借用构造的缺陷，使用最多。
     */


})();