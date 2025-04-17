import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type');

    let services;
    switch (type) {
      case 'property':
        services = await prisma.propertyService.findMany();
        break;
      case 'life':
        services = await prisma.lifeService.findMany();
        break;
      case 'community':
        services = await prisma.communityService.findMany();
        break;
      default:
        const [propertyServices, lifeServices, communityServices] = await Promise.all([
          prisma.propertyService.findMany(),
          prisma.lifeService.findMany(),
          prisma.communityService.findMany()
        ]);
        services = {
          propertyServices,
          lifeServices,
          communityServices
        };
    }

    return NextResponse.json(services);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch services' },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const data = await request.json();
    let service;

    switch (data.serviceType) {
      case 'property':
        service = await prisma.propertyService.create({
          data: {
            title: data.title,
            description: data.description,
            icon: data.icon,
            type: data.type
          }
        });
        break;
      case 'life':
        service = await prisma.lifeService.create({
          data: {
            title: data.title,
            description: data.description,
            icon: data.icon,
            type: data.type
          }
        });
        break;
      case 'community':
        service = await prisma.communityService.create({
          data: {
            title: data.title,
            description: data.description,
            icon: data.icon,
            type: data.type
          }
        });
        break;
      default:
        return NextResponse.json(
          { error: 'Invalid service type' },
          { status: 400 }
        );
    }

    return NextResponse.json(service);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create service' },
      { status: 500 }
    );
  }
}

export async function PUT(request) {
  try {
    const data = await request.json();
    let service;

    switch (data.serviceType) {
      case 'property':
        service = await prisma.propertyService.update({
          where: { id: data.id },
          data: {
            title: data.title,
            description: data.description,
            icon: data.icon,
            type: data.type
          }
        });
        break;
      case 'life':
        service = await prisma.lifeService.update({
          where: { id: data.id },
          data: {
            title: data.title,
            description: data.description,
            icon: data.icon,
            type: data.type
          }
        });
        break;
      case 'community':
        service = await prisma.communityService.update({
          where: { id: data.id },
          data: {
            title: data.title,
            description: data.description,
            icon: data.icon,
            type: data.type
          }
        });
        break;
      default:
        return NextResponse.json(
          { error: 'Invalid service type' },
          { status: 400 }
        );
    }

    return NextResponse.json(service);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to update service' },
      { status: 500 }
    );
  }
}

export async function DELETE(request) {
  try {
    const data = await request.json();

    switch (data.serviceType) {
      case 'property':
        await prisma.propertyService.delete({
          where: { id: data.id }
        });
        break;
      case 'life':
        await prisma.lifeService.delete({
          where: { id: data.id }
        });
        break;
      case 'community':
        await prisma.communityService.delete({
          where: { id: data.id }
        });
        break;
      default:
        return NextResponse.json(
          { error: 'Invalid service type' },
          { status: 400 }
        );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to delete service' },
      { status: 500 }
    );
  }
}