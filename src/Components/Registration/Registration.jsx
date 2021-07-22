import React, { useState } from "react";
import Input from "../Input/Input";
import { registration } from "../../redux/actions";

function Registration(props) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  return (
    <div>
      <div>Регистрация</div>
      <Input value={email} setValue={setEmail} type="text" placeholder="name" />
      <Input
        value={pass}
        setValue={setPass}
        type="password"
        placeholder="password"
      />
      <button onClick={() => registration(email, pass)}>
        {" "}
        Загерестрироваться
      </button>
    </div>
  );
}

export default Registration;
