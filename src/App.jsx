const stats = [
  { label: "Endpoints monitored", value: "1,482" },
  { label: "Critical risks resolved", value: "96%" },
  { label: "Avg response time", value: "14 min" }
];

const features = [
  {
    title: "Continuous Vulnerability Scans",
    body: "Automated scanning across devices, cloud, and endpoints with prioritized fixes."
  },
  {
    title: "Guided Remediation",
    body: "Step-by-step playbooks your team can execute without a security analyst."
  },
  {
    title: "Compliance Dashboards",
    body: "Instant visibility into PCI, SOC 2, and NZ Privacy Act readiness."
  }
];

const plans = [
  { name: "Starter", price: "$149/mo", detail: "Up to 25 endpoints" },
  { name: "Growth", price: "$299/mo", detail: "Up to 100 endpoints" },
  { name: "Scale", price: "$499/mo", detail: "Up to 250 endpoints" }
];

export default function App() {
  return (
    <div className="page">
      <header className="nav">
        <div className="logo">SecureStack SMB</div>
        <div className="nav-actions">
          <button className="ghost">Log in</button>
          <button className="primary">Start free scan</button>
        </div>
      </header>

      <section className="hero">
        <div>
          <p className="eyebrow">Always-on SMB cybersecurity</p>
          <h1>Know what’s exposed. Fix it fast.</h1>
          <p className="subtext">
            SecureStack SMB delivers 24/7 monitoring, vulnerability scanning, and
            guided remediation without enterprise overhead.
          </p>
          <div className="cta">
            <button className="primary">Run a free risk scan</button>
            <button className="ghost">See how it works</button>
          </div>
        </div>
        <div className="card">
          <h3>Live risk snapshot</h3>
          <ul>
            <li>12 critical issues detected</li>
            <li>3 open compliance gaps</li>
            <li>4 high-risk devices isolated</li>
          </ul>
        </div>
      </section>

      <section className="stats">
        {stats.map((item) => (
          <div key={item.label} className="stat">
            <p>{item.label}</p>
            <h2>{item.value}</h2>
          </div>
        ))}
      </section>

      <section className="grid">
        {features.map((feature) => (
          <div key={feature.title} className="card">
            <h3>{feature.title}</h3>
            <p>{feature.body}</p>
          </div>
        ))}
      </section>

      <section className="pricing">
        <div>
          <h2>Simple pricing for growing teams</h2>
          <p className="subtext">Upgrade or downgrade anytime. No long-term contracts.</p>
        </div>
        <div className="grid">
          {plans.map((plan) => (
            <div key={plan.name} className="card">
              <h3>{plan.name}</h3>
              <h2>{plan.price}</h2>
              <p>{plan.detail}</p>
              <button className="outline">Choose plan</button>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        <span>SecureStack SMB © 2026</span>
        <span>Built by The Firm</span>
      </footer>
    </div>
  );
}
