import { Link } from "react-router-dom";
import clsx from "clsx";
import { useState, useEffect } from "react";

export default function AsideLeft() {
  const [isLogedin, setIsLogedin] = useState(false);

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token) {
      setIsLogedin(true);
    }
  }, []);

  return (
    <div className="ml-32">
      {/*Conditional rendering */}
      {!isLogedin && (
        <div className="bg-white rounded-md w-64 p-2">
          <h2 className="font-bold text-xl p-2">
            DEV Community is a community of 1,235,792 amazing developers
          </h2>
          <p className="p-2">
            We're a place where coders share, stay up-to-date and grow their
            careers.
          </p>
          <div className="flex-col justify-center p-2">
            <Link
              to="/NewUser"
              className={clsx(
                "border border-blue-500 text-blue-500  font-bold rounded p-2 m-6",
                " p-2 rounded rounded-md underline-offset-1",
                "hover:bg-blue-700 hover:text-white hover:underline"
              )}
            >
              Create account
            </Link>
            <div className="m-5">
              <Link
                to="/Login"
                className={clsx(
                  " p-2 rounded rounded-md underline-offset-1",
                  "hover:bg-blue-100 hover:text-blue-700 hover:underline"
                )}
              >
                Log in
              </Link>
            </div>
          </div>
        </div>
      )}
      <div className="p-5">
        <ul>
          <li>
            <img src="./assets/home.svg" alt="" />
            <span>Home</span>
          </li>
          <li>
            <img src="./assets/listings.svg" alt="" />
            <span>listings</span>
          </li>
          <li>
            <img src="./assets/podcasts.svg" alt="" />
            <span>Podcasts</span>
          </li>
          <li>
            <img src="./assets/videos.svg" alt="" />
            <span>Videos</span>
          </li>

          <li>
            <img src="./assets/tags.svg" alt="" />
            <span>Tags</span>
          </li>
          <li>
            <img src="./assets/faq.svg" alt="" />
            <span>FAQ</span>
          </li>
          <li>
            <img src="./assets/forem-shop.svg" alt="" />
            <span>Forem Shop</span>
          </li>
          <li>
            <img src="./assets/advertise-on-dev.svg" alt="" />
            <span>Advertise on DEV</span>
          </li>
          <li>
            <img src="./assets/about.svg" alt="" />
            <span>About</span>
          </li>
          <li>
            <img src="./assets/contact.svg" alt="" />
            <span>Contact</span>
          </li>
          <li>
            <img src="./assets/guides.svg" alt="" />
            <span>Guides</span>
          </li>
          <li>
            <img src="./assets/software-comparisons.svg" alt="" />
            <span>Software comparisons</span>
          </li>
        </ul>
      </div>

      <div className="p-5">
        <ul>
          <li>
            <strong>Other</strong>
          </li>

          <li>
            <img src="./src/code-of-conduct.svg" alt="" />
            <span>Code of Conduct</span>
          </li>
          <li>
            <img src="./src/privacy-policy.svg" alt="" />
            <span>Privacy Policy</span>
          </li>
          <li>
            <img src="./src/terms-of-use.svg" alt="" />
            <span>Terms of use</span>
          </li>
        </ul>
      </div>

      <div>
        <img src="./src/twitter.svg" alt="" />
        <img src="./src/facebook.svg" alt="" />
        <img src="./src/github.svg" alt="" />
        <img src="./src/instagram.svg" alt="" />
        <img src="./src/twitch.svg" alt="" />
        <img src="./src/foostodon.svg" alt="" />
      </div>

      <div className="p-2">
        <strong>Popular Tags</strong>
      </div>

      <div className="p-5 snap-y">
        <ul>
          <li>
            <span>#webdev</span>
          </li>
          <li>
            <span>#javascrypt</span>
          </li>
          <li>
            <span>#beginners</span>
          </li>
          <li>
            <span>#programming</span>
          </li>
          <li>
            <span>#tutorial</span>
          </li>
          <li>
            <span>#react</span>
          </li>
          <li>
            <span>#python</span>
          </li>
          <li>
            <span>#productivity</span>
          </li>
          <li>
            <span>#devops</span>
          </li>
          <li>
            <span>#discuss</span>
          </li>
          <li>
            <span>#career</span>
          </li>
          <li>
            <span>#opensource</span>
          </li>
          <li>
            <span>#typescript</span>
          </li>
          <li>
            <span>#css</span>
          </li>
          <li>
            <span>#aws</span>
          </li>
          <li>
            <span>#node</span>
          </li>
          <li>
            <span>#codenewbie</span>
          </li>
          <li>
            <span>#api</span>
          </li>
          <li>
            <span>#testing</span>
          </li>
          <li>
            <span>#security</span>
          </li>
          <li>
            <span>#news</span>
          </li>
          <li>
            <span>#android</span>
          </li>
          <li>
            <span>#database</span>
          </li>
          <li>
            <span>#html</span>
          </li>
          <li>
            <span>#ai</span>
          </li>
          <li>
            <span>#github</span>
          </li>
          <li>
            <span>#java</span>
          </li>
          <li>
            <span>#learning</span>
          </li>
          <li>
            <span>#php</span>
          </li>
          <li>
            <span>#cloud</span>
          </li>
        </ul>
      </div>

      <div className="w-64 p-2">
        <div className="bg-white rounded-md w-64p-2">
          <p>DEV community</p>

          <img
            src="https://res.cloudinary.com/practicaldev/image/fetch/s--GkDXbK0b--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_350/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/oky7tpxe4z0f8ksng5ta.png"
            className="p-5 rounded-md"
          />
          <p>
            Life is too short to browse without <span>dark mode</span>.
          </p>
          <p>
            You can customize your theme, font, and more{" "}
            <span>when you are signed in.</span>
          </p>
        </div>

        <div>
          <div>
            <p>
              <span>DEV community</span> A constructive and inclusive social
              network for software developers. With you every step of your
              journey.
            </p>
            <p>
              Built on<span>Forem</span> — the <span>open source</span> software
              that powers
              <span>DEV</span> and other inclusive communities.
            </p>
            <p>
              Made with love and <span>Ruby on Rails</span> DEV Community © 2016
              - 2023.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
