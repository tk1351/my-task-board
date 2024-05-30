import type { FC } from "react";
import DoneRound from "../../assets/Done_round.svg";
import TimeAttackDuotone from "../../assets/Time_atack_duotone.svg";
import CloseRingDuotone from "../../assets/close_ring_duotone.svg";
import {
	completedWrapper,
	inProgressWrapper,
	wontDoWrapper,
} from "./index.css.ts";

type Props = {
	status: string;
};

export const TaskStatusImage: FC<Props> = ({ status }) => {
	if (status === "completed")
		return (
			<div className={completedWrapper}>
				<img src={DoneRound} alt="" width={26} height={26} />
			</div>
		);
	if (status === "wontDo")
		return (
			<div className={wontDoWrapper}>
				<img src={CloseRingDuotone} alt="" width={26} height={26} />
			</div>
		);
	if (status === "inProgress")
		return (
			<div className={inProgressWrapper}>
				<img src={TimeAttackDuotone} alt="" width={26} height={26} />
			</div>
		);
	return null;
};
