const heading = React.createElement("div", {id:'parent'}, React.createElement("div",{id:'child'}, React.createElement("h1",{},'Hello self'), React.createElement("h2",{},'kuikdj')));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);