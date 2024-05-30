import type { Icon } from "../types/icon.ts";
import type { Status } from "../types/status.ts";
import type { Task } from "../types/task.ts";

export const getTasks = async () => {
	const data = await fetch("http://localhost:8080/task");
	return (await data.json()) as Task[];
};

export const getIcons = async () => {
	const data = await fetch("http://localhost:8080/icon");
	return (await data.json()) as Icon[];
};

export const getStatus = async () => {
	const data = await fetch("http://localhost:8080/status");
	return (await data.json()) as Status[];
};
