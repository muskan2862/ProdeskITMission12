export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
      }}
    >
      <div className="card">
        <h1>🚀 Storybook Design System</h1>

        <p
          style={{
            marginTop: 15,
            color: "#6B7280",
          }}
        >
          This project contains reusable UI components built with Storybook.
        </p>
      </div>
    </main>
  );
}