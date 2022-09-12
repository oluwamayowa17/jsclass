const fetchMe = document.getElementById('fetchMe')

async function fetchData(){
    const responce = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await responce.json()

    console.log(data);

    // Map

    let display;
    data.map((item) => {
        display += `
        <h2>${item.title}</h2>
        `
    })
    
    fetchMe.innerHTML = display;
}
fetchData()