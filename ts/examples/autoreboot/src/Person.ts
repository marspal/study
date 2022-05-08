class Person {
  public name: string = "noname"; // ts4.0 之前解决方法 string | undefined
  public age: number = 0;
  // 类上定义的属性一定是这个类本身特征的变量, 不能把一些无关的定义在类中; get/set选择器
  // 给对象复制的两种方式
  // 1. 通过类中的属性或者方法来赋值 
  // 2. 通过构造函数来赋值
  public phone: string = "1111111";
  // public address: string[] = ["123", "333"]; 
  public address: Array<string> = ["12", "23"];
  public resolve: () => void = () => {}; // 函数类型属性、引用属性的一种

  // 对象变量 = 实例变量 = 类的【非静态】属性
  constructor(name_: string, age_: number, phone_: string) {
    this.name = name_;
    this.age = age_;
    this.phone = phone_;
  }
  
  public doEat(who: string, address: string): void {
    console.log(`${this.name}和${who}在${address}吃饭`);
  }  
}
// 创建对象做了三件事: 
// 1. 在堆中为类的某个对象分配一个空间
// 2. 调用对象的构造函数; 并把参数赋值给对象属性  
// 3. 把对象赋值给对象变量 
// let zhangSanPerson = new Person();
// zhangSanPerson.age = 23;

// zhangSanPerson.doEat("露丝", "王府");

let zhangSanPerson = new Person("张三", 12, "15510907177");
zhangSanPerson.doEat("露丝", "王府");
console.log(zhangSanPerson);