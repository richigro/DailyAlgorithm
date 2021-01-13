const graph = {
  //where the keys are nodes and their values are those nodes edges
  "you": ["Alice", "Bob", "Claire"],
  "Bob": ["Anuj", "Peggy"],
  "Alice": ["Peggy"],
  "Claire": ["Thom", "Johny"],
  "Anuj": [],
  "Thom": [],
  "Peggy": [],
  "Johny": []
};

console.log(graph["you"]);