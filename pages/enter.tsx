import { useState } from "react";
import { GithubIcon, TwitterIcon } from "../components/icons";

export default function Enter() {
  const [method, setMethod] = useState<"email" | "phone">("email");
  const setToEmail = () => setMethod("email");
  const setToPhone = () => setMethod("phone");
  return (
    <div>
      <h3>Enter to Carrot</h3>
      <div>
        <h5>Enter using</h5>
        <div>
          <button onClick={setToEmail}>Email</button>
          <button onClick={setToPhone}>Phone</button>
        </div>
      </div>
      <form>
        <label>
          {method === "email" && "Email address"}
          {method === "phone" && "Phone number"}
        </label>
        <div>
          {method === "email" && <input type="email" required />}
          {method === "phone" && (
            <div>
              <span>+82</span>
              <input type="number" required />
            </div>
          )}
        </div>
        <button>
          {method === "email" && "Get login link"}
          {method === "phone" && "Get one-time password"}
        </button>
      </form>
      <div>
        <div>
          <div />
          <div>
            <span>Or Enter With</span>
          </div>
        </div>
        <div>
          <button>
            <TwitterIcon />
          </button>
          <button>
            <GithubIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
