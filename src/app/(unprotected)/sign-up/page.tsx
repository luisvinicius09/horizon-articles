import SignUpForm from '@/app/_components/sign-up-form';
import Link from 'next/link';

export default function SignUpPage() {
  return (
    <main className="bg-gradient-to-b from-[#2e026d] to-[#15162c]">
      <div>
        <Link href="/" className="hover:opacity-70">
          <p>Articles</p>
        </Link>
      </div>

      <div>
        <SignUpForm />
      </div>
    </main>
  );
}
