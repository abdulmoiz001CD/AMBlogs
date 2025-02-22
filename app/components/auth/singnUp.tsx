import { SignUp } from '@clerk/nextjs';

export default function SignUpPage() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <SignUp
        // redirectUrl="/home" // Fallback URL
        // afterSignUpUrl="/" // Default page after sign-up
      />
    </div>
  );
}