const data = {
  name: "Willie Le",
  age: 25,
  isMale: true,
  click: () => {
    console.log("clicked");
  },
};

console.log(data);
const d = JSON.stringify(data);
console.log(d);
const e = JSON.parse(d);
console.log(e);
