import React, { useState } from "react";


export const Post = props => {

    const [isEditing, setIsEditing] = useState(false)
    const [postData, setPostData] = useState(props)

    const handleDelete = async (id) => {
        console.log(id);
        try {
            const resp = await fetch('https://jsonplaceholder.typicode.com/posts/' + id, {
                method: 'DELETE'
            });
            const data = await resp.json();
            console.log(data);

        } catch (error) {
            console.log(error)
        }
    }


    const editToggle = () => {
        setIsEditing(!isEditing)
    }

    const handleChange = e => {
        setPostData({...postData, [e.target.name]: e.target.value})
    }

    const handleEdit = async (e, id) => {
        try {
            e.preventDefault()
            delete postData.pid
            const resp = await fetch('https://jsonplaceholder.typicode.com/posts/' + id, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(postData)
            });
            const data = await resp.json();
            console.log(data);
            setIsEditing(false)
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div className="container">
            <div className="border border-1">

                {isEditing ?
                <input 
                type="text"
                name="title"
                value={postData.title} 
                onChange={handleChange}
                  />
                :<h3>{props.title}</h3>}
            </div>
            
                {isEditing? 
                <textarea 
                name="body"
                value={postData.body}
                onChange={handleChange}
                ></textarea>
                : <p>{props.body}</p>}
            
            <button className="btn btn-primary" onClick={editToggle}>Edit</button>
            {isEditing && <button className="btn btn-success" onClick={e=>handleEdit(e, props.pid)}>save</button>}
            <button className="btn btn-danger" onClick={() => handleDelete(props.pid)}>delete!</button>
        </div>
    )
}