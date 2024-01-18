// const heading = React.createElement("h1", {
//     id: "title",
// },
//     "Namaste Everyone !")
const heading1 = React.createElement(
  "h1",
  {
    id: "title",
  },
  "Heading 1"
);
const heading2 = React.createElement(
  "h2",
  {
    id: "title",
  },
  "Heading 2"
);
const container = React.createElement("div", { id: "container" }, [
  heading1,
  heading2,
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);

// passing a react element inside the root
// root.render(heading)
