const par = document.getElementById("parent");  // Normal DOM Function
/* console.log(par); */
const root = ReactDOM.createRoot(par);   // React DOM Function
const h2 = React.createElement(
  "h2",
  { style: { backgroundColor: "blue", color: "white" } },
  "Welcome to React DOM"
);  /* Element created using React DOM API  */  
const li1 = React.createElement('li', {}, "Java");
const li2 = React.createElement('li', {}, "Python");
const li3 = React.createElement('li', {}, "C++");
const li4 = React.createElement('li', {}, "React");
const ul = React.createElement('ul', { style: { backgroundColor: "greenyellow" } }, li1,li2,li3,li4)
/* root.render(h2);  */
/* root.render(ul);  */

const plc = React.createElement("img", {
  src: "https://leadschool.in/wp-content/uploads/2022/04/shutterstock_1777292972.jpg",
  style: {
    height: "200px",
    width: "200px",
    borderRadius: "50%",
    marginRight: "20px"
  }
});

const myname = React.createElement(
  "h1",
  {},
  "Bhavya Jain"
);

const container = React.createElement(
  "div",
  {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  },
  plc,
  myname
);


const wrapper = React.createElement("div", {}, h2,container,ul)
root.render(wrapper); 