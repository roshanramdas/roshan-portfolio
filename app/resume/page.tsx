"use client";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import ExperienceItem from "../components/itemCard";

export default function Resume() {
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "RoshanRamdas.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const employmentExperience = [
    {
      title: "Web Application Developer",
      company: "ICE Robotics Canada",
      //location: "Etobicoke, Canada",
      date: "May 2023 – Aug 2023 (Coop)",
      responsibilities: [
        "Led website management initiatives at ICE Robotics Canada, optimizing performance and enhancing user experience.",
        "Spearheaded the integration of gateway payment solutions using WordPress, HTML, and JS for seamless transactions.",
        "Revitalized Website frameworks with strategic SEO enhancements, resulting in a remarkable 30% increase in traffic.",
        "Google Analytics metrics for continuous improvement and actionable insights.",
      ],
    },
    {
      title: "Mobile Application Developer",
      company: "Capgemini",
      //location: "Pune, India",
      date: "Feb 2019 – Dec 2021",
      responsibilities: [
        "Spearheaded the creation of multiple Proof of Concepts (POCs) in Ionic Cordova to streamline asset management processes, optimizing efficiency and scalability.",
        "Engineered POCs in React-Native for the asset team, leveraging cutting-edge technologies to develop bespoke custom components. Implemented advanced features such as Redis cache integration and voice/video call functionalities, enhancing application performance and user experience",
        "Produced custom components for code reuse and increased productivity.",
      ],
    },
    {
      title: "Associate Software Engineer",
      company: "Zenovoir Technologies",
      //location: "Pune, India",
      date: "Dec 2017 – Feb 2019",
      responsibilities: [
        "Developed and hosted websites and web applications using JavaScript, Angular, Zend, and HTML.",
        "Made WebApp responsive, called Rest API services, and integrated them as per the flow.",
        "Created a functional requirement specification document.",
      ],
    },
  ];

  return (
    <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <Navigation />
      <div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
        <div className="grid w-full grid-cols-1 gap-8 mx-auto mt-8 sm:grid-cols-2">
          <Card className="p-6 text-white">
            <h2 className="text-3xl font-bold mb-4">Explore my Expertise</h2>
            <div className="flex flex-wrap">
              {employmentExperience.map((experience, index) => (
                <ExperienceItem key={index} {...experience} />
              ))}
            </div>
          </Card>
          <div className="flex flex-col items-center justify-center mt-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Unlock My Journey</h2>
            <p className="text-gray-400 mb-4">
              Embark on an enriching journey with over 4 years of dedicated expertise.
            </p>
            <p className="text-gray-400 mb-4">
              Feel free to download my journey in PDF format.
            </p>
            <button
              className="bg-zinc-500 hover:bg-zinc-400 text-white font-bold py-2 px-4 rounded"
              onClick={downloadResume}
            >
              Discover Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );  
}
