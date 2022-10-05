export const fetchData = async(url) => {
    const result = await fetch(url);
    const data = await result.json();
    return JSON.parse(data);
  }
