import "./globals.css";

export const metadata = {
  title: "Storybook Design System",
  description: "Component Driven Development",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}