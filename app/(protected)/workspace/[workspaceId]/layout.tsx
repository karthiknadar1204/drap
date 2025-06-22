import { getUserWorkspaces } from "@/app/data/workspace/get-user-workspaces";
import { Navbar } from "@/components/navbar";
import { AppSidebarContainer } from "@/components/sidebar/app-sidebar-container";
import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar";
import { redirect } from "next/navigation";
import React from "react";

interface Props {
  children: React.ReactNode;
  params: Promise<{ workspaceId: string }>;
}
const WorkspaceIdLayout = async ({ children, params }: Props) => {
  const { data } = await getUserWorkspaces();
  const { workspaceId } = await params;

  if (data?.onboardingCompleted && !data?.workspaces) {
    redirect("/create-workspace");
  } else if (!data?.onboardingCompleted) {
    redirect("/onboarding");
  }

  return (
    <SidebarProvider>
      <div className="w-full flex bg-background h-screen">
        <AppSidebarContainer data={data as any} workspaceId={workspaceId} />

        <SidebarInset>
          <div className="flex items-start">
            <SidebarTrigger className="pt-3" />

            <Navbar
              id={data?.id}
              name={data?.name as string}
              email={data?.email as string}
              image={data?.image as string}
            />
          </div>

          <div className="p-0 md:p-4 pt-2">{children}</div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default WorkspaceIdLayout;
