import { h, JSX } from "preact";
import * as styles from "../ui/image.module.less";

export type ImageProps = {
  imgUrl: string;
  altText: string;
  fallBackUrl: string;
};
const ImageComponent = (props: ImageProps) => {
  return (
    <img
      className={styles.image}
      src={props?.imgUrl || props.fallBackUrl}
      alt={props.altText}
    ></img>
  );
};

export default ImageComponent;
