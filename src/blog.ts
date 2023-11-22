type Blog = {
    title: string;
    date: Date;
    description: string;
    slug: string;
};

const blogs: Blog[] = [
    {
        title: "First Blog Entry",
        date: new Date("2023-11-20"),
        description: "Learning how to use Typescript",
        slug: "./blog/blog-entry-1.html",
    },
    {
        title: "Second Blog Entry",
        date: new Date("2023-11-20"),
        description: "Blog entry number 2",
        slug: "./blog/blog-entry-2.html",
    },
];
// create function that loops through blogData
// should take in blog title, date, description, slug and apply them to the blogElement
// use slug to create a new html file for each blog post

document.addEventListener('DOMContentLoaded', () => {
    const blogContainer = document.getElementById('blog-container');

    if (blogContainer) {
        blogs.forEach((blog) => {
            const blogEntry = document.createElement('div');
            blogEntry.className = 'blog-entry';

            const titleElement = document.createElement('h2');
            titleElement.textContent = blog.title;

            const dateElement = document.createElement('p');
            dateElement.textContent = 'Date: ${blog.date}';

            const descriptionElement = document.createElement('p');
            descriptionElement.textContent = blog.description

            blogEntry.appendChild(titleElement);
            blogEntry.appendChild(dateElement);
            blogEntry.appendChild(descriptionElement);
            blogContainer.appendChild(blogEntry);

        });
    }
});
