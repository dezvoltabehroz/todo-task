import React, { useState } from 'react';
import { Button, Card, Form, Input } from "antd";
import { DeleteTwoTone, EditTwoTone } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask, updateTask } from "../redux/tasksSlice";

const TodoList = () => {
	const [form] = Form.useForm();
	const dispatch = useDispatch();
	const [isEdit, setIsEdit] = useState(false);
	const [taskName, setTaskName] = useState("");
	const [taskId, setTaskId] = useState("");

	const todos = useSelector((state) => {
		return state.tasks;
	});

	const removeTask = (id) => {
		dispatch(deleteTask({ id: id }))
	}

	const onFinish = async (obj) => {
		if (obj.task) {
			setIsEdit(false)
			dispatch(updateTask({ taskName: obj.task, taskId }));
			form.resetFields();
		} else {
			setIsEdit(false)
		}
	};

	return (
		<>
			{isEdit &&
				<Card style={{ marginTop: "5px" }}>
					<Form
						form={form}
						name="edit-todo-task"
						layout="inline"
						labelCol={{ span: 8, }}
						wrapperCol={{ span: 16, }}
						style={{ maxWidth: 600, }}
						initialValues={{ remember: true, }}
						onFinish={onFinish}
						autoComplete="off" >
						<Form.Item name="task">
							<Input placeholder={taskName} style={{ width: 200 }} />
						</Form.Item>

						<Form.Item wrapperCol={{ offset: 8, span: 16, }} >
							<Button type="primary" htmlType="submit" >
								{"Update"}
							</Button>
						</Form.Item>
						<Form.Item wrapperCol={{ offset: 8, span: 16, }} >
							<Button type="primary" htmlType="submit" danger>
								{"Cancel"}
							</Button>
						</Form.Item>
					</Form>
				</Card>
			}

			<div style={{ width: "100%", marginTop: "20px" }}>
				{todos && todos.map((todo, key) => {
					return (
						<Card key={key} style={{ marginTop: "20px", }} bordered={false} hoverable={true} >
							<div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", }} >
								<div>
									<h2 style={{ margin: 0, marginTop: "10px" }}>
										{todo.name}
									</h2>
								</div>
								<div style={{ display: "inline-block" }}>
									<DeleteTwoTone
										onClick={() => removeTask(todo.id)}
										style={{ fontSize: "25px", }}
									/>
									<EditTwoTone
										onClick={() => {
											setIsEdit(true)
											setTaskName(todo.name)
											setTaskId(todo.id)
										}}
										style={{ fontSize: "25px", }}
									/>
								</div>
							</div>
						</Card>
					);
				})}
			</div>
		</>
	);
};

export default TodoList;
