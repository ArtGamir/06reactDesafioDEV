export default function PostCard() {
  return (
    <article key={`${post._id}`}>
      <h2>{detail.title}</h2>
      <img src={detail.thumbnail} />
      <p>Description: {detail.description}</p>
      <h2>Price: ${detail.price}</h2>
      <p>Discount: {detail.discountPercentage}%</p>
      <p>Rating: {detail.rating}/5</p>
      <p>Stock: {detail.stock} units</p>
      <p>Brand: {detail.brand}</p>
    </article>
  );
}
