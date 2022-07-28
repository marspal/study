export default class MyLocalStorage {
  // 1. 构造器私有, 外部不能调用
  // 2. 至少应该提供一个外部属性或方法, 外部可以通这个属性或方法得到一个对象; 所以应该把这个方法设置为静态方法
  // 3. 外部调用第二步提供的静态方法获取一个对象
  static localstorage: MyLocalStorage; // 静态引用属性
  private static count: number = 0; // 静态的基本类型属性
  private constructor(){
    console.log("这是TS单件设计模式");
  }
  public setItem(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  public getItem(key: string) {
    let value = localStorage.getItem(key);
    return value !== null ? JSON.parse(value) : null;
  }
  // 提供一个外部访问的方法
  // 静态方法和对象无关
  // 外部可以通过类名来调用
  // 静态方法不能访问静态属性或者方法
  public static getInstance() {
    if (!this.localstorage) {
      console.log("我是aa");
      this.localstorage = new MyLocalStorage();
    }
    return this.localstorage
  }
  static getCount(): number {
    return this.count;
  }
  static addCount() {
    this.count += 3;
  }
}
 