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

export type Schedule = {
  id: string;
  datetime: string;
  action: "start" | "stop";
};

export type Schedules = {
  running: boolean;
  times: Schedule[];
};

export type Line = {
  id: string;
  content: string;
  checked: boolean;
  schedules: Schedules;
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
  currentLines: Line[] | undefined;
  setCurrentLines: SetState<Line[] | undefined>;
  running: string | undefined;
  setRunning: SetState<string | undefined>;
};

const PageContext = React.createContext({} as PageContextType);

const PageProvider: React.FC = ({ children }) => {
  const [pageList, setPageList] = useState<PageList>(
    !isServer ? storage.pages.getList() : []
  );
  const [currentPage, setCurrentPage] = useState<string>();
  const [currentLines, setCurrentLines] = useState<Line[]>();
  const [running, setRunning] = useState<string>(
    !isServer ? storage.pages.getLastRunning() : undefined
  );

  return (
    <PageContext.Provider
      value={{
        pageList,
        setPageList,
        currentPage,
        setCurrentPage,
        currentLines,
        setCurrentLines,
        running,
        setRunning,
      }}
    >
      {children}
    </PageContext.Provider>
  );
};

const usePage = () => {
  const {
    pageList,
    setPageList,
    currentPage,
    setCurrentPage,
    currentLines,
    setCurrentLines,
    running,
    setRunning,
  } = useContext(PageContext);

  const select = (id: string) => {
    setCurrentPage(id);
    setCurrentLines(storage.pages.getPage(id).lines);
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

  const createLine = (content: string) => {
    const current = storage.pages.getPage(currentPage);

    const id = v4();
    current.lines.push({
      id,
      checked: false,
      content,
      schedules: { running: false, times: [] },
    });

    storage.pages.storePage(current);
    setCurrentLines(current.lines);
  };

  const editLine = (line: Line, newContent: string) => {
    const current: Line = arrayState.find(line.id, currentLines);
    current.content = newContent;

    const newLines = arrayState.replace(
      line.id,
      currentLines,
      setCurrentLines,
      current
    );

    const page = getPage(currentPage);
    page.lines = newLines;
    storage.pages.storePage(page);
  };

  const toggleTimer = (id: string, action: "start" | "stop") => {
    if (action === "start") storage.pages.setLastRunning(id);
    else storage.pages.removeLastRunning();

    setRunning(action === "start" ? id : undefined);
    const line: Line = arrayState.find(id, currentLines);

    line.schedules.running = true;
    line.schedules.times.push({
      id: v4(),
      action,
      datetime: new Date().toISOString(),
    });

    const updated = arrayState.replace(id, currentLines, setCurrentLines, line);
    const page = getPage(currentPage);
    page.lines = updated;
    storage.pages.storePage(page);
  };

  const timer = (id: string) => {
    if (running === id) toggleTimer(id, "stop");
    else toggleTimer(id, "start");
  };

  return {
    list: pageList,
    create,
    current: currentPage,
    select,
    get: getPage,
    changeTitle,
    createLine,
    lines: currentLines,
    editLine,
    running,
    timer,
  };
};

export default PageProvider;
export { usePage };
