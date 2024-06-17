import { corsHeaders } from '@/constants/corsHeaders'
import clientPromise from '@/lib/mongodb'
import { getDbAndReqBody } from '@/lib/utils/api-routes'
import { NextResponse } from 'next/server'

export async function GET(req: Request) {
  try {
    const { db } = await getDbAndReqBody(clientPromise, null)
    const url = new URL(req.url)
    const rangeParam = url.searchParams.get('range') || JSON.stringify([0, 4])
    const sortParam =
      url.searchParams.get('sort') || JSON.stringify(['name', 'ASC'])
    const range = JSON.parse(rangeParam)
    const sort = JSON.parse(sortParam)

    const getFilteredCollection = async (collection: string) => {
      const events = await db
        .collection(collection)
        .find()
        .sort({
          [sort[0] === 'id' ? '_id' : sort[0]]: sort[1] === 'ASC' ? 1 : -1,
        })
        .toArray()

      return events
    }

    const [events] = await Promise.allSettled([getFilteredCollection('events')])

    if (events.status !== 'fulfilled') {
      return NextResponse.json(
        {
          count: 0,
          items: [],
        },
        corsHeaders
      )
    }

    const allEvents = [...events.value]

    return NextResponse.json(
      {
        count: allEvents.length,
        items: allEvents
          .slice(range[0], range[1])
          .map((item) => ({ ...item, id: item._id })),
      },
      corsHeaders
    )
  } catch (error) {
    throw new Error((error as Error).message)
  }
}

export const dynamic = 'force-dynamic'
