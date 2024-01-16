import clsx from "clsx";
import { Link } from "react-router-dom";

export default function NewUserForm() {
  return (
    <div
      className={clsx(
        "p-5",
        "flex  flex-col ",
        "w-full justify-center items-center"
      )}
    >
      <div>
        <Link to="/" id="icon-index">
          <img
            src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/original_logo_0DliJcfsTcciZen38gX9.png"
            className="w-16"
            alt=""
          />
        </Link>
      </div>
      <div>
        <h2>Create Account</h2>
      </div>
      <div>
        <p>DEV Community is a community of 1,187,414 amazing developers</p>
      </div>
      <div className="w-1/3">
        <div>
          <label>Profile image: </label>
          <input
            className={clsx(
              "border border-black p-2 rounded bg-white",
              "flex h-8 w-full justify-center items-center p-5 m-2"
            )}
            type="text"
            id="profile_image"
            placeholder=""
          />
        </div>

        <div>
          <label>Name: </label>
          <input
            className={clsx(
              "border border-black p-2 rounded bg-white",
              "flex h-8 w-full justify-center items-center p-5 m-2"
            )}
            type="text"
            id="Name"
            placeholder=""
            required
          />
        </div>

        <div>
          <label>Username:</label>
          <input
            className={clsx(
              "border border-black p-2 rounded bg-white",
              "flex h-8 w-full justify-center items-center p-5 m-2"
            )}
            type="text"
            id="userName"
            placeholder=""
            required
          />
        </div>

        <div>
          <label>Email</label>
          <input
            className={clsx(
              "border border-black p-2 rounded bg-white",
              "flex h-8 w-full justify-center items-center p-5 m-2"
            )}
            type="email"
            id="userEmail"
            placeholder=""
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            className={clsx(
              "border border-black p-2 rounded bg-white",
              "flex h-8 w-full justify-center items-center p-5 m-2"
            )}
            type="password"
            id="userPassword"
            aria-describedby="passwordHelpBlock"
            required
          />
        </div>

        <div>
          <label>Password confirmation:</label>
          <input
            className={clsx(
              "border border-black p-2 rounded bg-white",
              "flex h-8 w-full justify-center items-center p-5 m-2"
            )}
            type="password"
            id="passwordConfirm"
            aria-describedby="passwordHelpBlock"
            required
          />
        </div>

        <div>
          <button
            className={clsx(
              "border border-black p-2 rounded",
              "flex h-8 justify-center items-center p-5 m-2 w-full",
              "bg-blue-700 text-white"
            )}
            type="button"
            id="signUp_button"
          >
            Sign Up
          </button>
        </div>
      </div>
      <div className="flex justify-center w-1/3 ">
        <span>
          By signing in, you are agreeing to our{" "}
          <a className="text-blue-700" href="https://dev.to/privacy">
            privacy policy
          </a>
          ,{" "}
          <a className="text-blue-700" href="https://dev.to/terms">
            terms of use{" "}
          </a>
          and{" "}
          <a className="text-blue-700" href="https://dev.to/code-of-conduct">
            code of conduct
          </a>
          .
        </span>
      </div>

      <div>
        <span>
          Already have an account?{" "}
          <Link to="/Login" className="text-blue-700">
            Log in
          </Link>
          .
        </span>
      </div>
    </div>
  );
}
