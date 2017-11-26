/**
 * prototype_pattern
 */
(function () {
    /**
     * 所有函数都含有prototype属性，这个属性是一个指针，指向一个对象，
     * 这个对象的用途是：可以包含由特定类型的所有实例共享的属性和方法。
     */

    function Person() {
    }

    Person.prototype.name = "initName";
    Person.prototype.age = 0;
    Person.prototype.sex = null;
    Person.prototype.selfIntroduce = function () {
        alert(this.name + "," + this.age);
    }

    var person1 = new Person();
    var person2 = new Person();
    person1.name == "initName"; //true;
    person1.selfIntroduce == person2.selfIntroduce; //true

    /**
     * 当生成一个函数时，会根据特定规则生成该函数的原型对象。该原型对象的constructor属性的值即为生成该原型对象的函数的引用，
     * 及
     */
    Person.prototype.constructor == Person //true

    /**
     * 该方法所生成的对象具有一个[[Prototype]]属性（在Firefox、Safari、Chrome中每个对象由__proto__属性）（该属性无标准的访问方式），
     * 其指向构造函数的原型对象。
     * 及这个连接存在于实例与原型对象之间，而不存在于实例与构造函数之间。
     */

    /**
     * 给生成的对象属性赋值，若与原型中的属性同名，则会优先访问对象的属性，不会访问原型中的属性。
     * 及优先访问实例属性，而后访问原型属性。
     */
    person1.name = "李雷";

    console.info(person1.name); //李雷
    console.info(person2.name); //initName

    delete person1.name;
    console.info(person1.name); //initName;

    /**
     * 判断实例（包括其原型对象）中是否存在某属性  in 操作符
     */
    console.info("name" in person1); //true;


    /**
     * 判断某属性是否是实例对象中的属性 hasOwnProperty(key);
     */

    var person3 = new Person();
    console.info(person3.hasOwnProperty("name")); //false

    person3.name = "韩梅梅";
    console.info(person3.hasOwnProperty("name")); //true;

    /**
     * 通过hasOwnProperty(key) 和 in 操作符判断某属性是存在于实例中还是原型对象中
     */
    function hasPrototypeProperty(obj, key) {
        return !obj.hasOwnProperty(key) && (key in obj);
    }


    /**
     * 另一种原型定义方式
     */
    function Person() {
    }

    Person.prototype = {
        //使用对象字面量的方式时，该对象也会自动获得prototype对象，而该prototype对象的constructor属性并不指向Person，
        //所以在此手动将constructor属性指向Person
        constructor: Person,
        name: "initName",
        age: 0,
        sex: null,
        selfIntroduce: function () {
            alert(this.name + "," + this.age);
        }
    }

})();