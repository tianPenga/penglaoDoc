# es特性

## 展开语法

展开语法是es6新增的特性，我们可以用它来展开一个数组或者对象：

```javascript
let arr=[Tian,Peng,Rbo];
console.log(...arr); //Tian,Peng,Rbo

let obj={Tian:{Peng:"Rbo"}}
console.log({...obj}) //{Tian:{Peng:"Rbo"}}
```

好了，你现在知道展开语法“...”的作用就是可以提取数组或者对象的元素，或者你可以把它理解位去掉数组的"[]"或者去掉对象的"{}"，那么现在可以学习使用它的技巧了。

首先是对数组进行浅拷贝：

```javascript
let arr=[Tian,Peng,Rbo];
let newArr=[...arr];

console.log(newArr); //[Tian,Peng,Rbo]
```

然后是对象浅拷贝：

```javascript
let obj={};
let objArr=[{HTML:{Price:10}},{Css:{Price:20}},{JavaScript:{Price:30}}];
objArr.map(lesson=>{
    obj={...lesson,...obj}
})
//这样你就可以把数组中每个对象元素合并到一个对象中了

console.log(obj);//{HTML:{Price:10},Css:{Price:20},JavaScript:{Price:30}}

```



