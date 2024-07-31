const loadCatagory = async() => {
    const response = await fetch('https://openapi.programming-hero.com/api/news/categories');
    const data = await response.json();
    const catagory = data.data.news_category;


    const catagoryBarContainer = document.getElementById('catagory-bar-container');
    catagory.forEach((item) =>{
        const div = document.createElement('div');

        div.innerHTML = `
        <button onclick="loadNews('${item.category_id}')" class="btn-primary">${item.category_name}</button>
        `;
        catagoryBarContainer.appendChild(div)
    })
};






const loadNews = async(newsId) => {
    const response = await fetch(`https://openapi.programming-hero.com/api/news/category/${newsId}`);
    const data = await response.json();
    const news = data.data;
    
    const newContainer = document.getElementById('news-container');

    newContainer.textContent = '';

    news.forEach((news) => {
        const div = document.createElement('div');
        div.classList.add('single-news');
        div.innerHTML = `
        <div class="border-2 border-red-200 rounded-md shadow-xl flex gap-2 items-center p-5">
          <div>
            <img class="w-[320px]" src="${news.image_url}" alt="" />
          </div>
          <div class="flex flex-col gap-4">
            <h3 class="text-2xl font-medium">
              ${news.title.slice(0,53)}
            </h3>
            <p class="text-xl">
              ${news.details.slice(0,100)}
            </p>
            <div class="flex gap-4 items-center">
              <div class="flex items-center gap-2">
                <img
                  class="w-12 h-12 rounded"
                  src="./images/profile-pic.png"
                  alt=""
                />
                <div class="text-md font-medium">
                  <h4>${news.author.name}</h4>
                  <p>${news.author.published_date}</p>
                </div>
              </div>
              <div class="flex gap-2 items-center">
                <i class="fa-solid fa-eye"></i>
                <h4 class="font-bold">${news.total_view}</h4>
              </div>
              <div>
                <button class="bg-red-200 text-black px-3 py-2  font-medium">Details</button>
              </div>
            </div>
          </div>
        </div>
        `;

        newContainer.appendChild(div)
    })
};


const handleSearch = () => {
  const textValue = document.getElementById('input-box');
  const value = textValue.value;
  if (value) {
    
  }
  else{
    alert('WARNING! Enter Valid Value')
  }

  textValue.value = ''
}

loadNews('01')

loadCatagory()