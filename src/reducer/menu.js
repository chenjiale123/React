/*
 * @Author: XuYang 
 * @Date: 2020-11-24 19:02:37 
 * @Last Modified by: XuYang
 * @Last Modified time: 2020-11-27 18:24:20
 * 菜单栏数据管理
 */
const initState = {
    menuData: [
        {
            key: 'home',
            title: '首页',
            icon: 'home'
          },
          {
            key: 'user',
            title: '用户管理',
            icon: 'user',
            child:[
              {
                key: 'user',
                title: '用户列表',
                icon: 'user',
              }
            ]
          },
          {
            key: 'tag',
            title: '标签管理',
            icon: 'tags'
          },
          {
            key: 'logs',
            title: '操作日志',
            icon: 'logs'
          }
    ],
    selectKey: '1'
}

export default function menu(state= initState, action){
    switch(action.type){
        default:
            return state;
    }
}