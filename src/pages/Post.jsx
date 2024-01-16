import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Post() {
  const { id } = useParams();
  const [detail, setDetail] = useState({});

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setDetail(data);
      });
  }, []);

  return (
    <div>
      <section>
        <article key={`prod-${detail.id}`}>
          <img src={post.url} alt={post.title} />
          <h3 className="font-bold">{post.title}</h3>
          <p>{post.description}</p>
          <p>{post.tags}</p>
        </article>
      </section>
    </div>
  );
}
