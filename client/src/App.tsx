import {
	addTaskButton,
	container,
	mainWrapper,
	titleDescription,
	titleWrapper,
} from "./App.css.ts";
import EditDuotone from "./assets/Edit_duotone.svg";
import Logo from "./assets/Logo.svg";
import { NewTaskFormDialog } from "./components/NewTaskFormDialog";
import { TaskList } from "./components/TaskList";
import { useTaskOptionsQuery, useTasksQuery } from "./features/query.ts";
import {
	lightTypography,
	regularTypography,
	semiboldButtonTypography,
	themeClass,
} from "./theme.css.ts";
import {useDialog} from "./hooks/useDialog.tsx";

function App() {
	const { data: tasks, isLoading: isTaskLoading } = useTasksQuery();

	const { icons, status } = useTaskOptionsQuery();

	const {dialogRef, showModal, closeModal} = useDialog()

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
				{isTaskLoading && <div>Loading...</div>}
				{tasks && <TaskList tasks={tasks} />}
				<button
					className={`${addTaskButton} ${semiboldButtonTypography}`}
					type="button"
					onClick={showModal}
				>
					Add new task
				</button>
				{icons && status && (
					<NewTaskFormDialog
						dialogRef={dialogRef}
						onClickCloseButton={closeModal}
						status={status}
						icons={icons}
					/>
				)}
			</main>
		</div>
	);
}

export default App;
