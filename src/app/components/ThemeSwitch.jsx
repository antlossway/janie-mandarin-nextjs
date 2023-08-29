"use client";
import React, { useEffect, useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  };

  //   initially will see the light theme because that's the initial value set by useState, then useEffect will run and check if there is a theme in local storage, if there is, it will set the theme to that value.
  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");

    // if user manually click the theme switch button, then the opposite theme will be stored in localStorage
    if (localTheme) {
      setTheme(localTheme);
      if (localTheme === "dark") {
        document.documentElement.classList.add("dark");
      }
    }
    // if user did not manually click the theme switch button, then the theme will be set based on the user's system preference
    else if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <button
      className="fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full hover:scale-110 active:scale-105 transition-all
    flex justify-center items-center"
      onClick={toggleTheme}
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
}
