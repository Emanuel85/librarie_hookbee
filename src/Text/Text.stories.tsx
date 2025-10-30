import type { Meta, StoryObj } from '@storybook/react'
import { Text } from './Text';

const meta: Meta<typeof Text> = {
    title: 'Components/Text',
    component: Text,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        children: {
            description: 'Es la descripcion del texto',
            control: { type: 'text' },
        },
        size: {
            type: 'string',
            options: ['sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl'],
            description: 'Define el tamaño del texto',
            control: { type: 'select' },
        },
        weight: {
            type: 'string',
            options: ['thin', 'normal', 'medium', 'bold', 'semibold', 'black'],
            description: 'Define el grosor del texto',
            control: { type: 'select' },
        },
        align: {
            type: 'string',
            options: ['left', 'center', 'right'],
            description: 'Define la alineación del texto',
            control: { type: 'select' },
        },
        italic: {
            type: 'boolean',
            description: 'Define si el texto es cursiva',
            control: { type: 'boolean' },
        },
        underline: {
            type: 'boolean',
            description: 'Define si el texto tiene subrayado',
            control: { type: 'boolean' },
        }
    },
}
export default meta;
type Story = StoryObj<typeof Text>;
export const Default: Story = {
    args: {
        as: 'p',
        size: 'base',
        weight: 'normal',
        align: 'center',
        italic: false,
        underline: false,
        children: 'This is a sample text component from the Hookbee library.',
    }
};