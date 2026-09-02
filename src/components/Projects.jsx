export default function Projects() {
  return (
    <div className="projects">
      <article className="projectCard">
        <div className="card-head">
          <h3>Codebase Q&amp;A</h3>
          <span className="badge">RAG · LLM</span>
        </div>
        <p>
          A RAG-based tool that lets you chat with any GitHub codebase. Paste a repo
          URL, it indexes every function and class, and answers your questions with
          citations to the actual source files.
        </p>
        <div className="tags">
          <span className="tag">Python</span>
          <span className="tag">OpenAI Embeddings</span>
          <span className="tag">Supabase</span>
          <span className="tag">Anthropic Claude</span>
          <span className="tag">React</span>
        </div>
        <div className="actions">
          <a
            className="btn btn-code"
            href="https://github.com/maxjh-dot-dev/codebase-qa"
            target="_blank"
            rel="noreferrer"
          >
            Code
          </a>
        </div>
      </article>

      <article className="projectCard">
        <div className="card-head">
          <h3>Hacker News Sentiment Analysis</h3>
          <span className="badge">Full-stack</span>
        </div>
        <p>
          Full-stack web app that fetches Hacker News' top stories every hour, runs
          sentiment analysis on each title, and visualizes trends in a live dashboard.
        </p>
        <div className="tags">
          <span className="tag">Node.js</span>
          <span className="tag">Express</span>
          <span className="tag">PostgreSQL</span>
          <span className="tag">Railway</span>
        </div>
        <div className="actions">
          <a
            className="btn btn-code"
            href="https://github.com/maxjh-dot-dev/hn-sentiment"
            target="_blank"
            rel="noreferrer"
          >
            Code
          </a>
        </div>
      </article>

      <article className="projectCard">
        <div className="card-head">
          <h3>Bitcoin Price Ticker</h3>
          <span className="badge">Hardware</span>
        </div>
        <p>
          Arduino project that fetches the live Bitcoin price from CoinAPI over WiFi
          and displays it on an SSD1306 OLED screen, refreshing every 15 minutes.
        </p>
        <div className="tags">
          <span className="tag">C++</span>
          <span className="tag">Arduino UNO R4 WiFi</span>
          <span className="tag">SSD1306</span>
        </div>
        <div className="actions">
          <a
            className="btn btn-code"
            href="https://github.com/maxjh-dot-dev/bitcoin_price"
            target="_blank"
            rel="noreferrer"
          >
            Code
          </a>
        </div>
      </article>

      <article className="projectCard">
        <div className="card-head">
          <h3>London Transit Analysis</h3>
          <span className="badge">Data</span>
        </div>
        <p>
          Queried and aggregated Transport for London's Rolling Origin & Destination
          Survey to surface ridership patterns, peak travel windows, and trip-purpose
          breakdowns from large-scale public transit data.
        </p>
        <div className="tags">
          <span className="tag">SQL</span>
          <span className="tag">Pandas</span>
          <span className="tag">Plotly</span>
        </div>
        <div className="actions">

        </div>
      </article>
    </div>
  );
}
