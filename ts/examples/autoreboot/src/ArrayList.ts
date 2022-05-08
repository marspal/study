class ArrayList {
  constructor(public elements: Array<object>){}
  get(index: number) {
    return this.elements[index];
  }
  show() {
    this.elements.forEach(ele => {
      console.log(ele);
    })
  }
  remove(index: number): number
  remove(object: object): Object
  remove(value: any){
    this.elements = this.elements.filter((ele, index) => {
      if (typeof value === "number") {
        return index !== value;
      }else {
        return value !== ele;
      }
    });
    return value;
  }
}

let stuOne = {stuname: "wangwu", age: 23};
let stuTwo = {stuname: "wangwu1", age: 13};
let stuThree = {stuname: "wangwu2", age: 43};

let arrayList = new ArrayList([stuOne, stuTwo, stuThree]);
arrayList.show();

console.log("删除第一个学生");
// arrayList.remove(0);
console.log("删除学生对象");
arrayList.remove(stuThree);
arrayList.show();

export {};