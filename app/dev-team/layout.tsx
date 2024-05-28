import DevteamLayout from '@/components/layouts/DevteamLayout'

export const metadata = {
  title: 'ЛИАД | Коллектив разработчиков',
}

export default function DevteamRootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <DevteamLayout>{children}</DevteamLayout>
}
