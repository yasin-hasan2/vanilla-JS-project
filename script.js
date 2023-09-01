

const postCategory = async () => {
    const response = await fetch("https://openapi.programming-hero.com/api/videos/category/1000#downloadJSON=true")
    const data = await response.json();
    console.log(data)
}
postCategory()