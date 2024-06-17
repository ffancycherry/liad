import CompetitionsLayout from '@/components/layouts/CompetitionsLayout'

export const metadata = {
  title: 'ЛИАД | Конкурс проектов',
}

export default function CompetitionsRootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <CompetitionsLayout>{children}</CompetitionsLayout>
}
