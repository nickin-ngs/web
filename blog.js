<<<<<<< HEAD
const blogsPerPage = 5;
const blogFolder = "blogs/";
const blogContainer = document.getElementById("blog-container");
const pagination = document.getElementById("pagination");

let allBlogs = [];
let currentPage = 1;

async function loadAllBlogs() {
    let i = 1;
    allBlogs = [];

    while (true) {
        try {
            const res = await fetch(`${blogFolder}blog${i}.json`);
            if (!res.ok) break;

            const data = await res.json();
            data._index = i;
            allBlogs.push(data);
            i++;
        } catch {
            break;
        }
    }

    allBlogs.sort((a, b) => new Date(b.date) - new Date(a.date));
}

function loadBlogs(page) {
    blogContainer.innerHTML = "";

    const start = (page - 1) * blogsPerPage;
    const end = start + blogsPerPage;
    const blogs = allBlogs.slice(start, end);

    blogs.forEach(data => {
        const article = document.createElement("article");
        article.classList.add("blog-card");
        article.innerHTML = `
            <div class="blog-image">
                <img src="${data.image}" alt="${data.title}">
            </div>
            <div class="blog-content">
                <h2>${data.title}</h2>
                <p class="meta">${data.date} | by ${data.author}</p>
                <p class="text">${data.content}</p>
            </div>
        `;
        blogContainer.appendChild(article);
    });
}

function renderPagination() {
    pagination.innerHTML = "";
    const totalPages = Math.ceil(allBlogs.length / blogsPerPage);

    const prevBtn = document.createElement("button");
    prevBtn.textContent = "Previous";
    prevBtn.disabled = currentPage === 1;
    prevBtn.onclick = () => {
        currentPage--;
        loadBlogs(currentPage);
        renderPagination();
    };
    pagination.appendChild(prevBtn);

    const pageInfo = document.createElement("span");
    pageInfo.textContent = ` Page ${currentPage} of ${totalPages} `;
    pagination.appendChild(pageInfo);

    const nextBtn = document.createElement("button");
    nextBtn.textContent = "Next";
    nextBtn.disabled = currentPage === totalPages;
    nextBtn.onclick = () => {
        currentPage++;
        loadBlogs(currentPage);
        renderPagination();
    };
    pagination.appendChild(nextBtn);
}

(async function init() {
    await loadAllBlogs();
    loadBlogs(currentPage);
    renderPagination();
=======
const blogsPerPage = 5;
const blogFolder = "blogs/";
const blogContainer = document.getElementById("blog-container");
const pagination = document.getElementById("pagination");

let allBlogs = [];
let currentPage = 1;

async function loadAllBlogs() {
    let i = 1;
    allBlogs = [];

    while (true) {
        try {
            const res = await fetch(`${blogFolder}blog${i}.json`);
            if (!res.ok) break;

            const data = await res.json();
            data._index = i;
            allBlogs.push(data);
            i++;
        } catch {
            break;
        }
    }

    allBlogs.sort((a, b) => new Date(b.date) - new Date(a.date));
}

function loadBlogs(page) {
    blogContainer.innerHTML = "";

    const start = (page - 1) * blogsPerPage;
    const end = start + blogsPerPage;
    const blogs = allBlogs.slice(start, end);

    blogs.forEach(data => {
        const article = document.createElement("article");
        article.classList.add("blog-card");
        article.innerHTML = `
            <div class="blog-image">
                <img src="${data.image}" alt="${data.title}">
            </div>
            <div class="blog-content">
                <h2>${data.title}</h2>
                <p class="meta">${data.date} | by ${data.author}</p>
                <p class="text">${data.content}</p>
            </div>
        `;
        blogContainer.appendChild(article);
    });
}

function renderPagination() {
    pagination.innerHTML = "";
    const totalPages = Math.ceil(allBlogs.length / blogsPerPage);

    const prevBtn = document.createElement("button");
    prevBtn.textContent = "Previous";
    prevBtn.disabled = currentPage === 1;
    prevBtn.onclick = () => {
        currentPage--;
        loadBlogs(currentPage);
        renderPagination();
    };
    pagination.appendChild(prevBtn);

    const pageInfo = document.createElement("span");
    pageInfo.textContent = ` Page ${currentPage} of ${totalPages} `;
    pagination.appendChild(pageInfo);

    const nextBtn = document.createElement("button");
    nextBtn.textContent = "Next";
    nextBtn.disabled = currentPage === totalPages;
    nextBtn.onclick = () => {
        currentPage++;
        loadBlogs(currentPage);
        renderPagination();
    };
    pagination.appendChild(nextBtn);
}

(async function init() {
    await loadAllBlogs();
    loadBlogs(currentPage);
    renderPagination();
>>>>>>> 3cdf7b60ea8528d846bee17b79aa708b03e9c012
})();