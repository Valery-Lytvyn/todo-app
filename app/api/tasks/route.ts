import prisma from "@/app/utils/connectDB";
import { auth } from "@clerk/nextjs";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { userId } = auth();

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized", status: 401 });
    }
    const body = await request.json();
    const { title, description, taskEndDate, isCompleted, isImportant } = body;

    if (!title || !description || !taskEndDate) {
      return NextResponse.json({
        error: "Missing required fields",
        status: 400,
      });
    }

    if (title.length < 3) {
      return NextResponse.json({
        error: "Title must be at least 3 characters long",
        status: 400,
      });
    }

    const task = await prisma.task.create({
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
    console.log("ERROR CREATING TASK: ", error);
    return NextResponse.json({ error: "Error creating task", status: 500 });
  }
}

export async function GET(request: NextRequest) {
  try {
    const { userId } = auth();

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized", status: 401 });
    }
    const tasks = await prisma.task.findMany({
      where: {
        userId,
      },
    });
    return NextResponse.json(tasks);
  } catch (error) {
    console.log(`Error getting tasks: ${error}`);
    return NextResponse.json({ error: "Error getting tasks", status: 500 });
  }
}
