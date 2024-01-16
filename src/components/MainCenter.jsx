import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function MainCenter() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3003/posts")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.data);
      });
  }, []);

  return (
    <main className="w-2/3">
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
      <section className="grid gap-y-4">
        {posts.map((post) => {
          return (
            <article key={`prod-${post.id}`} className="bg-white rounded-md">
              <img src={post.url} alt={post.title} />
              <Link to={`/post/${post.id}`}>
                <h3 className="font-bold">{post.title}</h3>
              </Link>
              <p>{post.description}</p>
              <p>{post.tags}</p>
            </article>
          );
        })}
      </section>
    </main>
  );
}
