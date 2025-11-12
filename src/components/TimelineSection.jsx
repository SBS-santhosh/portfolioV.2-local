import React, { useState } from 'react';
import { Calendar, BookOpen, TrendingUp, Award, ChevronRight, ExternalLink, Sparkles, Code, Zap, Users, CheckCircle, Lightbulb, Layers, Radar, Newspaper, Brain, Flag, Search, Book  } from "lucide-react";

const VeilleTechSection = () => {
  const [activeSection, setActiveSection] = useState(0);

  const sections = [
    {
      id: 0,
      title: "Introduction",
      icon: Lightbulb,
      duration: "1 min",
      content: {
        theme: "Low Code / No Code",
        definition: {
          lowCode: "Développer avec des blocs de code visuels",
          noCode: "Créer des applications sans écrire de code"
        },
        reason: "Démocratise la création d'applications, accélère le développement, et intéresse de plus en plus les entreprises"
      }
    },
    {
      id: 1,
      title: "Fondements",
      icon: Layers,
      duration: "2 min",
      content: {
        objective: "Accélérer la transformation numérique",
        targets: ["PME", "Startups", "Services internes", "Étudiants"],
        platforms: {
          lowCode: ["Mendix", "OutSystems", "Microsoft Power Apps"],
          noCode: ["Bubble", "Glide", "Notion", "Webflow", "Make"]
        },
        advantages: ["Rapidité de développement", "Accessibilité", "Réduction des coûts"],
        limits: ["Moins de flexibilité", "Sécurité et maintenance complexes"]
      }
    },
    {
      id: 2,
      title: "Outils de Veille",
      icon: Search,
      duration: "1.5 min",
      content: {
        tools: [
          {
            name: "Flux RSS",
            tool: "Feedly",
            sources: ["TechCrunch", "Journal du Net", "Maddyness", "ZDNet"]
          },
          {
            name: "Alertes IA",
            tool: "Google Alerts",
            keywords: ["Low Code", "No Code", "Bubble", "Power Apps 2025"]
          },
          {
            name: "IA Résumés",
            tool: "Perplexity / ChatGPT",
            use: "Résumer les tendances récentes"
          },
          {
            name: "Newsletters",
            examples: ["NoCode.tech Weekly", "Product Hunt", "Makerpad Updates"]
          }
        ]
      }
    },
    {
      id: 3,
      title: "Actualités 2024-2025",
      icon: BookOpen,
      duration: "4 min",
      content: {
        news: [
          {
            date: "Janvier 2024",
            title: "Microsoft Power Platform intègre Copilot (IA)",
            description: "Microsoft permet maintenant de créer des applications en langage naturel grâce à Copilot dans Power Apps.",
            impact: "Révolution de la création d'apps par IA",
            example: "Exemple concret : un utilisateur peut écrire 'Créer une appli de suivi de ventes' et l'IA génère la structure de l'application automatiquement.",
            link: "https://www.microsoft.com/en-us/dynamics-365/blog/business-leader/2024/01/25/2024-release-wave-1-plans-for-microsoft-dynamics-365-and-power-platform-now-available/"
          },
          {
            date: "Avril 2021",
            title: "Bubble lève 100 millions de dollars",
            description: "Bubble renforce ses outils IA et sa sécurité grâce à cette levée de fonds.",
            impact: "Confiance du marché dans le No Code",
            example: "Exemple concret : Bubble peut maintenant améliorer son générateur d'applications sans code pour les startups.",
            link: "https://www.reuters.com/technology/no-code-startup-bubble-raises-100-mln-in-round-led-by-insight-partners-2021-07-27/"
          },
          {
            date: "Juin 2024",
            title: "Google lance AppSheet AI",
            description: "Google AppSheet utilise l'IA pour générer automatiquement des workflows.",
            impact: "Automatisation intelligente des processus",
            example: "Exemple concret : en fournissant un tableau de données, AppSheet crée automatiquement un processus d'approbation et notifications.",
            link: "https://discuss.google.dev/t/announcing-ai-assisted-app-creation-with-gemini-in-appsheet/153205"
          },
          {
            date: "Septembre 2025",
            title: "Adoption dans les écoles",
            description: "Certaines écoles spécialisées intègrent le No Code dans leurs formations.",
            impact: "Démocratisation de l'enseignement tech",
            example: "Exemple concret : Epitech Digital School propose des bootcamps 'Low Code / No Code' pour ses étudiants.",
            link: "https://www.epitech.digital/lowcode-nocode-epitech-digital-school/?utm_source=chatgpt.com"
          }
        ]
      }
    },
    {
      id: 4,
      title: "Quiz",
      icon: Award,
      duration: "2 min",
      content: {}
    },
    {
      id: 5,
      title: "Conclusion",
      icon: CheckCircle,
      duration: "1 min",
      content: {}
    }
  ];

const quizQuestions = [
  {
    q: "Qu’est-ce que le Low Code ?",
    a: "Créer des applications avec peu de code."
  },
  {
    q: "Donne un exemple de plateforme Low Code.",
    a: "Microsoft Power Apps"
  },
  {
    q: "Quel est l’avantage principal du Low Code ?",
    a: "Développement rapide"
  },
  {
    q: "Le Low Code nécessite-t-il beaucoup de connaissances en programmation ?",
    a: "Non"
  },
  {
    q: "Le Low Code peut-il être utilisé par les entreprises et les étudiants ?",
    a: "Oui"
  }
];

  return (
    <section id="veille-tech" className="py-16 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Veille Technologique <span className="text-primary">2024-2025</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-1">Low Code / No Code</p>
          <p className="text-sm text-muted-foreground">Présentation orale • 8-10 minutes</p>
        </div>

        {/* Timeline Navigation */}
        <div className="relative mb-12">
          <div className="absolute top-6 left-0 right-0 h-0.5 bg-secondary hidden md:block"></div>
          <div 
            className="absolute top-6 left-0 h-0.5 bg-primary transition-all duration-500 hidden md:block"
            style={{ width: `${(activeSection / (sections.length - 1)) * 100}%` }}
          ></div>

          <div className="relative flex justify-between">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center cursor-pointer group"
                  onClick={() => setActiveSection(index)}
                >
                  <div className="relative z-10 mb-2">
                    <div 
                      className={`w-12 h-12 rounded-full border-3 flex items-center justify-center transition-all duration-300 ${
                        index <= activeSection 
                          ? 'bg-primary border-primary shadow-lg scale-105' 
                          : 'bg-background border-secondary group-hover:border-primary/50'
                      }`}
                    >
                      <Icon className={`w-5 h-5 ${index <= activeSection ? 'text-primary-foreground' : 'text-muted-foreground'}`} />
                    </div>
                    {index === activeSection && (
                      <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20"></div>
                    )}
                  </div>
                  <div className={`text-xs font-semibold text-center ${index <= activeSection ? 'text-primary' : 'text-muted-foreground'}`}>
                    {section.title}
                  </div>
                  <div className="text-xs text-muted-foreground mt-0.5">{section.duration}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Content Display */}
        <div className="bg-card rounded-lg overflow-hidden shadow-lg p-6 mb-6">
          {activeSection === 0 && (
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold mb-4">I. Introduction</h3>
              
              <div className="bg-primary/10 p-4 rounded-lg border-l-4 border-primary">
                <p className="text-base italic">
                  "J'ai choisi le thème du <strong className="text-primary">Low Code / No Code</strong>, une tendance technologique qui permet de créer des applications sans avoir besoin de coder ou avec très peu de code."
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="bg-secondary/30 p-4 rounded-lg">
                  <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                    <Code className="w-4 h-4 text-primary" />
                    Low Code
                  </h4>
                  <p className="text-sm text-muted-foreground">{sections[0].content.definition.lowCode}</p>
                </div>
                <div className="bg-secondary/30 p-4 rounded-lg">
                  <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-primary" />
                    No Code
                  </h4>
                  <p className="text-sm text-muted-foreground">{sections[0].content.definition.noCode}</p>
                </div>
                <div className="bg-secondary/30 p-4 rounded-lg">
                  <h4 className="font-semibold text-sm mb-2">Pourquoi ?</h4>
                  <p className="text-sm text-muted-foreground">{sections[0].content.reason}</p>
                </div>
              </div>
            </div>
          )}

          {activeSection === 1 && (
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold mb-4">II. Les Fondements du Low Code / No Code</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-primary/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-sm mb-2">🎯 Objectif</h4>
                  <p className="text-sm">{sections[1].content.objective}</p>
                </div>

                <div className="bg-secondary/30 p-4 rounded-lg">
                  <h4 className="font-semibold text-sm mb-2 flex items-center gap-1">
                    <Users className="w-4 h-4 text-primary" />
                    Cibles
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {sections[1].content.targets.map((target, idx) => (
                      <span key={idx} className="px-2 py-1 text-xs font-medium border rounded-full bg-background">
                        {target}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-green-500/10 p-4 rounded-lg border border-green-500/20">
                  <h4 className="font-semibold text-sm mb-2 text-green-600">✅ Avantages</h4>
                  <ul className="space-y-1">
                    {sections[1].content.advantages.map((adv, idx) => (
                      <li key={idx} className="flex items-start gap-1 text-xs text-muted-foreground">
                        <ChevronRight className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{adv}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-red-500/10 p-4 rounded-lg border border-red-500/20">
                  <h4 className="font-semibold text-sm mb-2 text-red-600">⚠️ Limites</h4>
                  <ul className="space-y-1">
                    {sections[1].content.limits.map((limit, idx) => (
                      <li key={idx} className="flex items-start gap-1 text-xs text-muted-foreground">
                        <ChevronRight className="w-3 h-3 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>{limit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="bg-secondary/30 p-4 rounded-lg">
                  <h4 className="font-semibold text-sm mb-3 text-primary">Plateformes Low Code</h4>
                  <ul className="space-y-1">
                    {sections[1].content.platforms.lowCode.map((platform, idx) => (
                      <li key={idx} className="flex items-center gap-1 text-xs">
                        <ChevronRight className="w-3 h-3 text-primary flex-shrink-0" />
                        {platform}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-secondary/30 p-4 rounded-lg">
                  <h4 className="font-semibold text-sm mb-3 text-primary">Plateformes No Code</h4>
                  <ul className="space-y-1">
                    {sections[1].content.platforms.noCode.map((platform, idx) => (
                      <li key={idx} className="flex items-center gap-1 text-xs">
                        <ChevronRight className="w-3 h-3 text-primary flex-shrink-0" />
                        {platform}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeSection === 2 && (
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold mb-4">III. Outils Techniques de Veille</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {sections[2].content.tools.map((tool, idx) => (
                  <div key={idx} className="bg-secondary/30 p-4 rounded-lg border-l-4 border-primary">
                    <h4 className="font-semibold text-sm mb-2 text-primary">{tool.name}</h4>
                    <p className="text-xs text-muted-foreground mb-2">
                      <strong>Outil :</strong> {tool.tool || tool.examples?.join(", ")}
                    </p>
                    {tool.sources && (
                      <div>
                        <p className="text-xs font-medium mb-1">Sources :</p>
                        <div className="flex flex-wrap gap-1">
                          {tool.sources.map((source, i) => (
                            <span key={i} className="px-2 py-0.5 text-xs bg-background rounded-full">
                              {source}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    {tool.keywords && (
                      <div>
                        <p className="text-xs font-medium mb-1">Mots-clés :</p>
                        <div className="flex flex-wrap gap-1">
                          {tool.keywords.map((keyword, i) => (
                            <span key={i} className="px-2 py-0.5 text-xs bg-background rounded-full">
                              {keyword}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    {tool.use && (
                      <p className="text-xs text-muted-foreground mt-2">
                        <strong>Usage :</strong> {tool.use}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === 3 && (
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold mb-4">IV. Évolution & Actualités Récentes</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {sections[3].content.news.map((item, idx) => (
                  <div key={idx} className="bg-secondary/30 p-4 rounded-lg border-l-4 border-primary hover:shadow-lg transition-all">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span className="font-semibold text-sm text-primary">{item.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                          #{idx + 1}
                        </span>
                        {item.link && (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground text-primary transition-all duration-300"
                            title="Voir la source"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>
                    </div>
                    <h4 className="text-base font-semibold mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <p className="text-xs">
                        <strong className="text-primary">Impact :</strong> {item.impact}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === 4 && (
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Award className="w-6 h-6 text-primary" />
                Quiz - 5 Questions
              </h3>

              <div className="space-y-4">
                {quizQuestions.map((q, idx) => (
                  <div key={idx} className="bg-secondary/30 p-4 rounded-lg">
                    <p className="font-semibold text-sm mb-2">
                      {idx + 1}. {q.q}
                    </p>
                    <div className="bg-background p-3 rounded-lg">
                      <p className="text-xs text-muted-foreground">
                        <strong className="text-primary">Réponse :</strong> {q.a}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === 5 && (
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold mb-4 text-center">V. Conclusion</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-primary/10 p-4 rounded-lg">
                  <p className="text-sm italic">
                    "Le Low Code / No Code permet à tous de créer des solutions numériques rapidement. C'est une révolution dans le monde du développement, mais qui doit encore progresser sur la sécurité et la scalabilité."
                  </p>
                </div>
                <div className="bg-secondary/30 p-4 rounded-lg">
                  <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-primary" />
                    L'avenir
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    "Avec l'intelligence artificielle, on se dirige vers une automatisation totale de la création d'applications."
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center">
          <button
            onClick={() => setActiveSection(Math.max(0, activeSection - 1))}
            disabled={activeSection === 0}
            className="px-5 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
          >
            ← Précédent
          </button>
          
          <div className="flex gap-2">
            {sections.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveSection(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === activeSection ? 'bg-primary w-8' : 'bg-secondary'
                }`}
              />
            ))}
          </div>

          {activeSection < sections.length - 1 ? (
            <button
              onClick={() => setActiveSection(Math.min(sections.length - 1, activeSection + 1))}
              className="px-5 py-2 rounded-full bg-primary text-primary-foreground hover:shadow-lg transition-all duration-300 text-sm"
            >
              Suivant →
            </button>
          ) : (
            <button
              disabled
              className="px-5 py-2 rounded-full bg-primary text-primary-foreground opacity-50 cursor-not-allowed text-sm"
            >
              Fin
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default VeilleTechSection;