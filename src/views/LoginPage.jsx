import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

function LoginPage() {
  return (
    <header>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
  );
}


export default LoginPage;