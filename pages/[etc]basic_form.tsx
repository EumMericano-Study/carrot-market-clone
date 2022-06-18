import React, { useState } from "react";

// React hook form 공부
const BasicForm = () => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [formError, setFormError] = useState<string>("");

  const handleUsernameChange = (
    event: React.SyntheticEvent<HTMLInputElement>
  ) => {
    const {
      currentTarget: { value },
    } = event;
    setUsername(value);
  };
  const handleEmailChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setEmail(value);
  };
  const handlePasswordChange = (
    event: React.SyntheticEvent<HTMLInputElement>
  ) => {
    const {
      currentTarget: { value },
    } = event;
    setPassword(value);
  };

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (username === "" || email === "" || password === "") {
      setFormError("모든 항목을 채워주세요");
    }
    // if (email.include("@"))
    // if (password.length > 8 && password.lenth < 20)
    // 등 더 나은 UX를 위해 많은 설정이 필요하다.
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          value={username}
          onChange={handleUsernameChange}
          type="text"
          placeholder="Username"
          // minLength={5}
          // required
        />
        <input
          value={email}
          onChange={handleEmailChange}
          type="email"
          placeholder="Email"
          // required
        />
        <input
          value={password}
          onChange={handlePasswordChange}
          type="password"
          placeholder="Password"
          // required
        />
        <input type="submit" value="제출 하기" />
      </form>
      {formError !== "" && <span>{formError}</span>}
    </>
  );
};
export default BasicForm;
