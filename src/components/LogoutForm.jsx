import { Link } from "react-router-dom";
import clsx from "clsx";

export default function LogoutForm() {
  const deleteToken = () => {
    localStorage.removeItem("token");
  };

  return (
    <div className=" flex flex-col justify-center items-center h-screen">
      <h1 className="w-80 justify-center h-8 font-bold text-lg">
        Are you sure you want to sign out?
      </h1>
      <Link
        to="/"
        className={clsx(
          "rounded ",
          "flex h-8 justify-center items-center p-5  w-32",
          "bg-blue-700 text-white"
        )}
        onClick={deleteToken}
      >
        Yes, sign out
      </Link>
    </div>
  );
}
