import clientPromise from '@/lib/mongodb'
import { getDbAndReqBody } from '@/lib/utils/api-routes'
import { NextResponse } from 'next/server'

export async function GET(req: Request) {
  try {
    const { db } = await getDbAndReqBody(clientPromise, null)
    const url = new URL(req.url)
    const limit = url.searchParams.get('limit') || 12
    const offset = url.searchParams.get('offset') || 0
    const isProjectsParam = url.searchParams.get('projects')

    if (isProjectsParam) {
      const getFilteredCollection = async (collection: string) => {
        const projects = await db.collection(collection).find().toArray()

        return projects
      }
      const [projects] = await Promise.allSettled([
        getFilteredCollection('projects'),
      ])

      if (projects.status !== 'fulfilled') {
        return NextResponse.json({
          count: 0,
          items: [],
        })
      }

      const allProjects = [...projects.value]

      return NextResponse.json({
        count: allProjects.length,
        items: allProjects.slice(+offset, +limit),
      })
    }

    return NextResponse.json({
      count: 0,
      items: [],
    })
  } catch (error) {
    throw new Error((error as Error).message)
  }
}
