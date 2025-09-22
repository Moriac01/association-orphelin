import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="space-y-12">
      <Hero />
      <Stats />
      <section className="container grid md:grid-cols-3 gap-6">
        {[
          { title: "Éducation", desc: "Soutien scolaire, fournitures et accompagnement.", href: "/actions#education", img: "/edu.jpg" },
          { title: "Santé", desc: "Prise en charge médicale et sensibilisation.", href: "/actions#sante", img: "/sant.jpg" },
          { title: "Nutrition", desc: "Repas équilibrés et sécurité alimentaire.", href: "/actions#nutrition", img: "/IMG-20250913-WA0015.jpg" },
        ].map(c => (
          <div key={c.title} className="card  hover:scale-105 transition duration-75 hover:shadow-accent-foreground ">
            <Image
            src={c.img}
            alt=""
            width={90}
            height={90}
            className="w-full object-cover"
            />
            <h3 className="text-xl pt-2 mb-2">{c.title}</h3>
            <p className="text-gray-700 mb-4 lg:leading-4">{c.desc}</p>
            <Link href={c.href} className="btn-outline bg-amber-300 rounded-full py-2 px-4 animate-pulse">Découvrir</Link>
          </div>
        ))}
      </section>
      <section className="container card">
        <h2 className="text-2xl mb-4">Derniers articles</h2>
        <p className="text-gray-600">Le blog présente vos actualités et compte-rendus. Gérez les articles via Prisma.</p>
        <a href="/blog" className="btn mt-4 inline-block">Voir le blog</a>
      </section>
    </div>
  );
}
