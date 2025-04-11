
import React, { useEffect, useState } from "react";
import { Post } from "./post";
import { Formulario } from "./form";


export const JSONPlaceHolder = () => {

    const [postData, setPostData] = useState()

    useEffect(() => {
        console.log('componente cargado')
        // loadPostsPromise();
        loadPostsAsync()
    }, [])


    const loadPostsPromise = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((resp) => {
                if (!resp.ok) throw new Error('error getting posts');
                return resp.json();
            })
            .then(data => setPostData(data))
            .catch(err => console.log(err))
    }

    //preferido!!!!!!!
    const loadPostsAsync = async () => {
        try {
            const resp = await fetch('https://jsonplaceholder.typicode.com/posts')
            if (!resp.ok) throw new Error('error getting posts');
            const data = await resp.json()
            console.log(data)
            setPostData(data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="container">
            <Formulario />
            {postData?.map((el, i) => <Post key={el.id} pid={el.id} title={el.title} body={el.body} />)}
        </div>
    )
}