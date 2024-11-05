import React, { Component } from "react"; 
import css from "./css/Content.module.css";
import postsData from "../posts.json"; // Import JSON data
import PostItem from "./PostItem";

const savedPosts = postsData.savedPosts; // Extract the savedPosts array

export class Content extends Component {
    
    
    render() {
        return (
            <div className={css.Content}>
                
                <div className={css.TitleBar}>
                    <h1>My Photos</h1>
                </div>

                <div className={css.SearchResults}>

                    {/* Part 1: Creating the map function */}

                        {/* {
                    savedPosts.map((post)=>{
                            return <div className={css.SearchItem} key={post.title}>
                                <p>{post.title}</p>
                                <p>{post.name}</p>
                                <img src={post.image} alt="random"/>
                                <p>{post.description}</p>
                                </div>
                        })
                    } */}


                    {/* Part 2: Creating a child component */}

                    <PostItem savedPosts={savedPosts} />
                </div>
            </div>
        )
    }
}

export default Content