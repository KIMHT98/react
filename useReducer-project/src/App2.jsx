import { useReducer, useState } from "react";
import "./App.css";
import Student from "./Student";
//reducer - state를 업데이트하는 역할
//dispatch - state 업데이트를 위한 요구
//action - 요구 내용
const reducer = (state, action) => {
  switch (action.type) {
    case "add-student":
      const name = action.payload.name;
      const newStudent = {
        id: Date.now(),
        name,
        isHere: false,
      };
      return {
        count: state.count + 1,
        students: [...state.students, newStudent],
      };
    case "delete-student":
      return {
        count: state.count - 1,
        students: state.students.filter(
          (student) =>
            student.id !== action.payload.id
        ),
      };
    case "mark-student":
      return {
        count: state.count,
        students: state.students.map(
          (student) => {
            if (
              student.id === action.payload.id
            ) {
              return {
                ...student,
                isHere: !student.isHere,
              };
            }
            return student;
          }
        ),
      };
    default:
      return state;
  }
};
const initialState = {
  count: 0,
  students: [],
};
function App() {
  const [name, setName] = useState("");
  const [studentsInfo, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <div>
      <h2>출석부</h2>
      <p>총 학생수: {studentsInfo.count}</p>
      <input
        type="text"
        placeholder="이름을 입력해주세요."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch({
            type: "add-student",
            payload: { name },
          });
          setName("");
        }}
      >
        추가
      </button>
      {studentsInfo.students.map((student) => {
        return (
          <Student
            key={student.id}
            name={student.name}
            dispatch={dispatch}
            id={student.id}
            isHere={student.isHere}
          />
        );
      })}
    </div>
  );
}

export default App;
