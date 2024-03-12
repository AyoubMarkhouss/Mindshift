import React, { useState } from "react";

const Item = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b-1 text-black border-gray-500 bg-slate-50/30 backdrop-blur-md shadow-yellow-100 shadow-2xl rounded-[30px]">
      <button
        type="button"
        aria-label="Open item"
        title="Open item"
        className="flex items-center justify-between w-full p-4 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-lg font-medium">{title}</p>
        <svg
          viewBox="0 0 24 24"
          className={`w-3 text-gray-600 transform transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <polyline
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeMiterlimit="10"
            points="2,7 12,17 22,7"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="p-4 pt-0">
          <p className="text-gray-700">{children}</p>
        </div>
      )}
    </div>
  );
};
export const Faq = () => {
  return (
    <div className=" px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-12 ">
      <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12 ">
          <h2 className="semibold max-w-lg mb-6 text-4xl  leading-none tracking-tight text-gray-900 sm:text-6xl md:mx-auto">
            Faq
          </h2>
          {/* <p className="text-base text-gray-700 md:text-lg ">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque rem aperiam, eaque ipsa quae.
          </p> */}
        </div>
        <div className="space-y-4 ">
          <Item title="Qu'est-ce	que	le	coaching	et	en	quoi	consiste-t-il	chez	Mindshift	?">
            Chez Mindshift, le coaching est une approche personnalisée qui vise
            à t&apos;accompagner dans ta croissance personnelle et
            professionnelle. Nous travaillons ensemble pour identifier tes
            objectifs, surmonter les obstacles et développer des stratégies
            pratiques pour atteindre tes aspirations.
          </Item>
          <Item title="Comment	se	déroulent	les	séances	de	coaching	?">
            Les séances de coaching se déroulent en ligne, généralement par
            visioconférence. Cela offre la flexibilité nécessaire pour
            s&apos;adapter à ton emploi du temps. Chaque séance dure environ
            1h15, offrant le temps nécessaire pour explorer en profondeur tes
            préoccupations et définir des actions concrètes.
          </Item>
          <Item title="À	qui	s'adresse	le	coaching	chez	Mindshift	?">
            Le coaching chez Mindshift s&apos;adresse à toute personne cherchant
            à créer un changement positif dans sa vie. Que tu sois un
            professionnel en quête de succès, un sportif aspirant à dépasser ses
            limites, ou toute personne cherchant à améliorer son bien-être, le
            coaching peut être adapté à tes besoins spécifiques
          </Item>
          <Item title="Comment	puis-je	savoir	si	le	coaching	est	adapté	à	mes	besoins	?">
            Si tu ressens le besoin de créer un changement dans ta vie, que ce
            soit sur le plan professionnel, sportif ou personnel, le coaching
            pourrait t&apos;être bénéfique. Nous pouvons discuter de tes
            objectifs lors d&apos;une séance d&apos;évaluation gratuite pour
            déterminer si le coaching chez Mindshift est la bonne solution pour
            toi.
          </Item>
          <Item title="Combien	de	temps	dure	généralement	le	processus	de	coaching	?">
            La durée du coaching dépend de tes objectifs et de la complexité des
            défis que tu souhaites surmonter. Certains clients voient des
            résultats significatifs en quelques mois, tandis que d&apos;autres
            préfèrent un accompagnement sur une période plus étendue. Tout est
            adaptable en fonction de tes besoins.
          </Item>
          <Item title="Quelle	est	la	différence	entre	le	coaching	et	la	thérapie	?">
            Le coaching se concentre sur le présent et le futur, en aidant les
            clients à atteindre des objectifs spécifiques et à créer un
            changement positif. Contrairement à la thérapie, qui se concentre
            souvent sur le passé et la résolution de problèmes émotionnels, le
            coaching vise à développer des compétences et des stratégies pour
            avancer.
          </Item>
          <Item title="Comment	puis-je	prendre	rendez-vous	pour	une	séance	de	coaching	?">
            Pour prendre rendez-vous, appuie sur le bouton « je reserve mon call
            gratuit » et choisis le créneau qui te convient. Je suis là pour
            répondre à toutes tes questions et discuter de la meilleure façon de
            commencer ton parcours de coaching chez Mindshift
          </Item>
        </div>
      </div>
    </div>
  );
};
