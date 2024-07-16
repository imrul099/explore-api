function getAddress(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => loadData4(data))
}

function loadData4(users){
    const ol = document.getElementById('user-address');
    for(const user of users){
        const city = user.address.city;
        
        const li = document.createElement('li');
        li.innerText = city;
        ol.appendChild(li);
    }       
}
