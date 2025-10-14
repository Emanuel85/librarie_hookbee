import type { Meta, StoryObj } from '@storybook/react';
import { Stack } from './Stack';
import { ComponentProps } from 'react';


interface ExampleBoxProps extends ComponentProps<typeof Stack> {
  childrenQuantyity?: number;
}

const meta: Meta<ExampleBoxProps> = {
  title: 'Components/Stack',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    spacing: {
      type: 'number',
    },
    childrenQuantyity: { control: 'number' }
  },
  component: Stack,
};

export default meta;
type Story = StoryObj<ExampleBoxProps>;

const ExampleBox: Story = {
  render: ({ childrenQuantyity, ...props }) => (
    <Stack {...props}>
      {[...Array(childrenQuantyity).keys()].map(n => (
        <div className="h-32 w-32 bg-blue-500 flex items-center justify-center text-2xl font-bold" >{n + 1}</div>
      ))}
    </Stack>)
}

export const Default: Story = {
  ...ExampleBox,
  args: {
    childrenQuantyity: 2,
    col: false,
    spacing: 4,
  },
};