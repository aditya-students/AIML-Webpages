import { Card, CardContent } from "../components/ui/card.jsx";
import { motion } from "framer-motion";

const HODSection = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      {/* HOD Photo */}
      <motion.img
        src="../../public/Photos/HOD.jpg"
        alt="HOD"
        className="w-48 h-48 rounded-full border-4 border-gray-300 shadow-lg"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      />

      {/* HOD Information */}
      <Card className="mt-6 w-full max-w-3xl text-center shadow-lg border-none bg-white rounded-2xl p-6">
        <CardContent>
          <h2 className="text-3xl font-bold text-gray-800">Dr. John Doe</h2>
          <p className="text-gray-600 mt-2">Head of AIML Department</p>
          <p className="text-gray-500 mt-2">PhD in Artificial Intelligence & Machine Learning</p>
          <p className="text-gray-500 mt-1">Specialization: Deep Learning, NLP</p>
          <p className="text-gray-500 mt-1">Email: johndoe@college.edu</p>
        </CardContent>
      </Card>

      {/* HOD Message Section */}
      <motion.div
        className="mt-10 w-full max-w-4xl bg-white p-6 rounded-2xl shadow-xl border-l-8 border-blue-500"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-2xl font-bold text-gray-800 mb-4">HOD's Message</h3>
        <p className="text-gray-600 leading-relaxed">
          Welcome to the AIML Department. Our mission is to nurture innovative minds, equip students with cutting-edge
          knowledge, and prepare them for the future of Artificial Intelligence and Machine Learning. We believe in
          fostering a collaborative learning environment that bridges academia and industry. I encourage all students
          to explore, learn, and push the boundaries of AI for the betterment of society.
        </p>
      </motion.div>
    </div>
  );
};

export default HODSection;
