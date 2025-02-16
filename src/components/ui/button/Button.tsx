import {IButton} from "../../../types/ButtonTypes.ts";
import {FC} from "react";
import styles from "./Button.module.scss";

const Button: FC<IButton> = ({plusMinus, ...props}) => {
	return (
		<button {...props} className={`${styles.modalButton} ${props.className} ${plusMinus && styles.cardCounter}`}>
			{props.children}
		</button>
	);
};

export default Button;