import './App.css'
import StateHandling from './components/StateHandling'
import Student from './components/Student'
import ImageManipulation from './components/imageManipulation'

function App() {
  const student = [{
    pic: 'https://static.vecteezy.com/system/resources/previews/001/967/165/original/child-go-to-the-school-free-vector.jpg',
    name: 'Bhavya Jain',
    branch: 'AIML',
    section: 'B',
    roll_no: '2300320310068',
    college: 'ABES Engineering College'
  },
  {
    pic: 'https://en.pimg.jp/106/089/766/1/106089766.jpg',
    name: 'Priyank Jain',
    branch: 'MBA FINANCE',
    section: 'A',
    roll_no: '2300320310052',
    college: 'ITS Engineering College'
  }
  ]

  return (
    <div>
      {/* {/* <Student name="Bhavya Jain" branch="AIML" section="B" roll_no="2300320310068" college="ABES Engineering College" /> */}
      {/* <Student data={student[1]} /> */}

      {/* {
        student.map((element, index) => (
          <Student data={element} key={index} />
        ))
      }  */}

      {/* <StateHandling /> */}
      <ImageManipulation />
    </div>
  )
}

export default App
