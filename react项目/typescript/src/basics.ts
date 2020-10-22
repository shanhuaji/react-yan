/* 基础数据类型 */
let str: string = "admin";
let num: number = 100;
let u: undefined = undefined;
let n: null = null;
let bool: boolean = false;
let type: Boolean = new Boolean(true);
/* 对象 */
type Obj = {
  readonly id: number;
  name: string;
  a?: number /* ？可有可无 */;
  [propName: string]: any /* 任意属性任意类型 */;
};
let obj: Obj = {
  id: 1,
  name: "admin",
  c: "10",
};
obj.a = 10;
obj.b = 11;
console.log(obj);
/* dom节点 */
// let box:HTMLDivElement = document.querySelector('div')
/* 数组 */
let arr: (string | number)[] = ["admin", 13];
/* 对象数组 */
type Arr = {
  readonly id: number;
  name: string;
};
let arr1: Arr[] = [
  { id: 12, name: "admin" },
  { id: 13, name: "shan" },
];
console.log(arr);
console.log(arr1);
/* 函数 */
function fn3(a: string, b: number): string {
  return a + b;
}
console.log(fn3("1", 2));

type Fn = {
  (ab: string, cd: number): string;
};
let fn1: Fn = (ab, cd) => {
  return ab + cd;
};
console.log(fn1("1", 2));
/* 元祖 */
/* 只有两个元素 第一个元素必须是number类型，第二个必须是string类型 */
let data: [number, string];
data = [10, "admin"];
console.log(data);
/* 枚举 */
enum Color {
  Red = 1,
  Blue,
  Green,
}
let aa: Color = Color.Red;
let bb: Color = Color.Blue;
console.log(aa);
console.log(bb);
/* 快速查找 */
let ss: string = Color[2];
console.log("ss", ss);
let aaa: string = "shan";
let a1: number = 123;
/* 类 */
class Login {
  constructor() {
    this.fn1();
  }
  /* 实例 */
  aa = 0;
  fn1(): void {
    console.log(this.aa);
  }
  /* 存取器 */
  get doubleCount() {
    return this.aa + 1;
  }
  set newCount(val: number) {
    this.aa = val;
  }
  /* 静态  通过类名调用 */
  static b: string = "admin";
  /* 私有 类的内部使用 */
  private c: boolean = true;
}
let login = new Login();
login.doubleCount;
login.newCount;

/* 继承 上边组件的实例方法和属性 */
class Hello extends Login {
  constructor() {
    super();
    console.log("this", this.fn1);
  }
}
let hello = new Hello();

/* 定义类 */
type AppIF = {
  count: number;
  fn: (qq: string, ww: string) => string;
};

class App implements AppIF {
  constructor() {
    console.log(this.fn('3','2'));
    
  }
  count = 10;
  fn(qq:string, ww:string) {
    return qq + ww;
  }
}
let app = new App


/* 泛型 */
function abc<T>(a:number,b:T){
  return b
}
console.log(abc(10,20));

/* never */
function errorHandler ():never {
  throw new Error('sadfasdfsa')
}
function whileHandler ():never {
  while (true) {
    console.log(1)
  }
}