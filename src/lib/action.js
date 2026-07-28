"use server"

import { revalidatePath } from "next/cache"

export const postIdea = async (idea, token) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/ideas`, {
        method: "POST",
        headers: {
            authorization: `Bearer ${token}`,
            "content-type": "application/json",
        },
        body: JSON.stringify(idea),
    })
    const result = await res.json();
    revalidatePath("/ideas")
    revalidatePath("/my-ideas")
    return result;
}

export const updateIdea = async (ideaId, modifiedIdea, token) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/ideas/${ideaId}`, {
        method: "PATCH",
        headers: {
            authorization: `Bearer ${token}`,
            "content-type": "application/json",
        },
        body: JSON.stringify(modifiedIdea),
    });
    const result = res.json();
    revalidatePath("/ideas");
    revalidatePath("/my-ideas");
    return result;
}

export const deleteIdea = async (ideaId, token) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/ideas/${ideaId}`, {
        method: 'DELETE',
        headers: {
            authorization: `Bearer ${token}`,
            'content-type': 'application/json',
        }
    })
    const result = await res.json();
    revalidatePath('/ideas')
    revalidatePath('/my-ideas')
    return result;
}

// comments api
export const postComment = async (comment, ideaId, token) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/comments`, {
        method: "POST",
        headers: {
            authorization: `Bearer ${token}`,
            "content-type": "application/json",
        },
        body: JSON.stringify(comment)
    })
    const result = res.json();
    revalidatePath(`/ideaDetails/${ideaId}`)
    revalidatePath('/my-interactions')
    return result;
};

export const updateComment = async (modifiedComment, commentId, ideaId, token) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/comments/${commentId}`, {
        method: "PATCH",
        headers: {
            authorization: `Bearer ${token}`,
            "content-type": "application/json",
        },
        body: JSON.stringify(modifiedComment)
    })
    const result = await res.json();
    revalidatePath(`/ideaDetails/${ideaId}`)
    revalidatePath('/my-interactions')
    return result;
}

export const deleteComment = async (commentId, ideaId, token) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/comments/${commentId}`, {
        method: "DELETE",
        headers: {
            authorization: `Bearer ${token}`,
            "content-type": "application/json",
        }
    })
    const result = await res.json();
    revalidatePath(`/ideaDetails/${ideaId}`)
    revalidatePath('/my-interactions')
    return result;
}

