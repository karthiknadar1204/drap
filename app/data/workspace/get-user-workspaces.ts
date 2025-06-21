import { prisma } from "@/lib/db";
import { userRequired } from "../user/is-user-authenticated";

export const getUserWorkspaces = async () => {
    try{
        const {user}=await userRequired()
    
        if(!user) return {
            success: false,
            error: true,
            message: "User not authenticated",
            status: 401,
        }
    
        const workspaces=await prisma.user.findUnique({
            where:{id:user.id},
            include:{
                workspaces:{
                    select:{
                        id:true,
                        userId:true,
                        workspaceId:true,
                        accessLevel:true,
                        createdAt:true,workspace:{select:{name:true}}
                    },
                },
            },
        });

        return {
            success:true,
            error:false,
            message:"User workspaces fetched successfully",
            status:200,
            data:workspaces,
        }
    } catch(error){
        console.log(error)
        return{
            success:false,
            error:true,
            message:"Failed to fetch user workspaces",
            status:500,
        }
    }
}