import ProductTile from './ProductTile';

export default function CatalogPreview() {
  return (
    <ul className="catalog-preview">
      <li>
        <ProductTile></ProductTile>
      </li>

      <li>
        <ProductTile></ProductTile>
      </li>

      <li>
        <ProductTile></ProductTile>
      </li>
    </ul>
  );
}
