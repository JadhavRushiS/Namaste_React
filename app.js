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
