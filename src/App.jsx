import "./App.css";
import TodoList from "./assets/components/TodoList.jsx";

function App() {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: '#191b1f',
        height: "100vh",
        direction: "rtl",
      }}
    >
      <TodoList />
    </div>
  );
}

export default App;
