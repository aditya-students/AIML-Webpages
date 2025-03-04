// import { motion, useInView } from "framer-motion";
// import { useRef } from "react";
// import Photo from "../Photos/michael-dam-mEZ3PoFGs_k-unsplash.jpg";

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.2,
//     },
//   },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 50 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.6,
//       ease: "easeOut",
//     },
//   },
// };

// const facultyData = [
//   {
//     fullName: "Dr. John Doe",
//     qualification: "PhD in Computer Science",
//     experience: "15 years",
//     specialization: "Artificial Intelligence, Machine Learning",
//     email: "john.doe@college.edu",
//   },
//   {
//     fullName: "Dr. Jane Smith",
//     qualification: "PhD in Mathematics",
//     experience: "10 years",
//     specialization: "Applied Mathematics, Data Analysis",
//     email: "jane.smith@college.edu",
//   },
//   {
//     fullName: "Dr. Jane Smith",
//     qualification: "PhD in Mathematics",
//     experience: "10 years",
//     specialization: "Applied Mathematics, Data Analysis",
//     email: "jane.smith@college.edu",
//   },
//   {
//     fullName: "Dr. Jane Smith",
//     qualification: "PhD in Mathematics",
//     experience: "10 years",
//     specialization: "Applied Mathematics, Data Analysis",
//     email: "jane.smith@college.edu",
//   },
//   {
//     fullName: "Dr. Jane Smith",
//     qualification: "PhD in Mathematics",
//     experience: "10 years",
//     specialization: "Applied Mathematics, Data Analysis",
//     email: "jane.smith@college.edu",
//   },
//   {
//     fullName: "Dr. Jane Smith",
//     qualification: "PhD in Mathematics",
//     experience: "10 years",
//     specialization: "Applied Mathematics, Data Analysis",
//     email: "jane.smith@college.edu",
//   },
//   {
//     fullName: "Dr. Jane Smith",
//     qualification: "PhD in Mathematics",
//     experience: "10 years",
//     specialization: "Applied Mathematics, Data Analysis",
//     email: "jane.smith@college.edu",
//   },
//   {
//     fullName: "Dr. Jane Smith",
//     qualification: "PhD in Mathematics",
//     experience: "10 years",
//     specialization: "Applied Mathematics, Data Analysis",
//     email: "jane.smith@college.edu",
//   }
// ];

// export default function FacultyPage() {
//   const sectionRef = useRef(null);
//   const isInView = useInView(sectionRef, { once: true });

//   return (
//     <div className="p-18">
//       <motion.h1
//         className="text-4xl font-extrabold text-center text-gray-800 mb-12"
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6, ease: "easeOut" }}
//       >
//         Meet Our Teaching Staff
//       </motion.h1>

//       <motion.div
//         ref={sectionRef}
//         className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
//         variants={containerVariants}
//         initial="hidden"
//         animate={isInView ? "visible" : "hidden"}
//       >
//         {facultyData.map((faculty, index) => (
//           <motion.div
//             key={index}
//             className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 w-full max-w-sm mx-auto"
//             variants={itemVariants}
//           >
//             <div className="flex justify-center mt-6">
//               <img
//                 src={Photo}
//                 alt={faculty.fullName}
//                 className="w-32 h-32 object-cover rounded-full border-4 border-gray-200"
//               />
//             </div>
//             <div className="p-6 text-center">
//               <h2 className="text-xl font-bold mb-2">{faculty.fullName}</h2>
//               <p className="text-gray-700 mb-2">
//                 <strong>Qualification:</strong> {faculty.qualification}
//               </p>
//               <p className="text-gray-700 mb-2">
//                 <strong>Experience:</strong> {faculty.experience}
//               </p>
//               <p className="text-gray-700 mb-2">
//                 <strong>Specialization:</strong> {faculty.specialization}
//               </p>
//               <a
//                 href={`mailto:${faculty.email}`}
//                 className="text-blue-500 hover:underline"
//               >
//                 {faculty.email}
//               </a>
//             </div>
//           </motion.div>
//         ))}
//       </motion.div>
//     </div>
//   );
// }


import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1, y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const facultyData = [
  {
    fullName: "Dr. John Doe",
    qualification: "PhD in Computer Science",
    experience: "15 years",
    specialization: "Artificial Intelligence, Machine Learning",
    email: "john.doe@college.edu",
    photo: "../../public/Photos/Avatar11.jpg"
  },
  {
    fullName: "Dr. Jane Smith",
    qualification: "PhD in Mathematics",
    experience: "10 years",
    specialization: "Applied Mathematics, Data Analysis",
    email: "jane.smith@college.edu",
    photo: "../../public/Photos/Avatar12.webp"
  },
  {
    fullName: "Dr. Alice Johnson",
    qualification: "PhD in Physics",
    experience: "8 years",
    specialization: "Quantum Mechanics, Astrophysics",
    email: "alice.johnson@college.edu",
    photo: "../../public/Photos/michael-dam-mEZ3PoFGs_k-unsplash.jpg"
  },
  {
    fullName: "Dr. Robert Brown",
    qualification: "PhD in Chemistry",
    experience: "12 years",
    specialization: "Organic Chemistry, Molecular Biology",
    email: "robert.brown@college.edu",
    photo: "../../public/Photos/Avatar12.webp"
  },
  {
    fullName: "Dr. Robert Brown",
    qualification: "PhD in Chemistry",
    experience: "12 years",
    specialization: "Organic Chemistry, Molecular Biology",
    email: "robert.brown@college.edu",
    photo: "../../public/Photos/Avatar12.webp"
  },
  {
    fullName: "Dr. Robert Brown",
    qualification: "PhD in Chemistry",
    experience: "12 years",
    specialization: "Organic Chemistry, Molecular Biology",
    email: "robert.brown@college.edu",
    photo: "../../public/Photos/Avatar12.webp"
  }
];

export default function FacultyPage() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <div className="p-18">
      <motion.h1
        className="text-4xl font-extrabold text-center text-gray-800 mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Meet Our Teaching Staff
      </motion.h1>

      <motion.div
        ref={sectionRef}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {facultyData.map((faculty, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 w-full max-w-sm mx-auto"
            variants={itemVariants}
          >
            <div className="flex justify-center mt-6">
              <img
                src={faculty.photo}
                alt={faculty.fullName}
                className="w-32 h-32 object-cover rounded-full border-4 border-gray-200"
              />
            </div>
            <div className="p-6 text-center">
              <h2 className="text-xl font-bold mb-2">{faculty.fullName}</h2>
              <p className="text-gray-700 mb-2">
                <strong>Qualification:</strong> {faculty.qualification}
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Experience:</strong> {faculty.experience}
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Specialization:</strong> {faculty.specialization}
              </p>
              <a
                href={`mailto:${faculty.email}`}
                className="text-blue-500 hover:underline"
              >
                {faculty.email}
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}