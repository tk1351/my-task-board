import type { Icon } from "../types/icon.ts";
import type { Status } from "../types/status.ts";
import type { CreateTaskFormData, Task } from "../types/task.ts";

export const getTasks = async () => {
	const data = await fetch(`${import.meta.env.VITE_API_URL}/task`);
	return (await data.json()) as Task[];
};

export const getIcons = async () => {
	const data = await fetch(`${import.meta.env.VITE_API_URL}/icon`);
	return (await data.json()) as Icon[];
};

export const getStatus = async () => {
	const data = await fetch(`${import.meta.env.VITE_API_URL}/status`);
	return (await data.json()) as Status[];
};

export const createTask = async (data: CreateTaskFormData) => {
	return await fetch(`http://localhost:8080/task`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	});
};
