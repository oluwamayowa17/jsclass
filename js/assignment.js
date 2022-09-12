// const fetchCustomers = document.getElementById('fetchCustomers')

// async function myCustomers(){
//     const customers = await fetch('https://randomuser.me/api/?results=50')
//     const data = await customers.json()

//     // console.log(data.results);

//     let displayCustomers;
    
//     data.results.map((item) => {
//         displayCustomers += `
//         <img src="${item.picture.large}" alt="" width="200px"/>
//         <h3>${item.name.title} ${item.name.first} ${item.name.last}</h3>
//         `
//     })

//     fetchCustomers.innerHTML = displayCustomers
// }

// myCustomers()

const search = document.getElementById('search')
const product = document.querySelectorAll('.card-body h5')

search.addEventListener('keydown', mySearch)


function mySearch(e){
    const text = e.target.value.toLowerCase()
    // console.log(text)

    product.forEach((item) => {
        if(item.textContent.toLowerCase() !== "" &&  item.textContent.toLowerCase().indexOf(text) !== -1){
            item.parentElement.style.display = 'block'
            
        }
        else{
            item.parentElement.style.display = 'none'
        }
    }) 
}

