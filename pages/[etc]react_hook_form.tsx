import React, { useEffect, useState } from "react";
import { FieldErrors, useForm } from "react-hook-form";

// react hook form
// Better Validation
// Better Error
// Better input controll
// Never deal events

interface LoginForm {
  username: string;
  email: string;
  password: string;
}

const UsingUseFormHook = () => {
  const {
    register,
    watch,
    handleSubmit,
    setValue,
    setError,
    formState: { errors },
    reset,
    resetField,
  } = useForm<LoginForm>({ mode: "all" });
  //mode를 통해 언제 에러를 보여줄 것 인지 설정할 수 있다.
  /**
   * resgiter('name') 을 출력해보면
   * name, onBlur, onChange, ref 항목을 담고 있다.
   * name을 통해 변수를 지정하고 onChange뿐 아니라 ref, onblur 처리들이
   * 기본적으로 설정되어 있기 때문에 간편하게 사용가능하다.
   */
  /**
   * watch()를 출력해보면
   * useForm을 통해 명시된 value들을 객체형태로 모아 볼 수 있다.
   * {usename: 'bar', email:"bar@foo.com", password: "foo"}
   */
  /**
   * handleSubmit은 두가지 인자를 받는다
   * 첫 번째 인자는 submit이 validate할때 실행되므로 필수 입력 항목이며
   * 두 번째 인자는 submit이 invalidate 되었을 떄 실행되는 항목이다.
   */

  const checkUsernameDuplicated = (username: string) => {
    // if (watch("username") === "eumericano") {
    if (username === "eumericano") {
      setError("username", { message: "이미 등록된 이름입니다." });
      setTimeout(() => {
        resetField("username");
      }, 5000);
      return true;
    }
    return false;
  };
  const onValid = (data: LoginForm) => {
    if (checkUsernameDuplicated(data.username)) return;
    alert(confirm("onValid"));
    reset();
  };
  useEffect(() => {
    setValue("username", "저장되어 있는 이름");
    setValue("email", "저장되어 있는 이메일");
  }, []);

  return (
    <form onSubmit={handleSubmit(onValid)}>
      <div>
        <input
          {...register("username", {
            required: "username은 필수정보 입니다.",
            // reqired: true로 어떤 오류가 있는지 체크한 후 출력도 가능하지만
            // string 형태로 에러가 true일때 보여줄 message를 함께 출력 할 수 있다.
            minLength: {
              message: "username은 5글자 보다 길어야 합니다.",
              value: 5,
            },
            // 숫자 값만 가능한 length valid값을 객체를 통해 메시지까지 전송할 수 있다.
          })}
          type="text"
          placeholder="Username"
          className={Boolean(errors?.username) ? "border border-red-500" : ""}
        />
        <span>{errors?.username?.message}</span>
      </div>
      <div>
        <input
          {...register("email", {
            required: "이메일은 필수정보 입니다.",
            validate: {
              notYahoo: (value) =>
                !value.includes("@yahoo.co.kr") || "yahoo는 등록할 수 없습니다",
              // &&, || 유의해서 사용할 것
            },
          })}
          type="email"
          placeholder="Email"
        />
        <span>{errors?.email?.message}</span>
      </div>
      <div>
        <input
          {...register("password", { required: "비밀번호는 필수정보 입니다." })}
          type="password"
          placeholder="Password"
        />
        <span>{errors?.password?.message}</span>
      </div>
      <input type="submit" value="제출 하기" />
    </form>
  );
};
export default UsingUseFormHook;
