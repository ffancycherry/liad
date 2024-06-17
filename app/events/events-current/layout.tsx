import EventsLayout from '@/components/layouts/EventsLayout'

export const metadata = {
  title: 'ЛИАД | Актуальные мероприятия',
}

export default function EventsRootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <EventsLayout>{children}</EventsLayout>
}
