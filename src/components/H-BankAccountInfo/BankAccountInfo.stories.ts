import type { Meta, StoryObj } from "@storybook/react";
import { BankAccountInfo } from "./BankAccountInfo";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Example/Forms",
  component: BankAccountInfo,
  tags: ["autodocs"],
  args: {
    initialValues: {
      accountNumber: "123456689",
      clabe: "12345668944",
      bank: "BBVA",
    },
  },
} satisfies Meta<typeof BankAccountInfo>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Form6: Story = {};
