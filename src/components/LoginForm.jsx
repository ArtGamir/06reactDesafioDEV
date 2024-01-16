import clsx from "clsx";
import { Link } from "react-router-dom";

export default function LoginForm() {
  return (
    <form
      className={clsx(
        "p-5",
        "flex  flex-col ",
        "w-full justify-center items-center"
      )}
    >
      <div>
        <Link to="/">
          <img
            src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/original_logo_0DliJcfsTcciZen38gX9.png"
            alt=""
            className="w-16"
          />
        </Link>
      </div>
      <div>
        <h2 className="font-bold">Join the DEV Community</h2>
      </div>
      <div>
        <p>DEV Community is a community of 1,187,414 amazing developers</p>
      </div>

      <div
        className={clsx(
          "border border-black p-2 rounded",
          "flex h-8 w-1/3 justify-center items-center p-5 m-2"
        )}
      >
        <button type="button">
          <img src="../src/apple.svg" alt="" /> Continue with Apple
        </button>
      </div>
      <div
        className={clsx(
          "border border-black p-2 rounded",
          "flex h-8 w-1/3 justify-center items-center p-5 m-2"
        )}
      >
        <button type="button">
          <img src="../src/forem.svg" alt="" /> Continue with Forem
        </button>
      </div>
      <div
        className={clsx(
          "border border-black p-2 rounded",
          "flex h-8 w-1/3 justify-center items-center p-5 m-2"
        )}
      >
        <button type="button">
          <img src="../src/github2.svg" alt="" /> Continue with GitHub
        </button>
      </div>
      <div
        className={clsx(
          "border border-black p-2 rounded",
          "flex h-8 w-1/3 justify-center items-center p-5 m-2"
        )}
      >
        <button type="button">
          <img src="../src/twitter.svg" alt="" /> Continue with Twitter
        </button>
      </div>

      <div>
        <p>OR</p>
      </div>

      <div>
        <label>Email</label>
        <input
          className={clsx(
            "border border-black p-2 rounded bg-white",
            "flex h-8 justify-center items-center p-5 m-2"
          )}
          type="email"
          id="userEmail"
          placeholder=""
          required
        />
      </div>
      <div>
        <label for="exampleFormControlTextarea1">Password</label>
        <input
          className={clsx(
            "border border-black p-2 rounded bg-white",
            "flex h-8 justify-center items-center p-5 m-2"
          )}
          type="password"
          id="userPassword"
          aria-describedby="passwordHelpBlock"
          required
        />
      </div>
      <div>
        <input type="checkbox" value="" id="flexCheckDefault" />
        <label for="flexCheckDefault">Remember me</label>
        <p>
          <a href="#">Forgot password?</a>
        </p>
      </div>
      <div>
        <button
          className={clsx(
            "border border-black p-2 rounded bg-white",
            "flex h-8 justify-center items-center p-5 m-2 w-full",
            "bg-blue-700 text-white"
          )}
          type="button"
          id="login_button"
        >
          Log in
        </button>
      </div>
      <div>
        <span>
          By signing in, you are agreeing to our
          <a href="https://dev.to/privacy" className="text-blue-700">
            {" "}
            privacy policy
          </a>
          ,
          <a href="https://dev.to/terms" className="text-blue-700">
            {" "}
            terms of use{" "}
          </a>
          and
          <a href="https://dev.to/code-of-conduct" className="text-blue-700">
            {" "}
            code of conduct
          </a>
          .
        </span>
      </div>

      <div>
        <p>
          New to DEV Community?
          <Link to="/NewUser" className="text-blue-700">
            {" "}
            Create account
          </Link>
          .
        </p>
      </div>
    </form>
  );
}