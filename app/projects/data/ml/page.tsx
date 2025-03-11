"use client"

import { motion } from "framer-motion"
import { Brain, ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function MachineLearningModelsPage() {
  return (
    <div className="pt-24 px-4 md:px-8 max-w-6xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <div className="flex items-center gap-4 mb-12">
          <div className="bg-[#6B7280]/20 p-3 rounded-full">
            <Brain className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-3xl md:text-5xl font-normal text-white tracking-tight">
            Machine Learning
            <span className="block">Models</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="col-span-2">
            <p className="text-lg text-white/70 mb-8 font-light">
              A collection of predictive analytics experiments exploring various machine learning approaches to solve
              real-world problems. This project demonstrates the application of supervised and unsupervised learning
              techniques to extract insights and make predictions from complex datasets.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-3 py-1 bg-white/10 text-white/80 rounded-full text-sm">TensorFlow</span>
              <span className="px-3 py-1 bg-white/10 text-white/80 rounded-full text-sm">scikit-learn</span>
              <span className="px-3 py-1 bg-white/10 text-white/80 rounded-full text-sm">Python</span>
              <span className="px-3 py-1 bg-white/10 text-white/80 rounded-full text-sm">Jupyter</span>
              <span className="px-3 py-1 bg-white/10 text-white/80 rounded-full text-sm">Deep Learning</span>
            </div>
            <div className="flex gap-6">
              <motion.a
                href="https://github.com/yourusername/ml-models"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/60 hover:text-white transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <Github className="w-5 h-5" />
                <span>View Code</span>
              </motion.a>
              <motion.a
                href="https://ml-models-demo.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/60 hover:text-white transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <ExternalLink className="w-5 h-5" />
                <span>Live Demo</span>
              </motion.a>
            </div>
          </div>
          <div className="col-span-1">
            <div className="bg-white/5 p-6 rounded-lg border border-white/10">
              <h3 className="text-lg font-normal mb-6 text-white/80">Project Details</h3>
              <div className="space-y-5">
                <div>
                  <p className="text-sm text-white/40 mb-1">Timeline</p>
                  <p className="text-white/80">Jul 2023 - Oct 2023</p>
                </div>
                <div>
                  <p className="text-sm text-white/40 mb-1">Role</p>
                  <p className="text-white/80">Machine Learning Engineer</p>
                </div>
                <div>
                  <p className="text-sm text-white/40 mb-1">Team Size</p>
                  <p className="text-white/80">Solo Project</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project Showcase */}
        <div className="mb-20">
          <motion.div
            className="aspect-video w-full bg-white/5 rounded-lg overflow-hidden mb-6"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src="/placeholder.svg?height=720&width=1280"
              alt="Machine Learning Models"
              width={1280}
              height={720}
              className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
            />
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <motion.div
              className="aspect-video bg-white/5 rounded-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/placeholder.svg?height=240&width=427"
                alt="ML Model Detail 1"
                width={427}
                height={240}
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
              />
            </motion.div>
            <motion.div
              className="aspect-video bg-white/5 rounded-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/placeholder.svg?height=240&width=427"
                alt="ML Model Detail 2"
                width={427}
                height={240}
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
              />
            </motion.div>
            <motion.div
              className="aspect-video bg-white/5 rounded-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/placeholder.svg?height=240&width=427"
                alt="ML Model Detail 3"
                width={427}
                alt="ML Model Detail 3"
                width={427}
                height={240}
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
              />
            </motion.div>
          </div>
        </div>

        {/* Project Description */}
        <div className="mb-20">
          <h2 className="text-2xl font-normal mb-8 text-white">Project Overview</h2>
          <div className="text-white/70 space-y-6 font-light">
            <p>
              The Machine Learning Models project is a collection of experiments exploring various predictive analytics
              approaches. The goal was to develop and compare different machine learning techniques for solving
              real-world problems, from customer churn prediction to image classification and natural language
              processing.
            </p>

            <div>
              <h3 className="text-xl font-normal mb-4 text-white/90">Key Models & Experiments</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Customer Churn Prediction using Random Forests and Gradient Boosting</li>
                <li>Image Classification with Convolutional Neural Networks</li>
                <li>Sentiment Analysis using BERT and Transformer models</li>
                <li>Time Series Forecasting with LSTM networks</li>
                <li>Anomaly Detection using Autoencoders</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-normal mb-4 text-white/90">Technical Implementation</h3>
              <p>
                The models were implemented using Python with TensorFlow and scikit-learn as the primary frameworks.
                Jupyter notebooks were used for exploratory data analysis and model development. The workflow included
                data preprocessing, feature engineering, model training, hyperparameter tuning, and evaluation.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-normal mb-4 text-white/90">Challenges & Solutions</h3>
              <p>
                One of the main challenges was dealing with imbalanced datasets, particularly in the churn prediction
                model. This was addressed by implementing SMOTE (Synthetic Minority Over-sampling Technique) and
                adjusting class weights. Another challenge was optimizing the deep learning models for performance,
                which was solved through techniques like transfer learning and progressive model pruning.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-normal mb-4 text-white/90">Outcomes</h3>
              <p>
                The customer churn prediction model achieved 87% accuracy, significantly improving over baseline
                methods. The sentiment analysis model demonstrated 92% accuracy on benchmark datasets, and the time
                series forecasting model reduced prediction error by 35% compared to traditional statistical methods.
              </p>
            </div>
          </div>
        </div>

        {/* Next Project */}
        <div className="border-t border-white/10 pt-12 pb-20">
          <h2 className="text-xl font-normal mb-8 text-white/60">Next Project</h2>
          <Link href="/projects/data/database" className="block">
            <motion.div
              className="bg-[#D1D5DB]/10 rounded-lg p-8 transition-all"
              whileHover={{
                scale: 1.02,
                backgroundColor: "rgba(209, 213, 219, 0.15)",
              }}
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-2xl font-normal mb-2 text-white">Database Architecture</h3>
                  <p className="text-white/60">Data structure optimization</p>
                </div>
                <motion.div
                  className="bg-white/10 p-3 rounded-full"
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "loop",
                    duration: 1.5,
                    repeatDelay: 1,
                  }}
                >
                  <ExternalLink className="w-5 h-5 text-white/80" />
                </motion.div>
              </div>
            </motion.div>
          </Link>
        </div>
      </motion.div>
    </div>
  )
}

