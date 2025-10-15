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
/* root.render(wrapper); */



// JSX
const h21 = <h2> Hi, I am using JSX </h2>
const lil1 = <li>React</li>
const lil2 = <li>Angular</li>
const lil3 = <li>Vue</li>
const ull = <ul style={{backgroundColor:'yellow'}}>{[lil1,lil2,lil3]}</ul>
const picc = <img src="https://www.shutterstock.com/image-vector/technology-software-development-web-design-260nw-2320104951.jpg" style={{width:'200px',height:'200px'}} alt="img"/>
const mynamee = <h1 style={{display:"flex",justifyContent:"center"}}>My name is Bhavya Jain</h1>

const containerr = React.createElement(
  "div",
  {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  },
  picc,
  mynamee
);

const wrapperr = React.createElement("div", {}, h21,containerr,ull)

root.render(wrapperr);

/* Browsers don’t understand JSX natively.
• 	Tools like Vite, Webpack, or Create React App use Babel under the hood to convert JSX into valid JavaScript before it reaches the browser.
• 	This lets you write clean, HTML-like code in React while still running pure JS behind the scenes. */