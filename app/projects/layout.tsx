import ProjectsLayout from '@/components/layouts/ProjectsLayout'

export const metadata = {
  title: 'ЛИАД | Проекты',
}

export default function ProjectsRootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <ProjectsLayout>{children}</ProjectsLayout>
}
