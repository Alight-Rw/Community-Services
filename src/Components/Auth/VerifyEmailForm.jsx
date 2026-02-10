import { Link } from "react-router-dom";

export function VerifyEmailForm() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center overflow-x-hidden px-50 py-8">
        
        <h1 className="sm:col-span-2 text-2xl font-bold">community service</h1>

        <div className="w-full flex justify-center border-r">
          <img
            src="/figm.png"   alt="figma" className="max-w-full h-auto" />
        </div>

        <div className="w-full max-w-md">
          <div className="grid grid-cols-2 mb-4 text-center ">
            <div>
              <Link to="/" className="border-b border-pr-2 border-secondary text-xl ">Verify Email</Link>
            </div>
            <div>
              <Link to="/" className="text-xl">Register</Link>
            </div>
          </div>
          <input
            type="email" placeholder="Email" className="w-3/4 border p-2 mb-3" />

          <p className="mb-3 text-sm text-xl">
            Already Remember account <span className="underline text-secondary text-1xl">Login</span>
          </p>

          <button className="bg-secondary text-decondary w-3/4 py-2">Verify Email </button>
        </div>

      </div>
    </>
  );
}
