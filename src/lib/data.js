export const getAllIdeas = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/ideas`);
    const result = await res.json();
    return result;
}

export const getIdeaById = async (id, token) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/ideaDetails/${id}`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    });
    const result = await res.json();
    return result;
}

export const getIdeaByUserId = async (userId, token) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/ideas/${userId}`, {
        headers: {
            authorization: `Bearer ${token}`,
        }
    });
    const resutl = await res.json();
    return resutl;
}

export const getAllComments = async (ideaId, token) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/comments/idea/${ideaId}`, {
        headers: {
            authorization: `Bearer ${token}`,
        }
    });
    const result = await res.json();
    return result
}

export const getCommentsByUserId = async (userId, token) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/comments/user/${userId}`, {
        headers: {
            authorization: `Bearer ${token}`
        },
    });
    const result = await res.json();
    return result;
}
