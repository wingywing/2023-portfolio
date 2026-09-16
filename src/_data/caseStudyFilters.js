import caseStudies from "./caseStudies.js"

// Same slug rule as the roleSlug filter in .eleventy.js.
const slugify = (value) => String(value).toLowerCase().replace(/[^a-z0-9]+/g, "-")

// Preferred display order for topics; anything else is appended alphabetically.
const topicOrder = [
    "UX Design",
    "UI Design",
    "Frontend Development",
    "Branding",
    "Design System",
    "Accessibility",
    "Graphic Design",
    "Product Strategy",
    "AI Tooling"
]

const topics = [...new Set(caseStudies.flatMap((study) => study.roles))].sort((a, b) => {
    const ai = topicOrder.indexOf(a)
    const bi = topicOrder.indexOf(b)
    if (ai === -1 && bi === -1) return a.localeCompare(b)
    if (ai === -1) return 1
    if (bi === -1) return -1
    return ai - bi
})

// Newest year first, matching the mock.
const years = [...new Set(caseStudies.map((study) => String(study.date).slice(0, 4)))]
    .sort((a, b) => Number(b) - Number(a))

export default [
    {
        id: "topics",
        label: "Topics",
        control: "chips",
        options: topics.map((name) => ({
            name,
            value: slugify(name),
            count: caseStudies.filter((study) => study.roles.includes(name)).length
        }))
    },
    {
        id: "year",
        label: "Year",
        control: "dropdown",
        options: years.map((year) => ({
            name: year,
            value: year,
            count: caseStudies.filter((study) => String(study.date).startsWith(year)).length
        }))
    }
]
