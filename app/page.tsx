import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>Bienvenue sur notre site</h1>
      <p>Nous sommes ravis de vous accueillir.</p>
      <Image src="/hero.jpg" alt="Hero" width={800} height={600} />
    </div>
  );
}
