

function openCreateModule() {
    document.getElementById("create-blog-form").classList.remove("w-0");
    document.getElementById("create-blog-form").classList.add("w-full");
}

function closeCreateModule() {
    document.getElementById("create-blog-form").classList.remove("w-full");
    document.getElementById("create-blog-form").classList.add("w-0");
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

// updateBlogBtn.addEventListener('click', openUpdateModule)
closeUpdateBlogBtn.addEventListener('click', closeUpdateModule)

// // Open Blog Content
// const openBlog = document.querySelectorAll('[name="open-blog-content"]')


// function openBlogContent() {

//     const content = this.nextElementSibling;
//     console.log(content)
//     if (content.style.display === "block") {
//         content.style.display = "none";
//     } else {
//         content.style.display = "block";
//     }
// }

// openBlog[0].addEventListener('click', openBlogContent)


// CRUD

// 1. For Create of CRUD
const createForm = document.getElementById('create-form')
const displayBlog = document.querySelector('#display-blog')

//  Local Records from local storage
let records = JSON.parse(localStorage.getItem("records")) || []

blogList(records)
//  Create
createForm.addEventListener('submit', function (event) {
    event.preventDefault()
    const title = document.getElementById("blog-titles-create").value

    const category = document.getElementById("blog-category-create").value
    const post = document.getElementById("short-blog-posts-create").value
    let editIndex = document.getElementById("edit-index").value
    const image = document.getElementById("blog-img-create").value;


    const newBlog = { title, category, post, image };

    if (editIndex === "") {
        records.push(newBlog)
    }
    else {
        records[parseInt(editIndex)] = newBlog
        editIndex = ""
    }
    createForm.reset()
    closeCreateModule()

    blogList(records)
})


// For Display of Blogs
function blogList(records) {
    displayBlog.innerHTML = ""
    records.forEach((blog, index) => {
        const li = document.createElement('li')

        // Main Blog Card
        const mainBlogCard = document.createElement('div')
        mainBlogCard.className = "focus:border focus:border-accent p-6 md:p-8 shadow-lg bg-secondary bg-opacity-50 text-white flex flex-col gap-4 hover:cursor-pointer transition-all delay-150 duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:shadow-tertiary rounded-xl"
        mainBlogCard.setAttribute("name", "open-blog-content")

        const categorySpan = document.createElement("span");
        categorySpan.textContent = blog.category;

        categorySpan.className = "p-2 rounded font-extrabold text-sm tracking-widest uppercase"

        // Blog Title
        const h3Title = document.createElement('h3')
        h3Title.textContent = blog.title
        h3Title.className = 'text-xl md:text-2xl font-semibold hover:text-accent capitalize'

        const p = document.createElement('p')
        p.textContent = 'Curious? Click to see the full blog!'
        p.className = "text-sm md:text-base text-white/90 hover:text-accent"

        // Button Controls
        const btnControls = document.createElement('div')
        btnControls.className = 'flex justify-end gap-4'

        const updateBtn = document.createElement('button')
        updateBtn.className = "bg-tertiary text-black px-4 py-2 rounded hover:bg-accent transition font-medium"
        updateBtn.setAttribute('id', 'update-blog-btn')
        updateBtn.addEventListener('click', () => {
            document.getElementById("update-blog-form").classList.remove("w-0");
            document.getElementById("update-blog-form").classList.add("w-full");
            updateBlog(index)
            const updateForm = document.getElementById("update-form")
            updateForm.onsubmit = function (e) {
                e.preventDefault()
                const updatedTitle = document.getElementById("blog-titles-update").value
                const updatedCategory = document.getElementById("blog-category-update").value
                const updatedPost = document.getElementById("short-blog-posts-update").value
                const updatedImage = document.getElementById("blog-img-update").value



                const updatedBlog = {
                    title: updatedTitle,
                    category: updatedCategory,
                    post: updatedPost,
                    image: updatedImage
                };

                records[index] = updatedBlog;
                localStorage.setItem("records", JSON.stringify(records));
                console.log(records)
                blogList(records);
                updateForm.reset();
                closeUpdateModule();

            }
        });
        updateBtn.textContent = "Update"

        const deleteBtn = document.createElement('button')
        deleteBtn.className = "bg-secondary px-4 py-2 rounded hover:bg-red-500 transition font-medium"
        deleteBtn.setAttribute('id', 'delete-blog-btn')
        deleteBtn.addEventListener('click', () => deleteConfirm(index));
        deleteBtn.textContent = "Delete"

        btnControls.appendChild(updateBtn)
        btnControls.appendChild(deleteBtn)


        mainBlogCard.appendChild(categorySpan)
        mainBlogCard.appendChild(h3Title)
        mainBlogCard.appendChild(p)
        mainBlogCard.appendChild(btnControls)

        // ------------------------------------------------------

        const detailBlogContent = document.createElement('div')
        detailBlogContent.className = "bg-secondary md:text-base text-white/90 gap-5 p-6 md:p-8 rounded-xl shadow-lg bg-opacity-90 hidden transition-all delay-150 duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:shadow-accent"

        const img = document.createElement('img')
        img.className = "w-32 h-32 md:w-40 md:h-40 rounded object-cover"
        img.src = blog.image


        const pContent = document.createElement('p')
        pContent.className = 'font-medium px-1 py-2'
        pContent.textContent = blog.post


        detailBlogContent.appendChild(img)
        detailBlogContent.appendChild(pContent)

        // Open Blog Detail on Click
        mainBlogCard.addEventListener('click', function () {
            if (detailBlogContent.style.display === "block") {
                detailBlogContent.style.display = "none";
            } else {
                detailBlogContent.style.display = "block"

            }
        });

        // ------------------------------------------------- 
        li.appendChild(mainBlogCard)
        li.appendChild(detailBlogContent)

        displayBlog.appendChild(li)

    });
    localStorage.setItem("records", JSON.stringify(records))
}

//  3. Update Blog
function updateBlog(index) {
    const blog = records[index];

    document.getElementById("blog-titles-update").value = blog.title;
    document.getElementById("blog-category-update").value = blog.category;
    document.getElementById("short-blog-posts-update").value = blog.post;
    document.getElementById("edit-index").value = index
    document.getElementById("blog-img-update").value = blog.image;


}




//  4. Delete Blog
function deleteBlog(index) {


    records.splice(index, 1)
    blogList(records)
}

function deleteConfirm(index) {
    const modalDelete = document.getElementById("delete-modal")
    modalDelete.classList.remove('hidden')
    modalDelete.classList.add('flex');
    const deleteBlogTitle = document.getElementById("delete-blog-title")
    deleteBlogTitle.textContent = records[index].title

    const deleteBtn = modalDelete.querySelector('#delete-btn');
    deleteBtn.onclick = function () {
        deleteBlog(index);
        modalDelete.classList.add('hidden');
    };


    const cancelBtn = modalDelete.querySelector('#cancel-btn');
    cancelBtn.onclick = function () {
        modalDelete.classList.add('hidden');
    };
} 

// Filter
const filter = document.getElementById("filter-blog-category")
filter.addEventListener('change', function () {
    const selectedCategory = filter.value
    const selectedBlogs = []
    if (selectedCategory !== "All") {

        records.forEach(blog => {
            if (blog.category === selectedCategory) {
                selectedBlogs.push(blog)
            }
        })
        blogList(selectedBlogs)
    }
    else {
        blogList(records)
    }
})