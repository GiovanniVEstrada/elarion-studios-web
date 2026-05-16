import type { Metadata } from "next";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Request Account Deletion — Luren by Elarion Studios",
  description:
    "Request permanent deletion of your Luren account and all associated data, including journal entries, mood logs, habits, tasks, and reflections.",
};

const SUPPORT_EMAIL = "support@elarionstudios.org";
const SUBJECT = "Account Deletion Request";

export default function DeleteAccountPage() {
  const mailtoHref = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(SUBJECT)}`;

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

          <div
            className="mb-10 h-px"
            style={{
              background:
                "linear-gradient(to right, transparent, rgba(116,216,255,0.18), transparent)",
            }}
          />

          <div className="space-y-6 text-sm font-light leading-relaxed text-luren-body">
            <p>
              Submitting a deletion request will permanently remove your Luren account and all
              associated data from our systems — including journal entries, mood logs, habits, tasks,
              calendar events, and reflections. This cannot be undone.
            </p>

            <p>
              To submit your request, use the button below. Please include the email address
              associated with your Luren account so we can locate and remove your data.
            </p>

            <div className="pt-2 pb-1">
              <a
                href={mailtoHref}
                className="inline-flex items-center gap-2.5 rounded-xl px-6 py-3.5 text-sm font-medium transition-opacity hover:opacity-90"
                style={{
                  background: "linear-gradient(135deg, #74d8ff, #4ecdc4)",
                  color: "#06131f",
                }}
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                Send Deletion Request
              </a>
            </div>

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
                  You can also delete your account immediately from within Luren — open the app,
                  go to{" "}
                  <span className="font-medium text-luren-body">Settings</span>
                  , scroll to{" "}
                  <span className="font-medium text-luren-body">Close the harbor</span>
                  , and tap{" "}
                  <span className="font-medium text-luren-body">Delete my account</span>
                  .
                </li>
                <li>Deletion is permanent. Export any data you want to keep before submitting.</li>
              </ul>
            </div>

            <p className="text-xs text-luren-muted">
              For more information on what data we store, see our{" "}
              <a
                href="/privacy"
                className="text-luren-cyan underline-offset-4 hover:underline"
              >
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
