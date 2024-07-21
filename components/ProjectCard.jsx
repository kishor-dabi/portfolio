import Image from "next/image";
import Link from "next/link";

import image from "@/public/footer-gradient.svg"

const ProjectCard = () => {
  const data = [
    {
      id: 1,
      image,
      title: "Invenco",
      description: "A warehouse manag",
      link: "https://development.invenco.io/",
      target: "_self",
    },
    {
      id: 2,
      image,
      title: "AMCi",
      description: "",
      link: "https://amci1440.com/",
      target: "_self",
    },
    {
      id: 3,
      image,
      title: "Jio Cinema",
      description: "Online OTT Plateform",
      link: "https://Jiocinema.com",
      target: "_self",
    },
    {
      id: 4,
      image,
      title: "VootKids",
      description: "OTT plateforn for Kids",
      link: "https://vootkids.com/",
      target: "_blank",
    },
    {
      id: 9,
      title: "Pacific national",
      description: "A Trsnsportation application for transport Items from one place to another place",
      link: "#",
      target: "_self",
      image,
    },
  ];

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
      {data.map((project) => {
        return (
          <div
            className="rounded-lg mb-12 flex flex-col items-center"
            key={project.id}
          >
            <Link
              href={project.link}
              target={project.target}
              onClick={() => {
                project.title === "Portfolio"
                  ? alert("You are already on this site! 🤩")
                  : project.title === "Pokedex"
                  ? alert(
                      "Ash Ketchum asked you to open in desktop browser.. 🚀"
                    )
                  : "";
              }}
            >
              <Image
                loading="lazy"
                src={project.image}
                alt={project.title}
                width="200"
                height="200"
                className="rounded-lg drop-shadow-2xl hover:scale-110"
              />
            </Link>
            <div className="flex flex-col items-center">
              <h1 className="font-semibold text-[1.5rem] mt-3 text-gray-700 dark:text-white">
                {project.title}
              </h1>
              <p className="max-w-[90%] text-gray-400 font-light text-center text-sm">
                {project.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectCard;
