
export default function ProductCard({ product, onAdd }) {
  const { name, brand, subtitle, price, thumbnail, rating, tag } = product;
  

  return (
    <article className="card">
      <div className="thumb-wrap">
        <img src={thumbnail} alt={name} loading="lazy" />
      </div>

      <div className="card-body">
        <h3 className="title" title={name}>
          {brand ? <span className="brand">{brand}</span> : null} {name}
        </h3>
        {subtitle && <p className="subtitle">{subtitle}</p>}

        <div className="meta">
          <span className="price">{price.toLocaleString()+"원"}</span>
          {rating ? <span className="rating">⭐ {rating.toFixed(1)}</span> : null}
          {tag ? <span className="badge">{tag}</span> : null}
        </div>

        <button className="primary" onClick={() => onAdd?.(product)}>
          장바구니 담기
        </button>
      </div>
    </article>
  );
}
