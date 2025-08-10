// data/wigs.ts
export type Wig = { id: number; name: string; price: number; image: string };

const wigs: Wig[] = [
  { id: 1, name: '10" Bob Wig',  price: 1100, image: '/images/10-BobWig.webp' },
  { id: 2, name: '12" Bob Wig',  price: 1300, image: '/images/12-BobWig.webp' },
  { id: 3, name: '16" Burmese Curl Bundles', price: 800, image: '/images/16-BurmeseCurlWig.webp' },
];

export default wigs;
