// ES5 中常量的写法
Object.defineProperty(window,'PI1',{
    value:3.1415926,
    writable:false //不可改写，所以为只读  常量
})

console.log(window.PI1);


// ES6 的常量写法
const PI=3.1415926
console.log(PI);

// PI = 4
