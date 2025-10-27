const parent = document.getElementById('parent');

const root = ReactDOM.createRoot(parent);

const title = React.createElement(
  'h2',
  { style: { backgroundColor: 'blue', color: 'white', padding: '10px' } },
  'Student Card'
);

const name = React.createElement(
  'p',
  { style: { margin: '5px 0' } },
  'Name: Bhavya Jain'
);

const branch = React.createElement(
  'p',
  { style: { margin: '5px 0' } },
  'Branch: AIML'
);

const college = React.createElement(
  'p',
  { style: { margin: '5px 0' } },
  'College: ABES ENGINEERING COLLEGE'
);

const card = React.createElement(
  'div',
  {
    style: {
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '15px',
      width: '250px',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
      fontFamily: 'Arial, sans-serif'
    }
  },
  title,
  name,
  branch,
  college
);

root.render(card);