import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      {/* <header className="flex items-center justify-between h-20 bg-pink-900">
        <h1 className="ml-5 text-3xl font-semibold text-teal-50">My ToDo's</h1>
        <section className="buttons">
          <Link
            to="/home"
            className="p-2 text-white rounded-lg bg-slate-900 hover:bg-slate-700"
          >
            Home
          </Link>
          <Link
            to="/newtask"
            className="p-2 m-6 text-white rounded-lg bg-slate-900 hover:bg-slate-700"
          >
            Add new Todo
          </Link>
        </section>
      </header> */}

      <header className="flex items-center justify-between w-screen h-20 shadow-md shadow-emerald-900 bg-sky-500">
        <div className="ml-5 heading">
          <h1 className="text-4xl font-bold h">My Todo's</h1>
        </div>
        <div className="flex w-2/12 buttons justify-evenly">
          <Link
            to="/home"
            className="p-3 text-white transition rounded-md shadow-md bg-stone-800 hover:bg-stone-600 hover:-translate-y-1 shadow-slate-600"
          >
            Home
          </Link>
          <Link
            to="/newtask"
            className="p-3 text-white transition rounded-md shadow-md bg-stone-800 hover:-translate-y-1 hover:bg-stone-600 shadow-slate-600"
          >
            Add New Task
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Header;
