import { createContext, useContext, useReducer, useState } from "react";
import { INews, NewsType } from "../interfaces/news";
const AppContext = createContext<IAppState | null>(null);

export const useAppContext = () => useContext(AppContext);

export interface AppProviderProps {
  children: React.ReactNode;
}

export interface IAppState {
  news: INews[];
  saveNews: (news: INews) => void;
}

const AppContextProvider = ({ children }: AppProviderProps) => {
  const [news, setNews] = useState<INews[]>(initialState);
  const saveNews = (newNews: INews) => {
    setNews([...news, newNews]);
  };
  return (
    <AppContext.Provider value={{ news, saveNews }}>
      {children}
    </AppContext.Provider>
  );
};
export default AppContextProvider;

const initialState: INews[] = [
  {
    id: 1,
    title: "Lorem Ipsum",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum risus turpis, mollis at commodo nec, accumsan sed enim. Nunc consequat massa at velit dignissim, ut imperdiet risus feugiat. Curabitur tellus mi, auctor a velit id, luctus egestas lacus. Maecenas eu ex ac metus euismod pulvinar in nec neque. Sed lobortis gravida ipsum, eget sodales leo tempus ut. Sed luctus varius est vitae fermentum. Integer tempus, metus id pretium euismod, nibh sem molestie ante",
    author: "John Doe",
    created_at: "2021-01-01",
    type: NewsType.politics,
  },
  {
    id: 2,
    title: "Lorem Ipsum",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum risus turpis, mollis at commodo nec, accumsan sed enim. Nunc consequat massa at velit dignissim, ut imperdiet risus feugiat. Curabitur tellus mi, auctor a velit id, luctus egestas lacus. Maecenas eu ex ac metus euismod pulvinar in nec neque. Sed lobortis gravida ipsum, eget sodales leo tempus ut. Sed luctus varius est vitae fermentum. Integer tempus, metus id pretium euismod, nibh sem molestie ante",
    author: "John Doe",
    created_at: "2021-01-01",
    type: NewsType.weather,
  },
  {
    id: 3,
    title: "Lorem Ipsum",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum risus turpis, mollis at commodo nec, accumsan sed enim. Nunc consequat massa at velit dignissim, ut imperdiet risus feugiat. Curabitur tellus mi, auctor a velit id, luctus egestas lacus. Maecenas eu ex ac metus euismod pulvinar in nec neque. Sed lobortis gravida ipsum, eget sodales leo tempus ut. Sed luctus varius est vitae fermentum. Integer tempus, metus id pretium euismod, nibh sem molestie ante",
    author: "John Doe",
    created_at: "2021-01-01",
    type: NewsType.sport,
  },
  {
    id: 4,
    title: "Lorem Ipsum",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum risus turpis, mollis at commodo nec, accumsan sed enim. Nunc consequat massa at velit dignissim, ut imperdiet risus feugiat. Curabitur tellus mi, auctor a velit id, luctus egestas lacus. Maecenas eu ex ac metus euismod pulvinar in nec neque. Sed lobortis gravida ipsum, eget sodales leo tempus ut. Sed luctus varius est vitae fermentum. Integer tempus, metus id pretium euismod, nibh sem molestie ante",
    author: "John Doe",
    created_at: "2021-01-01",
    type: NewsType.politics,
  },
  {
    id: 5,
    title: "Lorem Ipsum",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum risus turpis, mollis at commodo nec, accumsan sed enim. Nunc consequat massa at velit dignissim, ut imperdiet risus feugiat. Curabitur tellus mi, auctor a velit id, luctus egestas lacus. Maecenas eu ex ac metus euismod pulvinar in nec neque. Sed lobortis gravida ipsum, eget sodales leo tempus ut. Sed luctus varius est vitae fermentum. Integer tempus, metus id pretium euismod, nibh sem molestie ante",
    author: "John Doe",
    created_at: "2021-01-01",
    type: NewsType.funny,
  },
  {
    id: 6,
    title: "Lorem Ipsum",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum risus turpis, mollis at commodo nec, accumsan sed enim. Nunc consequat massa at velit dignissim, ut imperdiet risus feugiat. Curabitur tellus mi, auctor a velit id, luctus egestas lacus. Maecenas eu ex ac metus euismod pulvinar in nec neque. Sed lobortis gravida ipsum, eget sodales leo tempus ut. Sed luctus varius est vitae fermentum. Integer tempus, metus id pretium euismod, nibh sem molestie ante",
    author: "John Doe",
    created_at: "2021-01-01",
    type: NewsType.sad,
  },
  {
    id: 7,
    title: "Lorem Ipsum",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum risus turpis, mollis at commodo nec, accumsan sed enim. Nunc consequat massa at velit dignissim, ut imperdiet risus feugiat. Curabitur tellus mi, auctor a velit id, luctus egestas lacus. Maecenas eu ex ac metus euismod pulvinar in nec neque. Sed lobortis gravida ipsum, eget sodales leo tempus ut. Sed luctus varius est vitae fermentum. Integer tempus, metus id pretium euismod, nibh sem molestie ante",
    author: "John Doe",
    created_at: "2021-01-01",
    type: NewsType.sad,
  },
];
