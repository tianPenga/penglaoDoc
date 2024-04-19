# Symbol

Symbol是ES6新增的基本类型，它的主要作用是把某些变量标识为**唯一**的。

如果你不想了解更深层次更复杂的Symbol应用，这篇文章你可以试着阅读，因为这篇文章讲述的是Symbol的基本用法。JavaScript自身很多接口都是用Symbol类型做参数或者键的，比如Symbol在帮助数组之类的实现迭代协议是有应用的，若是想了解更多，建议查询**MDN文档**或者阅读**红宝书**。

但是，我相信本文是对启发初学者去初步掌握Symbol是有帮助的。

## 如何理解Symbol

你可以把Symbol理解成**唯一字符串**。

**独一无二**的：

```javascript
let a=Symbol();
let b=Symbol();

console.log(a==b); //false
```

Symbol不可以添加属性

```javascript
let a=Symbol();
a.name='Peng';
console.log(a.name); //undefined
```



## 传入字符串标识不同Symbol

Symbol可以传入参数，以便开发者更好的分辨它们

```javascript
let a=Symbol('Tian');
let b=Symbol('Peng');

console.log(a); //Symbol(Tian)
console.log(b); //Symbol(Peng)

```

即便传入的字符串参数是一样，你还是要记住，**独一无二**的字符串：

```javascript
let a=Symbol('Tian');
let b=Symbol('Tian');

console.log(a==b); //false
```

我们可以使用Symbol自带的属性`description` 来获取标识参数：

```javascript
let a=Symbol('Tian');

console.log(a.description); //Tian
```



## Symbol for

根据标识获取Symbol，如果不存在则新建一个Symbol，这其实跟普通字符串没什么大区别

- 使用Symbol.for会在系统中将Symbol登记

- 使用Symbol则不会登记

  ```javascript
  let a = Symbol.for("Tian");
  let b = Symbol.for("Tian");
  console.log(hd == b); //true
  ```

  使用`Symbol.keyFor`获取登记的Symbol标识，如果找不到返回undefined 

```javascript
let a = Symbol.for("Tian");
console.log(Symbol.keyFor(a)); //"Tian"

let b = Symbol("Tian");
console.log(Symbol.keyFor(b)); //undefined
```



## Symbol作为对象键

想要把Symbol 作为对象的键时，要使用变量形式，放到[]里面，才能起作用，访问也是使用[]，毕竟Symbol不是真的是字符串:

```javascript
let a= Symbol();
let obj={
	name:'obj',
	[a]:'这是一个Symbol键'
}
//访问也只能只能用变量形式[]
console.log(obj[a]); //'这是一个Symbol键'
```

这种特性不是Symbol特有的，数字类型也一样。这也说明了，想通过`.`来访问对象属性，这个属性的键的类型必须是字符串或者布尔类型:

```javascript
let a='Rbo';
let b=1;
let c=false;
let obj={
[a]:'字符串作为对象属性',
[b]:'数字作为对象属性',
[c]:'布尔值作为对象属性'
}
//访问键类型为字符串或布尔的属性，使用[]和.都可以
console.log(obj[a]==obj.Rbo); //true
console.log(obj[Rbo]==obj.Rbo); //Rbo is not defined,这里说明[]使用在对象上时就是个计算变量的东西

// 不过呢，布尔值作为键有点奇怪，请欣赏
console.log(obj[c]==obj[false]); //ture
console.log(obj[c]==obj.false); //ture
console.log(obj[false]==obj.false); //ture

//访问键值为字符串的属性，只能使用[]
console.log(obj.1); //Uncaught SyntaxError: Unexpected number
console.log(obj[b]); //'数字作为对象属性'

```

以上为题外话，感兴趣的读者可以自行去探究。



下面讨论Symbol作为键时的**不可遍历性**：

```javascript
let a = Symbol("Tian");
let obj = {
  name: "peng",
  [symbol]: "Rbo"
};
//补充一点js常识:for in遍历对象，for of遍历数组
for (const key in obj) {
  console.log(key); //name
}

for (const key of Object.keys(obj)) {
  console.log(key); //name
}
```

可以看到，Symbol作为键是不可以被遍历。

如果一定要访问Symbol作为键的属性，除了可以使用[变量名]来访问，还可以使用`Object.getOwnPropertySymbols` 获取对象的所有`Symbol`属性,`Object.getOwnPropertySymbols`返回的是数组:

```javascript
for (const key of Object.getOwnPropertySymbols(obj)) {
  console.log(key);
}
```

但是上面的方法只能遍历Symbol属性，其他类型作为键的属性不会被放到数组里被遍,所以此时需要使用反射Reflect的接口`Reflect.ownKeys(obj)`获取对象的所有属性包括`Symbol`

```javascript
for (const key of Reflect.ownKeys(obj)) {
  console.log(key);
}
```

基于Symbol作为键不可被遍历而且在用户不知道存储Symbol变量的名字的前提下，可以Symbol作为键的属性可以伪装成私有属性（不是真正意义上的私有属性）:

```javascript
// 创建一个姓田用户的类，不直接暴露用户的姓
let firstName=Symbol();
class User{
    constructor(name){
        this[firstName]='Tian';
        this.name=name
    }
    getName(){
        return `这是${this[firstName]}${this.name}`
    }
}
const user=new User('Rbo');
console.log(user.getName());//这是田Rbo
for (const key in user){
    console.log(key);//name
}
console.log(user.firstName); //undefined

```









