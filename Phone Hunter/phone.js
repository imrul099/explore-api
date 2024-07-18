const loadPhone = async(searchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    const data = await res.json();
    const phones = data.data;
    displayPhones(phones)
}


const displayPhones = phones => {
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.textContent = '';

    //display show all button if there are more
    const showAllContainer = document.getElementById('show-all-container');
    if(phones.length > 12){
        showAllContainer.classList.remove('hidden');
    }
    else
    {
        showAllContainer.classList.add('hidden')
    }

    //display only first 12 phones;
    phones = phones.slice(0,12);

    
    phones.forEach(element => {
        console.log(element)
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card bg-gray-200 py-5 shadow-xl mt-10`;
        phoneCard.innerHTML = `
            <figure>
              <img
                src="${element.image}"
                alt="${element.brand}" />
            </figure>
            <div class="card-body">
              <h2 class="card-title">${element.phone_name}</h2>
              <p>${element.slug}</p>
              <div class="card-actions justify-end">
                <button class="btn btn-primary">Buy Now</button>
              </div>
            </div>
        `;
        phoneContainer.appendChild(phoneCard);
    });
}


const handleSearch = () => {
    const searchField = document.getElementById('input-field');
    const search = searchField.value;
    loadPhone(search);

    searchField.value = '';
}



const handleSearch2 = () => {
    const otherField = document.getElementById('other-field');
    const otherText = otherField.value;
    loadPhone(otherText);
    

    otherField.value = '';
}


loadPhone()