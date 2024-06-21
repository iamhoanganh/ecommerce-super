
export async function POST(request: Request) {
    const req = await request.json()
    const token = req?.payload?.accessToken
    if (!token) {
      return Response.json({mes: 'Khong nhan duoc token'}, {
        status: 401,
      })
    }
    return Response.json(req.payload, {
        status: 200,
        headers: { 'Set-Cookie': `sessionToken=${token}; Path=/; HttpOnly` },
    })
  }