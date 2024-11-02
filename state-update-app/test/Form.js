import { useState } from "react";

export default function Form() {
  const [person, setPerson] = useState({
    firstName: "kim",
    lastName: "HyeonTae",
    email: "kht19684@gmail.com",
  });
  function handleFirstNameChange(e) {
    // person.firstName = e.target.value
    setPerson({
      ...person, //이전 필드 복사
      firstName: e.target.value,
    });
  }
  function handleLastNameChange(e) {
    // person.lastName = e.target.value
    setPerson({
      ...person, //이전 필드 복사
      lastName: e.target.value,
    });
  }
  function handleEmailChange(e) {
    // person.email = e.target.value
    setPerson({
      ...person, //이전 필드 복사
      email: e.target.value,
    });
  }
  function handleChange(e) {
    setPerson({
      ...person,
      [e.target.name]: e.target.value,
    });
  }
  return (
    <div>
      <label>First name :</label>
      <input
        value={person.firstName}
        // onChange={handleFirstNameChange}
        name="firstName"
        onChange={handleChange}
      />
      <label>Last name :</label>
      <input
        value={person.lastName}
        // onChange={handleLastNameChange}
        name="lastName"
        onChange={handleChange}
      />
      <label>Email :</label>
      <input
        value={person.email}
        // onChange={handleEmailChange}
        name="email"
        onChange={handleChange}
      />
      <p>
        ({person.firstName} {person.lastName}{" "}
        {person.email})
      </p>
    </div>
  );
}
