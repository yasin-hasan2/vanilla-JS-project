

const postCategory = async () => {
    const response = await fetch("https://openapi.programming-hero.com/api/videos/categories")
    const data = await response.json();

    const categoryList = document.getElementById('category');

    const dataInfo = data.data

    dataInfo.forEach((category) => {

        // console.log(category.category_id)
        const div = document.createElement('div');
        div.innerHTML = `
        <a onclick="categoryType('${category.category_id}')" class="tab tab-bordered">${category.category}</a>
        `;
        categoryList.appendChild(div)
    });
    // console.log(dataInfo)
}

const categoryType = async (category_id) => {
    //console.log(category_id)
    const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${category_id}`)
    const data = await response.json();
    //console.log(data.data)

    const cardContainer = document.getElementById('card_container')

    data.data.forEach((videos) => {
        console.log(videos)
        const div = document.createElement('div')
        div.innerHTML = `
                        <div class="card w-96 bg-base-100 shadow-xl">
                    <figure>
                        <img src=${videos?.thumbnail} alt="Shoes" />
                    </figure>
                    <div class="card-body">
                        <div class="card-footer">
                            <div class="flex">
                                <div>
                                    <div class="avatar online">
                                        <div class="w-8 rounded-full">
                                            <img
                                                src=${videos?.authors[0]?.profile_picture} />
                                        </div>
                                    </div>
                                </div>
                                <h3 class="text-base font-bold pl-3"> ${videos?.title}
                                </h3>

                            </div>
                            <div class="mt-4">
                                <h6 class="text-sm font-normal text-[#171717B2]">${videos?.authors[0]?.profile_name}</h6> <a href="">${videos?.authors[0]?.verified}</a>

                                <small>views:${videos?.others?.views}</small>
                            </div>
                        </div>
                    </div>
                </div>
        `
        cardContainer.appendChild(div)
    })
}

postCategory()