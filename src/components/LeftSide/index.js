/*
 * @Author: XuYang 
 * @Date: 2020-11-24 10:43:47 
 * @Last Modified by: XuYang
 * @Last Modified time: 2020-11-24 19:03:34
 * 左侧菜单
 */
import React from 'react'
import { Menu, Layout } from 'antd';
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import {
    HomeOutlined,
    UserOutlined,
    FileDoneOutlined,
    TagsOutlined,
    OrderedListOutlined
} from '@ant-design/icons'

const { Sider } = Layout;
const { SubMenu } = Menu;
const LeftSide = () => {
    const history = useHistory();
    const menuData = useSelector(state => state.menu.menuData)
    /**
     * 菜单选择
     */
    const menuChange = (item) => {
        history.push(`/index/${item.key}`)
    }


    const getIcon = (key) => {
        switch (key) {
            case 'home':
                return <HomeOutlined></HomeOutlined>
            case 'user':
                return <UserOutlined />
            case 'file':
                return <FileDoneOutlined />
            case 'tags':
                return <TagsOutlined />;
            case 'logs':
                return <OrderedListOutlined />
            default:
                return <TagsOutlined />
        }
    }


    const getMenuNodes = (menuList) => {
        return menuList.map(item => {

            if (!item.child) {
                return (
                    <Menu.Item key={item.key}>{getIcon(item.key)}{item.title}</Menu.Item>
                )
            } else {
                return (


                    <SubMenu key={item.key} icon={getIcon(item.key)} title={item.title}>
                        {getMenuNodes(item.child)}

                    </SubMenu>
                )
            }

        })
    }

return (
    <Sider>
        <Menu theme='light' onClick={menuChange}>
            {
                getMenuNodes(menuData)
            }
        </Menu>
    </Sider>
)
}
export default LeftSide;