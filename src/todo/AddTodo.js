import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { Button, Card, Form, Input, Alert } from "antd";
import { addTask } from "../redux/tasksSlice";

const AddTodo = () => {
	const [form] = Form.useForm();
	const dispatch = useDispatch();
	const [alertMessage, setAlertMessage] = useState("");
	const [visible, setVisible] = useState(false);

	const handleClose = () => {
		setVisible(false);
		setAlertMessage("");
	};

	const onFinish = async (obj) => {
		if (obj.task) {
			handleClose()
			dispatch(addTask({ task: obj.task }));
			form.resetFields();
		} else {
			setVisible(true)
			setAlertMessage("Input field is empty")
		}
	};

	return (
		<div>
			<Card
				title="Todo Task" bordered={false}
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
					name="todo-task"
					layout="inline"
					labelCol={{ span: 8, }}
					wrapperCol={{ span: 16, }}
					style={{ maxWidth: 600, }}
					initialValues={{ remember: true, }}
					onFinish={onFinish}
					autoComplete="off" >
					<Form.Item name="task">
						<Input placeholder="Add Task" style={{ width: 200 }} />
					</Form.Item>

					<Form.Item wrapperCol={{ offset: 8, span: 16, }} >
						<Button type="primary" htmlType="submit" >
							{"Save"}
						</Button>
					</Form.Item>
				</Form>
			</Card>
		</div>
	);
};

export default AddTodo;
