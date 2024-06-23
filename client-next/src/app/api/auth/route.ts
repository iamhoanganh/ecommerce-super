
export async function POST(request: Request) {
    const req: {sessionToken: string} = await request.json()
    const token = req?.sessionToken
    if (!token) {
      return Response.json({mes: 'Khong nhan duoc token'}, {
        status: 401,
      })
    }
    return Response.json(req, {
        status: 200,
        headers: { 'Set-Cookie': `sessionToken=${token}; Path=/; HttpOnly` },
    })
  }