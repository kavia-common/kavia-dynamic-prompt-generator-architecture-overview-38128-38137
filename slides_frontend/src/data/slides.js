/**
 * PUBLIC_INTERFACE
 * slides
 * List of slide objects representing the Dynamic Prompt Generator architecture.
 *
 * Note: The viewer supports a simple model (title, bullets, callout). To hint at
 * layout intent like "two-column" or "diagram-focus", this deck encodes it in the
 * slide `id` naming and the bullet structure. The rendering remains compatible.
 */
export const slides = [
  // 0 — Title / Overview (title-content)
  {
    id: "title-content:intro",
    title: "Kavia Dynamic Prompt Generator",
    bullets: [
      "Architecture overview: components, data flows, and interactions",
      "Ocean Professional theme • Modern • Accessible",
      "Use ← → Space Home End • ? for help",
    ],
    callout: "Goal: Adaptive, auditable prompt generation at scale",
  },

  // 1 — Problem & Objectives (title-content)
  {
    id: "title-content:objectives",
    title: "Why Dynamic Prompt Generation?",
    bullets: [
      "Consistency, context-awareness, and policy compliance at scale",
      "Rapid iteration with templates and evaluation feedback loops",
      "Traceability for governance, cost control, and quality",
    ],
    callout: "Outcome: Reliable, explainable prompts that evolve with data and policy",
  },

  // 2 — High-Level Architecture (diagram-focus)
  {
    id: "diagram-focus:high-level-architecture",
    title: "High-Level Architecture (Flow)",
    bullets: [
      "Client → API Gateway → Orchestrator",
      "Orchestrator → Template Engine + Context Retrieval",
      "LLM Workers → Streamed responses → Telemetry & Audit",
    ],
    callout: "A modular, observable path from request to response",
  },

  // 3 — Core Components (two-column)
  {
    id: "two-column:core-components",
    title: "Core Components",
    bullets: [
      "API Gateway: routing, authN/Z, rate limits",
      "Prompt Orchestrator: state, routing, policy & plan",
      "Template Engine: tokenization, dynamic slots, constraints",
      "Context Ingestion/Retrieval: tools, vector search, knowledge",
      "LLM Workers: streaming, retries, guardrails, eval hooks",
      "Telemetry & Audit: metrics, spans, lineage, artifacts",
    ],
    callout: "Each component is isolated, observable, and testable",
  },

  // 4 — Data Flow Detail (title-content)
  {
    id: "title-content:data-flow",
    title: "End-to-End Data Flow",
    bullets: [
      "1) Request enters API Gateway",
      "2) Orchestrator resolves plan: select template(s) + gather context",
      "3) Retrieval integrates knowledge, tools, and business rules",
      "4) Template Engine composes prompt and applies policy constraints",
      "5) LLM Workers execute with guardrails; responses stream to client",
      "6) Telemetry records lineage, metrics, and artifacts",
    ],
    callout: "Feedback loops improve templates and policies over time",
  },

  // 5 — Template Engine (title-content)
  {
    id: "title-content:template-engine",
    title: "Template Engine — Structure & Constraints",
    bullets: [
      "Composable templates with typed slots and defaults",
      "Deterministic transforms and policy validations",
      "Versioning to align prompt changes with outcomes",
    ],
    callout: "Make changes explicit, reviewable, and revertible",
  },

  // 6 — Context & Retrieval (two-column)
  {
    id: "two-column:context-retrieval",
    title: "Context Ingestion & Retrieval",
    bullets: [
      "Sources: documents, knowledge graphs, APIs, feature stores",
      "Vector search and filters (freshness, permissions, quality)",
      "Tool adapters for third-party capabilities",
      "Caching and cost-aware retrieval strategies",
    ],
    callout: "Right context, right time — with cost and policy in mind",
  },

  // 7 — LLM Workers (title-content)
  {
    id: "title-content:llm-workers",
    title: "LLM Workers & Execution Guardrails",
    bullets: [
      "Batching/streaming, retries with backoff and circuit breakers",
      "Guardrails: schema constraints, refusal handling, content filters",
      "Evaluation hooks: automatic metrics + human-in-the-loop gates",
    ],
    callout: "Operational reliability meets safety and quality",
  },

  // 8 — External Integrations (title-content)
  {
    id: "title-content:external-integrations",
    title: "External Interactions",
    bullets: [
      "AuthN/Z provider for secure access and scoped context",
      "Storage/Vector DB for context and artifacts",
      "3rd‑party APIs via adapter layer (tooling, RAG functions)",
      "Webhooks/event bus for notifications and pipeline triggers",
    ],
    callout: "Pluggable integrations preserve core simplicity",
  },

  // 9 — Observability & Governance (title-content)
  {
    id: "title-content:observability",
    title: "Observability & Governance",
    bullets: [
      "Tracing spans per step with correlation IDs",
      "Structured logs & SLO metrics (latency, error rate, cost)",
      "Prompt lineage: inputs, transforms, outputs, approvals",
      "Policy enforcement, privacy controls, and audit trails",
    ],
    callout: "Trust requires visibility and control",
  },

  // 10 — Reliability & Cost Controls (two-column)
  {
    id: "two-column:reliability-cost",
    title: "Reliability & Cost Controls",
    bullets: [
      "Caching: template fragments, retrieval results, model responses",
      "Fallbacks: provider failover, model tiering, graceful degradation",
      "Budgets & quotas: team/feature ceilings, alerts, backpressure",
      "Progressive enhancement: stream results early, refine when needed",
    ],
    callout: "Balance performance, quality, and spend",
  },

  // 11 — Security & Compliance (title-content)
  {
    id: "title-content:security",
    title: "Security & Compliance",
    bullets: [
      "PII minimization and redaction in context and logs",
      "Secrets isolation and scoped credentials for tools",
      "Tenant isolation and RBAC across components",
      "Data retention, export controls, and audit readiness",
    ],
    callout: "Security by design across data, code, and operations",
  },

  // 12 — Deployment & Environments (title-content)
  {
    id: "title-content:deployment",
    title: "Deployment & Environments",
    bullets: [
      "Dev/Stage/Prod parity with feature flags and experiments",
      "Blue/green or canary deployments for safe rollouts",
      "Config-as-code for policies, templates, and tools",
    ],
    callout: "Ship safely; measure and iterate quickly",
  },

  // 13 — Roadmap (title-content)
  {
    id: "title-content:roadmap",
    title: "Roadmap Highlights",
    bullets: [
      "Deeper evaluation loops (automatic + human‑in‑the‑loop)",
      "Cost controls and advanced caching strategies",
      "Template marketplace, versioning, and governance workflows",
      "Tooling SDKs and richer policy languages",
    ],
    callout: "Design for evolution, not perfection",
  },

  // 14 — Closing (title-content)
  {
    id: "title-content:closing",
    title: "Key Takeaways",
    bullets: [
      "Composable templates + orchestrated context → robust prompts",
      "Observability and governance unlock trust and scale",
      "Modular components streamline integration and iteration",
    ],
    callout: "Adaptive, auditable prompt generation at scale",
  },
];
