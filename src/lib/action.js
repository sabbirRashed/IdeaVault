"use server"

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const postIdea = async (idea) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/ideas`, {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(idea),
    })
    const result = await res.json();
    revalidatePath("/ideas")
    revalidatePath("/my-ideas")
    return result;
}

export const updateIdea = async (ideaId, modifiedIdea) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/ideas/${ideaId}`, {
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

export const deleteIdea = async (ideaId) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/ideas/${ideaId}`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json',
        }
    })
    const result = await res.json();
    revalidatePath('/ideas')
    revalidatePath('/my-ideas')
    return result;
}

// comments api
export const postComment = async (comment, ideaId) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/comments`, {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(comment)
    })
    const result = res.json();
    revalidatePath(`/ideaDetails/${ideaId}`)
    revalidatePath('/my-interactions')
    return result;
};

export const updateComment = async (modifiedComment, commentId, ideaId) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/comments/${commentId}`, {
        method: "PATCH",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(modifiedComment)
    })
    const result = await res.json();
    revalidatePath(`/ideaDetails/${ideaId}`)
    revalidatePath('/my-interactions')
    return result;
}

export const deleteComment = async (commentId, ideaId) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/comments/${commentId}`, {
        method: "DELETE",
        headers: {
            "content-type": "application/json",
        }
    })
    const result = await res.json();
    revalidatePath(`/ideaDetails/${ideaId}`)
    revalidatePath('/my-interactions')
    return result;
}

