import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Post from "../pages/Post";

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
                <Link to={`/Post/${post._id}`}>
                  <h3 className="text-2xl font-bold">{post.title}</h3>
                </Link>
                <p>#{post.tags.join(" #")}</p>
                <p>{post.reactions} reactions</p>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
}
