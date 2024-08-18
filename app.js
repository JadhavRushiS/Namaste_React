const heading = React.createElement(
  "h2",
  {
    id: "heading",
  },
  "Hello World from React"
);

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "Child" }, [
    React.createElement("h1", {}, "Nested Element 1"),
    React.createElement("h2", {}, "Nested 1"),
  ]),
  React.createElement("div", { id: "Child" }, [
    React.createElement("h1", {}, "Nested Element 2"),
    React.createElement("h2", {}, "Nested 2"),
  ]),
]);

//jsx

const nestedElement = ReactDOM.createRoot(document.getElementById("parent"));

nestedElement.render(parent);
