import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function PostCard() {
  const { _id } = useParams();
  const [post, setPost] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3003/posts/${_id}`)
      .then((response) => response.json())
      .then((data) => {
        setPost(data);
      });
  }, []);

  return (
    <article key={`${post._id}`} className="w-full bg-white rounded-md">
      {console.log(`${post._id}`)}
      <img src={post.url} alt={post.title} className="rounded-md" />
      <div className="flex p-5">
        <img src={post.picture} className="rounded-full w-12" />
        <div>
          <p>{post.author}</p>
          <p>{post.date}</p>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-2xl font-bold">{post.title}</h3>

        <p>#{post.tags.join(" #")}</p>
        <p>{post.reactions} reactions</p>
      </div>
    </article>
  );
}
