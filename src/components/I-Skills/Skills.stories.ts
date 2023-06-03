import type { Meta, StoryObj } from "@storybook/react";
import { Skills } from "./Skills";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Example/Forms",
  component: Skills,
  tags: ["autodocs"],
  args: {
    initialValues: {
      knowProgramming: "JavaScript",
      experience: "Three-SixMonths",
      disability: "none",
    },
  },
} satisfies Meta<typeof Skills>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Form7: Story = {};
