import { IconInfoType, IconList } from "entities/IconList";
import css from "./Shortcut.module.css";

export function Shortcut() {
  const icons: Array<IconInfoType> = [
    { name: "mail", size: "l" },
    { name: "cafe", size: "l" },
    { name: "blog", size: "l" },
    { name: "shopping", size: "l" },
    { name: "news", size: "l" },
    { name: "stock", size: "l" },
    { name: "real", size: "l" },
    { name: "map", size: "l" },
    { name: "webtoon", size: "l" },
    { name: "chijijik", size: "l", hasOtherImage: true },
    { name: "more", size: "l" },
  ];
  return (
    <div className={css.shortcut_area}>
      <IconList iconInfos={icons} listType={"shortcut"} />
    </div>
  );
}
