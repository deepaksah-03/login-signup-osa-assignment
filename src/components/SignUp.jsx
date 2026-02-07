import { useState } from "react";

export default function SignUp() {

  // Form state
  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Show / Hide passwords
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Password rules state
  const [passwordRules, setPasswordRules] = useState({
    length: false,
    upper: false,
    lower: false,
    number: false,
    special: false,
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setSignupData({
      ...signupData,
      [name]: value,
    });

    if (name === "password") {
      validatePassword(value);
    }
  };

  // Password validation
  const validatePassword = (password) => {
    setPasswordRules({
      length: password.length >= 8,
      upper: /[A-Z]/.test(password),
      lower: /[a-z]/.test(password),
      number: /[0-9]/.test(password),
      special: /[!@#$%^&*]/.test(password),
    });
  };

  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const allValid = Object.values(passwordRules).every(Boolean);

    if (!allValid) {
      alert("Password does not meet requirements");
      return;
    }

    if (signupData.password !== signupData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    console.log("Signup Data:", signupData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">

      {/* NAME */}
      <div>
        <label className="block text-[13px] text-[#9aa0a6] mb-2">
          Full Name
        </label>

        <input
          name="name"
          type="text"
          value={signupData.name}
          onChange={handleChange}
          placeholder="Enter your full name"
          required
          className="
            w-full h-[48px] px-4
            rounded-[10px]
            bg-[#2f343c]
            border border-[#3f444c]
            text-white
            placeholder-[#7b818a]
            outline-none
            focus:border-[#ff3b3b]
          "
        />
      </div>

      {/* EMAIL */}
      <div>
        <label className="block text-[13px] text-[#9aa0a6] mb-2">
          Email address
        </label>

        <input
          name="email"
          type="email"
          value={signupData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
          className="
            w-full h-[48px] px-4
            rounded-[10px]
            bg-[#2f343c]
            border border-[#3f444c]
            text-white
            placeholder-[#7b818a]
            outline-none
            focus:border-[#ff3b3b]
          "
        />
      </div>

      {/* PASSWORD */}
      <div>
        <label className="block text-[13px] text-[#9aa0a6] mb-2">
          Password
        </label>

        <div className="relative">
          <input
            name="password"
            type={showPassword ? "text" : "password"}
            value={signupData.password}
            onChange={handleChange}
            placeholder="Enter password"
            required
            className="
              w-full h-[48px]
              px-4 pr-12
              rounded-[10px]
              bg-[#2f343c]
              border border-[#3f444c]
              text-white
              placeholder-[#7b818a]
              outline-none
              focus:border-[#ff3b3b]
            "
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="
              absolute right-3 top-1/2 -translate-y-1/2
              text-[#9ca3af] text-sm
            "
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>

        {/* PASSWORD RULES */}
        <div className="mt-3 text-xs space-y-1">

          <p className={passwordRules.length ? "text-green-500" : "text-gray-400"}>
            • Minimum 8 characters
          </p>

          <p className={passwordRules.upper ? "text-green-500" : "text-gray-400"}>
            • One uppercase letter
          </p>

          <p className={passwordRules.lower ? "text-green-500" : "text-gray-400"}>
            • One lowercase letter
          </p>

          <p className={passwordRules.number ? "text-green-500" : "text-gray-400"}>
            • One number
          </p>

          <p className={passwordRules.special ? "text-green-500" : "text-gray-400"}>
            • One special character
          </p>

        </div>
      </div>

      {/* CONFIRM PASSWORD */}
      <div>
        <label className="block text-[13px] text-[#9aa0a6] mb-2">
          Confirm Password
        </label>

        <div className="relative">
          <input
            name="confirmPassword"
            type={showConfirmPassword ? "text" : "password"}
            value={signupData.confirmPassword}
            onChange={handleChange}
            placeholder="Re-enter password"
            required
            className="
              w-full h-[48px]
              px-4 pr-12
              rounded-[10px]
              bg-[#2f343c]
              border border-[#3f444c]
              text-white
              placeholder-[#7b818a]
              outline-none
              focus:border-[#ff3b3b]
            "
          />

          <button
            type="button"
            onClick={() =>
              setShowConfirmPassword(!showConfirmPassword)
            }
            className="
              absolute right-3 top-1/2 -translate-y-1/2
              text-[#9ca3af] text-sm
            "
          >
            {showConfirmPassword ? "Hide" : "Show"}
          </button>
        </div>

        {/* MATCH CHECK */}
        {signupData.confirmPassword && (
          <p
            className={`text-xs mt-1 ${
              signupData.password === signupData.confirmPassword
                ? "text-green-500"
                : "text-red-500"
            }`}
          >
            {signupData.password === signupData.confirmPassword
              ? "Passwords match"
              : "Passwords do not match"}
          </p>
        )}
      </div>

      {/* SUBMIT */}
      <button
        type="submit"
        className="
          w-full h-[48px]
          bg-[#ff3b3b]
          text-white
          rounded-[10px]
          font-medium
          hover:opacity-90
        "
      >
        Create Account
      </button>

    </form>
  );
}
