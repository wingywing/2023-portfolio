// Case studies shown on the home page, in display order.
//
// Ordering follows what hiring managers report weighing most: work with
// verified outcomes and the research behind it leads, then design systems and
// craft depth, then self-directed and print pieces. Reorder this array to
// reorder the grid.
//
// Most entries mirror notion.wingpang.com; the rest are earlier projects that
// predate the Notion database, plus work published on a client site.
//
// `roles` drives the Topics filter — keep those strings in sync with the Role
// multi-select in Notion so the two don't drift.
export default [
    {
        slug: "rail-bulk-transport",
        title: "A live operations app teams reach for every shift",
        brief: "Turning locomotive telemetry into a live operations app that planners adopted on release, and the design system that halved the digital team's design time.",
        caption: "UX, UI, Design system, Product strategy",
        client: "Rail and bulk transport",
        timeframe: "Ongoing",
        type: "Dashboard",
        roles: ["UX Design", "UI Design", "Design System", "Product Strategy"],
        tools: ["Figma"],
        url: "https://www.digizoo.com.au/work/rail-bulk-transport",
        img: "/assets/img/home/rail-bulk-transport.png",
        date: "2026-09-01"
    },
    {
        slug: "asset-mapping",
        title: "Transforming a desktop-only logistics platform for mobile users",
        brief: "A cost-conscious redesign that put a previously desktop-only asset mapping tool in the hands of frontline logistics workers, without compromising technical feasibility.",
        caption: "UX, UI, Mobile conversion",
        client: "Logistics",
        timeframe: "1 month",
        type: "Mobile",
        roles: ["UX Design", "UI Design"],
        tools: ["Figma", "Miro", "Google Analytics"],
        url: "/projects/asset-mapping/",
        img: "/projects/asset-mapping/cover.png",
        date: "2025-08-01"
    },
    {
        slug: "legacy-conversion",
        title: "Conversion and consolidation from a legacy to modern experience",
        brief: "A research-led integration of data sources that cut the number of platforms and the context-switching a frontline worker needs to get through their day.",
        caption: "UX, UI, User research",
        client: "Logistics",
        timeframe: "1 month",
        type: "Mobile",
        roles: ["UX Design", "UI Design"],
        tools: ["Figma", "Miro", "Google Analytics"],
        url: "/projects/legacy-conversion/",
        img: "/projects/legacy-conversion/cover.png",
        date: "2025-11-01"
    },
    {
        slug: "victorian-reports",
        title: "Accessible platform redesign for the Victorian Reports",
        brief: "An accessible, mobile-responsive overhaul of the Victorian Reports platform, so legal professionals can access and purchase the Victorian Law Reports online.",
        caption: "UI/UX, HTML, SASS, React",
        client: "Legal/Government",
        timeframe: "3 months",
        type: "Website",
        roles: ["UX Design", "UI Design", "Frontend Development", "Branding", "Accessibility"],
        tools: ["Figma", "Miro", "Google Analytics"],
        url: "/projects/victorian-reports/",
        img: "/projects/victorian-reports/cover.png",
        date: "2025-04-01"
    },
    {
        slug: "ai-tool-suite",
        title: "Automating document and presentation styling with a tool suite",
        brief: "A tool suite that automates the styling of documents and slide decks, cutting the time the sales team needs to send a Digizoo-branded SoW.",
        caption: "Frontend development, Product strategy, Design system",
        client: "Digizoo",
        timeframe: "3 months",
        type: "AI Ops",
        roles: ["Frontend Development", "Product Strategy", "Branding", "Design System", "AI Tooling"],
        tools: ["Claude Code CLI", "Git"],
        url: "/projects/ai-tool-suite/",
        img: "/projects/ai-tool-suite/cover.png",
        date: "2026-08-01"
    },
    {
        slug: "openlaw",
        title: "Scalable design system for a legal non-profit",
        brief: "A scalable design system for Open Law, a BarNet non-profit initiative aiming to improve access to legal information through a collection of digital tools.",
        caption: "Design system and branding",
        client: "Open Law",
        timeframe: "Ongoing",
        type: "Design System",
        roles: ["UI Design", "Design System", "Branding", "Frontend Development", "Graphic Design"],
        tools: ["Figma", "Illustrator"],
        url: "/projects/openlaw/",
        img: "/assets/img/home/open-law.png",
        date: "2023-06-01"
    },
    {
        slug: "darlo",
        title: "Web design for a historical project about Darlinghurst",
        brief: "An award-winning collaboration telling the story of Darlinghurst's Liverpool Street, built as a static site with archival imagery and an interactive timeline.",
        caption: "Web design, HTML, SASS",
        client: "Darlo Stories",
        timeframe: "6 months (part-time)",
        type: "Website",
        roles: ["UI Design", "Frontend Development"],
        tools: ["Figma", "Illustrator"],
        url: "/projects/darlo/",
        img: "/assets/img/home/darlinghurst.png",
        date: "2023-01-01"
    },
    {
        slug: "digizoo-website",
        title: "Website rebranding for Digizoo, with dynamic heroes",
        brief: "An Astro-based website with time-gated hero sections for event campaigns, rebuilt from the ground up to reflect Digizoo's identity.",
        caption: "UX, UI, Branding, Astro",
        client: "Digizoo",
        timeframe: "2 weeks",
        type: "Website",
        roles: ["UX Design", "UI Design", "Branding", "AI Tooling"],
        tools: ["Git", "Claude Code CLI"],
        url: "/projects/digizoo-website/",
        img: "/projects/digizoo-website/cover.png",
        date: "2026-06-30"
    },
    {
        slug: "zooid-cards",
        title: "Celebrating Digizoo's 10 year anniversary with ZooID cards",
        brief: "Physical merchandise designed to commemorate Digizoo's 10 year anniversary and spark a bit of joy with bespoke memorabilia.",
        caption: "Branding, Graphic design, Print",
        client: "Digizoo",
        timeframe: "1 month",
        type: "Print Design",
        roles: ["Branding", "Graphic Design"],
        tools: ["Microsoft Forms", "InDesign", "Aseprite"],
        url: "/projects/zooid-cards/",
        img: "/projects/zooid-cards/cover.png",
        date: "2026-05-01"
    },
    {
        slug: "climasaur",
        title: "Mobile app concept for climate activism",
        brief: "An engaging mobile experience that integrates brand design, user interface design and user research to empower climate action in an innovative way.",
        caption: "UX, UI, Branding, Illustration",
        client: "Self-directed",
        timeframe: "6 week sprint",
        type: "Mobile",
        roles: ["UX Design", "UI Design", "Branding", "Graphic Design"],
        tools: ["Figma", "Illustrator", "Procreate"],
        url: "/projects/climasaur/",
        img: "/assets/img/home/climasaur.png",
        date: "2024-05-01"
    }
]
