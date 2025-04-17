import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    const notices = await prisma.notice.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    });

    return NextResponse.json(notices);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch notices' },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const data = await request.json();
    const notice = await prisma.notice.create({
      data: {
        title: data.title,
        content: data.content,
        type: data.type
      }
    });

    return NextResponse.json(notice);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create notice' },
      { status: 500 }
    );
  }
}

export async function PUT(request) {
  try {
    const data = await request.json();
    const notice = await prisma.notice.update({
      where: { id: data.id },
      data: {
        title: data.title,
        content: data.content,
        type: data.type
      }
    });

    return NextResponse.json(notice);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to update notice' },
      { status: 500 }
    );
  }
}

export async function DELETE(request) {
  try {
    const data = await request.json();
    await prisma.notice.delete({
      where: { id: data.id }
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to delete notice' },
      { status: 500 }
    );
  }
}