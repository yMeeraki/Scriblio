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
const createBlogBtn = document.getElementById("create-form-btn") 
const closeCreateBlogBtn = document.getElementById("close-btn")

const updateBlogBtn = document.getElementById("update-blog-btn")
const closeUpdateBlogBtn = document.getElementById("close-update-btn")

createBlogBtn.addEventListener('click', openCreateModule)
closeCreateBlogBtn.addEventListener('click', closeCreateModule)

updateBlogBtn.addEventListener('click', openUpdateModule)
closeUpdateBlogBtn.addEventListener('click',closeUpdateModule)

// factory funtion for blog lists
function blog(category, title, image, content) {
    return {
        category, title, image, content
    }
}

// Blog List
const blogList = [
    blog("Food", "DevFuel: The 10 - Minute Power Snack for Coders","", "Coding can be intense. Between solving bugs and shipping features, you might forget to eat — or worse, reach for junk food. Here’s a better alternative: a quick, nutritious snack you can whip up in 10 minutes. Try this combo: whole grain toast, mashed avocado, a drizzle of lemon, chili flakes, and a soft - boiled or poached egg.It's packed with fiber, healthy fats, and protein. Add some pumpkin seeds for crunch and magnesium — great for muscle and nerve function when you’ve been sitting for hours. Quick snacks like this keep your energy stable and your brain sharp, without the crash.Bonus: it's easy to prep between work sprints or when your code is compiling. Fuel your body like you fuel your logic — clean and efficient.")
]

// Open Blog Content
const openBlog = document.querySelectorAll('[name="open-blog-content"]')


function openBlogContent() {

    const content = this.nextElementSibling;
    console.log(content)
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
}

openBlog[0].addEventListener('click', openBlogContent)