
import AuthLayout from "./AuthLayout";
import VerifyEmailForm from "./VerifyEmailForm";

export function Auth() {
  return (
    <div className="relative min-h-screen">
      
      
      <div className="absolute inset-0 z-10 flex items-center justify-center px-4 py-4">

        <VerifyEmailForm/>
      </div>

      <AuthLayout />

    </div>
  );
}
