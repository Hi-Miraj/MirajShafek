import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 pt-20">
        <section className="container mx-auto px-4 py-12 md:px-6">
          <div className="mx-auto max-w-3xl">
            <h1 className="font-serif text-3xl font-bold md:text-4xl lg:text-5xl">
              About Me
            </h1>

            <div className="prose-custom prose prose-lg mx-auto mt-8 dark:prose-invert lg:prose-xl">
              <p>
                I'm Miraj Shafek, a 17-year-old high school student, AI/ML developer, public health researcher, 
                and entrepreneur passionate about revolutionizing healthcare through technology. As the 
                Co-founder & CFO of MedVisual, I lead financial strategy and business growth while 
                contributing to AI-driven innovations that make healthcare smarter and more accessible.
              </p>

              <p>
                Currently, I'm a Research Intern at Statice Health, where I work on healthcare research 
                projects aimed at improving accessibility and innovation in public health.
              </p>

              <p>
                My journey began with robotics and programming, where I explored machine learning, computer 
                vision, and AI applications. Over time, I shifted my focus to public health, recognizing the 
                gaps in healthcare accessibility—especially in underserved communities. This led me to 
                co-create MedVisual, Bangladesh's first AI-powered healthcare ecosystem, integrating medical 
                report digitization, predictive analytics, telemedicine, and e-pharmacy into a single platform.
              </p>

              <h2>Projects & Innovations</h2>
              <ul>
                <li><strong>The Evening Post</strong> – An open-source news-sharing platform.</li>
                <li><strong>Sapiens</strong> – A smart study tracker that monitors study hours and provides productivity insights.</li>
                <li><strong>MedVisual</strong> – AI-powered healthcare ecosystem integrating medical report digitization, predictive analytics, telemedicine, and e-pharmacy.</li>
                <li><strong>Levi Disaster Management Robot</strong> – A robotic system designed for disaster response and emergency assistance.</li>
                <li><strong>Chad Human-Serving Robot</strong> – A robotics and AI-driven system that solves hospital management challenges.</li>
                <li><strong>NLP Doctor Recommendation System</strong> – AI-powered system that uses NLP to recommend doctors based on symptoms and patient needs.</li>
                <li><strong>Lung Cancer Prediction with X-ray</strong> – A deep learning model for lung cancer detection using X-ray images.</li>
                <li><strong>Diabetes Prediction Model</strong> – A machine learning model designed to predict diabetes risk.</li>
                <li><strong>Self-Driving Car (Computer Vision)</strong> – Implemented computer vision techniques to enable autonomous driving capabilities, including lane detection and obstacle avoidance.</li>
                <li><strong>Comparative Analysis of Genomic, Proteomic, and Metabolomic Data for Early Detection of Glioblastoma Using AI</strong> – Researched the integration of multi-omics data with artificial intelligence to enhance early detection of glioblastoma.</li>
                <li><strong>Readure</strong> – A web application to manage and maintain your book reading journey with various metrics like reading time, genre insights, progress tracking, and personalized recommendations.</li>
                <li><strong>The Masala Timee</strong> – A platform offering exclusive, in-depth recipes for Indian cuisine, celebrating rich flavors, traditional techniques, and regional diversity.</li>
              </ul>

              <h2>Achievements & Recognitions</h2>
              <ul>
                <li>HackCSB'24 People's Choice Winner</li>
                <li>Finalist (Top 10) – Youth Innovation Expo Asia 2025</li>
                <li>2× Finalist for Bangladesh's Highest U18 Award</li>
                <li>NASA Space Apps Challenge 2024 – One of the Top 50 Teams in Bangladesh</li>
                <li>International Astronomy and Astrophysics Competition 2023 – Semifinalist</li>
                <li>Bangladesh Robotics Olympiad 2022 – BDRO Finalist (One of the Top 20 Robots)</li>
                <li>National Debate Champion (Organized by the biggest debating organization in South Asia)</li>
                <li>Won multiple medals in Mathematics, Biology, Physics, and English Olympiads</li>
                <li>Mentor and Coordinator, one of Bangladesh's most prominent debate and robotics clubs</li>
              </ul>

              <p>
                Beyond my entrepreneurial work, I have actively contributed to public health research, working on projects that address healthcare inequalities in remote regions. My technical expertise includes Python, Scikit-learn, AI-driven diagnostics, and computer vision, enabling me to bridge the gap between healthcare and technology.
              </p>

              <p>
                Let's innovate the future of healthcare together. 🚀
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
