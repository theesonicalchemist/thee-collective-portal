import Link from "next/link";

export default function HomePage() {
  return (
    <main className="realm-home portal-home">
      <section className="portal-hero">
        <div className="portal-core" />

        <p className="eyebrow">Enter the Realm</p>

        <h1 className="portal-title">Thee Collective Universe</h1>

        <p className="portal-tagline">
          Crafted in Sound. Forged in Story. Designed to Resonate.
        </p>

        <p className="portal-intro">
          A live creative signal of audio-cinema, Signal Codex volumes, and
          collaborative storytelling built to move minds and stir emotion.
        </p>

        <div className="portal-actions">
          <Link href="/listen" className="portal-button portal-button-primary">
            Enter the Signal
          </Link>

          <Link href="/codex" className="portal-button">
            Open the Codex
          </Link>

          <Link href="/broadcast" className="portal-button">
            View Broadcast Network
          </Link>

          <Link href="/links" className="portal-button">
            Join the Circle
          </Link>
        </div>
      </section>

      <section className="preview-grid">
        <article className="card">
          <h2>Broadcast Network</h2>
          <p>
            A living schedule of narrative audio-cinema, experimental
            storytelling, podcasts, music, and collaborative signal cycles.
          </p>
          <Link href="/broadcast">View the schedule</Link>
        </article>

        <article className="card">
          <h2>Signal Codex</h2>
          <p>
            Artifact-based worldbuilding, visual fragments, and canon pieces
            from inside the signal.
          </p>
          <Link href="/codex">Access the Codex</Link>
        </article>

        <article className="card">
          <h2>Science + Practice</h2>
          <p>
            Research-grounded explorations of listening, voice, sound, and
            immersive creative practice.
          </p>
          <Link href="/science">Enter the lab</Link>
        </article>

        <article className="card">
          <h2>The Listener&apos;s Circle</h2>
          <p>
            Public transmissions, behind-the-scenes resonance, and community
            entry points into the universe.
          </p>
          <Link href="/links">Choose your entry</Link>
        </article>
      </section>
    </main>
  );
}