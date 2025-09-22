import Image from "next/image";

export default function ActionsPage() {
  return (
    <section className="container py-12 space-y-8">
      <h1 className="text-3xl">Nos actions</h1>
      <div
        id="education"
        className="card justify-center items-center  lg:gap-20 grid lg:grid-cols-2"
      >
        <Image
          src="/edu.jpg"
          alt="Image éducation"
          width={70}
          height={70}
          className="object-cover w-full mb-4 lg:order-2  "
        />
        <div className="lg:order-1 ">
          <h2 className="text-2xl mb-2">Éducation</h2>
          <p>
            L&apos;associatin Soutien aux Orphelins assure un suivi éducatif pour
            tous ces enfants vulnérables notament les orphelins pour garantir
            une réussite scolaire.
          </p>
        </div>
      </div>

      <div id="sante" className="card justify-center items-center  lg:gap-20 grid lg:grid-cols-2">
        <Image
          src="/sant.jpg"
          alt="Image Santé"
          width={60}
          height={60}
          className="object-cover w-full mb-4 lg:order-2"
        />
        <div className="lg:order-1">
          <h2 className="text-2xl mb-2">Santé</h2>
          <p>Nous agissons aussi pour le bien-être de ces enfants en mettant en œuvre les soins de santé.</p>
        </div>
      </div>
      <div id="nutrition" className="card justify-center items-center  lg:gap-20 grid lg:grid-cols-2">
        <Image
        src="/IMG-20250913-WA0015.jpg"
        alt="Image Nutrition"
        width={60}
        height={60}
        className="object-cover w-full mb-4 lg:order-2"
        />
        <div className="lg:order-1">
          <h2 className="text-2xl mb-2">Nutrition</h2>
  <p>L&apos;association contribue également à améliorer l&apos;état de nutrition chez ces enfants démunis.</p>
        </div>
      </div>
    </section>
  );
}
