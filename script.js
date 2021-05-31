const { useState } = React;

const AddTaskForm = ({ addTask }) => {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    value && addTask(value);
    setValue("");
  };

  return /*#__PURE__*/(
    React.createElement("form", { onSubmit: handleSubmit }, /*#__PURE__*/
    React.createElement("input", {
      type: "text",
      value: value,
      placeholder: "Enter a Task\u2026",
      onChange: e => setValue(e.target.value) }), /*#__PURE__*/

    React.createElement("button", { type: "submit" }, /*#__PURE__*/React.createElement("i", { class: "fas fa-plus" }))));


};

const ToDoList = () => {

  const [tasks, setTasks] = useState([{
    text: "Cook pasta",
    isCompleted: true },

  {
    text: "Finish project",
    isCompleted: false }]);



  const addTask = text => setTasks([...tasks, { text }]);

  const toggleTask = index => {
    const newTasks = [...tasks];
    newTasks[index].isCompleted = !newTasks[index].isCompleted;
    setTasks(newTasks);
  };

  const removeTask = index => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return /*#__PURE__*/(
    React.createElement("div", { className: "todo-list" },
    tasks.map((task, index) => /*#__PURE__*/
    React.createElement("div", { className: "todo" }, /*#__PURE__*/
    React.createElement("span", { onClick: () => toggleTask(index), className: task.isCompleted ? "todo-text todo-completed" : "todo-text" },
    task.text), /*#__PURE__*/

    React.createElement("button", { onClick: () => removeTask(index) }, /*#__PURE__*/React.createElement("i", { class: "fas fa-times" })))), /*#__PURE__*/


    React.createElement(AddTaskForm, { addTask: addTask })));


};

ReactDOM.render( /*#__PURE__*/React.createElement(ToDoList, null), document.getElementById('app'));