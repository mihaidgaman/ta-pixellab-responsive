export default function ProductTile() {
  return (
    <article className="product-tile">
      <header className="product-tile-header">
        <a href="/" title="Thread Affair Monochrome Suit">
          <picture>
            <img
              src="/images/products/product-01a.jpg
            "
              alt="Thread Affair Monochrome Suit"
            />
          </picture>
        </a>

        <span className="badge badge-primary">%</span>

        <h1 className="product-tile-title">
          <a href="" title="Thread Affair Monochrome Suit">
            <span>Thread Affair</span> <span>Monochrome Suit</span>
          </a>
        </h1>
        <h2 className="product-tile-subtitle">
          <a href="" title="London fit semi-slim">
            London fit semi-slim
          </a>
        </h2>
      </header>

      <section className="product-tile-content">
        <p>399.00</p>
        <p>
          Usd
          <span> 270.00</span>
        </p>
      </section>

      <footer className="product-tile-footer">
        <button className="button button-primary">Add to Cart</button>
      </footer>
    </article>
  );
}
