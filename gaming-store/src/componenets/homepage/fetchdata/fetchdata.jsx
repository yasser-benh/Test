export const fetchData = async () => { 
    const response = await fetch('http://localhost:3000/console')
    const data = await response.json()
    console.log(data)
    return data
 
}
