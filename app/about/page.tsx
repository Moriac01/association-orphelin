"use client";
import { useState } from "react";

const sections = [
  {
    title: "Notre Vision",
    content:
      "L'association << Soutien aux Orphelins >> aspire à un avenir où chaque enfant orphelin aura l'opportunité de s'épanouir pleinement, de réaliser son potentiel et de devenir un membre actif et confiant de la société.  ",
  },
  {
    title: "Nos Valeurs",
    content:
      [
        "Compassion : Agir avec empathie et bienveillance envers chaque enfant. ", <br key="c1" />,<br key="c2" />,
        "Intégrité : Conduire toutes nos actions avec honnêteté, transparence et ehtnique.", <br key="c3" />, <br key="c4" />,
        "Responsabilité : Gérer les ressources de manière  efficace et redevable envers les bénéficiaires et donateurs.", <br key="c5" />, <br key="c6" />,
        "Dignité : Respecter la dignité et les droits de chaque enfant et de sa famille.", <br key="c7" />, <br key="c8" />,
        "Excellence : Rechercher l'amélioration contenue dans toutes nos interventions.",
      ]
  },
  {
    title: "Nos engagements",
    content:
      "La mission de << Soutien aux Orphelins >> est d'améliorer significativement la qualité de vie des enfants orphelins, en leur offrant un accès équitable à l'éducation, aux soins de santé, au soutien psychologique adapté, à une alimentation adéquate et à des vêtements décents, afin de favoriser leur développement harmonieux et leur intégration sociale.",
  },
];

export default function APropos() {
  const [openSections, setOpenSections] = useState<number[]>([]);

  const toggleSection = (index: number) => {
    if (openSections.includes(index)) {
      setOpenSections(openSections.filter((i) => i !== index));
    } else {
      setOpenSections([...openSections, index]);
    }
  };

  return (
    <div className="container top-0 flex flex-col items-center lg:items-start justify-center p-6">
      <div className="item-center grid lg:grid-cols-2  justify-center lg:items-start mb-6">
       <div>
         <h1 className="text-4xl  font-bold mb-6 ">À propos</h1>

        <p className="text-lg font-light tracking-wider leading-5 mb-6 ">
            L&apos;Association Soutien aux Orphelins (ASO) est une organisation à but non lucratif, apolitique et laïque. <br /> Elle  apporte soutien inconstesté aux orphelins 
            dans différents domaines sociaux sans distinction de région, de religion ou d&apos;ethnie. <br />
            En tant qu&apos;association d&apos;aide humanitaire et caritative, nous aidons ces enfants vulnérables à surmonter la pauvreté, l&apos;injustice, l&apos;exclusion sociale et donnons ainsi une chance aux orphelins d&apos;avoir droit 
            à l&apos;éducation et de bénéficier des soins sanitaires de base.
        </p>
       </div>

        <div className="card container">

        </div>
      </div>

      {/* 👉 Bloc prend toute la largeur de l’écran */}
      <div className="w-full border rounded-lg shadow-sm bg-white overflow-hidden">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`$
              index < sections.length - 1 ? "border-b" : ""
            }`} // ligne horizontale sauf le dernier
          >
            <h2 className="text-xl font-semibold mb-2">{section.title}</h2>
            {Array.isArray(section.content) ? (
              section.content.map((item, idx) =>
                typeof item === "string" ? <span key={idx}>{item}</span> : item
              )
            ) : (
              <span>{section.content}</span>
            )}
            <button
              onClick={() => toggleSection(index)}
              className="w-full flex items-center gap-3 p-4 text-left font-medium text-lg hover:bg-gray-100"
            >
              {/* + / - */}
              <span className="text-2xl w-6 flex-shrink-0 text-center">
                {openSections.includes(index) ? "−" : "+"}
              </span>

              {/* titre */}
              <span className="flex-1">{section.title}</span>
            </button>

            {openSections.includes(index) && (
              <div className="px-12 pb-4 text-gray-700 animate-fadeIn">
                {section.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
