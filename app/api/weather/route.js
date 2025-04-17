import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    const weather = await prisma.weather.findFirst({
      orderBy: {
        createdAt: 'desc'
      }
    });

    return NextResponse.json(weather);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch weather data' },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const data = await request.json();
    const weather = await prisma.weather.create({
      data: {
        temp: data.temp,
        condition: data.condition
      }
    });

    return NextResponse.json(weather);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create weather data' },
      { status: 500 }
    );
  }
}