/*
 * @Author: your name
 * @Date: 2021-05-03 09:16:57
 * @LastEditTime: 2021-05-03 21:00:57
 * @LastEditors: Please set LastEditors
 * @Description: 路由配置文件
 * @FilePath: /1. React Hooks及组件开发思想/my-app/src/routeConfig.js
 */
import { lazy } from 'react';
const Home = lazy(() => import('./Home'));
const WhyNeedCom = lazy(() => import('./demo/whyNeedCom'));
const UseStateDemo = lazy(() => import('./demo/useState/index.jsx'));
const UseEffectDemo = lazy(() => import('./demo/useEffect/index.jsx'));
const UseCallBackDemo = lazy(() => import('./demo/useCallBack/index.jsx'));
const UseMemoDemo = lazy(() => import('./demo/useMemo/index.jsx'));
const UseRefDemo = lazy(() => import('./demo/useRef/index.jsx'));
const CustomHookDemo = lazy(() => import('./demo/customHook/index.jsx'));

export const routeConfig = [
    {
        name: 'Home',
        path: '/',
        component: Home,
    },
    {
        name: 'WhyNeedCom',
        path: '/WhyNeedCom',
        component: WhyNeedCom,
    },
    {
        name: 'UseStateDemo',
        path: '/UseStateDemo',
        component: UseStateDemo,
    },
    {
        name: 'UseRefDemo',
        path: '/UseRefDemo',
        component: UseRefDemo,
    },
    {
        name: 'UseEffectDemo',
        path: '/UseEffectDemo',
        component: UseEffectDemo,
    },
    {
        name: 'UseCallBackDemo',
        path: '/UseCallBackDemo',
        component: UseCallBackDemo,
    },
    {
        name: 'UseMemoDemo',
        path: '/UseMemoDemo',
        component: UseMemoDemo,
    },
    {
        name: 'CustomHookDemo',
        path: '/CustomHookDemo',
        component: CustomHookDemo,
    },
]
