import "./styles.css";
import JoinUs from "./Components/JoinUs";
import Settings from "./Components/Settings";
import ContactUs from "./Components/ContactUs";
import Login from "./Components/Login";
import Search from "./Components/Search";
import Help from "./Components/Help";
import Home from "./Components/Home";
import Download from "./Components/Download";
export default function App() {
  return (
    <>
      <div className="main">
        <JoinUs />
        <Settings />
        <Login />
        <ContactUs />
        <Search />
        <Help />
        <Home />
        <Download />
      </div>
    </>
  );
}
