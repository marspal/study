type ChartParamType =  {
  width?: number;
  height?: number;
  radius?: number;
};

class Square {
  public height: number;
  public width: number;
   
  constructor(width_: number, height_: number)
  constructor(value: ChartParamType) 
  constructor(widthOrValue_: any, height_: number = 1) {
    if (widthOrValue_ === "object") {
      this.width = widthOrValue_.width;
      this.height = widthOrValue_.height;
    } else {
      this.width = widthOrValue_;
      this.height = height_;
    }
  } 
  
  getArea(): number {
    return this.height * this.width;
  } 
}

let square = new Square(40, 50);
console.log(square.getArea());

let chartParamObj: ChartParamType = {width: 40, height: 50}

let square2 = new Square(chartParamObj);
console.log(square2.getArea());