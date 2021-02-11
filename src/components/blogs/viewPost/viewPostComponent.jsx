import React from 'react';
import { fetchSinglePost } from "../../sanityConfig/config";
import imageUrlBuilder from '@sanity/image-url';
import BLockContent from '@sanity/block-content-to-react'
import sanityClient from '../../../client.js'
import DrawerDesign from '../../design/drawerDesign';

const builder = imageUrlBuilder(sanityClient);
const  urlFor = (source) => {
    return builder.image(source)
}

function ViewPostComponent(props) {
    const [singlePost, setSinglePost] = React.useState(null);
    
    React.useEffect(() => {
        fetchSinglePost(setSinglePost, props.slug)
    })
    
    return (
        <DrawerDesign>
            <div className="min-h-screen p-12">
            {singlePost === null ?  <div>Loading...</div> :
            <div className="container shadow-lg">
                <div className="relative">
                    <div className="absolute h-full w-full flex items-center justify-center p-8" >
                        <div className="bg-white bg-opacity-75 rounded p-12" style={{marginTop: 300}}>
                            <h2 className="text-3xl lg:text-6xl mb-4">{singlePost.title}</h2>
                            <div className="flex justify-center text-gray-800">
                                <img className="w-10 h-10 rounded-full" src={urlFor(singlePost.authorImage).width(100).url()} alt="image" />
                                <h4 className="flex items-center pl-2 text-2xl">{singlePost.name}</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <img className="w-full object-cover rounded-t" style={{height: "400px"}} src={urlFor(singlePost.mainImage).width(200).url()} alt="Main Image" />
            <div className="px-16 lg:px-48 py-12 lg:py-20 prose lg:prose-xl max-w-full">
                <BLockContent blocks={singlePost.body} 
                projectId={sanityClient.clientConfig.projectId} 
                dataset={sanityClient.clientConfig.dataset}
                />
               
            </div>
            </div>
            }
        </div>
        </DrawerDesign>
    )
}

export default ViewPostComponent
