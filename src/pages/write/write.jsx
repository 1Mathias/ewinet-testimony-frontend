import React from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import './write.css';
import { Context } from "../../context/Context";
import axios from 'axios';


export default function Write() {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [file, setFile] = useState(null);
    const [categories, setCategories] = useState("");
    const [hashtags, setHashTags] = useState("");

    const { user } = useContext(Context);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = {
            username: user.username,
            title: title,
            desc: desc,
            categories: categories,
            hashtags: hashtags

        };
        if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            data.append("upload_preset", "upload");
            try {
                const uploadRes = await axios.post("https://api.cloudinary.com/v1_1/ramjet-it-solution/image/upload", data);
                const { url } = uploadRes.data;
                newPost.photo = url;

                console.log(newPost.photo)

            } catch (error) {
                console.log(error)
            }
        }
        try {
            const res = await axios.post("/posts", newPost);
            window.location.replace("/post/" + res.data._id);
        } catch (err) { }
    }


    return (
        <div className="write">
            {file && (
                <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
            )}
            <form className="writeForm" onSubmit={handleSubmit}>
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className="writeIcon fas fa-plus"></i>
                    </label>
                    <input
                        type="file"
                        id="fileInput"
                        style={{ display: "none" }}
                        onChange={(e) => setFile(e.target.files[0])}
                    />
                    <input
                        type="text"
                        placeholder="Title"
                        className="writeInput"
                        autoFocus={true}
                        onChange={e => setTitle(e.target.value)}
                    />

                </div>
                <div className="writeFormGroupcat">
                    <input
                        type="text"
                        placeholder="category"
                        className="writeInput "
                        autoFocus={true}
                        onChange={e => setCategories(e.target.value)}
                    />
                </div>
                <div className="writeFormGroupcat">
                    <input
                        type="text"
                        placeholder="hashtags"
                        className="writeInput "
                        autoFocus={true}
                        onChange={e => setHashTags(e.target.value)}
                    />
                </div>

                <div className="writeFormGroup">
                    <textarea
                        placeholder="Tell your Testimony..."
                        type="text"
                        className="writeInput writeText"
                        onChange={e => setDesc(e.target.value)}
                    ></textarea>
                </div>
                <button className="writeSubmit" type="submit">
                    Publish
                </button>
            </form>
        </div>
    );
}
