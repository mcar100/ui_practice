import { Icon, Icon1Name, IconSizeType, Link } from "shared/ui";
import {
  getIcon1ImgByName,
  getIcon1KoreanName,
  getIcon1PosByName,
} from "entities/IconList";

export type IconInfoType = {
  name: Icon1Name;
  size: IconSizeType;
  hasOtherImage?: true;
};

type IconListProps = {
  iconInfos: Array<IconInfoType>;
  listType?: "shortcut" | "normal";
};

export function IconList({ iconInfos, listType = "normal" }: IconListProps) {
  return (
    <ul>
      {iconInfos.map((icon) => (
        <li key={`icon_list_${icon.name}`}>
          {" "}
          <Link>
            <Icon
              size={icon.size}
              iconPos={getIcon1PosByName(icon.name)}
              image={getIcon1ImgByName(icon.name)}
              hasOtherImage={icon.hasOtherImage}
            />
            {listType === "shortcut" ? (
              <span>{getIcon1KoreanName(icon.name)}</span>
            ) : (
              ""
            )}
          </Link>
        </li>
      ))}
    </ul>
  );
}
