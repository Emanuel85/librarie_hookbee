import { ButtonHTMLAttributes, FC, forwardRef } from 'react'
import { cn } from '../../utils/utils';

export interface StackProps extends ButtonHTMLAttributes<HTMLDivElement> {
	col?: boolean;
	spacing?: number;
}

export const Stack: FC<StackProps> = forwardRef<HTMLDivElement, StackProps>(
	({ children, col, spacing, className, ...props }, ref) => {
		return (
			<div className={cn("flex gap-4 flex-wrap", col && 'flex-col', spacing && `gap-${spacing}`, className)} {...props} ref={ref}>
				{children}
			</div>
		)
	}
)