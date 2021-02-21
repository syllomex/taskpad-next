import { v4 } from "uuid";
import { Page, PageList } from "../store/page";

const PAGE_LIST_KEY = "@TaskPad:PAGE_LIST";
const PAGE_KEY = (id: string) => `@TaskPad:PAGE_${id}`;

function storeList(pageList: PageList): void {
  localStorage.setItem(PAGE_LIST_KEY, JSON.stringify(pageList));
}

function storePage(page: Page): void {
  localStorage.setItem(PAGE_KEY(page.id), JSON.stringify(page));
}

function getList(): PageList {
  const str = localStorage.getItem(PAGE_LIST_KEY);
  if (str) return JSON.parse(str);

  const defaultList: PageList = [{ id: v4(), name: "Nova página" }];
  storeList(defaultList);
  storePage({ ...defaultList[0], lines: [] });
  return defaultList;
}

function getPage(id: string): Page {
  const str = localStorage.getItem(PAGE_KEY(id));
  return JSON.parse(str);
}

const pages = {
  getList,
  storeList,
  getPage,
  storePage,
};

export default pages;
