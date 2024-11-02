import React from "react";
import { useState } from "react";

function Input2() {
  const [inputs, setInputs] = useState({
    name:"", 
    email:"", 
    tel:""
  });
  const {name, email, tel} = inputs;

  const onChange = (event) => {
    const value = event.target.value;
    const id = event.target.id;
    
    // inputs[id] = value -> 이렇게 하면 상태관리가 안됨.
    setInputs({
        ...inputs,//새로 복사해서만들고 위의 inputs을 복사한 것
        [id]: value//만약 id가 name 이면 name: value가 되는 것
    })

  };

  return (
    <div>
        <div>
            <label>이름</label>
            <input type="text" id="name" value={name} onChange={onChange}/>
        </div>
        <div>
            <label>이메일</label>
            <input type="email" id="email" value={email} onChange={onChange}/>
        </div>
        <div>
            <label>전화번호</label>
            <input type="tel" id="tel" value={tel} onChange={onChange}/>
        </div>  
        <p>이름 : {name}</p>  
        <p>이메일 : {email}</p>  
        <p>전화번호 : {tel}</p>  
    </div>
  );
}
export default Input2;
