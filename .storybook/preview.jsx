import "../src/app/globals.css";

const preview = {
  parameters: {
    layout: "centered",

    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    backgrounds: {
      default: "Light",
      values: [
        {
          name: "Light",
          value: "#F8FAFC",
        },
        {
          name: "Dark",
          value: "#0F172A",
        },
      ],
    },
  },
};

export default preview;