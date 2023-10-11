import styles from "./secretColor.module.css";

import { IColor } from "@/src/types";

interface Props {
  randomColor: IColor;
}

const SecretColor = ({ randomColor }: Props) => {
  const { hue, saturation, lightness } = randomColor.hsl;
  console.log(randomColor);
  return (
    <div className={styles.wrapper}>
      <h2>Can you guess the HEX of this color?</h2>
      <p>{`hue:${hue}, staturation:${saturation}%, lightness:${lightness}%`}</p>
    </div>
  );
};

export default SecretColor;
