import { Executor, RejectType, ResolveType } from "./actiontype";

class Promise<T = any> {

  public resolve: ResolveType;
  public reject: RejectType;
  public status: string;
  public resolve_executor_value: any;
  public reject_executor_value: any;
  public resolve_callback: (()=>void)[] = [];
  public reject_callback: (() => void)[] = [];

  constructor(executor: Executor) {
    this.status = "pending"; // 起始等待状态
    this.resolve_callback = [];
    this.reject_callback = [];
    this.resolve = (value): any => {
      if (this.status === "pending") {
        this.status = "success";
        this.resolve_executor_value = value;
        this.resolve_callback.forEach(fn => fn())
      }
    };
    this.reject = (error): any => {
      if (this.status === "pending") {
        this.status = "failed";
        this.reject_executor_value = error;
        this.reject_callback.forEach(fn => fn())
      }
    };
    try {
      executor(this.resolve, this.reject);
    } catch(err) {
      this.status = "pending";
      this.reject(err.toString());
    }
  }

  then(resolveInThen: ResolveType, rejectInThen: RejectType) {
    return new Promise((resolve, reject) => {
      let result;
      if (this.status === "success") {
        result = resolveInThen(this.resolve_executor_value);
        resolve(result);
      }
      if (this.status === "failed") {
        result = rejectInThen(this.reject_executor_value);
        reject(result);
      }
      if (this.status === "pending") {
        this.processManyAsyncAndSync(resolveInThen, rejectInThen, resolve, reject);
      }
    });
  }
  processManyAsyncAndSync (resolveInThen: ResolveType, rejectInThen: RejectType, resolve: ResolveType, reject: RejectType) {
    let result: any;
    this.resolve_callback.push(() => {
      result = resolveInThen(this.resolve_executor_value);
      if (isPromise(result)) {
        result.then((resolveSuccess) => {resolve(resolveSuccess) }, (rejectSuccess) => reject(rejectSuccess))
        // setTimeout(() => {
        //   resolve(result.resolve_executor_value);
        // }, 5);
      } else {
        resolve(result);
      }
    });
    this.reject_callback.push(() => {
      result = rejectInThen(this.reject_executor_value);
      reject(result);
    })
  }

  static all(promises: Promise[]): Promise {
    return new Promise((resolve, reject) => {
      let allPromiseResolveSuccessValue: any[] = [];
      promises.forEach((promise, index) => {
        promise.then((successVal) => {
          processData(successVal, index);
        }, (errVal) => {
          reject(errVal);
        })
        if (index === promises.length) {
          resolve(allPromiseResolveSuccessValue);
        }
      })
      function processData (resolveSuccess: any, index: number) {
        allPromiseResolveSuccessValue[index] = resolveSuccess;
        if (allPromiseResolveSuccessValue.length === promises.length) {
          resolve(allPromiseResolveSuccessValue);
        }
      }
    });
  }
}

// 单级异步 + 单级then方法

// 多异步 + 级联then

function isPromise(val: any): val is Promise {
  return isObject(val) && isFunction(val.then);
}

function isObject(val: any): val is Record<any, any>{
  return val !== null && typeof val === "object";
}

function isFunction(data: any):  data is Function{
  return typeof data === "function";
}

export default Promise