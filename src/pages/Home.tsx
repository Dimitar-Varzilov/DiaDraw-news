import CardComponent from "../components/CardComponent";
import Example from "../components/SpeedDial";
import { useAppContext } from "../context/AppProvider";
type Props = {};

const Home = (props: Props) => {
  const { news } = useAppContext();

  return (
    <div className="pb-2 pt-10">
      <div className="flex w-fit-content flex-col items-center justify-center gap-4">
        {news.map((item) => (
          <CardComponent
            key={item.id}
            id={item.id}
            title={item.title}
            content={item.content.substring(0, 150).concat("...")}
            dateOfCreate={item.created_at}
            type={item.type}
          />
        ))}
      </div>
      <Example />
    </div>
  );
};

export default Home;
