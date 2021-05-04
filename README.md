# React Hooks详解 
### 什么是React Hooks？

1. Hooks 是 React 16.8 新增的特性，它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性；
2. 凡是 use 开头的 React API 都是 Hooks；

### 为什么要使用React Hooks？
1. 使用Hooks，降低对class 、生命周期 理解的难度，不用重复在多个生命周期中使用的相同逻辑；
2. 能将组件中相互关联的部分拆分成更小的函数（比如设置订阅或请求数据）；
3. 副作用的关注点分离：副作用指那些没有发生在数据向视图转换过程中的逻辑;
* ajax 请求
* 访问原生dom 元素
* 本地持久化缓存
* 绑定/解绑事件
* 添加订阅
* 设置定时器
* 记录日志等

以往这些副作用都是写在类组件生命周期函数中的。

### React Hooks 基本用法

规则

1. 只在最顶层使用 Hook，不要在循环，条件或嵌套函数中调用 Hook。

遵守这条规则，你就能确保 Hook 在每一次渲染中都按照同样的顺序被调用。这让 React 能够在多次的 useState 和 useEffect 调用之间保持 hook 状态的正确。

2. 只在 React 函数中调用 Hook，不要在普通的 JavaScript 函数中调用 Hook。

确保组件的状态逻辑在代码中清晰可见。

#### useState

> const [state, setState] = useState(initialState);

* useState，为当前的函数组件创建了一个状态，这个状态的值独立于函数存放。

* useState 会返回一个数组，在该数组中，得到该状态的值和更新该状态的方法。通过解构，该状态的值会赋值到当前 render 函数作用域下的一个常量 state 中。

* 当组件被创建而不是重用时，该状态将被赋予初始值 initialState，而之后的重用过程中，不会被重复赋予初始值。

* 通过调用 setState ，可以更新状态的值。

* state具有独立状态

state 作为函数中的一个常量，就是普通的数据，并不存在诸如数据绑定这样的操作来驱使 DOM 发生更新。

在调用 setState 后，React 将重新执行 render 函数，仅此而已。
state也是函数作用域下的普通变量。我们可以说每次函数执行拥有独立的状态。

请查看`UseStateDemo`示例demo。

场景： 点击 "Delay setState"，文本依然为 0，随后在 3 秒内连续点击 "setState" 两次，请问数据会如何变化？

一个异步回调函数的执行中，获取到 state最新的值，在setState中传入函数;

> setState(state => state + 1)

请查看`UseStateDemo`代码。

备注：在当前组件，每一次触发setState方法，会触发render函数使组件自身执行，也就是会使函数组件从上到下重新执行一遍所有代码。

惰性初始化 state

* initialState 参数只会在组件的初始化渲染中起作用，后续渲染时会被忽略
* 如果初始 state 需要通过复杂计算获得，则可以传入一个函数，在函数中计算并返回初始的 state，此函数只在初始渲染时被调用，后续更新状态重新渲染组件时，该函数就不会再被调用

```
function getInitState(){
    /*许多代码 很复杂 和耗费性能 */
    return {number:props.number};
}
const [state, setState] = useState(getInitState)
```


#### useRef

>const refContainer = useRef(initialValue);

* 如果要与 class 组件进行比较，useRef 的作用相对于让你在 class 组件的 this 上追加属性。

* 如果需要读取到 state 及其衍生的某个常量，相对于变量声明时所过去或未来的值，就需要使用 useRef，通过它来拥有一个在所有时间中共享的变量。

* 在组件的中，refContainer.current 将被赋予初始值 initialValue，之后便不再发生变化。但你可以自己去设置它的值。设置它的值不会重新触发 render 函数。

请查看`UseRefDemo`示例demo。

场景：state 初始值为 1，点击按钮后累加到 2，随后点击按钮，总是用当前 state 的值和前一个 state 的值进行累加，得到新的 state 的值，如何实现？

请查看`UseRefDemo`代码。

