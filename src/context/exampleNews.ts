import { INews, NewsType } from "../interfaces/news";
import { v4 as generateUUID } from "uuid";

export const exampleNews: INews[] = [
  {
    id: generateUUID(),
    title: "Lorem Ipsum",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum risus turpis, mollis at commodo nec, accumsan sed enim. Nunc consequat massa at velit dignissim, ut imperdiet risus feugiat. Curabitur tellus mi, auctor a velit id, luctus egestas lacus. Maecenas eu ex ac metus euismod pulvinar in nec neque. Sed lobortis gravida ipsum, eget sodales leo tempus ut. Sed luctus varius est vitae fermentum. Integer tempus, metus id pretium euismod, nibh sem molestie ante",
    author: "John Doe",
    created_at: new Date("2023-06-30 16:00"), //Todo: Date in milliseconds
    type: NewsType.Politics,
  },
  {
    id: generateUUID(),
    title: "Grigor Dimitrov is the best tennis player in the world",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum risus turpis, mollis at commodo nec, accumsan sed enim. Nunc consequat massa at velit dignissim, ut imperdiet risus feugiat. Curabitur tellus mi, auctor a velit id, luctus egestas lacus. Maecenas eu ex ac metus euismod pulvinar in nec neque. Sed lobortis gravida ipsum, eget sodales leo tempus ut. Sed luctus varius est vitae fermentum. Integer tempus, metus id pretium euismod, nibh sem molestie ante",
    author: "John Doe",
    created_at: new Date("2023-06-30 10:00"),
    type: NewsType.Sport,
  },
  {
    id: generateUUID(),
    title: "The Hitchhiker's Guide to the Code",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum risus turpis, mollis at commodo nec, accumsan sed enim. Nunc consequat massa at velit dignissim, ut imperdiet risus feugiat. Curabitur tellus mi, auctor a velit id, luctus egestas lacus. Maecenas eu ex ac metus euismod pulvinar in nec neque. Sed lobortis gravida ipsum, eget sodales leo tempus ut. Sed luctus varius est vitae fermentum. Integer tempus, metus id pretium euismod, nibh sem molestie ante",
    author: "John Doe",
    created_at: new Date("2023-06-27"),
    type: NewsType.Funny,
  },
  {
    id: generateUUID(),
    title: "The Weight of Loneliness: A Story of Loss and Longing",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum risus turpis, mollis at commodo nec, accumsan sed enim. Nunc consequat massa at velit dignissim, ut imperdiet risus feugiat. Curabitur tellus mi, auctor a velit id, luctus egestas lacus. Maecenas eu ex ac metus euismod pulvinar in nec neque. Sed lobortis gravida ipsum, eget sodales leo tempus ut. Sed luctus varius est vitae fermentum. Integer tempus, metus id pretium euismod, nibh sem molestie ante",
    author: "John Doe",
    created_at: new Date("2021-01-01"),
    type: NewsType.Sad,
  },
  {
    id: generateUUID(),
    title: "The Politics of Power: A Critical Analysis of Modern Democracy",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum risus turpis, mollis at commodo nec, accumsan sed enim. Nunc consequat massa at velit dignissim, ut imperdiet risus feugiat. Curabitur tellus mi, auctor a velit id, luctus egestas lacus. Maecenas eu ex ac metus euismod pulvinar in nec neque. Sed lobortis gravida ipsum, eget sodales leo tempus ut. Sed luctus varius est vitae fermentum. Integer tempus, metus id pretium euismod, nibh sem molestie ante",
    author: "John Doe",
    created_at: new Date("2021-01-01"),
    type: NewsType.Politics,
  },
  {
    id: generateUUID(),
    title: "The Thrill of Victory: A Look at the World of Competitive Sports",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum risus turpis, mollis at commodo nec, accumsan sed enim. Nunc consequat massa at velit dignissim, ut imperdiet risus feugiat. Curabitur tellus mi, auctor a velit id, luctus egestas lacus. Maecenas eu ex ac metus euismod pulvinar in nec neque. Sed lobortis gravida ipsum, eget sodales leo tempus ut. Sed luctus varius est vitae fermentum. Integer tempus, metus id pretium euismod, nibh sem molestie ante",
    author: "John Doe",
    created_at: new Date("2021-01-01"),
    type: NewsType.Sport,
  },
];
