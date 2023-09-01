

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
    console.log(data.data)
}

postCategory()