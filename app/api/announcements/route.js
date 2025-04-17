import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    const announcements = await prisma.announcement.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    });

    return NextResponse.json(announcements);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch announcements' },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const data = await request.json();
    const announcement = await prisma.announcement.create({
      data: {
        title: data.title,
        content: data.content,
        time: data.time
      }
    });

    return NextResponse.json(announcement);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create announcement' },
      { status: 500 }
    );
  }
}

export async function PUT(request) {
  try {
    const data = await request.json();
    const announcement = await prisma.announcement.update({
      where: { id: data.id },
      data: {
        title: data.title,
        content: data.content,
        time: data.time
      }
    });

    return NextResponse.json(announcement);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to update announcement' },
      { status: 500 }
    );
  }
}

export async function DELETE(request) {
  try {
    const data = await request.json();
    await prisma.announcement.delete({
      where: { id: data.id }
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to delete announcement' },
      { status: 500 }
    );
  }
}