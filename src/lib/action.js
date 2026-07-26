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

export const updateIdea = async(ideaId, modifiedIdea)=>{
    const res = await fetch(`http://localhost:5000/ideas/${ideaId}`, {
        method: "PATCH",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(modifiedIdea),
    });
    const result = res.json();
    revalidatePath("/ideas");
    revalidatePath("/my-ideas");
    return result;
}

// comments api
export const postComment = async(comment, ideaId)=>{
    const res = await fetch(`http://localhost:5000/comments`, {
        method: "POST",
        headers:{
            "content-type": "application/json",
        },
        body: JSON.stringify(comment)
    })
    const result = res.json();
    revalidatePath(`ideaDetails/${ideaId}`)
    return result;
};

export const updateComment = async(id, modifiedComment)=>{
    const res = await fetch(`http://localhost:5000/comments/${id}`,{
        method: "PATCH",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(modifiedComment)
    })
    revalidatePath()
}

