import { useState } from "react"
import { FaEye, FaEyeSlash } from "react-icons/fa"

export function ProviderLoginForm() {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Username:", username)
    console.log("Password:", password)
  }

  return (
    <>
      

      <div className="min-h-screen flex items-center justify-center px-4 py-10">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 sm:p-8 rounded-xl shadow-lg w-full max-w-md md:max-w-lg space-y-8"
        >
          <h2 className="text-xl sm:text-2xl font-bold text-center">
            Provider Panel
          </h2>

          <h2 className="font-bold text-xl sm:text-2xl underline decoration-secondary">
            Login
          </h2>

          <input
            type="text"
            placeholder="Username"
            className="border rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-secondary"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="border rounded-lg px-4 py-2 w-full pr-10 focus:outline-none focus:ring-2 focus:ring-secondary"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600"
            >
              {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
            </button>
          </div>

          <button
            type="submit"
            className="bg-blue-700 text-white py-2 rounded-lg w-full hover:bg-blue-800 transition"
          >
            Login
          </button>
        </form>
      </div>
    </>
  )
}
