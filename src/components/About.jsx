import { useState } from "react";
import { motion } from "framer-motion";

const aboutContent = "The AIML Department at Lokmanya Tilak College of Engineering is dedicated to fostering innovation in AI and Machine Learning. Our curriculum integrates cutting-edge research, industry exposure, and hands-on projects to empower students with real-world skills.";

const objectives = [
  { 
    title: "Program Outcomes (POs)", 
    content: [
      "Apply engineering knowledge to analyze problems and design AI/ML-based solutions.",
      "Demonstrate proficiency in software development, data analytics, and AI-driven problem-solving.",
      "Adhere to professional ethics and communicate effectively in multidisciplinary teams.",
      "Engage in lifelong learning and research in AI and ML fields.",
      "Develop AI models with real-world applications and assess their societal impact."
    ]
  },
  { 
    title: "Course Outcomes (COs)", 
    content: [
      "Gain proficiency in machine learning algorithms, deep learning, and AI ethics.",
      "Understand data preprocessing techniques, model evaluation strategies, and optimization methods.",
      "Develop AI applications using frameworks such as TensorFlow and PyTorch.",
      "Acquire knowledge in cloud computing for AI and AI-driven decision-making techniques.",
      "Implement AI solutions for real-world case studies and projects."
    ]
  },
  { 
    title: "Program Educational Objectives (PEOs)", 
    content: [
      "Excel in AI/ML domains and contribute to research.",
      "Lead innovative projects and develop AI-driven solutions for industry challenges.",
      "Engage in lifelong learning and adapt to evolving AI/ML technologies.",
      "Collaborate effectively in multidisciplinary teams and maintain professional ethics."
    ]
  }
];

const labs = [
  { name: "AI & ML Lab", room: "201", pcs: 30, equipment: "High-performance GPUs, TensorFlow-enabled machines" },
  { name: "Data Science Lab", room: "202", pcs: 25, equipment: "Python, R Studio, Hadoop cluster" },
  { name: "IoT Lab", room: "203", pcs: 20, equipment: "Arduino kits, Raspberry Pi, IoT sensors" }
];

export default function AboutPage() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="bg-white text-black">
      {/* Hero Section */}
      <div className="p-12 text-center">
        <h1 className="text-4xl font-bold">About AIML Department</h1>
        <p className="mt-4 text-lg max-w-4xl mx-auto leading-relaxed">The AIML Department at Lokmanya Tilak College of Engineering is committed to excellence in AI and Machine Learning education. With a strong focus on innovation, research, and hands-on learning, we equip students with the skills needed for a future driven by AI advancements.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, nemo ab! Provident perspiciatis atque in cupiditate vero rerum iste consectetur, hic obcaecati nobis tempore ad dolore maiores eligendi non soluta.
            Ex eos ipsa odio ut, rem ad ea. Libero officia unde provident fugiat tempore quia explicabo corrupti, quam laborum fuga odit repellat optio numquam, nesciunt rerum vel consequuntur laboriosam eligendi?
            Iusto rerum tempore odio nam reprehenderit corporis maxime dicta quod, neque incidunt iure veritatis deleniti culpa quis quo harum, aspernatur molestias ut assumenda id quasi? Architecto ea ad a aliquam.
            Possimus amet eligendi, dicta saepe provident ullam explicabo fuga, illum doloremque deserunt sed, cupiditate fugiat! Eligendi hic iusto, illo dolorem, minus, autem soluta quod provident et voluptatum aperiam veritatis tenetur.
            Facilis temporibus doloribus blanditiis facere id eveniet ullam, eligendi iure esse odio quas aliquam quia pariatur numquam nemo similique fugiat exercitationem tempore eos, atque ad sapiente itaque quos mollitia? Porro.
            Id quae veniam voluptatum architecto soluta nisi nesciunt hic repellat voluptates officia! Maxime ratione cum eligendi veritatis aliquid expedita, sit ullam possimus nulla magnam porro minima, odio sapiente cupiditate enim.
            Omnis at nesciunt cum. Similique harum ea tempora quis accusantium vel at aperiam illo nemo ut fuga modi porro ex error cupiditate praesentium pariatur consectetur asperiores distinctio sint, repellat mollitia!
            Incidunt nulla animi beatae aliquid voluptas voluptatum votum aperiam neque dolores! Doloribus error modi esse delectus ut doloremque laudantium nihil laborum quod? Facilis labore esse vitae dolore distinctio voluptatem blanditiis accusamus iusto sequi veritatis?
        </p>
      </div>

      {/* Objectives Section */}
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold text-center mb-6">Objectives</h2>
        <div className="space-y-4">
          {objectives.map((obj, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-lg cursor-pointer" onClick={() => setSelected(selected === index ? null : index)}>
              <h3 className="text-xl font-semibold">{obj.title}</h3>
              {selected === index && (
                <ul className="mt-2 text-gray-700 list-disc list-inside">
                  {obj.content.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Labs Section */}
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold text-center mb-6">Department Labs</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border px-4 py-2">Lab Name</th>
                <th className="border px-4 py-2">Room No</th>
                <th className="border px-4 py-2">No. of PCs</th>
                <th className="border px-4 py-2">Equipment</th>
              </tr>
            </thead>
            <tbody>
              {labs.map((lab, index) => (
                <tr key={index} className="border">
                  <td className="border px-4 py-2">{lab.name}</td>
                  <td className="border px-4 py-2">{lab.room}</td>
                  <td className="border px-4 py-2">{lab.pcs}</td>
                  <td className="border px-4 py-2">{lab.equipment}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
