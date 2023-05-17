import SingleCard from "./SingleCard";
import { cards } from "../constants/projectList";
export default function Projects() {
  return (
    <div className="flex  flex-wrap gap-10 justify-evenly my-4 lg:my-10">
      {cards.map((item, i) => (
        <SingleCard
          key={i}
          image={item.image}
          title={item.title}
          description={item.description}
          techStack={item.techStack}
          deployLink={item.deployLink}
          githubLink={item.githubLink}
        />
      ))}
    </div>
  );
}
