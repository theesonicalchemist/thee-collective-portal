export default function ListenPage() {
  return (
    <main className="realm-home">
      <section className="hero">
        <p className="eyebrow">Live Broadcast</p>
        <h1>Enter the Signal</h1>
        <p className="intro">
          Thee Collective Universe operates as a continuous broadcast signal —
          narrative audio-cinema, experimental storytelling, sound exploration,
          and collaborative creative transmissions.
        </p>
      </section>

      <section className="preview-grid">
        <article className="card">
          <h2>Live Player</h2>
          <p>
            The signal is currently broadcasting through Radio.co while the
            full Collective Universe broadcast infrastructure is being built.
          </p>

          <div style={{ marginTop: "20px" }}>
            {/* Replace this with your Radio.co embed later */}
            <div
              style={{
                background: "#111",
                padding: "40px",
                borderRadius: "10px",
                textAlign: "center",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              Radio Player Placeholder
            </div>
          </div>
        </article>

        <article className="card">
          <h2>Broadcast Cycle</h2>
          <p>
            The signal runs on a daily cycle of narrative series, experimental
            broadcasts, sound exploration, and collaborative programming.
          </p>
          <p>View the full broadcast schedule.</p>
        </article>

        <article className="card">
          <h2>Archive Access</h2>
          <p>
            Episodes will also be available through podcast platforms and the
            Collective Universe archive.
          </p>
          <p>YouTube / Spotify / Apple</p>
        </article>

        <article className="card">
          <h2>Return to the Realm</h2>
          <p>Return to the main portal.</p>
          <a href="/">Back to homepage</a>
        </article>
      </section>
    </main>
  );
}