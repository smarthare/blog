import { login } from "apis";
import React, { useEffect, useState } from "react";

const LoginForm = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<any>("");
  const [canSubmit, setCanSubmit] = useState<boolean>(false);

  useEffect(() => {
    setCanSubmit(username !== "" && password !== "");
  }, [username, password]);

  const handleUsername = (e: React.FormEvent<HTMLInputElement>) => {
    setUsername(e.currentTarget.value);
  };

  const handlePassword = (e: React.FormEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };

  const submit = () => {
    
  }

  return (
    <form className="login">
      <div>
        Username{" "}
        <input type="text" onChange={handleUsername} value={username} />
      </div>
      <div>
        Password{" "}
        <input type="password" onChange={handlePassword} value={password} />
      </div>
      <button type="submit" disabled={!canSubmit} onClick={submit}>
        Submit
      </button>
    </form>
  );
};

export default LoginForm;
