export const getTasks = async () => {
	const data = await fetch("http://localhost:8080/task");
	return data.json();
};
