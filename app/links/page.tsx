import Link from "next/link";

export default function LinksPage() {
  return (
    <main className="realm-home">
      <section className="hero">
        <p className="eyebrow">Link Bridge</p>
        <h1>Choose how you enter the Signal.</h1>
        <p className="intro">
          Follow the public transmissions, step into the live broadcast, or
          enter deeper into Thee Collective Universe.
        </p>

        <div className="hero-actions">
          <a
            href="https://www.patreon.com/TheeCollectiveUniverse?utm_campaign=creatorshare_creator"
            target="_blank"
            rel="noreferrer"
            className="button primary"
          >
            Join Thee Inner Circle
          </a>

          <a
            href="https://www.instagram.com/theelistenerscircle?igsh=MW9ocTBvMDBpYXFzcg%3D%3D&utm_source=qr"
            target="_blank"
            rel="noreferrer"
            className="button secondary"
          >
            Thee Listeners Circle
          </a>

          <Link href="/listen" className="button secondary">
            Enter the Signal
          </Link>
        </div>
      </section>

      <section className="preview-grid">
        <article className="card">
          <h2>Access the Archive</h2>
          <p>Listen on podcast platforms and future archive destinations.</p>
          <p>YouTube / Spotify / Apple</p>
        </article>

        <article className="card">
          <h2>Signal Codex</h2>
          <p>
            Enter the artifact archive and explore visual fragments from the
            universe.
          </p>
          <Link href="/codex">Open the Codex</Link>
        </article>

        <article className="card">
          <h2>Broadcast Network</h2>
          <p>
            View the daily signal cycle, replays, special features, and live
            programming blocks.
          </p>
          <Link href="/broadcast">View schedule</Link>
        </article>

        <article className="card">
          <h2>Return to the Realm</h2>
          <p>Go back to the main portal of Thee Collective Universe.</p>
          <Link href="/">Back to homepage</Link>
        </article>
      </section>
    </main>
  );
}