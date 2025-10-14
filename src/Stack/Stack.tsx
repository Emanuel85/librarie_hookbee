import { ButtonHTMLAttributes, FC, forwardRef } from 'react'
import { cn } from '../utils/utils';

interface StackProps extends ButtonHTMLAttributes<HTMLDivElement> {
	col?: boolean;
	spacing?: number;
}

export const Stack: FC<StackProps> = forwardRef<HTMLDivElement, StackProps>(
	({ children, col, spacing, className, ...props }) => {
		return (
			<div className={cn("flex gap-4 flex-wrap", col && 'flex-col', spacing && `gap-${spacing}`, className)} {...props}>
				{children}
			</div>
		)
	}
)