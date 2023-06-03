import type { Meta, StoryObj } from "@storybook/react";
import { PersonalInformation } from "./PersonalInformation";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Example/Forms",
  component: PersonalInformation,
  tags: ["autodocs"],
  args: {
    initialValues: {
      name: "Alexis",
      paternalLastName: "Guevara",
      maternalLastName: "Aramburo",
      gender: "male",
      otherGender: "",
      dateOfBirth: null,
      placeOfBirth: "Tijuana",
      birthCity: "Tijuana",
      birthState: "BC",
      birthCountry: "Mexico",
    },
  },
} satisfies Meta<typeof PersonalInformation>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Form1: Story = {};
