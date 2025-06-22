import { prisma } from "@/lib/db";
import { userRequired } from "../user/is-user-authenticated";

export const getWorkspaceById = async (workspaceId: string) => {
  const { user } = await userRequired();

  const isUserMember = await prisma.workspaceMember.findUnique({
    where: {
      userId_workspaceId: {
        userId: user.id,
        workspaceId,
      },
    },
  });

  if (!isUserMember) {
    throw new Error("Unauthorized access");
  }

  const workspace = await prisma.workspace.findUnique({
    where: { id: workspaceId },
    include: {
      members: { select: { userId: true, accessLevel: true } },
    },
  });

  return { data: workspace };
};
