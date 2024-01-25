import prisma from "@/app/utils/connectDB";
import { auth } from "@clerk/nextjs";

import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: NextRequest) {
  try {
    const { userId } = auth();
    const body = await request.json();
    const { id, title, description, taskEndDate, isCompleted, isImportant } =
      body;
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized", status: 401 });
    }
    const task = await prisma.task.update({
      where: {
        id,
      },
      data: {
        title,
        description,
        taskEndDate,
        isCompleted,
        isImportant,
        userId,
      },
    });
    return NextResponse.json(task);
  } catch (error) {
    console.log(`Error updating task: ${error}`);
    return NextResponse.json({ error: "Error updating task", status: 500 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    const { userId } = auth();
    const { id } = params;
    console.log(params);
    if (!userId) {
      return NextResponse.json({ error: "Unauthorize", status: 401 });
    }

    const task = await prisma.task.delete({
      where: { id },
    });
    return NextResponse.json(task);
  } catch (error) {
    console.log("Error deleting task", error);
    return NextResponse.json({ error: "Error deleting task", status: 500 });
  }
}
