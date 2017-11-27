/**
 * 动态原型模式
 */
(function () {
    /**
     * 将所有信息封装在构造函数中，（仅在必要的情况下初始化原型）
     */
    function Person(name, age, sex) {
        this.name = name;
        this.age = age;
        this.sex = sex;
        if (typeof this.selfIntroduce != 'function') {
            Person.prototype.selfIntroduce = function () {
                alert(name + "," + age);
            }
        }

    }
})();