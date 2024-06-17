import ExamplesLayout from '@/components/layouts/ExamplesLayout'

export const metadata = {
  title: 'ЛИАД | Примеры статей',
}

export default function ExamplesRootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <ExamplesLayout>{children}</ExamplesLayout>
}
