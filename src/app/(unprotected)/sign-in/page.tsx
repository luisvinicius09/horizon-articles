import SignInForm from "@/app/_components/sign-in-form";
import Link from "next/link";

export default function SignInPage() {
  return (
    <main className="bg-gradient-to-b from-[#2e026d] to-[#15162c]">
      <div>
        <Link href="/" className="hover:opacity-70">
          <p>Articles</p>
        </Link>
      </div>

      <div>
        <SignInForm />
      </div>
    </main>
  );
}
