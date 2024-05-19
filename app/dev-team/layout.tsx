import DevteamLayout from '@/components/layouts/DevteamLayout'

export const metadata = {
  title: 'ЛИАД | Команда разработчиков',
}

export default function DevteamRootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <DevteamLayout>{children}</DevteamLayout>
}
