import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function MainCenter() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await fetch("http://localhost:3003/posts/");
        const data = await response.json();
        setPosts(data.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    getPosts();
  }, []);

  return (
    <main className="bg-blue-500">
      <ul className="flex gap-2 items-start">
        <li>
          <a>Relevant</a>
        </li>
        <li>
          <a>Latest</a>
        </li>
        <li>
          <a>Top</a>
        </li>
      </ul>
      <section>
        {posts.map((post) => {
          return (
            <article key={`prod-${post.id}`} className="bg-white rounded-md">
              <img src={post.url} alt={post.title} />
              <h3 className="font-bold">{post.title}</h3>
              <p>{post.description}</p>
              <p>{post.tags}</p>
              <Link to={`/post/${post.id}`}></Link>
            </article>
          );
        })}
      </section>
    </main>
  );
}
