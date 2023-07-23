import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { Button, Form, Input, Alert, Card } from 'antd';
import { useNavigate } from "react-router-dom";
import { loginUser } from "../redux/authSlice";

const LoginScreen = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const [alertMessage, setAlertMessage] = useState("");
    const [visible, setVisible] = useState(false);

    const handleClose = () => {
        setVisible(false);
        setAlertMessage("");
    };

    const onFinish = async (userObj) => {
        if (userObj.username === "admin" && userObj.password === "admin") {
            userObj.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiYWRtaW4ifQ.cR6tsDf8ghNacoNrc7SM_AtSHYR9wGAMbUp1sR9RtpA"
            dispatch(loginUser(userObj))
            form.resetFields();
            navigate("/todo");
        } else {
            setVisible(true)
            setAlertMessage("Username and Password mismatch")
        }
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div>
            <Card
                title="Login" bordered={false}
                style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}>

                {visible && alertMessage && (
                    <Alert
                        style={{ marginBottom: "10px" }}
                        closable
                        message={alertMessage}
                        afterClose={handleClose}
                        type="success"
                        showIcon
                    />
                )}

                <Form
                    form={form}
                    labelCol={{ span: 8, }}
                    wrapperCol={{ span: 16, }}
                    style={{ maxWidth: 600, }}
                    initialValues={{ remember: true, }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off" >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!', },]} >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!', },]} >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16, }} >
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>

            </Card>
        </div>
    )
}

export default LoginScreen;