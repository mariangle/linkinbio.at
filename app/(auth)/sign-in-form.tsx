import { signInAction } from "./sign-in";

import * as React from "react";

export function SignInForm() {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });

  const signInCreds = async () => {
    await signInAction(formData);
  };

  return (
    <div className="bg-red-500">
      <label>
        Email
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={(e) => {
            setFormData({
              ...formData,
              email: e.target.value,
            });
          }}
        />
      </label>
      <label>
        Password
        <input
          name="password"
          type="password"
          value={formData.password}
          onChange={(e) => {
            setFormData({
              ...formData,
              password: e.target.value,
            });
          }}
        />
      </label>
      <button onClick={signInCreds}>Sign In</button>
    </div>
  );
}
