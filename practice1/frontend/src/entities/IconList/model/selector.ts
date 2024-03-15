import { Icon1Name } from "shared/ui";
import { imagesMock } from "shared/lib";

export function getIcon1PosByName(name: Icon1Name): string {
  return imagesMock.icons1[name].image_pos;
}

export function getIcon1KoreanName(name: Icon1Name): string {
  return imagesMock.icons1[name].korean_name;
}

export function getIcon1ImgByName(name: Icon1Name): string {
  return imagesMock.icons1[name].image_url;
}
