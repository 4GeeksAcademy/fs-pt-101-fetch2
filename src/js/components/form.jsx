import React, { useState } from "react";


export const Formulario = () => {

    const [formData, setFormData] = useState({
        title: '',
        body: ''
    })

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    

    const handleSubmit = async (e) => {
        try {
            e.preventDefault(); //para que no se refresque la pagina 
            const resp = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
                //body:JSON.stringify({title, body})
            })

            const data = await resp.json()
            console.log(data)
        } catch (error) {
            console.log(error)
        }

    }

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return (

        <form onSubmit={handleSubmit}>

            <input
                type="text"
                placeholder="titulo"
                name="title"
                value={formData.title}
                onChange={handleChange}
            />
            <textarea
                name="body"
                placeholder="texto del post"
                value={formData.body}
                onChange={handleChange}
            />
            <input type="submit" value="nuevo!" />
        </form>
    )
}