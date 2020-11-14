import React from "react";
import { Input } from "theme-ui";

export default {
  title: "theme/Input",
  parameters: {
    component: Input,
    componentSubtitle: "Input component from Theme UI",
  },
};

export const usage = () => <Input />;

export const placeholder = () => <Input placeholder="placeholder" />;
