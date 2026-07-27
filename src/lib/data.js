export const getAllIdeas = async()=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/ideas`);
    const result = await res.json();
    return result;
}

export const getIdeaById = async(id)=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/ideaDetails/${id}`);
    const result = await res.json();
    return result;
}

export const getIdeaByUserId = async(userId)=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/ideas/${userId}`);
    const resutl = await res.json();
    return resutl;
}

export const getAllComments = async(ideaId)=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/comments/idea/${ideaId}`);
    const result = await res.json();
    return result
}

export const getCommentsByUserId = async(userId)=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/comments/user/${userId}`);
    const result = await res.json();
    return result;
}
