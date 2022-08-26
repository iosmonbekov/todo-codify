import Product from './Product';

const data = [
  {
    id: 1,
    name: 'T-shirt',
    price: 799,
    img: 'https://cms.brnstc.de/product_images/435x596/cpro/media/images/product/22/6/100129853511000_0_1656057832922.jpg',
  },
  {
    id: 2,
    name: 'Cap',
    price: 23,
    img: 'https://cdn-images.farfetch-contents.com/12/59/83/19/12598319_15975196_300.jpg',
  },
  {
    id: 3,
    name: 'Skirt',
    price: 100,
    img: 'https://d330gmu8jafas0.cloudfront.net/product/6406057580/1125x1500/6406057580-1.jpg',
  },
  {
    id: 4,
    name: 'Dress',
    price: 900,
    img: 'https://www.tradeinn.com/f/13789/137899265/adidas-dance-short-dress.jpg',
  },
  {
    id: 5,
    name: 'Sneakers',
    price: 399,
    img: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1605893206-untitled-1-1605893184.jpg',
  },
  {
    id: 6,
    name: 'Trousers',
    price: 799,
    img: 'https://www.triads.co.uk/images/products/zoom/1602858549-91098200.jpg',
  },
  {
    id: 7,
    name: 'Socks',
    price: 9,
    img: 'https://m.media-amazon.com/images/I/61NHPF-po2L._AC_UX385_.jpg',
  },
];

function ProductList() {
  return (
    <div className='product-list'>
      {data.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;