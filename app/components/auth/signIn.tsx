import { SignIn } from '@clerk/nextjs';

export default function SignInPage() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <SignIn
        // redirectUrl="/" // Fallback URL if no `redirect_url` is provided
        // afterSignInUrl="/" // Default page after sign-in
      />
    </div>
  );
}