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
