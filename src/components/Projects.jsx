import SingleCard from "./SingleCard";
export default function Projects() {
  const cards = [
    {
      title: "smaple title",
      description:
        "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
      deployLink: "",
      githubLink: "",
    },
    {
      title: "smaple title",
      description:
        "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
      deployLink: "",
      githubLink: "",
    },
    {
      title: "smaple title",
      description:
        "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
      deployLink: "",
      githubLink: "",
    },
    {
      title: "smaple title",
      description:
        "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
      deployLink: "",
      githubLink: "",
    },
    {
      title: "smaple title",
      description:
        "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
      deployLink: "",
      githubLink: "",
    },
    {
      title: "smaple title",
      description:
        "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
      deployLink: "",
      githubLink: "",
    },
  ];

  return (
    <div className="flex  flex-wrap gap-10 justify-evenly my-4 lg:my-10">
      {cards.map((item, i) => (
        <SingleCard
          key={i}
          title={item.title}
          description={item.description}
          deployLink={item.deployLink}
          githubLink={item.githubLink}
        />
      ))}
    </div>
  );
}
