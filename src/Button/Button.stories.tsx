// Replace your-framework with the framework you are using, e.g. react-vite, nextjs, nextjs-vite, etc.
import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
	title: 'Components/Button',
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
	},
	argTypes: {
		children: {
			description: 'La Descripcion del button',
			control: { type: 'text' },
		},
		variant: {
			type: 'string',
			options: ['default', 'primary', 'success', 'warning', 'danger', 'ghost'],
			description: 'Son las variantes de color',
			control: { type: 'select' },
		},
		outline: {
			type: 'boolean',
			description: 'habilita el outline',
			control: { type: 'boolean' },
		},
		rounded:{
			type: 'string',
			options: ['basic', 'sm', 'md', 'lg', 'full'],
			description: 'Define el borde redondeado',
			control: { type: 'select' },
		},
			size:{
			type: 'string',
			options: ['basic', 'sm', 'md', 'lg', 'full'],
			description: 'Define el tamaño del button',
			control: { type: 'select' },
		}
	},
	component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
	args: {
		children: 'Button',
		variant: 'default',
		outline: false,
		rounded: 'md',
		size: 'md'
	},
};