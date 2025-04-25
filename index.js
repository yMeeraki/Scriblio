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
closeUpdateBlogBtn.addEventListener('click', closeUpdateModule)

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


// CRUD

// 1. For Create of CRUD
const createForm = document.getElementById('create-form')
const displayBlog = document.querySelector('#display-blog li')

//  Local Records from local storage
let records = JSON.parse(localStorage.getItem("records")) || []

//  Create
createForm.addEventListener('submit', function (event) {
    event.preventDefault()
    const title = document.getElementById("blog-titles-create").value
    const image = document.getElementById("blog-img-create").value
    const category = document.getElementById("blog-category-create").value
    const post = document.getElementById("short-blog-posts-create").value
    let editIndex = document.getElementById("edit-index").value
    console.log(title, image, category, post, editIndex)
    if (editIndex === "") {
        records.push(title, image, category, post)
    }
    else {
        records[parseInt(editIndex)] = { title, image, category, post }
        editIndex = ""
    }
})


// For Display of Blogs
function blogList() {
    displayBlog = ""
    records.array.forEach((blog, index) => {
        // Main Blog Card
        const main = document.createElement('div')
        main.className = "p-6 md:p-8 shadow-lg bg-secondary bg-opacity-50 text-white flex flex-col gap-4 hover:cursor-pointer transition-all delay-150 duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:shadow-tertiary rounded-xl"
        main.setAttribute("name","open-blog-content")
        
        const categorySpan = document.createElement("span");
        categorySpan.textContent = blog.category;
        categorySpan.className = "p-2 rounded font-extrathin tracking-widest uppercase size-10 text-white";

        // Add category-based color
        switch (blog.category.toLowerCase()) {
            case "food":
                categorySpan.classList.add("bg-green-500");
                break;
            case "travel":
                categorySpan.classList.add("bg-blue-500");
                break;
            case "lifestyle":
                categorySpan.classList.add("bg-purple-500");
                break;
            case "health":
                categorySpan.classList.add("bg-pink-500");
                break;
            case "tech":
                categorySpan.classList.add("bg-yellow-500");
                break;
            default:
                categorySpan.classList.add("bg-gray-500");
        }
        
        // Blog Title
        const h3Title = document.createElement('h3')
        h3Title.textContent = records.title
        h3Title.className = 'text-xl md:text-2xl font-semibold hover:text-accent capitalize'
        
        const p = document.createElement('p') 
        p.textContent = 'Curious? Click to see the full blog!'
        p.className = "text-sm md:text-base text-white/90 hover:text-accent"
        
        const div = document.createElement('div')
        
        //                     <p class="text-sm md:text-base text-white/90 hover:text-accent">
        //                         
        //                     </p>

        //                     <!-- Button Controls -->
        //                     <div class="flex justify-end gap-4">
        //                         <button id="update-blog-btn"
        //                             class="bg-tertiary text-black px-4 py-2 rounded hover:bg-accent transition font-medium">
        //                             Update
        //                         </button>
        //                         <button onclick="deleteBlog()"
        //                             class="bg-secondary px-4 py-2 rounded hover:bg-red-500 transition font-medium">
        //                             Delete
        //                         </button>
        //                     </div>
        //                 </div>
        //                 <div
        //                     class="bg-secondary md:text-base text-white/90 gap-5 p-6 md:p-8 rounded-xl shadow-lg bg-opacity-90 hidden transition-all delay-150 duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:shadow-accent">
        //                     <img src="./src/images/decluttering-my-closet-lifestyle.jpg" alt=""
        //                         class="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover">
        //                     <br>
        //                     <p class="font-thin">Your environment shapes your productivity. A clean, well-designed
        //                         workspace can make coding feel less like a chore and
        //                         more like a craft. Minimalism isn’t just aesthetic — it’s functional.

        //                         Start with the basics: a good chair, a tidy desk, and one monitor. Add ambient lighting
        //                         or a desk lamp with warm tones.
        //                         Introduce a small plant — even a tiny succulent — to breathe life into your setup. Keep
        //                         only essentials on your desk: a
        //                         notebook, a pen, headphones. Clutter creates mental noise.

        //                         Don’t forget sound: soft instrumental music or nature sounds can boost focus and reduce
        //                         anxiety. And when the day's
        //                         done, step away. Turn off your monitor, close your laptop, and reclaim your space.

        //                         A peaceful desk creates a peaceful mind — and in turn, better, cleaner code.</p>
        //                 </div>
        // `
    });
}