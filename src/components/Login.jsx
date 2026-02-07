import { useState } from "react";

export default function Login() {

    // Login form state
    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    });

    // Show / Hide password state
    const [showPassword, setShowPassword] = useState(false);

    // Handle input change
    const handleChange = (e) => {
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value,
        });
        console.log(loginData)
    };

    //   Submit form
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Login Data:", loginData);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">

            {/* EMAIL */}
            <div>
                <label
                    htmlFor="email"
                    className="block text-[13px] text-[#9aa0a6] mb-2"
                >
                    Email address
                </label>

                <input
                    id="email"
                    name="email"
                    type="email"
                    value={loginData.email}
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
            transition
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
                        value={loginData.password}
                        onChange={handleChange}
                        placeholder="Enter your password"
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
              transition
            "
                    />

                    {/* SHOW / HIDE */}
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="
              absolute right-3 top-1/2 -translate-y-1/2
              text-[#9ca3af] text-sm
              cursor-pointer
            "
                    >
                        {showPassword ? "Hide" : "Show"}
                    </button>

                </div>
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
          transition hover:opacity-90
          cursor-pointer
        "
            >
                Login
            </button>

        </form>
    );
}
