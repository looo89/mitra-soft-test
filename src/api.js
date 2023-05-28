import axios from 'axios';


const instance =axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
});

export const postAPI ={
    
    getPosts()  {
        return( instance.get(`posts`))
    },

    getPostComments(id){
       return ( instance.get(`/posts/${id}/comments`))
    },
    
}

export const albumAPI ={
    getPhotoByAlbumId(id){
        return( instance.get(`/albums/${id}/photos`))
    },

}
