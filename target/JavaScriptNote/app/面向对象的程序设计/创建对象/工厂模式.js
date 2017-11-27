/**
 * factory_pattern
 */
(function () {
    /**
     * 可利用createPerson()创建多个相似对象，但无法识别对象的类型(无法从生成的对象判断其类型)。
     * @param name
     * @param age
     * @param sex
     * @returns {Object}
     */

    function createPerson(name, age, sex) {
        var person = new Object();
        person.name = name;
        person.age = age;
        person.sex = sex;
        person.selfIntroduce = function () {
            alert("my name is " + name + "\nI am " + age + " years old");
        }
        return person;
    }

    var person1 = createPerson("李雷", 18, "man");
    var person2 = createPerson("韩梅梅", 16, "woman");

})();