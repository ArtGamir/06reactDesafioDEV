import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Center() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3003/posts")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.data);
      });
  }, []);

  return (
    <main className="">
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
            <article key={`${post._id}`} className="w-2/3 bg-white rounded-md">
              {console.log(`${post._id}`)}
              <img src={post.url} alt={post.title} className="rounded-md" />
              <img src={post.picture} className="rounded-full w-12" />
              <p>{post.author}</p>
              <p>{post.date}</p>
              <Link to="/Post">
                <h3 className="text-xl font-bold">{post.title}</h3>
              </Link>
              <p>#{post.tags.join(" #")}</p>
              <p>{post.reactions} reactions</p>
            </article>
          );
        })}
      </section>
    </main>
  );
}
