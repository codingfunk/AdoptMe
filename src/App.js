const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, props.name),
    React.createElement("h3", {}, props.animal),
    React.createElement("h3", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", { id: "my-brand" }, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Nala",
      animal: "Dog",
      breed: "Havanese",
    }),
    React.createElement(Pet, {
      name: "Ronaldo",
      animal: "Bird",
      breed: "Papagei",
    }),
    React.createElement(Pet, {
      name: "Thule",
      animal: "Dog",
      breed: "Rottweiler",
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
