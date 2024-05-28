import clientPromise from '@/lib/mongodb'
import { getDbAndReqBody } from '@/lib/utils/api-routes'
import { ObjectId } from 'mongodb'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { db, reqBody } = await getDbAndReqBody(clientPromise, req)
    const isValidId = ObjectId.isValid(reqBody.id)

    if (!isValidId) {
      return NextResponse.json({
        message: 'Wrong product id',
        status: 404,
      })
    }

    const competitionItem = await db
      .collection('competition')
      .findOne({ _id: new ObjectId(reqBody.id) })

    return NextResponse.json({ status: 200, competitionItem })
  } catch (error) {
    throw new Error((error as Error).message)
  }
}

export const dynamic = 'force-dynamic'
