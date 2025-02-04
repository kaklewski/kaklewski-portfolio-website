export function scrollToSection(sectionName: string) {
  const section = document.getElementById(sectionName)
  section?.scrollIntoView({ behavior: 'smooth' })
}
