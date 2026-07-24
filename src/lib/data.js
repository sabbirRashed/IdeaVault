export const allIdeas = async()=>{
    const res = await fetch('http://localhost:5000/ideas');
    const result = await res.json();
    return result;
}
