import React, { useEffect, useState } from 'react'
import { API, graphqlOperation, Auth } from 'aws-amplify';
import { createPost } from '../graphql/mutations'
import { listPosts } from '../graphql/queries';

function Posts() {
    const [ userID, setUserID ] = useState();
    const [ name, setName ] = useState();
    const [ title, setTitle ] = useState();
    const [ desc, setDesc ] = useState();

    useEffect(()=>{
        Auth.currentUserInfo()
        .then(user => {
            setUserID(user.attributes.sub)
            setName(user.attributes.name)
        })
        getPosts()
    },[])

   async function getPosts() {
        const result = await API.graphql(graphqlOperation(listPosts))
        console.log("All Posts: ", JSON.stringify(result.data.listPosts.items))
    }
    
    async function handleSubmit(e){
        e.preventDefault();
        const input = {
            userID: userID,
            name: name,
            title: title,
            description: desc,
        }
        console.log(input)
        await API.graphql(graphqlOperation(createPost, { input }));
        setTitle("")
        setDesc("")
        }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    placeholder="title"
                    type="text"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    />
                <input 
                    placeholder="desc"
                    type="text"
                    value={desc}
                    onChange={e => setDesc(e.target.value)}
                    />
                <button>POST</button>
            </form>
        </div>
    )
}

export default Posts
