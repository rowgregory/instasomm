import React, { Fragment, useState } from "react";
// import { faLock, faLockOpen } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { RootState, useAppSelector } from '@/app/redux/store';
import Spinner from "@/app/components/common/Spinner";
import Typewriter from "../common/Typewriter";

const LoginForm = ({ handleSubmit, handleInput, isLoading }: any) => {
  // const auth = useAppSelector((state: RootState) => state.auth);
  const [type, setType] = useState(false);

  return (
    <div className="flex flex-col">
      <Typewriter
        sentence="Welcome to Insta-Somm"
        speed={40}
        text="text-sm text-zinc-100 font-bold h-5"
      />
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 mt-2 max-w-md w-full"
      >
        <input
          autoComplete="off"
          name="username"
          type="search"
          onChange={handleInput}
          placeholder="Username"
          className="input-box text-[#2c3e50] font-semibold text-sm focus:outline-none h-9 rounded-sm px-3 bg-[#bdc3c7] placeholder:text-[#2c3e50]"
        />
        <input
          autoComplete="off"
          onClick={() => setType(true)}
          onKeyDown={() => setType(true)}
          type={type ? "password" : "search"}
          name="password"
          onChange={handleInput}
          placeholder="Password"
          className="input-box text-[#2c3e50] font-semibold text-sm focus:outline-none h-9 rounded-sm px-3 bg-[#bdc3c7] placeholder:text-[#2c3e50]"
        />
        {isLoading ? (
          <Spinner fill="fill-lime-400" />
        ) : (
          <button type="submit" className="text-sm font-bold">
            {/* <FontAwesomeIcon
            icon={auth.isAuthenticated ? faLockOpen : faLock}
            className="fa-lg text-zinc-400 w-5 hover:text-zinc-500 duration-200"
          /> */}
          </button>
        )}
      </form>
    </div>
  );
};

export default LoginForm;
