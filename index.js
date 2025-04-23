function openCreateModule() {
    document.getElementById("create-blog-form").classList.remove("w-0");
    document.getElementById("create-blog-form").classList.add("w-full");
}

function closeCreateModule() {
    document.getElementById("create-blog-form").classList.remove("w-full");
    document.getElementById("create-blog-form").classList.add("w-0");
}

function openUpdateModule() {
    document.getElementById("update-blog-form").classList.remove("w-0");
    document.getElementById("update-blog-form").classList.add("w-full");
}

function closeUpdateModule() {
    document.getElementById("update-blog-form").classList.remove("w-full");
    document.getElementById("update-blog-form").classList.add("w-0");
}

// Btns
const createFormBtn = document.getElementById("create-form-btn") 
const closeBtn = document.getElementById("close-btn")


createFormBtn.addEventListener('click', openCreateModule)
closeBtn.addEventListener('click', closeCreateModule)

// 
const openBlogs = document.getElementsByName("open-blog")

console.log(openBlogs)