import type { Meta, StoryObj } from "@storybook/react";
import { AddressExtraInfo } from "./AddressExtraInfo";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Example/Forms",
  component: AddressExtraInfo,
  tags: ["autodocs"],
  args: {
    initialValues: {
      TypeOfResidency: "rented",
      OtherTypeOfResidency: "",
      AmountOfPeople: "Parents",
    },
  },
} satisfies Meta<typeof AddressExtraInfo>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Form3: Story = {};
