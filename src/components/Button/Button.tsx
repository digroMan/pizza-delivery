import styles from './Button.module.css';
import type { ButtonProps } from './Button.props';
import cn from 'classnames';

function Button({children, className, size, ...props} : ButtonProps) {
	return (
		<button className={cn(
			styles['button'], 
			styles['accent'], 
			size === 'small' && styles['small'],
			size === 'medium' && styles['medium'],
			className
		)} {...props}>{children}</button>
	);
};

export default Button;