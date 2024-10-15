import { SignIn } from "@clerk/nextjs";
import Header from "components/Header";
export default function SignInPage() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <SignIn />
    </div>
  );
}
