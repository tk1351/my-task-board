import type { Icon } from "./icon.ts";
import type { Status } from "./status.ts";

export type Task = {
	id: number;
	publicId: string;
	name: string;
	description: string | null;
	createdAt: string;
	updatedAt: string;
	iconId: string;
	statusId: string;
	icon: Icon;
	status: Status;
};
