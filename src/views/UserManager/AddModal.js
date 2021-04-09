/*
 * @Author: XuYang 
 * @Date: 2020-11-23 14:25:07 
 * @Last Modified by: XuYang
 * @Last Modified time: 2020-11-24 19:09:00
 * 添加/ 修改用户
 */
import React from 'react'
import PropTypes from 'prop-types'

import { Form, Input, Select, Radio, Modal} from 'antd'

const RadioGroup = Radio.Group;
const Option = Select.Option;
const FormItem = Form.Item;
const AddModal = (props) => {
    const [form] = Form.useForm();
    const { currentRecord, isAdd, roles,handleOk, isVisible, handleCancel, loading } = props;
    /**
     * 表单布局
     */
    const formItemLayout = {
        labelCol: {
            xs: { span: 24 },
            sm: { span: 6 }
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 18 }
        }
    };
    /**
     * 获取角色列
     */
    const getRoleOption = () => {
        const ops = [];
        for(let i in roles){
            ops.push(
                <Option key={i} value={i}>{roles[i]}</Option>
            )
        }
        return ops;
    }
    /**
     * 确认按钮
     */
    const onOk = () => {
        form.validateFields().then((values) => {
            handleOk(values);
        }).catch((err)=>{
            console.log(err);
        })
    }
    return (
        <Modal
            title={isAdd ? '新增用户' : '修改用户'}
            visible={isVisible}
            onOk={onOk}
            onCancel={handleCancel}
            okText='确定'
            cancelText='取消'
            confirmLoading={loading}
        >
            <Form form={form}>
                <FormItem
                    {...formItemLayout}
                    label='用户名：'
                    name='username'
                    rules={
                        [
                            {
                                required: true, message: '用户名不可为空'
                            }
                        ]
                    }
                    initialValue={isAdd ? null : currentRecord.username }
                >
                    <Input placeholder='请输入用户名' disabled={ !isAdd }/>
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label='昵称：'
                    name='nickname'
                    initialValue={isAdd ? null : currentRecord.nickname }
                >
                    <Input placeholder='请输入昵称' />
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label='姓名：'
                    name='realName'
                    rules={
                        [
                            {
                                required: true, message: '姓名不可为空'
                            }
                        ]
                    }
                    initialValue={isAdd ? null : currentRecord.realName }
                >
                    <Input placeholder='请输入真实姓名' />
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label='性别：'
                    name='sex'
                    rules={
                        [
                            {
                                required: true, message: '性别不可为空'
                            }
                        ]
                    }
                    initialValue={isAdd ? null : currentRecord.sex }
                >
                
                    <RadioGroup name='sex'>
                        <Radio value={'0'}>女</Radio>
                        <Radio value={'1'}>男</Radio>
                        <Radio value={'2'}>未知</Radio>
                    </RadioGroup>
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label='手机：'
                    name='phone'
                    rules={
                        [
                            {
                                required: true, message: '手机不可为空'
                            },
                            {
                                validator(rule, value) {
                                    var reg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
                                    if(reg.test(value)){
                                        return Promise.resolve();
                                    }
                                    return Promise.reject('手机号码格式不正确!');
                                }
                            }
                        ]
                    }
                    initialValue={isAdd ? null : currentRecord.phone }
                >
                
                    <Input placeholder='请输入手机号码' />
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label='角色：'
                    name='role'
                    rules={
                        [
                            {
                                required: true, message: '角色不可为空'
                            }
                        ]
                    }
                    initialValue={isAdd ? null : currentRecord.role }
                >
                    <Select placeholder='角色'>
                        {
                            getRoleOption()
                        }
                    </Select>
                </FormItem>
           </Form>
        </Modal>
    )
}
AddModal.propTypes = {
    currentRecord: PropTypes.object.isRequired,     // 当前选中项
    isAdd: PropTypes.bool.isRequired,               // 是否是新增
    roles: PropTypes.object.isRequired,             // 角色键值对象
    isVisible: PropTypes.bool.isRequired,           // 是否显示
    handleOk: PropTypes.func.isRequired,            // 确认按钮
    handleCancel: PropTypes.func.isRequired         // 取消按钮
}
export default AddModal;