import { Box, Divider, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import CardDesign from '../../design/cardDesign';
import DrawerDesign from '../../design/drawerDesign';
import { fetchPosts } from '../../sanityConfig/config';
import imageUrlBuilder from '@sanity/image-url';
import sanityClient from '../../../client.js';

const builder = imageUrlBuilder(sanityClient);
const  urlFor = (source) => {
    return builder.image(source)
}

function BlogPostComponent() {
	const [posts, setPosts] = React.useState(null);
    const history = useHistory();

	React.useEffect(() => {
		fetchPosts(setPosts);
	}, []);
    
	return (
		<DrawerDesign>
			<Box padding={2}>
                <Typography variant="h4">Blogs</Typography>
            </Box>
			<Divider />
            <Box padding={2}>
                <Grid container spacing={1}>
                    {posts == null ? <div>Loading...</div> : posts.map((post, index) =>
                        <Grid item xs={4} key={index}>
                            {console.log(post)}
                            <CardDesign posts={post} authorImage={urlFor(post.authorImage)}/>
                        </Grid>
                    )}
                </Grid>
            </Box>
		</DrawerDesign>
	);
}

export default BlogPostComponent;
