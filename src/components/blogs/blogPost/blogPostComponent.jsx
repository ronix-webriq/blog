import React from 'react';
import { Link } from 'react-router-dom';
import {fetchPosts} from '../../sanityConfig/config'

function BlogPostComponent() {
    const [posts, setPosts] = React.useState(null);

    React.useEffect(() => {
        fetchPosts(setPosts)
    }, [])
    
    return (
        <div className="bg-gray-100 min-h-screen p-12">
            <div className="container mx-auto">
                <h1 className="text-5xl flex justify-center">Blog posts</h1>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                    {posts === null ? 
                    <div>
                        <h1>Fetching Blogs</h1>
                    </div>
                    :
                    posts.length < 1 ?
                    <div>No Blog Post Available</div>
                    :
                    posts.map(post => 
                        <Link to={`/${post.slug.current}`} key={post.title}>
                            <div style={{border: '1px solid lightgray', padding: 20, backgroundColor: 'white', borderRadius: 20, boxShadow: '5px 5px 5px 5px lightgray'}}>
                                {console.log(post)}
                                <div style={{textAlign: 'left', fontWeight: 600, padding: 10, fontSize: 20}}><h1>{post.title}</h1></div>
                                <div>
                                    <img src={post.mainImage.asset.url} alt=""/>
                                </div>
                            </div>
                        </Link>
                    )
                }
                </div>
            </div>
        </div>
    )
}

export default BlogPostComponent
