import Button from "../components/Button/Button";

export default {
  title: "Components/Button",
  component: Button,
};

export const Primary = {
  args: {
    label: "Primary Button",
    variant: "primary",
  },
};

export const Secondary = {
  args: {
    label: "Secondary Button",
    variant: "secondary",
  },
};

export const Disabled = {
  args: {
    label: "Disabled",
    disabled: true,
  },
};