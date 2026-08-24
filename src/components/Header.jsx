import "./Header.css";

// TODO: change the availability line to whatever's true for you
// (or pass a different `text` prop from App.jsx).
export default function Header({
  text = "Salt Lake City, UT",
}) {
  return (
    <div className="status mono">
      <span className="status-dot" />
      <span>{text}</span>
    </div>
  );
}
