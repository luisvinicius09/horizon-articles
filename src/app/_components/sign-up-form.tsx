"use client";

export default function SignUpForm() {
  // TODO: react hook form setup

  return (
    <div>
      <form>
        <fieldset>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" />
          </div>
        </fieldset>

        <fieldset>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
        </fieldset>

        <fieldset>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
        </fieldset>

        <button type="submit">
          <p>Sign Up</p>
        </button>
      </form>
    </div>
  );
}
