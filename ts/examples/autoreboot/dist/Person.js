"use strict";
var Person = /** @class */ (function () {
    // 对象变量 = 实例变量 = 类的【非静态】属性
    function Person(name_, age_, phone_) {
        this.name = "noname"; // ts4.0 之前解决方法 string | undefined
        this.age = 0;
        // 类上定义的属性一定是这个类本身特征的变量, 不能把一些无关的定义在类中; get/set选择器
        // 给对象复制的两种方式
        // 1. 通过类中的属性或者方法来赋值 
        // 2. 通过构造函数来赋值
        this.phone = "1111111";
        this.name = name_;
        this.age = age_;
        this.phone = phone_;
    }
    Person.prototype.doEat = function (who, address) {
        console.log("".concat(this.name, "\u548C").concat(who, "\u5728").concat(address, "\u5403\u996D"));
    };
    return Person;
}());
// 创建对象做了三件事: 
// 1. 在堆中为类的某个对象分配一个空间
// 2. 调用对象的构造函数; 并把参数赋值给对象属性  
// 3. 把对象赋值给对象变量 
// let zhangSanPerson = new Person();
// zhangSanPerson.age = 23;
// zhangSanPerson.doEat("露丝", "王府");
var zhangSanPerson = new Person("张三", 12, "15510907177");
zhangSanPerson.doEat("露丝", "王府");
console.log(zhangSanPerson);
