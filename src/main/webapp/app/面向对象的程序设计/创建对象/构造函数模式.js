/**
 * constructor_pattern  构造函数模式
 */

// (function () {
/**
 * 所生成的对象的constructor属性指向Person
 * alert(person1.constructor == Person); //true
 *
 * @param name
 * @param age
 * @param sex
 * @constructor
 */
function Person(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.selfIntroduce = function () {
        alert("my name is " + this.name + "\nI am " + this.age + " years old");
    }
}

var person1 = new Person("李雷", 18, "man");
var person2 = new Person("韩梅梅", 16, "woman");

person2.selfIntroduce();

/**
 * 作为普通函数调用，将其中属性绑定到window对象
 * 因为在全局作用域调用函数时，this指向Global对象,在浏览器中即为window对象
 * 而函数指向局部变量时，其this就变成了所指向的对象作用域，构造出的属性也就成了对象的属性
 */
Person("小明", 20, "man");
window.selfIntroduce();
window.name; //小明


/**
 * 总结：
 *
 * 优点：与工厂模式不同的是其将生成的对象标识为一个特定的类型
 *
 * 缺点：生成的不同的对象中的function都相对独立
 * this.selfIntroduce = function(){alert("");}
 * 与
 * this.selfIntroduce = new Function("alert('')");
 * 等价
 * 造成的结果是person1.selfIntroduce == person2.selfIntroduce //false
 * 而这时没有必要的
 *
 * 解决方法：原型模式
 */
// })();
