import type { Meta, StoryObj } from "@storybook/react";
import { GobernamentalInfo } from "./GobernamentalInfo";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Example/Forms",
  component: GobernamentalInfo,
  tags: ["autodocs"],
  args: {
    birthCountry: "Mexico",
    initialValues: {
      identification: "GUAA970101010101",
    },
  },
} satisfies Meta<typeof GobernamentalInfo>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Form4: Story = {};
