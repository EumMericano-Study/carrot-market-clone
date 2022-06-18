import React, { useState } from "react";
import { useForm } from "react-hook-form";

// react hook form
// Better Validation
// Better Error
// Better input controll
// Never deal events

const UsingUseFormHook = () => {
  const { register, watch } = useForm();
  /**
   * resgiter('name') 을 출력해보면
   * name, onBlur, onChange, ref 항목을 담고 있다.
   */
  /**
   * watch()를 출력해보면
   * useForm을 통해 명시된 value들을 객체형태로 모아 볼 수 있다.
   * {usename: 'bar', email:"bar@foo.com", password: "foo"}
   */
  return (
    <form>
      <input
        {...register("username")}
        type="text"
        placeholder="Username"
        required
      />
      <input {...register("email")} type="email" placeholder="Email" required />
      <input
        {...register("password")}
        type="password"
        placeholder="Password"
        required
      />
      <input type="submit" value="제출 하기" />
    </form>
  );
};
export default UsingUseFormHook;
