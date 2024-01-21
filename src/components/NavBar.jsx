import { Link } from "react-router-dom";
import clsx from "clsx";

export default function NavBar() {
  return (
    <header
      className={clsx("bg-white", "flex place-content-between m-4 w-full")}
    >
      <div className="flex">
        <div>
          <Link to="/" className="items-center">
            <img
              src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
              className="w-12"
            />
          </Link>
        </div>
        <div
          className={clsx(
            "border border-black p-2 rounded",
            "flex h-8 items-center"
          )}
        >
          <input type="text" placeholder="Search..." />
          <button type="">
            <img
              src="https://th.bing.com/th/id/OIP.eVfku-4gz7C-5Ob0F-vv1gHaHa?w=200&h=200&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              className="w-6"
            />
          </button>
        </div>
      </div>
      <div>
        <div>
          <span>
            <Link className={clsx(" p-2 rounded rounded-md underline-offset-1","hover:bg-blue-100 hover:text-blue-700 hover:underline")} to="/Login">Log in</Link>
          </span>

          <Link
            to="/NewUser"
            className={clsx("border border-blue-500 text-blue-500  font-bold rounded p-2 m-6", " p-2 rounded rounded-md underline-offset-1","hover:bg-blue-700 hover:text-white hover:underline")}
          >
            Create account
          </Link>
        </div>
      </div>
    </header>
  );
}