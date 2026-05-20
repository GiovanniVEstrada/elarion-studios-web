import type { Metadata } from "next";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Request Account Deletion — Luren by Elarion Studios",
  description:
    "Request permanent deletion of your Luren account and all associated data, including journal entries, mood logs, habits, tasks, and reflections.",
};

const SUPPORT_EMAIL = "gvestrada@elarionstudios.org";
const SUBJECT = "Account Deletion Request";
// After creating a form at formspree.io targeting gvestrada@elarionstudios.org,
// paste the form ID here (the part after formspree.io/f/)
const FORMSPREE_ID = "YOUR_FORM_ID";

const divider = (
  <div
    className="mb-10 h-px"
    style={{
      background:
        "linear-gradient(to right, transparent, rgba(116,216,255,0.18), transparent)",
    }}
  />
);

export default async function DeleteAccountPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { submitted } = await searchParams;

  if (submitted === "true") {
    return (
      <main>
        <section className="min-h-screen bg-luren-surface px-6 pt-36 pb-28">
          <div className="mx-auto max-w-2xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-luren-muted">
              Account
            </p>
            <h1
              className="mb-6 font-heading italic text-luren-heading"
              style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}
            >
              Request Received
            </h1>

            {divider}

            <div className="space-y-4 text-sm font-light leading-relaxed text-luren-body">
              <p>
                Your deletion request has been received. We&apos;ll process it within 30 days and
                confirm once your account and data have been permanently removed.
              </p>
              <p className="text-xs text-luren-muted">
                Questions? Reach out at{" "}
                <a
                  href={`mailto:${SUPPORT_EMAIL}`}
                  className="text-luren-cyan underline-offset-4 hover:underline"
                >
                  {SUPPORT_EMAIL}
                </a>
                .
              </p>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  return (
    <main>
      <section className="min-h-screen bg-luren-surface px-6 pt-36 pb-28">
        <div className="mx-auto max-w-2xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-luren-muted">
            Account
          </p>
          <h1
            className="mb-6 font-heading italic text-luren-heading"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}
          >
            Request Account Deletion
          </h1>

          {divider}

          <div className="space-y-6 text-sm font-light leading-relaxed text-luren-body">
            <p>
              Submitting this form will permanently remove your Luren account and all associated
              data — including journal entries, mood logs, habits, tasks, calendar events, and
              reflections. This cannot be undone.
            </p>

            <form
              action={`https://formspree.io/f/${FORMSPREE_ID}`}
              method="POST"
              className="space-y-4"
            >
              <input type="hidden" name="_subject" value={SUBJECT} />
              <input
                type="hidden"
                name="_next"
                value="https://elarionstudios.org/delete?submitted=true"
              />

              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-xs font-medium text-luren-body"
                >
                  Account email address
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-xl px-4 py-3 text-sm text-luren-heading placeholder:text-luren-muted focus:outline-none"
                  style={{
                    background: "rgba(10, 32, 48, 0.6)",
                    border: "1px solid rgba(116,216,255,0.15)",
                  }}
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2.5 rounded-xl px-6 py-3.5 text-sm font-medium transition-opacity hover:opacity-90"
                style={{
                  background: "linear-gradient(135deg, #74d8ff, #4ecdc4)",
                  color: "#06131f",
                }}
              >
                Send Deletion Request
              </button>
            </form>

            <p className="text-xs text-luren-muted">
              Prefer email? Write to{" "}
              <a
                href={`mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(SUBJECT)}`}
                className="text-luren-cyan underline-offset-4 hover:underline"
              >
                {SUPPORT_EMAIL}
              </a>{" "}
              with subject &ldquo;{SUBJECT}&rdquo;.
            </p>

            <div
              className="rounded-xl p-5"
              style={{
                background: "rgba(10, 32, 48, 0.45)",
                border: "1px solid rgba(116,216,255,0.1)",
              }}
            >
              <p className="mb-3 text-xs font-semibold text-luren-body">Before you request</p>
              <ul className="list-disc space-y-2 pl-4 text-xs font-light leading-relaxed text-luren-muted">
                <li>Requests are processed within 30 days of receipt.</li>
                <li>
                  You can also delete your account immediately from within Luren — open the app, go
                  to <span className="font-medium text-luren-body">Settings</span>, scroll to{" "}
                  <span className="font-medium text-luren-body">Close the harbor</span>, and tap{" "}
                  <span className="font-medium text-luren-body">Delete my account</span>.
                </li>
                <li>Deletion is permanent. Export any data you want to keep before submitting.</li>
              </ul>
            </div>

            <p className="text-xs text-luren-muted">
              For more information on what data we store, see our{" "}
              <a href="/privacy" className="text-luren-cyan underline-offset-4 hover:underline">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
