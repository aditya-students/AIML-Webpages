import React, { useState, useEffect } from "react";
import { Card, CardContent } from "../components/ui/card.jsx";
import { Button } from "../components/ui/button.jsx";
import {
  FaUniversity,
  FaBriefcase,
  FaChartLine,
  FaUsers,
  FaEnvelope,
  FaFileDownload,
  FaPlayCircle,
  FaNewspaper,
} from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

const PlacementOpportunities = () => {
  const [placementStats, setPlacementStats] = useState({
    placedPercentage: "Loading...",
    highestPackage: "Loading...",
    averagePackage: "Loading...",
  });

  const [internships, setInternships] = useState([
    { company: "Google", role: "AI Intern", duration: "6 Months" },
    { company: "Microsoft", role: "ML Engineer Intern", duration: "3 Months" },
    {
      company: "Amazon",
      role: "Software Development Intern",
      duration: "6 Months",
    },
  ]);

  const [companies, setCompanies] = useState([
    {
      name: "Google",
      logo: "/google.png",
      link: "https://careers.google.com/",
    },
    {
      name: "Microsoft",
      logo: "/microsoft.png",
      link: "https://careers.microsoft.com/",
    },
    { name: "Amazon", logo: "/amazon.png", link: "https://www.amazon.jobs/" },
  ]);

  const [expandedCareer, setExpandedCareer] = useState(null);

  const careerDetails = {
    "Data Scientist": {
      description: "Data Scientists analyze complex data to derive insights, create predictive models, and assist in data-driven decision-making.",
      additionalInfo: "Key Skills: Python, R, Machine Learning, SQL, Big Data.\nCareer Growth: Senior Data Scientist, Data Science Manager, Chief Data Officer.",
      link: "https://www.coursera.org/articles/how-to-become-a-data-scientist",
    },
    "AI Researcher": {
      description: "AI Researchers work on cutting-edge artificial intelligence algorithms, enhancing AI capabilities and creating innovative solutions.",
      additionalInfo: "Key Skills: Deep Learning, NLP, Reinforcement Learning, Research Publications.\nCareer Growth: AI Scientist, AI Lead, AI Director.",
      link: "https://ai.google/research/",
    },
    "ML Engineer": {
      description: "ML Engineers deploy and optimize machine learning models for production, ensuring scalability and efficiency.",
      additionalInfo: "Key Skills: TensorFlow, PyTorch, Cloud Computing, Model Deployment.\nCareer Growth: Senior ML Engineer, ML Architect, AI Engineer.",
      link: "https://towardsdatascience.com/how-to-become-an-ml-engineer",
    },
    "Software Developer": {
      description: "Software Developers design, build, and maintain applications, integrating AI features where applicable.",
      additionalInfo: "Key Skills: Java, Python, Web Development, API Development.\nCareer Growth: Senior Developer, Tech Lead, Software Architect.",
      link: "https://www.geeksforgeeks.org/software-developer-roadmap/",
    },
  };
  const handleCareerClick = (career) => {
    setExpandedCareer(expandedCareer === career ? null : career);
  };

  useEffect(() => {
    setTimeout(() => {
      setPlacementStats({
        placedPercentage: "85%",
        highestPackage: "₹12 LPA",
        averagePackage: "₹6 LPA",
      });
    }, 2000);
  }, []);

  const [news, setNews] = useState([
    {
      title: "Tech Industry Hiring Trends",
      link: "https://technews.com/hiring-trends",
    },
    {
      title: "Top Companies Hiring AI Engineers",
      link: "https://ai-careers.com/hiring",
    },
    {
      title: "Internship Opportunities at FAANG",
      link: "https://internships.com/faang",
    },
  ]);

  useEffect(() => {
    setTimeout(() => {
      setPlacementStats({
        placedPercentage: "85%",
        highestPackage: "₹12 LPA",
        averagePackage: "₹6 LPA",
      });
    }, 2000);
  }, []);
  return (
    <>
      <div className="container mx-auto px-6 py-10">
      <section className="relative mb-12 text-center py-20">
        <motion.div 
          className="text-center flex flex-col items-center"
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
        >
          <FaBriefcase className="text-6xl text-yellow-400 animate-bounce mb-4" />
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Placements & Opportunities</h1>
          <p className="text-lg text-gray-600">Ensuring professional growth in the tech industry with excellent placement support and career opportunities.</p>
        </motion.div>
      </section>

      <section className="grid md:grid-cols-2 gap-6 mb-12">
        {Object.keys(careerDetails).map((career) => (
          <div key={career} className="relative">
            <Card
              className="shadow-lg p-6 border-l-4 border-green-400 cursor-pointer"
              onClick={() => handleCareerClick(career)}
            >
              <CardContent className="flex items-center gap-4">
                <FaBriefcase className="text-4xl text-green-500" />
                <div>
                  <h2 className="text-xl font-semibold">{career}</h2>
                  <p className="text-gray-600">Click to learn more</p>
                </div>
              </CardContent>
            </Card>
            <AnimatePresence>
              {expandedCareer === career && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-4 p-4 bg-gray-100 rounded-lg"
                >
                  <p className="text-gray-700 font-semibold">{careerDetails[career].description}</p>
                  <p className="text-gray-600 mt-2 whitespace-pre-line">{careerDetails[career].additionalInfo}</p>
                  <a
                    href={careerDetails[career].link}
                    target="_blank"
                    className="text-blue-500 underline mt-2 block"
                  >
                    Learn More
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </section>

        <section className="mb-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Placement Statistics</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 shadow-lg border-l-4 border-blue-400">
              <h3 className="text-xl font-semibold">Placed Students</h3>
              <p className="text-gray-600">{placementStats.placedPercentage}</p>
            </Card>
            <Card className="p-6 shadow-lg border-l-4 border-green-400">
              <h3 className="text-xl font-semibold">Highest Package</h3>
              <p className="text-gray-600">{placementStats.highestPackage}</p>
            </Card>
            <Card className="p-6 shadow-lg border-l-4 border-yellow-400">
              <h3 className="text-xl font-semibold">Average Package</h3>
              <p className="text-gray-600">{placementStats.averagePackage}</p>
            </Card>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Guide to Placement</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 shadow-lg border-l-4 border-yellow-400">
              <FaChartLine className="text-3xl text-yellow-500 mb-2" />
              <h3 className="text-xl font-semibold">
                Step 1: Resume & Profile Building
              </h3>
              <p className="text-gray-600">
                Create an impressive resume and LinkedIn profile to attract
                recruiters.
              </p>
              <a
                href="https://www.linkedin.com/help/linkedin/answer/49746"
                className="text-blue-500 underline mt-2 block"
              >
                LinkedIn Guide
              </a>
            </Card>

            <Card className="p-6 shadow-lg border-l-4 border-green-400">
              <FaUsers className="text-3xl text-green-500 mb-2" />
              <h3 className="text-xl font-semibold">
                Step 2: Prepare for Interviews
              </h3>
              <p className="text-gray-600">
                Practice coding, aptitude, and behavioral interview questions.
              </p>
              <a
                href="https://www.youtube.com/watch?v=rEJzOhC5ZtQ"
                className="text-blue-500 underline mt-2 block"
              >
                Interview Tips Video
              </a>
            </Card>
          </div>
        </section>
      </div>

      <div className="container mx-auto px-6 py-10">
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Latest News</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {news.map((item, index) => (
              <Card
                key={index}
                className="p-6 shadow-lg border-l-4 border-blue-500"
              >
                <FaNewspaper className="text-3xl text-blue-500 mb-2" />
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <a
                  href={item.link}
                  target="_blank"
                  className="text-blue-500 underline mt-2 block"
                >
                  Read More
                </a>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default PlacementOpportunities;
