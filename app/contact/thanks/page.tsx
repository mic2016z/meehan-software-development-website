import type { Metadata } from "next";
import { Container, ButtonLink } from "@/components/ui";

export const metadata: Metadata = {
  title: "Enquiry submitted",
  robots: { index: false, follow: false },
};

export default function ContactThanksPage() {
  return (
    <Container className="py-24 sm:py-32">
      <p className="label text-signal">Thank you</p>
      <h1 className="display mt-6 text-4xl sm:text-6xl">Your enquiry has been submitted.</h1>
      <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-2">
        Thanks for sharing what you’re trying to solve. I’ll reply within one business day, Australian time.
      </p>
      <div className="mt-10"><ButtonLink href="/">Back to home</ButtonLink></div>
    </Container>
  );
}
