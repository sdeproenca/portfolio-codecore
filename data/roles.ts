export type LinkItem = { label: string; href: string };

export type Role = {
  id: string;
  entity: string;
  company: string;
  title: string;
  period: string;
  context: string;
  stamp: string;
  sections: { heading: string; body: string }[];
  outcomes: string[];
  stack: string;
  skills: string;
  links: LinkItem[];
};

export const ROLES: Record<string, Role> = {
  "andromeda": {
    id: "andromeda",
    entity: "ANDROMEDA_PROTOCOL",
    company: "ANDROMEDA PROTOCOL",
    title: "Product & Delivery Manager",
    period: "April 2024 to March 2026  //  Remote (ET/CET)",
    context: "Cosmos-based L1 + on-chain operating system",
    stamp: "I owned the product. aOS, a chain-agnostic operating system for building Web3 apps from modular smart contract components instead of custom Rust. Founding product team. Twenty months. Monthly releases the whole way through.",
    sections: [
      {
        heading: "TECHNICALLY AMBITIOUS. OPERATIONALLY FRAGMENTED.",
        body: "aOS is a real piece of engineering. Specs shifted weekly. Engineers across five timezones. Marketing, ecosystem, and dev all needed visibility into a roadmap being rebuilt mid-flight. And the community expected a release cadence we had not yet earned.",
      },
      {
        heading: "I BUILT THE OPERATING SYSTEM AROUND THE OPERATING SYSTEM.",
        body: "Release management in Linear with milestone-linked acceptance criteria and role-based ownership. Async weekly checkpoints. Exception-based reporting so blockers surfaced before they blocked. By the end I could tell you what was shipping, what was at risk, and what was being deferred, in one screen.",
      },
      {
        heading: "TWELVE CHAINS. ONE MONTH. ALL SHIPPED ON SCHEDULE.",
        body: "I led the upstream research analyzing the Cosmos ecosystem on technical fit, sequenced engineering, coordinated launch timing per chain so announcements did not cannibalize each other, and managed partner touchpoints directly.",
      },
      {
        heading: "AI IN THE OPERATING LAYER, BEFORE IT WAS COOL TO SAY THAT.",
        body: "I led a docs-trained dev assistant (Google AI Studio plus Claude API, exposed via a Telegram bot) that cut clarification threads in the dev community by roughly 40%. I wrote the PRD for an MCP server connecting LLMs directly to aOS contracts. The team ran on Cursor, Warp, CodeRabbit, Vercel v0, Copilot, and Perplexity. Every meaningful loop in our internal ops touched AI by the end of 2024.",
      },
      {
        heading: "THE ECOSYSTEM STUFF THAT HITS IN WAVES.",
        body: "2,600+ devs across two global hackathons. University workshops at fourteen schools including Harvard, MIT, Cornell, UC Berkeley, and Oxford. Release schedule kept ticking.",
      },
    ],
    outcomes: [
      "12 mainnet and testnet integrations in one month",
      "Monthly release cadence across roughly 20 releases",
      "1,500+ ADOs and 400+ dApps built on aOS by EOY 2024",
      "32 submissions and 3 winners at one hackathon. 378 apps and 1,084 ADOs at the other",
      "100+ new builders onboarded through Rise In and Web3 University",
    ],
    stack: "Linear, Notion, Slack, Discord, Telegram, Figma, GitHub. Google AI Studio, Claude API, Cursor, Vercel. Cosmos SDK, CosmWasm, IBC context.",
    skills: "Product ownership end-to-end. Technical program management. Multi-chain release orchestration. AI tooling for internal workflows. Developer relations. Hackathon operations. Distributed team management. PRD writing.",
    links: [
      { label: "Documentation", href: "https://docs.andromedaprotocol.io/andromeda" },
      { label: "Developer guides", href: "https://docs.andromedaprotocol.io/guides" },
      { label: "GitHub", href: "https://github.com/andromedaprotocol/andromeda-core" },
      { label: "Hackathon Hacker Handbook", href: "https://everlasting-leopon-136.notion.site/Hacker-Handbook-22b4bb66a03e80dab9bbfee3ef55350a" },
      { label: "Third-party explainer (Blockonomi)", href: "https://blockonomi.com/andromeda/" },
    ],
  },
  "parkfield": {
    id: "parkfield",
    entity: "PARKFIELD_LABS",
    company: "PARKFIELD COMMERCE",
    title: "Project & Operations Manager",
    period: "March 2023 to June 2024  //  Remote (ET)",
    context: "Shopify Plus agency, D2C and enterprise eCommerce",
    stamp: "Sole PM. 20+ simultaneous client projects. I joined and the operations layer was not there yet, so I built it.",
    sections: [
      {
        heading: "EVERYTHING THAT SHOULD HAVE BEEN A SYSTEM WAS SOMEONE'S MANUAL JOB.",
        body: "Status updates were tax. Onboarding was a checklist someone might remember. The agency was scaling client volume faster than coordination could keep up. The choice was: hire more coordinators, or remove the need for them.",
      },
      {
        heading: "I WENT WITH REMOVING THE NEED.",
        body: "Zapier as the orchestration core, wiring Slack into HubSpot into ClickUp into email as a single pipeline. A signed contract triggered onboarding, reviewer assignment, kickoff scheduling, and tracking. Zero human touch. Status updates flowed without anyone writing them. Role-based ClickUp views so every collaborator saw their own clean board. Meeting-recording AI fed auto-summaries into project notes. Change-log baked into every project so scope creep got logged and sized before it touched the team. This was 2023. Pre-agents-being-a-thing. Most of the leverage came from configuring existing tools to work like a system.",
      },
      {
        heading: "THE BRANDS SHIPPING UNDER THE NEW OPS LAYER.",
        body: "Builds, migrations, and CRO programs for Drake Waterfowl, igourmet (+30% sales), Better Rhodes (+31% conversion), Excel Blades (+57% revenue), Proraso (+153% sales), Napa Valley Wine Academy, Anne Cole, James Bark, and more. Contributed to Caseo.ai, a Shopify SEO assistant now running across 300+ Shopify stores.",
      },
    ],
    outcomes: [
      "Scaled to 20+ simultaneous clients without adding coordinators",
      "Cut delivery time roughly 20% through ClickUp standardization",
      "Manual status communication dropped roughly 40% in pilot flows",
      "Contributed to Caseo.ai, now powering 300+ Shopify stores",
    ],
    stack: "Zapier, ClickUp, Slack, HubSpot, Shopify Plus, Klaviyo, Otter.ai, Loom, Figma.",
    skills: "Operations design from scratch. Workflow automation. Multi-client portfolio management. CRO and A/B testing literacy. Customer Lifetime Value awareness. Scope management. Client communication. eCommerce delivery.",
    links: [
      { label: "Case studies", href: "https://www.parkfieldcommerce.com/case-studies" },
      { label: "Caseo.ai on Shopify App Store", href: "https://apps.shopify.com/caseo-ai-seo-assistant" },
    ],
  },
  "composable-finance": {
    id: "composable-finance",
    entity: "COMPOSABLE_FINANCE",
    company: "COMPOSABLE FINANCE",
    title: "Product Manager, XCVM",
    period: "June 2022 to December 2022  //  Remote (CET)",
    context: "Cross-chain DeFi infrastructure",
    stamp: "Led delivery of XCVM, a virtual machine connecting two major blockchain ecosystems. The MVP demo was the milestone. A conference six weeks out was the deadline.",
    sections: [
      {
        heading: "CROSS-ECOSYSTEM PRODUCT WORK IS A WEIRD BEAST.",
        body: "Engineering is half cryptography research, half protocol implementation. Marketing has to explain a category that does not have language yet. The bridging team is on its own roadmap. The MVP has to land at a conference six weeks out. And everyone is in a different timezone.",
      },
      {
        heading: "ROADMAP, MILESTONES, AND A TAILORED SCRUMBAN SETUP.",
        body: "I owned roadmap and milestone planning across engineering, design, bridging, and marketing. Kanban for engineering flow. Sprint structure for the launch sequence. Cross-team OKRs aligned to quarterly delivery, hitting roughly 90% completion. Engineer and management satisfaction both went up.",
      },
      {
        heading: "COSMOVERSE 2022: A LIVE CROSS-CHAIN SWAP ON STAGE.",
        body: "Medellín, September 2022. I coordinated MVP scope, the demo build, and external messaging. The live demo was a token swap orchestrated end-to-end through XCVM, walked through on stage by the tech lead and senior frontend dev on day one of the conference. The product later evolved into the Generalized CosmWasm VM and now lives on the Picasso Network.",
      },
    ],
    outcomes: [
      "MVP shipped and demoed live at Cosmoverse 2022",
      "Roughly 90% quarterly OKR completion",
      "Foundation for what became Picasso's Cross-Chain Virtual Machine",
    ],
    stack: "ClickUp, Notion, Figma, GitHub, Slack. Polkadot, Substrate, CosmWasm, IBC context.",
    skills: "Cross-ecosystem product delivery. Technical roadmap ownership. Scrumban. Live-event product launch. Distributed team coordination.",
    links: [
      { label: "XCVM introduction (with diagrams)", href: "https://composablefi.medium.com/introducing-the-composable-xcvm-building-interoperable-applications-on-composable-parachain-with-45e2dcbbd78d" },
      { label: "Cosmoverse build-up (Dev Log 13)", href: "https://medium.com/composable-finance/dev-log-13-b4e10099af84" },
      { label: "Live product: Picasso XCVM docs", href: "https://docs.picasso.network/products/cross-chain-virtual-machine" },
      { label: "Coverage (CoinSpeaker)", href: "https://www.coinspeaker.com/composable-cross-chain-ecosystem/" },
    ],
  },
  "advanced-blockchain": {
    id: "advanced-blockchain",
    entity: "ADVANCED_BLOCKCHAIN",
    company: "ADVANCED BLOCKCHAIN",
    title: "Product Design Team Manager",
    period: "March 2022 to June 2022  //  Remote (CET)",
    context: "Web3 R&D studio",
    stamp: "Managed the design team portfolio. 10+ parallel projects across the lab and live protocol initiatives, working directly with the COO, product owners, and tech leads.",
    sections: [
      {
        heading: "DESIGN AS A SHARED RESOURCE, PULLED IN TOO MANY DIRECTIONS.",
        body: "Internal R&D. External clients. Lab experiments. Live protocols. Capacity was opaque. Asks came in mixed formats. Re-work was high.",
      },
      {
        heading: "SINGLE POINT OF CONTACT, CAPACITY MAPPED AGAINST PIPELINE.",
        body: "I mapped team capacity against the project pipeline and surfaced conflicts to the COO with trade-off recommendations before they became delivery risks. Clear expectations. Transparent status. Explicit decisions instead of inherited assumptions. Portfolio included Panoptic (later backed by Coinbase Ventures, Uniswap Labs Ventures, Jane Street), Warp Finance, Instrumental Finance, and Polkadot ecosystem work.",
      },
      {
        heading: "POLKADOT DECODED 2022.",
        body: "Buenos Aires venue. Co-presented \"Building the ultimate UI/UX experience for Substrate native cross-chain DeFi applications\" in the community-voted program, alongside the Berlin, New York, and Hangzhou venues.",
      },
    ],
    outcomes: [
      "10+ design projects delivered on schedule",
      "Talk delivered at Polkadot Decoded 2022 (first in-person edition)",
      "Clean operating cadence handed off when Composable spun out",
    ],
    stack: "Figma, ClickUp, Notion, Slack, GitHub.",
    skills: "Resource and capacity management. Design ops. Stakeholder communication. Portfolio prioritization. Conference speaking.",
    links: [
      { label: "Polkadot Decoded 2022 talk", href: "https://youtu.be/tUSwXQBb94s" },
      { label: "Polkadot Decoded 2022 program", href: "https://decoded.polkadot.network/2022edition/" },
      { label: "Panoptic portfolio page", href: "https://www.advancedblockchain.com/portfolio/panoptic" },
    ],
  },
  "coderio": {
    id: "coderio",
    entity: "CODERIO",
    company: "CODERIO",
    title: "Program Manager & Scrum Master",
    period: "June 2021 to March 2022  //  Buenos Aires",
    context: "Nearshore engineering services",
    stamp: "Program Manager for the Data Management transformation at Assist Card. A 50-year-old multinational travel assistance company rebuilding its data infrastructure while sales doubled out of lockdown.",
    sections: [
      {
        heading: "THREE SQUADS, EVERY DEPARTMENT OF THE CLIENT.",
        body: "BI reporting, data warehouse, and storage maintenance. All needed to land, coordinated across marketing, finance, operations, customer service, and claims. I held Scrum ceremonies on the cadence side and acted as the bridge between Coderio's engineering squads and Assist Card's internal teams.",
      },
    ],
    outcomes: [
      "Foundational data infrastructure delivered on schedule",
      "Contributed to a doubling of post-lockdown sales",
    ],
    stack: "JIRA, Microsoft DevOps, Confluence, Power BI, Azure, Microsoft Teams.",
    skills: "Enterprise program management. Data transformation coordination. Multi-stakeholder communication. Scrum at scale. Legacy modernization.",
    links: [
      { label: "Coderio Data Governance Studio", href: "https://www.coderio.com/studios-expertise/data-governance-studio/" },
    ],
  },
  "buenos-aires-city-government": {
    id: "buenos-aires-city-government",
    entity: "GCBA_ARGENTINA",
    company: "BUENOS AIRES CITY GOVERNMENT",
    title: "Project Manager & Senior Analyst",
    period: "December 2017 to February 2021  //  Buenos Aires",
    context: "Ministry of Justice and Security",
    stamp: "The largest public security technology program in Argentina in the last decade. 10,000+ cameras. Real-time facial recognition across 300 of them. One of the earliest large-scale public deployments of what we would now call computer vision AI. National security award.",
    sections: [
      {
        heading: "THE CONTEXT.",
        body: "The city had roughly 40,000 outstanding fugitive warrants in the national database, a fragmented camera network, and no unified surveillance plus biometric matching system. No legal framework for one either. The mandate was to build it, under live oversight from the city's public oversight body, the national-level Ministry of Justice, and the courts.",
      },
      {
        heading: "WHAT I WAS RESPONSIBLE FOR.",
        body: "Project Manager on the rollout of 10,000+ CCTV cameras across 3,400 monitoring points, feeding into the city's Urban Monitoring Center. I coordinated across city police, national Justice ministry counterparts, the public oversight body, and external technology vendors. I started after a year as Chief of Staff Assistant in the same Ministry.",
      },
      {
        heading: "ONE OF THE FIRST AI SYSTEMS DEPLOYED AT THIS SCALE IN PUBLIC INFRASTRUCTURE.",
        body: "Real-time facial recognition across 300 cameras, integrated with a national fugitive database of roughly 46,000 records, identifying matches in under half a second. This was 2019, before \"AI\" was the framing for everything. The system operated under continuous judicial oversight and tight legal compliance.",
      },
      {
        heading: "DAY ONE: ELEVEN MATCHES, SEVEN ARRESTS.",
        body: "The system kept running. The system was later challenged in court on governance grounds and partially restricted in 2022 to 2023. That legal review came after my tenure. The program operated under judicial oversight throughout my time there.",
      },
    ],
    outcomes: [
      "595 fugitives identified in the first six weeks",
      "1,695+ total arrests during the program's active period",
      "Co-recipient of a national security award",
    ],
    stack: "Microsoft Project, government internal systems, biometric matching software, CCTV management platforms.",
    skills: "High-stakes program management. Multi-agency stakeholder coordination. Regulated and judicial environment delivery. Biometric data governance literacy. Public-sector technology rollout. Crisis-tolerant operations.",
    links: [
      { label: "Official launch announcement", href: "https://buenosaires.gob.ar/jefedegobierno/noticias/horacio-rodriguez-larreta-presento-el-nuevo-sistema-de-reconocimiento-facial" },
      { label: "Pre-launch coverage (La Nacion)", href: "https://www.lanacion.com.ar/seguridad/usaran-primera-vez-sistema-reconocimiento-facial-atrapar-nid2241360/" },
      { label: "Day-one arrest coverage (La Nacion)", href: "https://www.lanacion.com.ar/seguridad/ya-detuvieron-siete-profugos-sistema-reconocimiento-facial-nid2241562/" },
      { label: "Oversight body visit (Defensoria)", href: "https://defensoria.org.ar/entradas-cpdp/sistema-de-reconocimiento-facial-visita-al-centro-de-monitoreo-urbano/" },
    ],
  },
};
