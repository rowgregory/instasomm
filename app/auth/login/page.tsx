"use client";

import { FormEvent } from "react";
import { useRouter } from "next/navigation";
// import { useLoginMutation } from '@/app/redux/services/authApi';
// import { useAppDispatch } from '@/app/redux/store';
import LoginForm from "@/app/components/forms/LoginForm";
import useForm from "@/app/hooks/useForm";
import { dashboard } from "@/app/data/paths";
import Picture from "@/app/components/common/Picture";
// import LoginForm from '@/app/redux/features/auth/components/LoginForm';
// import useForm from '@/app/utils/hooks/useForm';

const Login = () => {
  // const dispatch = useAppDispatch();
  const navigate = useRouter();
  // const [login, { isLoading }] = useLoginMutation();
  // const soundEffect = useSoundEffect('/sound-effects/gain-access.mp3');
  const { inputs, handleInput } = useForm(["username", "password"]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (inputs.password !== "" && inputs.username !== "") {
      // await login({ username: inputs.username, password: inputs.password })
      //   .unwrap()
      //   .then((data: any) => {
      //     if (data.isAuthenticated) {
      //       navigate.push(dashboard);
      //     }
      //   })
      //   .catch((err: any) => {
      //     console.log('ERR: ', err)
      //   });
    }
  };

  return (
    <div className="bg-[#1c1c1c] min-h-screen grid grid-cols-12">
      <div className="col-span-5 flex flex-col justify-center px-36 py-40">
        <Picture
          src="/images/insta-somm-logo.webp"
          alt="Insta-Somm"
          className="w-[330px] h-12 object-cover mb-20"
          priority={true}
        />
        <LoginForm
          handleSubmit={handleSubmit}
          handleInput={handleInput}
          // isLoading={isLoading}
        />
      </div>

      <div
        className="col-span-7 min-h-screen bg-g-sky"
        style={{
          clipPath: "polygon(10% 0, 100% 0, 100% 100%, 40% 80%, 0% 15%)",
        }}
      ></div>
    </div>
  );
};

export default Login;
