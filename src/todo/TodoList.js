import React from 'react';
import { Card } from "antd";
import { DeleteTwoTone } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../redux/tasksSlice";

const TodoList = () => {
	const todos = useSelector((state) => {
		return state.tasks;
	});

	const dispatch = useDispatch();

	const removeTask = (id) => {
		dispatch(deleteTask({ id: id }))
	}

	return (
		<>
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
								<div>
									<DeleteTwoTone
										onClick={() => removeTask(todo.id)}
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
