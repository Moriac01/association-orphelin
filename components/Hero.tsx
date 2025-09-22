"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b flex mb-4 from-brand/5 to-transparent">
      <div className="container py-16 grid md:grid-cols-2 gap-12 items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="order-2  lg:order-none"
        >
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl mb-4"
          >
            Offrir espoir et avenir aux orphelins
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="leading-5 tracking-wide text-base lg:text-lg lg:tracking-wider lg:leading-none text-gray-700 mb-6"
          >
            Grâce à votre soutien, nous agissons pour l&apos;éducation, la santé et
            l&apos;épanouissement des enfants.
          </motion.p>
          <div className="flex gap-3 lg:justify-start justify-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 2 }}
              viewport={{ once: true }}
            >
              <Link
                href="/donate"
                className="inline-flex items-center justify-center rounded-2xl px-4 py-2 font-medium bg-blue-500 text-white hover:bg-sidebar-accent-foreground transition pulse-color"
              >
                Soutenez nous
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 2 }}
              viewport={{ once: true }}
            >
              <Link
                href="/volunteer"
                className="inline-flex items-center justify-center rounded-2xl px-4 py-2 font-medium border border-blue-500 text-blue-500 hover:bg-sidebar-accent-foreground hover:text-white transition"
              >
                Agissez avec nous
              </Link>
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          viewport={{ once: true }}
          className="card order-1"
        >
          <div className="aspect-video rounded-xl bg-gray-100">
            <span className="text-gray-500">
              <Image
                src="/IMG-20250913-WA0014.jpg"
                alt=""
                width={200}
                height={200}
                className="object-contain w-screen "
              />
            </span>
          </div>
          <p className="mt-3 text-xl text-gray-600">
            Donnez le sourire pour un avenir venir.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
