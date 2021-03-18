export interface IAbout {
  title: string;
  description: string;
  _rawContent: {
    _key: string;
    _type: string;
    sanityChildren: {};
  };
  mainImage: {
    asset: {
      fluid: {
        base64: string;
        aspectRatio: number;
        src: string;
        srcSet: string;
        srcWebp: string;
        srcSetWebp: string;
        sizes: string;
      };
    };
  };
}