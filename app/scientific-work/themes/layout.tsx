import ThemesLayout from '@/components/layouts/ThemesLayout'

export const metadata = {
  title: 'ЛИАД | Свободные темы',
}

export default function ThemesRootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <ThemesLayout>{children}</ThemesLayout>
}
