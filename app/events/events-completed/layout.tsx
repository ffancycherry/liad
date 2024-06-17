import EventsLayout from '@/components/layouts/EventsLayout'

export const metadata = {
  title: 'ЛИАД | Итоги мероприятий',
}

export default function EventsRootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <EventsLayout>{children}</EventsLayout>
}
