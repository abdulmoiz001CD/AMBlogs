import React from 'react';

interface Params {
    id: number,
    title: string,
    description: string,
    image: string,
}

const page = async ({
    params,
}: {
    params: Promise<{ id: string }>
}) => {

    const id = (await params).id
    console.log(id)
    // Dummy blog data for demonstration
    const blogs = [
        {
            id: 'blog1',
            title: 'Mastering React in 2024',
            description: 'Learn the latest features and best practices in React.',
            author: 'John Doe',
            dateOfBirth: '1985-03-15',

            image: '/images/blog1.jpg'
        },
        {
            id: 'blog2',
            title: 'Tailwind CSS: Tips and Tricks',
            description: 'Boost your CSS workflow with Tailwind CSS utilities.',
            author: 'Jane Smith',
            dateOfBirth: '1990-06-22',

            image: '/images/blog2.jpg',
        },
        {
            id: 'blog3',
            title: 'JavaScript Performance Hacks',
            description: 'Optimize your JavaScript code for better performance.',
            author: 'Robert Brown',
            dateOfBirth: '1982-11-08',

            image: '/images/blog3.jpg',
        },
        {
            id: 'blog4',
            title: 'Exploring Node.js for Beginners',
            description: 'A beginner-friendly guide to backend development with Node.js.',
            author: 'Alice Johnson',
            dateOfBirth: '1995-02-11',

            image: '/images/blog4.jpg',
        },
        {
            id: 'blog5',
            title: 'Understanding TypeScript',
            description: 'Dive deep into TypeScript and improve your codebase.',
            author: 'Ethan Davis',
            dateOfBirth: '1978-09-25',

            image: '/images/blog5.jpg',
        },
        {
            id: 'blog6',
            title: 'CSS Grid vs Flexbox',
            description: 'Which layout system should you choose and when?',
            author: 'Sophia Wilson',
            dateOfBirth: '1989-12-30',

            image: '/images/blog6.jpg',
        },
        {
            id: 'blog7',
            title: 'AI Trends in 2024',
            description: 'How AI is shaping the tech world in 2024.',
            author: 'Michael Taylor',
            dateOfBirth: '1983-05-17',

            image: '/images/blog7.jpg',
        },
        {
            id: 'blog8',
            title: 'Functional Programming in JavaScript',
            description: 'Leverage functional programming concepts in JavaScript.',
            author: 'Laura Martinez',
            dateOfBirth: '1975-04-02',

            image: '/images/blog8.jpg',
        },
        {
            id: 'blog9',
            title: 'Responsive Web Design Fundamentals',
            description: 'Create stunning responsive websites effortlessly.',
            author: 'Daniel White',
            dateOfBirth: '1992-07-14',

            image: '/images/blog9.jpg',
        },
        {
            id: 'blog10',
            title: 'Understanding Web Security',
            description: 'Protect your web applications from common vulnerabilities.',
            author: 'Emily Moore',
            dateOfBirth: '1980-10-05',
            image: '/images/blog10.jpg',
        },
    ];



    // Find the blog post based on the id
    const blog = blogs.find((post) => post.id === id);

    if (!blog) {
        return <p className="text-center text-gray-600">Blog post not found.</p>;
    }

    return (
        <div className="min-h-screen">
            <div className="mx-auto">
                {/* Blog Image */}
                {blog.image && (
                    <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-[600px] object-cover"
                    />
                )}

                {/* Blog Content */}
                <div className="p-8">
                    {/* Blog Title */}
                    <h1 className="text-4xl font-bold light:text-gray-900 mb-4">{blog.title}</h1>

                    {/* Author and Date of Birth */}
                    <div className="flex items-center light:text-gray-600 text-sm mb-6">
                        <span className="mr-4">
                            <strong>Author:</strong> {blog.author}
                        </span>
                        <span>
                            <strong>Date of Birth:</strong> {blog.dateOfBirth}
                        </span>
                    </div>

                    {/* Blog Paragraph */}
                    <p className="light:text-gray-700 text-lg leading-relaxed">{blog.description}
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis, fugit accusantium vero iusto cumque corrupti deserunt voluptates quasi. Culpa ea repellat distinctio, iure adipisci facilis quasi neque doloribus cum magni error, natus, fugit fuga beatae? Omnis hic recusandae autem quia quod sequi explicabo nulla officia cupiditate non natus suscipit rem doloremque vitae facere at, assumenda eaque quaerat excepturi accusamus quo! Nam excepturi vel in dignissimos eveniet recusandae corrupti atque modi quisquam ad nemo voluptates, omnis necessitatibus beatae sint saepe, rerum temporibus quam harum fuga. Asperiores sint error laboriosam modi atque architecto consequatur dolores reiciendis? Autem architecto praesentium nulla. Animi impedit et voluptatibus sint perferendis odit voluptate adipisci reprehenderit, nemo minima enim necessitatibus ipsum nam error eligendi sit commodi accusamus dicta accusantium magni nulla veniam nesciunt minus incidunt. Adipisci, consequuntur alias autem doloremque accusantium fugiat rerum numquam corporis maiores, voluptatem deleniti repudiandae suscipit aperiam optio ad obcaecati iste at non eaque quibusdam animi? A nulla incidunt voluptate unde, cumque dicta culpa suscipit labore doloribus illum magnam obcaecati quibusdam tenetur illo in eos consectetur provident omnis atque repellat sit! Iste voluptas beatae amet aperiam similique itaque, rem aliquam. Ipsam facilis, repudiandae expedita, ad corporis harum minus impedit ut omnis quisquam quas repellendus repellat deserunt provident eum quia, eius ea nulla. Id itaque dolore molestiae eos facere? Veniam cum explicabo voluptatum velit sapiente, repudiandae itaque maiores, dolorem, vero ratione ducimus consectetur hic corporis blanditiis eius aut ut reiciendis eligendi iste libero repellat! At illum asperiores facere dolor soluta nam quae inventore recusandae? Neque corporis voluptatem, recusandae quisquam distinctio perferendis obcaecati! Rerum quisquam officia iusto cum soluta maiores provident, quod omnis, eaque possimus hic aut rem sapiente fugiat unde eos, commodi dolore! Architecto harum, unde ipsa quo temporibus dolore nisi molestias excepturi sunt? Eaque placeat animi dignissimos autem, sed quis tempore quibusdam non praesentium.
                    </p>
                    <p className="light:text-gray-700 text-lg leading-relaxed pt-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque magni voluptatibus nisi, non, esse aperiam maiores, beatae impedit atque accusantium alias facere labore architecto voluptatem distinctio incidunt eaque! Molestiae expedita optio quas incidunt laborum cum velit repellat corrupti sequi et quibusdam reprehenderit iusto, perferendis ipsam assumenda tenetur quam officia unde dicta? Dolorem commodi eos laudantium, pariatur corporis accusamus earum numquam nostrum sapiente repellendus, sit enim esse voluptate magni iusto nulla adipisci aliquam facere accusantium expedita nesciunt vel ab. Iure harum, culpa reiciendis laudantium voluptate velit ipsa ut explicabo nostrum distinctio similique fugiat ullam eligendi temporibus tenetur quibusdam voluptas incidunt eaque, deleniti veritatis iusto fuga laborum tempora. Consectetur sit unde aperiam tenetur, laboriosam hic quaerat mollitia quia accusamus similique recusandae veniam voluptatum! Suscipit doloremque temporibus voluptatem tenetur laudantium ab architecto explicabo nulla voluptatibus voluptas assumenda soluta commodi, ea, aperiam similique repellendus id deserunt corrupti vitae perspiciatis eligendi animi nesciunt maxime! Aspernatur provident impedit atque a ipsum, molestias optio illo reprehenderit aut consectetur quia sunt fuga hic dolore sit accusantium qui ad perspiciatis laboriosam numquam tenetur necessitatibus. Iusto eos dolorem ab error, ipsa unde dignissimos qui perferendis exercitationem sed sunt veritatis modi tempora obcaecati consequatur aspernatur ratione dolore quod dolor quaerat nesciunt?</p>
                </div>
            </div>
        </div>


    );
};

export default page;