import React, { useContext, useState } from "react";
import { v4 } from "uuid";

import storage from "../storage";
import arrayState from "../utils/arrayState";
import { isServer } from "../utils/isServer";

type SetState<T> = React.Dispatch<React.SetStateAction<T>>;

export type PageListItem = {
  id: string;
  name: string;
};

type Line = {
  id: string;
  content: string;
  checked: boolean;
};

export type Page = {
  id: string;
  name: string;
  lines: Line[];
};

export type PageList = PageListItem[];

type PageContextType = {
  pageList: PageList;
  setPageList: SetState<PageList>;
  currentPage: string | undefined;
  setCurrentPage: SetState<string | undefined>;
};

const PageContext = React.createContext({} as PageContextType);

const PageProvider: React.FC = ({ children }) => {
  const [pageList, setPageList] = useState<PageList>(
    !isServer ? storage.pages.getList() : []
  );
  const [currentPage, setCurrentPage] = useState<string>();

  return (
    <PageContext.Provider
      value={{ pageList, setPageList, currentPage, setCurrentPage }}
    >
      {children}
    </PageContext.Provider>
  );
};

const usePage = () => {
  const { pageList, setPageList, currentPage, setCurrentPage } = useContext(
    PageContext
  );

  const select = (id: string) => {
    setCurrentPage(id);
  };

  const create = (name = "Nova página") => {
    const id = v4();
    const newPage: PageListItem = { id, name };
    const newList = arrayState.add(newPage, pageList, setPageList);

    storage.pages.storeList(newList);
    storage.pages.storePage({ ...newPage, lines: [] });
    select(id);
  };

  const getPage = (id: string) => storage.pages.getPage(id);

  const changeTitle = (id: string, newTitle: string) => {
    const page = getPage(id);
    page.name = newTitle;

    const newList = arrayState.replace(id, pageList, setPageList, {
      id,
      name: newTitle,
    });

    storage.pages.storePage(page);
    storage.pages.storeList(newList);
  };

  return {
    list: pageList,
    create,
    current: currentPage,
    select,
    get: getPage,
    changeTitle,
  };
};

export default PageProvider;
export { usePage };
