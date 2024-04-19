# TypeScript技巧

这个文档介绍一些我知道的TypeScript技巧

## 类型取反

结合泛型和never类型可以对变量类型进行取反约束,比如我们想要约束函数参数类型为除了string之外的类型都可以：

```typescript
fuction m<T>(x:T extends string?never:T){
    
}
m('Tian') //报错
m({}) //通过类型检验
m(1) //通过检验
m(()=>{}) //通过检验

```



