import type { Meta, StoryObj } from "@storybook/react";
import { Page } from "./index";

const meta = {
  title: "Workshop/Chapter-1/_Page",
  component: Page,
  tags: ["autodocs"],
} satisfies Meta<typeof Page>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
};
