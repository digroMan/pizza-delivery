import styles from './Input.module.css';
import type { InputProps } from './Input.props';
import cn from 'classnames';

function Input({
	children, 
	className, 
	placeholder, 
	onChange, 
	type, 
	value, 
	name,
	...props
} : InputProps) {
	return (
		<input 
			className={cn(
				styles['input'], 
				className
			)} 
			type={type}
			name={name}
			placeholder={placeholder}
			onChange={onChange}
			value={value}
			{...props}>{children}</input>
	);
};

export default Input;