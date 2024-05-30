import { useQuery } from "@tanstack/react-query";
import { getIcons, getStatus, getTasks } from "./api.ts";

export const useTasksQuery = () =>
	useQuery({
		queryKey: ["tasks"],
		queryFn: async () => await getTasks(),
	});

export const useTaskOptionsQuery = () => {
	const { data: icons } = useQuery({
		queryKey: ["icons"],
		queryFn: async () => await getIcons(),
	});

	const { data: status } = useQuery({
		queryKey: ["status"],
		queryFn: async () => await getStatus(),
	});

	return { icons, status };
};
