import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    const activities = await prisma.activity.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    });

    return NextResponse.json(activities);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch activities' },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const data = await request.json();
    const activity = await prisma.activity.create({
      data: {
        title: data.title,
        date: data.date,
        time: data.time,
        location: data.location,
        image: data.image,
        description: data.description
      }
    });

    return NextResponse.json(activity);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create activity' },
      { status: 500 }
    );
  }
}

export async function PUT(request) {
  try {
    const data = await request.json();
    const activity = await prisma.activity.update({
      where: { id: data.id },
      data: {
        title: data.title,
        date: data.date,
        time: data.time,
        location: data.location,
        image: data.image,
        description: data.description
      }
    });

    return NextResponse.json(activity);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to update activity' },
      { status: 500 }
    );
  }
}

export async function DELETE(request) {
  try {
    const data = await request.json();
    await prisma.activity.delete({
      where: { id: data.id }
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to delete activity' },
      { status: 500 }
    );
  }
}