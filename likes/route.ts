import { NextResponse } from "next/server";

let likes = 99

export async function GET() {
    return NextResponse.json({ likes })
}

export async function POST(request: Request) {
    const { amount } = await request.json()
    
    
    if (amount) {
        likes += Number(amount)
    }

    return NextResponse.json({ likes })
}