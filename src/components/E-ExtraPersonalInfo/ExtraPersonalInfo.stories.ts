import type { Meta, StoryObj } from "@storybook/react";
import { ExtraPersonalInfo } from "./ExtraPersonalInfo";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Example/Forms",
  component: ExtraPersonalInfo,
  tags: ["autodocs"],
  args: {
    initialValues: {
      phone: 6641234567,
      email: "test1@test.com",
      altEmail: "test2@test.com",
      foundUs: "recommendation",
      otherFoundUs: "",
      comment: "Create something",

      degree: "university",
      noFormalEducation: "",
      otherDegree: "",

      universityName: "ITT",
      universityCity: "Tijuana",
      universityState: "B.C.",
      universityCountry: "Mexico",
      nameDegree: "ISC",
      finishClass: "yes",
      haveDegree: "yes",
      license: "yes",
      scholarship: "yes",

      scholarshipLevel: "Highschool",
      scholarshipKind: "Academics",
      duration: 1,
    },
  },
} satisfies Meta<typeof ExtraPersonalInfo>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Form5: Story = {};
