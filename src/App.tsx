import { useDispatch } from "react-redux";

import "./style.css";

import Dashboard from "./pages/Dashboard/dashboard";

export default function App() {
  return (
    <div className="root">
      <Dashboard />
    </div>
  );
}
