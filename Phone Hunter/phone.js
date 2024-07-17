const loadPhone = async() => {
    const res = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
    const data = await res.json();
    const phones = data.data;
    displayPhones(phones)
}


const displayPhones = phones => {
    const phoneContainer = document.getElementById('phone-container');
    phones.forEach(element => {
        console.log(element)
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card bg-gray-200 py-5 w-96 shadow-xl mt-10`;
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

loadPhone()