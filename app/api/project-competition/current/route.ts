import clientPromise from '@/lib/mongodb'
import { getDbAndReqBody } from '@/lib/utils/api-routes'
import { NextResponse } from 'next/server'

export async function GET(req: Request) {
  try {
    const { db } = await getDbAndReqBody(clientPromise, null)
    const url = new URL(req.url)
    const limit = url.searchParams.get('limit') || 12
    const offset = url.searchParams.get('offset') || 0
    const status = 'current'

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
      const competitions = await db
        .collection(collection)
        .find({ status })
        .toArray()

      return competitions
    }
    const [competitions] = await Promise.allSettled([
      getFilteredCollection('competition'),
    ])

    if (competitions.status !== 'fulfilled') {
      return NextResponse.json({
        count: 0,
        items: [],
      })
    }

    const allCompetitions = [...competitions.value]

    return NextResponse.json({
      count: allCompetitions.length,
      items: allCompetitions.slice(+offset, +limit),
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
