import authApiRequest from "@/apiRequests/auth"
import { EntityError } from "@/lib/http"
import { cookies } from "next/headers"

export async function POST(request: Request) {
    const cookieStore = cookies()
    const sessionToken = cookieStore.get('sessionToken')
    // const token = req?.sessionToken
    if (!sessionToken) {
      return Response.json({mes: 'Khong nhan duoc token'}, {
        status: 401,
      })
    }
    try {
      const result = await authApiRequest.logoutFromNextServerToServer(sessionToken.value)
      return Response.json(result.payload, {
        status: 200,
        headers: {
          'Set-Cookie': 'sessionToken=; path=/'
        }
      })
    } catch (error) {
      if(error instanceof EntityError) {
        return Response.json(error.payload, {
          status: error.status
        })
      }
      else {
        return Response.json({message: 'Loi khong xac dinh'}, {
          status: 500
        })
      }
    }
  }