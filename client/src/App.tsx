import { useEffect, useState } from "react";
import {
	container,
	mainWrapper,
	titleDescription,
	titleWrapper,
} from "./App.css.ts";
import EditDuotone from "./assets/Edit_duotone.svg";
import Logo from "./assets/Logo.svg";
import { TaskList } from "./components/TaskList";
import { getTasks } from "./features/api.ts";
import { lightTypography, regularTypography, themeClass } from "./theme.css.ts";
import type { Task } from "./types/task.ts";

function App() {
	const [tasks, setTasks] = useState<Task[] | null>(null);
	useEffect(() => {
		(async () => {
			const response = await getTasks();
			setTasks(response);
		})();
	}, []);
	return (
		<div className={container}>
			<main className={mainWrapper}>
				<div className={titleWrapper}>
					<img src={Logo} alt="" height={46} width={46} />
					<h1 className={`${themeClass} ${regularTypography}`}>
						My Task Board
					</h1>
					<img src={EditDuotone} alt="" height={26} width={26} />
				</div>
				<p className={`${themeClass} ${lightTypography} ${titleDescription}`}>
					Tasks to keep organised
				</p>
				{!tasks && <div>No Task</div>}
				{tasks && <TaskList tasks={tasks} />}
			</main>
		</div>
	);
}

export default App;
