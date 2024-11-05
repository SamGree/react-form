import css from "./App.module.css";
// import NavBarSimple from "./components/NavBarSimple";
import Sidebar from "./components/Sidebar";
import NavBarForm from "./components/NavBarForm";
import Content from "./components/Content";
import ControlledForm from "./components/ControlledForm";

function App() {
  return (
    <div className={css.App}>
      {/* Add your components here */}
      <ControlledForm />
      <NavBarForm />
      <Sidebar />
      <Content />
    </div>
  );
}

export default App;