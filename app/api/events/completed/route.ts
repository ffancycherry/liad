import clientPromise from '@/lib/mongodb'
import { getDbAndReqBody } from '@/lib/utils/api-routes'
import { NextResponse } from 'next/server'

export async function GET(req: Request) {
  try {
    const { db } = await getDbAndReqBody(clientPromise, null)
    const url = new URL(req.url)
    const limit = url.searchParams.get('limit') || 12
    const offset = url.searchParams.get('offset') || 0
    const status = 'completed'

    {
      /*if (!isProjectsParam) {

      return NextResponse.json({
        status: 404,
        message: 'isProjectsParam required',
      })
    }

  if (isProjectsParam) {*/
    }
    const getFilteredCollection = async (collection: string) => {
      const events = await db.collection(collection).find({ status }).toArray()

      return events
    }
    const [events] = await Promise.allSettled([getFilteredCollection('events')])

    if (events.status !== 'fulfilled') {
      return NextResponse.json({
        count: 0,
        items: [],
      })
    }

    const allEvents = [...events.value]

    return NextResponse.json({
      count: allEvents.length,
      items: allEvents.slice(+offset, +limit),
    })
    {
      /*}

   return NextResponse.json({
      count: 0,
      items: [],
    })*/
    }
  } catch (error) {
    throw new Error((error as Error).message)
  }
}

export const dynamic = 'force-dynamic'
