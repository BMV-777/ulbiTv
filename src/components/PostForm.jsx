import { useState } from "react";

import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({ create }) => {
  const [post, setPost] = useState({ title: "", body: "" });

  const addPost = (e) => {
    e.preventDefault();
    const newPost = {
      ...post,
      id: Date.now(),
    };
    create(newPost);
    setPost({ title: "", body: "" });
  };

  return (
    <>
      <form>
        <MyInput
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
          // value={title}
          // onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Нозвания поста "
        />
        <MyInput
          value={post.body}
          onChange={(e) => setPost({ ...post, body: e.target.value })}
          // value={body}
          // onChange={(e) => setBody(e.target.value)}
          type="text"
          placeholder="Описания поста"
        />
        <MyButton onClick={addPost}>Создать пост</MyButton>
      </form>
    </>
  );
};

export default PostForm;
