"use server"

import { revalidatePath } from "next/cache";

export const postIdea = async(idea)=>{
    const res = await fetch(`http://localhost:5000/ideas`, {
        method: "POST",
        headers:{
            "content-type": "application/json",
        },
        body: JSON.stringify(idea),
    })
    const result = await res.json();
    revalidatePath("/ideas")
    revalidatePath("/my-ideas")
    return result;
}