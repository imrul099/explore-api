const loadPhone = async(searchText, isShowAll) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    const data = await res.json();
    const phones = data.data;
    displayPhones(phones, isShowAll)
}


const displayPhones = (phones, isShowAll) => {
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.textContent = '';

    //display show all button if there are more
    const showAllContainer = document.getElementById('show-all-container');
    if(phones.length > 12 && !isShowAll){
        showAllContainer.classList.remove('hidden');
    }
    else
    {
        showAllContainer.classList.add('hidden')
    }
    

    //display only first 12 phones if not showAll;
    if (!isShowAll) {
        phones = phones.slice(0,12);
    }
    

    
    phones.forEach(element => {
        //console.log(element)
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
                <button onclick="handleShowDetail('${element.slug}')" class="btn btn-primary">Show Details</button>
              </div>
            </div>
        `;
        phoneContainer.appendChild(phoneCard);
    });

    //hide 
    toggleLoading(false)
};

//

const handleShowDetail = async(id) => {
    //console.log(id)

    const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
    const data = await res.json();
    const phone = data.data;
    console.log(phone);

    showPhoneDetails(phone)
};


const showPhoneDetails = (phone) => {
    const showDetailsPhoneName = document.getElementById('show-details-phone-name');
    showDetailsPhoneName.innerText = phone.name;


    const showDetailsContainer = document.getElementById('show-details-container');
    showDetailsContainer.innerHTML = `
        <img src= "${phone.image}" alt= "">
        <p><span>Releage Date: ${phone?.releaseDate}</span></p>

        <p><span>Memory: ${phone.mainFeatures.memory}</span></p>
        <p><span>Display Size: ${phone.mainFeatures.displaySize}</span></p>
        <p><span>Chipset: ${phone.mainFeatures.chipSet}</span></p>


    `;




    //show modal
    show_modal_details.showModal()
}


const handleSearch = (isShowAll) => {
    const searchField = document.getElementById('input-field');
    const search = searchField.value;
    loadPhone(search, isShowAll);

    searchField.value = '';
}



const handleSearch2 = () => {
    toggleLoading(true)
    const otherField = document.getElementById('other-field');
    const otherText = otherField.value;
    loadPhone(otherText);
    

    otherField.value = '';
};


const toggleLoading = (isLoading) => {
    const loadingSpinner = document.getElementById('loading-spinner');
    if(isLoading){
        loadingSpinner.classList.remove('hidden')
    }
    else{
        loadingSpinner.classList.add('hidden')
    }
}


// handle show all;
const showAllHandle = () => {
    handleSearch(true);
}


loadPhone()