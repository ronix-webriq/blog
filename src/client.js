import sanityClient from '@sanity/client';

export default sanityClient({
    projectId: "q6hinnxj",
    dataset: "production",
    useCdn: true
});