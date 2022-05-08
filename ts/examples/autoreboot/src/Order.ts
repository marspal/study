import OrderDetail from "./OrderDetail";

class Order {
  // public orderId: number = 0; // 需要赋初值或者构造器中赋值
  // public orderId: number;
  // public date: Date = new Date();
  // public custname: string = "nocustname";
  // public phone: string = "1111";
  // public orderDetail: Set = [];
  // public orderDetail!: Array<OrderDetail>; // ! 为4.0写法 
  
  // constructor(orderId_: number, date_: Date, custname_: string, phone_: string, orderDetail_:  Array<OrderDetail>) {
  //   this.orderId = orderId_;
  //   this.date = date_;
  //   this.custname = custname_;
  //   this.phone = phone_;
  //   this.orderDetail = orderDetail_;
  // }
  constructor(public orderId: number, public date: Date, public custname: string, public phone: string, public orderDetail :  Array<OrderDetail>){}

}

let orderDate = new Date(2023, 10, 17, 5, 20, 0);
let orderDetailOne = new OrderDetail(10, "电视剧", 5000, 3);
let orderDetailTwo = new OrderDetail(11, "桌子", 2000, 4);
// let orderDetailThree = new OrderDetail(12, "椅子", 2500, 5);
let order = new Order(1, orderDate, "李武", "3333", [orderDetailOne, orderDetailTwo]);

console.log(order);

export default order;