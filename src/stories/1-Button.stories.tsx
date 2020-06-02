import React from "react";
import { Button, ButtonProps } from "./Button";

export default {
  title: "Button",
  component: Button,
};

// BEFORE:
// export const Text = () => <Button label="Hello Button" />;

export const Text = (args: ButtonProps) => <Button {...args} />;
Text.args = { label: "Hello Button" };