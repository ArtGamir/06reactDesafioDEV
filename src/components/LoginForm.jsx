import clsx from "clsx";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function LoginForm() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm();

  async function onSubmit(inputData) {
    try {
      const response = await fetch("http://localhost:3003/auth/login", {
        method: "POST",
        body: JSON.stringify({
          email: inputData.email,
          password: inputData.password,
        }),
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        setError("root", { message: "Credenciales Invalidas" });
        return;
      }

      const responseData = await response.json();

      // happy path
      if (responseData?.token) {
        localStorage.setItem("token", responseData.token);
        navigate("/");
      } else {
        setError("root", { message: "Datos invalidos" });
      }
    } catch (error) {
      setError("root", { message: "error en la solicitud" });
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
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

      <div className="w-1/3">
        <label>Email</label>
        <input
          className={clsx(
            "border border-black p-2 rounded bg-white",
            "flex h-8 w-full justify-center items-center p-5 m-2"
          )}
          type="email"
          {...register("email", {
            required: { value: true, message: "El usuario es requerido" },
            minLength: {
              value: 3,
              message: "El usuario debe tener 3 caracteres mínimo",
            },
          })}
          id="userEmail"
          placeholder=""
          required
        />
      </div>
      <div className="w-1/3">
        <label for="exampleFormControlTextarea1">Password</label>
        <input
          type={showPassword ? "text" : "password"}
          {...register("password", {
            required: { value: true, message: "La contraseña es requerida" },
          })}
          className={clsx(
            "border border-black p-2 rounded bg-white",
            "flex h-8 w-full justify-center items-center p-5 m-2"
          )}
          id="userPassword"
          aria-describedby="passwordHelpBlock"
          required
        />
      </div>
      <div className="flex space-x-60">
        <span>
          <input type="checkbox" value="" id="flexCheckDefault" />
          <label for="flexCheckDefault">Remember me</label>
        </span>
        <span>
          <p>
            <a href="#">Forgot password?</a>
          </p>
        </span>
      </div>
      <div className="w-1/3">
        <button
          className={clsx(
            " p-2 rounded ",
            "flex h-8 justify-center items-center p-5 m-2 w-full",
            "bg-blue-700  text-white",
            "hover:bg-blue-800"
          )}
          type="submit"
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