其他思路：为什么不在函数外面放一个常量保存上一次的值？

解答：每个组件的状态都应该独立且唯一，不然多个同一组件渲染情况下，该函数外常量状态会混乱互相影响。

#### useEffect

> useEffect( () => { // do something }, [] )

* useEffect执行的时机是完成所有的 DOM 变更并让浏览器渲染页面后;

* 如果 useEffect 没有传入第二个参数，那么第一个参数传入的 effect 函数在每次 render 函数执行是都是独立的。每个 effect 函数中捕获的 props 或 state 都来自于那一次的 render 函数。

* useEffect 的第二个参数是可选的，类型是一个数组

1. 空数组

useEffect只在第一次渲染时执行，由于空数组中没有值，始终没有改变，所以后续render不执行，相当于生命周期中的componentDidMount

2. 非空数组

无论数组中有几个元素，数组中只要有任意一项发生了改变，useEffect都会调用

请查看`UseEffectDemo`示例demo。

#### useMemo 

> const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);

* useMemo 的含义是，通过一些变量计算得到新的值。通过把这些变量加入依赖 deps，当 deps 中的值均未发生变化时，跳过这次计算。useMemo 中传入的函数，将在 render 函数调用过程被同步调用。

useMemo用处：
1. 可以使用 useMemo 缓存一些相对耗时的计算值；
2. useMemo 也非常适合用于存储引用类型的数据；
3. 可以传入对象字面量，匿名函数等；
4. 甚至是 React Elements。

```
const data = useMemo(() => ({
    a,
    b,
    c,
    d: 'xxx'
}), [a, b, c]);

// 可以用 useCallback 代替
const fn = useMemo(() => () => {
    // do something
}, [a, b]);

const memoComponentsA = useMemo(() => (
    <ComponentsA {...someProps} />
), [someProps]);

```

为了进一步优化性能，我们会对大组件进行拆分，拆分出的小组件只关心其中一部分属性，从而有更多的机会不去更新。

请查看`UseMemoDemo`示例demo。

#### useCallBack

```
const memoizedCallback = useCallback(
  () => {
    doSomething(a, b);
  },
  [a, b],
);
```

* 把内联回调函数及依赖项数组作为参数传入 useCallback，它将返回该回调函数的 memoized 版本，该回调函数仅在某个依赖项改变时才会更新。当你把回调函数传递给经过优化的并使用引用相等性去避免非必要渲染（例如 shouldComponentUpdate）的子组件时，它将非常有用。

* 未被useCallback包裹的方法将被垃圾回收并重新定义，但被useCallback所制造的闭包将保持对回调函数和依赖项的引用。

#### useCallback的正确使用方法

useCallback的设计初衷并非解决组件内部函数多次创建的问题，而是减少子组件的不必要重复渲染。实际上在 React 体系下，优化思路主要有两种：

1. 减少重新 render 的次数。因为 React 最耗费性能的就是调和过程（reconciliation），只要不 render 就不会触发 reconciliation。

2. 减少计算量

场景：Expensive是一个渲染成本非常高的组件，但点击Cheap组件也会导致Expensive重新渲染，即使dataB并未发生改变。原因就是onClickB被重新定义，导致 React 在 diff 新旧组件时，判定组件发生了变化,触发重新渲染。

请查看`UseEffectDemo`示例demo。

memo是 React v16.6.0 新增的方法，与 PureComponent 类似，前者负责 Function Component 的优化，后者负责 Class Component。它们都会对传入组件的新旧数据进行浅比较，如果相同则不会触发渲染。

所以useCallback保证了onClickB不发生变化，此时点击Cheap组件不会触发Expensive组件的刷新，只有点击Expensive组件才会触发。在实现减少不必要渲染的优化过程中，useCallback和memo是一对利器。

区别：
* useMemo将回调函数(nextCreate)的执行结果作为value保存
* useCallBack会保存回调函数作为value保存