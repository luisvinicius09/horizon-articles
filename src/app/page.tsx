import Link from "next/link";

export default async function Home() {
  return (
    <main className="bg-gradient-to-b from-[#2e026d] to-[#15162c]">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div>
            <p>Articles</p>
          </div>

          <div className="flex gap-4">
            <Link href="/sign-in">
              <p>Sign In</p>
            </Link>

            <Link href="/sign-up">
              <p>Sign Up</p>
            </Link>
          </div>
        </div>

        <div>
          <p>Display articles here</p>
        </div>
      </div>
    </main>
  );
}
