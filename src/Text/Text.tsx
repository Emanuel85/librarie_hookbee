import { ButtonHTMLAttributes, FC, forwardRef } from 'react'
import { cn } from '../utils/utils';
import { cva, type VariantProps } from "class-variance-authority";


const textStyles = cva("text-slate-800", {
	variants: {
		enphasis: {
			low: "text-gray-600 font-light",
		},
		size: {
			sm: "text-sm",
			base: "text-base",
			lg: "text-lg",
			xl: "text-xl",
			'2xl': "text-2xl",
			'3xl': "text-3xl",
			'4xl': "text-4xl",
		},
		weight: {
			thin: "font-thin",
			normal: "font-normal",
			medium: "font-medium",
			bold: "font-bold",
			semibold: "font-semibold",
			black: "font-black",
		},
		align: {
			left: "text-left",
			center: "text-center",
			right: "text-right",
		},
		italic: {
			true: "italic"
		},
		underline: {
			true: "underline underline-offset-2"
		}
	},
	defaultVariants: {
		size: "base",
		weight: "normal",
		align: "left"
	}
})
interface TextProps extends ButtonHTMLAttributes<HTMLParagraphElement>, VariantProps<typeof textStyles> { }

export const Text: FC<TextProps> = forwardRef<HTMLParagraphElement, TextProps>(
	({ enphasis, size, weight, align, italic, underline, children, className, ...props }, ref) => {
		return (
			<p className={cn(textStyles({ enphasis, size, weight, align, italic, underline }), className)} {...props} ref={ref}>
				{children}
			</p>
		)
	}
)