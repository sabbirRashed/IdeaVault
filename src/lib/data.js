export const getAllIdeas = async()=>{
    const res = await fetch('http://localhost:5000/ideas');
    const result = await res.json();
    return result;
}

export const getIdeaById = async(id)=>{
    const res = await fetch(`http://localhost:5000/ideaDetails/${id}`);
    const result = await res.json();
    return result;
}

export const getAllComments = async(ideaId)=>{
    const res = await fetch(`http://localhost:5000/comments/${ideaId}`);
    const result = await res.json();
    return result
}

export const getCommentsByUserId = async(userId)=>{
    const res = await fetch(`http://localhost:5000/comments/${userId}`);
    const result = await res.json();
    return result;
}
