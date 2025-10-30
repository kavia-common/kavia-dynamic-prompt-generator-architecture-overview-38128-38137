/**
 * PUBLIC_INTERFACE
 * slides
 * List of slide objects representing the Dynamic Prompt Generator architecture.
 */
export const slides = [
  {
    id: 'title',
    title: "Kavia Dynamic Prompt Generator",
    bullets: [
      "Architecture overview, components, and data flows",
      "Ocean Professional theme • Modern • Accessible",
      "Use ← → Space Home End • ? for help",
    ],
    callout: "Goal: Adaptive, auditable prompt generation at scale",
  },
  {
    id: 'components',
    title: "Core Components",
    bullets: [
      "Frontend Slides App: presentation of architecture (this app)",
      "API Gateway: routes requests, auth, rate limits",
      "Prompt Orchestrator: state, routing, policy",
      "Template Engine: tokenization, dynamic slots, constraints",
      "Context Ingestion: tools, vector search, retrieval",
      "LLM Workers: streaming, retries, eval feedback loop",
      "Telemetry & Audit: metrics, traces, lineage",
    ],
    callout: "Each component is isolated, observable, and testable",
  },
  {
    id: 'data-flows',
    title: "Data Flows",
    bullets: [
      "1) Request enters API Gateway",
      "2) Orchestrator resolves plan: templates + context",
      "3) Retrieval integrates knowledge and tools",
      "4) Template Engine composes prompt, applies policy",
      "5) LLM Workers execute with guardrails, stream results",
      "6) Telemetry records lineage, metrics, and artifacts",
    ],
    callout: "Feedback closes the loop for prompt improvement",
  },
  {
    id: 'interactions',
    title: "External Interactions",
    bullets: [
      "AuthN/Z provider for secure access",
      "Storage & Vector DB for context",
      "Third‑party APIs & tools via adapters",
      "Webhooks and event bus for system events",
    ],
    callout: "Pluggable integrations preserve core simplicity",
  },
  {
    id: 'observability',
    title: "Observability & Governance",
    bullets: [
      "Tracing spans per step with correlation IDs",
      "Structured logs & metrics for SLOs",
      "Prompt lineage: inputs, transforms, outputs",
      "Policy enforcement and approvals where needed",
    ],
    callout: "Trust requires visibility and control",
  },
  {
    id: 'roadmap',
    title: "Roadmap Highlights",
    bullets: [
      "Deeper evaluation loops (automatic and human‑in‑the‑loop)",
      "Cost controls and caching for scale",
      "Templates marketplace and versioning",
    ],
    callout: "Design for evolution, not perfection",
  },
];
