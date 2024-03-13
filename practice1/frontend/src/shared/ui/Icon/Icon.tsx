import cn from "classnames";
import css from "./Icon.module.css";
import { IconSizeType, ImageType } from "./type";

type IconProps = {
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  size: IconSizeType;
  iconPos?: string;
  image?: ImageType;
  disabled?: boolean;
};

export function Icon({ onClick, size, image, iconPos, disabled }: IconProps) {
  return (
    <div
      className={cn(
        css.root,
        css[`root_size_${size}`],
        disabled && css.root_disabled
      )}
      onClick={onClick}
    >
      <button
        className={cn(css.icon, css.icon_image, css[`icon_size_${size}`])}
        style={
          image
            ? {
                backgroundImage: image.imageUrl,
                backgroundPosition: image.imagePos,
                backgroundSize: image.imageSize,
              }
            : { backgroundPosition: iconPos }
        }
      ></button>
    </div>
  );
}
