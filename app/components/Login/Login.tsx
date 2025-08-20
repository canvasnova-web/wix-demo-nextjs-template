"use client";
import dynamic from "next/dynamic";
import { useUI } from "../Provider/context";
import { User } from "@wix/wix-ui-icons-common";

const LoginComp = () => {
  const { openModalLogin } = useUI();
  const onLoginClick = async () => {
    openModalLogin();
  };
  return (
    <button
      onClick={onLoginClick}
      className="text-[clamp(12px,1.0vw,14px)] font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-1 py-1"
    >
      Konto
    </button>
  );
};

export const Login = dynamic(() => Promise.resolve(LoginComp), {
  ssr: false,
});
