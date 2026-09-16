import caseStudies from "./caseStudies.js"

// pixelarticons glyph per role. Roles without an entry fall back to `label`.
const icons = {
    "UX Design": "users",
    "UI Design": "layout",
    "Frontend Development": "code",
    "Branding": "label",
    "Design System": "grid-2x2-2",
    "Accessibility": "human",
    "Graphic Design": "image",
    "Product Strategy": "chart",
    "AI Tooling": "robot"
}

// Preferred display order; anything else is appended alphabetically.
const order = Object.keys(icons)

const used = [...new Set(caseStudies.flatMap((study) => study.roles))]

used.sort((a, b) => {
    const ai = order.indexOf(a)
    const bi = order.indexOf(b)
    if (ai === -1 && bi === -1) return a.localeCompare(b)
    if (ai === -1) return 1
    if (bi === -1) return -1
    return ai - bi
})

export default used.map((role) => ({
    name: role,
    // Slug is what the markup matches on, so casing and spaces can't bite us.
    slug: role.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
    icon: icons[role] || "label",
    count: caseStudies.filter((study) => study.roles.includes(role)).length
}))
