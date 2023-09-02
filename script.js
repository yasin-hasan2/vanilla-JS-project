

const postCategory = async () => {
    const response = await fetch("https://openapi.programming-hero.com/api/videos/categories")
    const data = await response.json();

    const categoryList = document.getElementById('category');

    const dataInfo = data.data

    dataInfo.forEach((category) => {
        const div = document.createElement('div');
        div.innerHTML = `
        <a onclick="categoryType('${category.category_id}')" class="tab tab-bordered">${category.category}</a>
        `;
        categoryList.appendChild(div)
    });
    //console.log(dataInfo)
}

const categoryType = async (category_id) => {
    // console.log(category_id)
    const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${category_id}`)
    const data = await response.json();
    //const dataEmpty = data.data
    // console.log(data.data.length)

    // if (data.data.length = 0) {
    //     console.log('empty')
    // }


    const cardContainer = document.getElementById('card_container')
    cardContainer.innerHTML = "";
    //      <img class="w-4" src="badge.png" alt=""> 

    data.data.forEach((videos) => {


        const badge = videos.authors[0].verified ? '<img class="w-4" src="badge.png" alt="">' : "";
        // console.log(videos)
        const time = videos.others.posted_date ? videos.others.posted_date : ""
        // const timeConvertMinute = Math.floor(timeDataSacond / 60);
        // const timeConvertHours = Math.floor(timeDataSacond / 60)
        // const hours = timeConvertHours % 60
        // const seconds = timeConvertMinute % 60;
        // const minutes = timeConvertMinute % 60
        // const times = hours
        // console.log(hours, minutes, seconds)

        const div = document.createElement('div')
        div.innerHTML = `
                      <div class="card  bg-base-100 shadow-xl ">
                    <div class="relative">
                        <figure >
                            <img class="h-48 w-full rounded-lg"  src=${videos.thumbnail} alt="Shoes" />
                        </figure>
                        <p
                            class="absolute top-36 right-3 bg-slate-950 font-normal text-sm text-[#FFFFFF] p-1 rounded-lg">
                            ${time}
                        </p>
                    </div>
                    <div class="card-body">
                        <div class="card-footer  mt-5">
                            <div class="flex">
                                <div>
                                    <div class="avatar online">
                                        <div class="w-8 rounded-full">
                                            <img
                                                src=${videos.authors[0].profile_picture} />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <p class="font-bold text-base pl-4">${videos.title}
                                    </p>

                                    <div class="mt-4 space-y-2 pl-4">
                                        <div class="flex gap-1">
                                            <h3 class="font-normal text-sm text-[#171717B2]">${videos.authors[0].profile_name}</h3>
                                            ${badge}
                                        </div>
                                        <p>${videos.others.views} views</p>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
        `
        cardContainer.appendChild(div);
    });
};


// function categoryType(1003) {
//     const div = document.createElement('div')
//     div.innerHTML = `

//     `
// }


postCategory();

categoryType(1000);