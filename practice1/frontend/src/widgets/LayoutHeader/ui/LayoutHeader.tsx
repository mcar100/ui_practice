import { Layout } from "shared/ui";
import { IconList, IconInfoType } from "entities/IconList";
import { SearchBar } from "entities/SearchBar";
import { Shortcut } from "entities/Shortcut";
import css from "./LayoutHeader.module.css";

export function LayoutHeader() {
  const headerIcons: Array<IconInfoType> = [
    { name: "menu", size: "s" },
    { name: "pay", size: "m" },
    { name: "talk", size: "s" },
    { name: "notify", size: "s" },
  ];

  return (
    <Layout type="header">
      <div className={css.header_top}>
        <IconList iconInfos={headerIcons} />
      </div>
      <div className={css.header_inner}>
        <SearchBar />
        <Shortcut />
      </div>
    </Layout>
  );
}
