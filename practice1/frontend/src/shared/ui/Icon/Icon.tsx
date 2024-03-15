import cn from "classnames";
import css from "./Icon.module.css";
import { IconSizeType, ImageType } from "./type";

type IconProps = {
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  size: IconSizeType;
  iconPos: string;
  image: string;
  hasOtherImage?: true;
  disabled?: boolean;
};

export function Icon({
  onClick,
  size,
  image,
  iconPos,
  hasOtherImage,
  disabled,
}: IconProps) {
  return (
    <div
      className={cn(
        css.root,
        css[`root_size_${size}`],
        disabled && css.root_disabled
      )}
      onClick={onClick}
    >
      {!hasOtherImage ? (
        <div
          className={cn(css.icon, css.icon_image, css[`icon_size_${size}`])}
          style={{
            backgroundPosition: iconPos,
            backgroundImage: `url(${image})`,
          }}
        ></div>
      ) : (
        <img
          className={cn(css.icon, css.icon_image, css[`icon_size_${size}`])}
          src={image}
        />
      )}
    </div>
  );
}
