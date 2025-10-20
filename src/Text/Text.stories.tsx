import type { Meta, StoryObj } from '@storybook/react'
import { Text } from './Text';

const meta: Meta<typeof Text> = {
    title: 'Components/Text',
    component: Text,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
}
export default meta;
type Story = StoryObj<typeof Text>;
export const Default: Story = {
    args: {
        children: 'This is a sample text component from the Hookbee library.',
    }
};