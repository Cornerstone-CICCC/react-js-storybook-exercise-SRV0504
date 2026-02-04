import type { Meta, StoryObj } from "@storybook/react";
import CustomToast from "./CustomToast";

const meta: Meta<typeof CustomToast> = {
  title: "Components/CustomToast",
  component: CustomToast,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    status: {
      control: { type: "radio" },
      options: ["success", "warning", "error"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof CustomToast>;

export const Success: Story = {
  args: {
    status: "success",
    text: "Success! Your changes were saved.",
    hasIcon: true,
  },
};

export const Warning: Story = {
  args: {
    status: "warning",
    text: "Warning: Please double-check the form fields.",
    hasIcon: true,
  },
};

export const Error: Story = {
  args: {
    status: "error",
    text: "Error: Something went wrong. Try again.",
    hasIcon: true,
  },
};
