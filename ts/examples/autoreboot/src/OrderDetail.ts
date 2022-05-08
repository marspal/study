class OrderDetail {
  public orderDetailId: number;
  public productname: string;
  public price: number;
  public count: number ;
  constructor(orderDetailId_: number, productname_: string, price_: number, count_: number) {
    this.orderDetailId = orderDetailId_;
    this.productname = productname_;
    this.price = price_;
    this.count = count_;
  }
}

export default OrderDetail