//Api for Drug Products

import { json } from "@sveltejs/kit";

export const GET = async () => {
  const posts = [
    {
      id: 1,
      title: "Azacyclonol (γ-pipradol)",
        
      image: "https://picsum.photos/id/10/800/500",
      body: "Chemical Formula: C18H21NO Moleculer Weight(g/mol): 267.37 Use For: Anti-psychotic",
    },
    {
      id: 2,
      title: "Prilocaine",
      image: "https://picsum.photos/id/17/800/500",
      body: "Chemical Formula: C13H20N2O Moleculer Weight(g/mol): 220.316 Use For: Anaesthetic agent",
    },
    {
      id: 3,
      title: "Lornoxicam",
      image: "https://picsum.photos/id/49/800/500",
      body: "Chemical Formula: C13H10ClN3O4S2 Moleculer Weight(g/mol): 371.8192 Use For: Anti-inflammatory, Analgesic",
    },
    {
      id: 4,
      title: " Mesalamine",
      image: "https://picsum.photos/id/49/800/500",
      body: "Chemical Formula: C7H7NO3 Moleculer Weight(g/mol): 153.1354 Use For: Treatment of ulcerative colitis",
    },
    {
      id: 5,
      title: " Flecainide Acetate",
      image: "https://picsum.photos/id/49/800/500",
      body:"Chemical Formula: C19H24F6N2O5 Moleculer Weight(g/mol): 474.3947 Use For: Anti-arrhythmic drug",
    },
    {
      id: 6,
      title: " Piroxicam",
      image: "https://picsum.photos/id/49/800/500",
      body: " Chemical Formula: C15H13N3O4S Moleculer Weight(g/mol): 331.3 Use For: Anti-inflammatory, analgesic",
    },
    {
      id: 7,
      title: "Nitrofurantoin Anhydrous",
      image: "https://picsum.photos/id/49/800/500",
      body: "Chemical Formula: C8H6N4O5  Moleculer Weight(g/mol): 236.16 Use For: Treat urinary tract infections",
    },
    {
      id: 8,
      title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      image: "https://picsum.photos/id/49/800/500",
      body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
    },
    {
      id: 9,
      title: " Sodium Picosulphate",
      image: "https://picsum.photos/id/49/800/500",
      body: "Chemical Formula: C18H13NNa2O8S Moleculer Weight(g/mol): 481.4 Use For: Laxative",
    },
    {
      id: 10,
      title: "Levo Cetirizine Hydrochloride",
      image: "https://picsum.photos/id/49/800/500",
      body: "Chemical Formula: C21H26Cl2N2O3 Moleculer Weight(g/mol): 425.3 Use For: Anti-allergic",
    },
    {
      id: 11,
      title: "Nitrofurantoin Anhydrous",
      image: "https://picsum.photos/id/49/800/500",
      body: "Chemical Formula: C8H6N4O5 Moleculer Weight(g/mol): 236.16 Use For: Treat urinary tract infections",
    },
    {
      id: 12,
      title: "Alendronate Sodium",
      image: "https://picsum.photos/id/49/800/500",
      body: "Chemical Formula: C4H12NNaO7P2 Moleculer Weight(g/mol): 271.08 Use For: Treatment of osteoporosis"
    },
    
  ];

  return json(posts)
};
