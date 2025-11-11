import { HTMLAttributes, FC, forwardRef } from "react";
import { cn } from '../../utils/utils';
import { cva, type VariantProps } from "class-variance-authority";


const card = cva(`flex items-center w-[75vw] max-w-[650px] py-[44px] pr-[30px] pl-[20px] rounded-2xl max-[600px]:mx-[30px] max-[600px]:my-0 max-[600px]:pt-[0px]  max-[600px]:pl-[30px] max-[600px]:pr-[30px] max-[600px]:pb-[60px] max-[600px]:w-[380px] max-[600px]:text-center max-[600px]:flex-col`, {
	variants: {
	}
})

export interface CardProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof card> {
	backgroundCard?: string; // Si necesitas colores personalizados
}


export const CardRoot: FC<CardProps> = forwardRef<HTMLDivElement, CardProps>(
	({ children, backgroundCard, className, ...props }, ref) => {
		return (
			<div className={cn(card({ className }))} style={backgroundCard ? { backgroundColor: backgroundCard } : undefined} {...props} ref={ref}>
				{children}
			</div>
		)
	}

)

//CardImage
interface CardImageProps extends HTMLAttributes<HTMLDivElement> {
	src?: string;
	alt?: string;
	title?: string;
}

const CardImage: FC<CardImageProps> = forwardRef<HTMLImageElement, CardImageProps>(
	({ src, alt, title, className, ...props }, ref) => {
		return (
			<img
				src={src}
				alt={alt}
				title={title}
				className={cn(
					"max-w-[280px] h-80 ml-[-60px] mr-[30px] rounded-[inherit] transition-[border-radius] duration-300",
					"max-[600px]:mt-[-100px] max-[600px]:mb-[30px] max-[600px]:mx-[0px] max-[600px]:w-[100%] max-[600px]:max-w-[1000px] max-[600px]:h-[250px]",
					"max-[440px]:h-[300px] max-[440px]:rounded-[100%] max-[440px]:border-[12px] max-[440px]:border-[#323330]",
					className
				)}
				{...props}
				ref={ref}
			/>
		)
	}
)

//CardTitle
const CardTitle: FC<HTMLAttributes<HTMLHeadingElement>> = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
	({ children, className, ...props }, ref) => {
		return (
			<h2
				ref={ref}
				className={cn(
					"text-2xl font-normal mt-[0px] mr-[30px] mb-[10px] text-[#DE942B] max-[600px]:mr-0",
					className
				)}
				{...props}
			>
				{children}
			</h2>
		)
	}
)

// CardSubtitle
const CardSubtitle: FC<HTMLAttributes<HTMLHeadingElement>> = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
	({ children, className, ...props }, ref) => {
		return (
			<h3
				ref={ref}
				className={cn("text-sm font-normal mb-6 text-[#FFFFFF]", className)}
				{...props}
			>
				{children}
			</h3>
		)
	}
)

// CardDescription
const CardDescription: FC<HTMLAttributes<HTMLParagraphElement>> = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
	({ children, className, ...props }, ref) => {
		return (
			<p
				ref={ref}
				className={cn("text-xs font-normal mb-7 opacity-75 text-[#FFFFFF]", className)}
				{...props}
			>
				{children}
			</p>
		)
	}
)

// CardIconList
interface CardIconListProps extends HTMLAttributes<HTMLDivElement> {
	icons: string[];
}

const CardIconList: FC<CardIconListProps> = forwardRef<HTMLDivElement, CardIconListProps>(
	({ icons, className, ...props }, ref) => {
		return (
			<div ref={ref} className={cn("max-[600px]:justify-center flex gap-4", className)} {...props}>
				{icons.map((icon, index) => (
					<button
						key={index}
						className="relative z-[1] bg-[#3f3a3a] text-[#DE942B] grid place-items-center text-3xl w-[50px] h-[50px] rounded-[40px] cursor-pointer border-2 border-solid border-transparent hover:border-[#DE942B] transition-[border-color] duration-300 before:content-[''] before:absolute before:z-0 before:top-1/2 before:left-1/2 before:w-[52px] before:h-[52px] before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-[50%] before:transition-[0.3s] before:scale-0"
					>
						<i className={icon}></i>
					</button>
				))}
			</div>
		)
	}
)


interface CardComponent extends FC<CardProps> {
	Image: typeof CardImage;
	Title: typeof CardTitle;
	Subtitle: typeof CardSubtitle;
	Description: typeof CardDescription;
	IconList: typeof CardIconList;
}
export const Card = CardRoot as CardComponent;
Card.Image = CardImage;
Card.Title = CardTitle;
Card.Subtitle = CardSubtitle;
Card.Description = CardDescription;
Card.IconList = CardIconList;