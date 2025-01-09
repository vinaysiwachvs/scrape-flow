import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import React from "react";
import Editor from "../../_component/Editor";

async function page({ params }: { params: { workflowId: string } }) {
  const { workflowId } = params;
  const { userId } = await auth();
  if (!userId) {
    return <div className="">Unauthenticated</div>;
  }

  const workflow = await prisma.workflow.findUnique({
    where: { id: workflowId, userId },
  });

  if (!workflow) {
    return <div className="">Workflow not found</div>;
  }

  return <Editor workflow={workflow} />;
}

export default page;
