import clientPromise from '@/lib/mongodb'
import { getDbAndReqBody } from '@/lib/utils/api-routes'
import { NextResponse } from 'next/server'

export async function GET(req: Request) {
  try {
    const { db } = await getDbAndReqBody(clientPromise, null)
    const url = new URL(req.url)
    const limit = url.searchParams.get('limit') || 15
    const offset = url.searchParams.get('offset') || 0

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
      const examples = await db.collection(collection).find().toArray()

      return examples
    }
    const [examples] = await Promise.allSettled([
      getFilteredCollection('examples'),
    ])

    if (examples.status !== 'fulfilled') {
      return NextResponse.json({
        count: 0,
        items: [],
      })
    }

    const allExamples = [...examples.value]

    return NextResponse.json({
      count: allExamples.length,
      items: allExamples.slice(+offset, +limit),
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
