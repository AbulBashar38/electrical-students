import './App.css';
import Header from './Component/Header/Header';
import StudentsArea from './Component/StudentsArea/StudentsArea';
import friendsInfo from './friendsInfo.json';
import { useEffect, useState } from 'react';
import SelectedStudent from './Component/selectedStudent/SelectedStudent';
function App() {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    setStudents(friendsInfo)
  }, [])
  const [addedStudent, setAddedStudent]= useState([]);
  const addFriends=(student) =>{
    const newStudent = [...addedStudent, student]
    setAddedStudent(newStudent)
  }
  return (
    <div>
      <Header></Header>

      <div className="d-flex flex-row">
      <div className="allStudent-part">
        {students.map(student => <StudentsArea addFriends={addFriends} key={student.et} student={student}></StudentsArea>)}
      </div>
      <div>
      <SelectedStudent addedStudent ={addedStudent}></SelectedStudent>
      </div>
      </div>
    </div>
  );
}

export default App;
