import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './index';

const meta = {
  title: 'Workshop/Chapter-1/Button',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Primary: Story = {
  args: {
    label: 'Button',
  },
};
