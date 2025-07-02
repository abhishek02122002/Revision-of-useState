import { useState } from "react";
import "./styles.css";

export default function App() {
  const [coun, setCounter] = useState(0);
  const [dark, setDark] = useState(false);
  const [email, setEmail] = useState("");
  const [msg, setmessage] = useState("");
  const [fullName, setFullName] = useState("");
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [tab, setTab] = useState("home");

  const appStyle = {
    backgroundColor: dark ? "#222" : "#fff",
    color: dark ? "#fff" : "#000",
  };

  const addToArray = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const deleteTask = (index) => {
    const updatedTask = tasks.filter((_, i) => i !== index);
    setTasks(updatedTask);
  };

  return (
    <div className={`App ${dark ? "dark" : ""}`}>
      {/* Project 1 - Counter */}
      <div className="project-section">
        <div className="project-title">Project 1 - Counter</div>
        <div className="counter-container">
          <div className="counter-value">{coun}</div>
          <div className="counter-buttons">
            <button
              className="btn btn-primary"
              onClick={() => setCounter((e) => e + 1)}
            >
              Increase
            </button>
            <button
              className="btn btn-danger"
              onClick={() => setCounter((e) => e - 1)}
            >
              Decrease
            </button>
            <button className="btn btn-secondary" onClick={() => setCounter(0)}>
              Reset
            </button>
            <button
              className="btn btn-warning"
              onClick={() => setCounter((e) => 2 * e)}
            >
              Double It
            </button>
          </div>
        </div>
      </div>

      {/* Project 2 - Dark Mode */}
      <div className="project-section dark-mode-container">
        <div className="project-title">Project 2 - Dark Mode Toggle</div>
        <div
          className={`mode-indicator ${
            dark ? "dark-indicator" : "light-indicator"
          }`}
        >
          Current Mode: {dark ? "Dark Mode 🌙" : "Light Mode ☀️"}
        </div>
        <div className="mode-content" style={appStyle}>
          <h2>{dark ? "Dark Mode 🌙" : "Light Mode ☀️"}</h2>
          <button className="btn btn-primary" onClick={() => setDark(!dark)}>
            Toggle Theme
          </button>
        </div>
      </div>

      {/* Project 3 - Form */}
      <div className="project-section">
        <div className="project-title">Project 3 - Contact Form</div>
        <div className="form-container">
          <input
            className="form-input"
            type="text"
            placeholder="Your full name"
            value={fullName}
            onChange={(evt) => setFullName(evt.target.value)}
          />
          <input
            className="form-input"
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(evt) => setEmail(evt.target.value)}
          />
          <textarea
            className="form-input"
            placeholder="Your message"
            onChange={(evt) => setmessage(evt.target.value)}
            value={msg}
          />
        </div>
        <div className="form-output">
          MESSAGE: <br />
          {msg} <br />
          From: {email}
        </div>
      </div>

      {/* Project 4 - Todo List */}
      <div className="project-section">
        <div className="project-title">Project 4 - Todo List</div>
        <div className="todo-container">
          <div className="todo-input-container">
            <input
              className="todo-input"
              type="text"
              value={task}
              placeholder="Enter a task"
              onChange={(evt) => setTask(evt.target.value)}
            />
            <button className="btn btn-primary" onClick={addToArray}>
              Add Task
            </button>
          </div>
          <ul className="todo-list">
            {tasks.map((data, index) => (
              <li className="todo-item" key={index}>
                <span className="todo-text">{data}</span>
                <div className="todo-actions">
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteTask(index)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
          {tasks.length > 0 && (
            <button className="btn btn-secondary" onClick={() => setTasks([])}>
              Clear All
            </button>
          )}
        </div>
      </div>

      {/* Project 5 - Tabs */}
      <div className="project-section">
        <div className="project-title">Project 5 - Tab System</div>
        <div className="tab-container">
          <div className="tab-buttons">
            <button className="btn btn-primary" onClick={() => setTab("home")}>
              Home
            </button>
            <button
              className="btn btn-primary"
              onClick={() => setTab("settings")}
            >
              Settings
            </button>
            <button
              className="btn btn-primary"
              onClick={() => setTab("profile")}
            >
              Profile
            </button>
          </div>
          <div className="tab-content">
            {tab === "home" && <p>🏠 Welcome to Home</p>}
            {tab === "settings" && <p>⚙️ Welcome to Settings</p>}
            {tab === "profile" && <p>👤 Welcome to Profile</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
