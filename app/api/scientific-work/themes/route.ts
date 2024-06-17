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
      const themes = await db.collection(collection).find().toArray()

      return themes
    }
    const [themes] = await Promise.allSettled([getFilteredCollection('themes')])

    if (themes.status !== 'fulfilled') {
      return NextResponse.json({
        count: 0,
        items: [],
      })
    }

    const allThemes = [...themes.value]

    return NextResponse.json({
      count: allThemes.length,
      items: allThemes.slice(+offset, +limit),
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
