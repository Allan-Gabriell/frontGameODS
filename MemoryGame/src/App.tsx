import "./App.css";
import Card from "./assets/Card/Card";
import { useCardData } from "./assets/hooks/useCardData";
function App() {
  const { data } = useCardData();
  return (
    <div>
      {" "}
      {data?.map((cardInterface) => (
        <Card
          key={cardInterface.id}
          imgUrl={cardInterface.imgUrl}
          description={cardInterface.description}
        />
      ))}{" "}
    </div>
  );
}

export default App;