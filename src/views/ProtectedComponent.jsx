import { SignedIn, SignedOut, RedirectToSignIn } from '@clerk/clerk-react';

function ProtectedComponent() {
  return (
    <div>
      <SignedIn>
        <div>This is visible only when the user is signed in.</div>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </div>
  );
}
