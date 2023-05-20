import type { Meta, StoryObj } from "@storybook/react";
import { AddressInformation } from "./AddressInformation";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Example/Forms",
  component: AddressInformation,
  tags: ["autodocs"],
  args: {
    initialValues: {
      streetA: "Privada Clara",
      streetB: "Maria Tierra",
      colony: "Californias",
      addressCity: "Tijuana",
      addressState: "Baja California",
      postalCode: 92117,
    },
  },
} satisfies Meta<typeof AddressInformation>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Form2: Story = {};
