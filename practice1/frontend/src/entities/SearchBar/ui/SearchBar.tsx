import { getIcon1ImgByName, getIcon1PosByName } from "entities/IconList";
import { Icon, Input, Link } from "shared/ui";
import css from "./SearchBar.module.css";

export function SearchBar() {
  return (
    <div id="searchbar" className={css.search_area}>
      <div className={css.search_inner}>
        {" "}
        <h1 className={css.search_logo}>
          <Link>
            <Icon
              size="logo"
              iconPos={getIcon1PosByName("naver_logo")}
              image={getIcon1ImgByName("naver_logo")}
            />
          </Link>
        </h1>
        <div className={css.input_box}>
          <Input onChange={() => {}} placeholder="검색어를 입력해 주세요." />
          <Icon
            size="search"
            iconPos={getIcon1PosByName("search")}
            image={getIcon1ImgByName("search")}
          />
        </div>
        <div className={css.search_box}>
          <Icon
            size="keyboard"
            iconPos={getIcon1PosByName("keyboard")}
            image={getIcon1ImgByName("keyboard")}
          />
          <Icon
            size="arrow"
            iconPos={getIcon1PosByName("arrow_down")}
            image={getIcon1ImgByName("arrow_down")}
          />
        </div>
      </div>
    </div>
  );
}
