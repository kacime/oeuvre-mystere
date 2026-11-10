// PROTOTYPE - NOT FOR PRODUCTION
// Question: Deviner une œuvre à partir d'une émotion et de phrases de membres : amusant, faisable, avec une montée ?
// Date: 2026-11-10
// Content from design/concept-oeuvre-mystere.md. Every excerpt and pseudo is INVENTED for the
// prototype: no real member data. No real poster: clue 6 is drawn from the emotion's colours.

// The 8 Kulteo emotions: background, then the text that sits on it.
window.EMOTIONS = {
  apaisement: { name: 'Apaisement', bg: '#B0EFAF', fg: '#002C1C' },
  joie:       { name: 'Joie',       bg: '#F9D946', fg: '#360000' },
  curiosite:  { name: 'Curiosité',  bg: '#C4A7FF', fg: '#3A0044' },
  tristesse:  { name: 'Tristesse',  bg: '#002027', fg: '#CFE8EF' },
  trouble:    { name: 'Trouble',    bg: '#032800', fg: '#BFED88' },
  peur:       { name: 'Peur',       bg: '#240030', fg: '#B4C4FF' },
  colere:     { name: 'Colère',     bg: '#340016', fg: '#FF7759' },
  desir:      { name: 'Désir',      bg: '#F3C4F2', fg: '#3F001F' },
};

// The 8 games, one per emotion. clue4 and clue5 are the two excerpts in the order shown
// (game 8 shows its more telling excerpt as clue 5, as the concept asks).
window.PARTIES = [
  { n: 1, title: 'Le Voyage de Chihiro', media: 'Film', year: 2001, creator: 'Hayao Miyazaki', emotion: 'curiosite', keyword: 'passage',
    blend: [['curiosite', 55], ['apaisement', 25], ['peur', 20]],
    clue4: { text: "Je l'ai revu adulte et j'ai compris que c'était l'histoire d'un premier travail.", by: '@lea_vh' },
    clue5: { text: "Le train qui roule sur l'eau, je pense encore à ce silence.", by: '@tom.r' } },
  { n: 2, title: "L'Étranger", media: 'Livre', year: 1942, creator: 'Albert Camus', emotion: 'trouble', keyword: 'indifférence',
    blend: [['trouble', 60], ['tristesse', 25], ['colere', 15]],
    clue4: { text: "La première phrase m'a glacé, et je n'ai jamais su dire pourquoi.", by: '@nadir' },
    clue5: { text: "Un homme qui ne pleure pas à l'enterrement de sa mère, et tout le livre tient là-dessus.", by: '@claire_b' } },
  { n: 3, title: 'Les Demoiselles de Rochefort', media: 'Film', year: 1967, creator: 'Jacques Demy', emotion: 'joie', keyword: 'jumelles',
    blend: [['joie', 65], ['desir', 20], ['tristesse', 15]],
    clue4: { text: 'Impossible de ne pas sortir en chantant, même sous la pluie.', by: '@sam_l' },
    clue5: { text: "Deux sœurs, une ville au bord de l'eau, et des marins partout.", by: '@ines.k' } },
  { n: 4, title: 'Le Bureau des légendes', media: 'Série', year: 2015, creator: 'Éric Rochant', emotion: 'peur', keyword: 'clandestin',
    blend: [['peur', 50], ['trouble', 30], ['tristesse', 20]],
    clue4: { text: "J'ai arrêté de regarder mon téléphone pendant cinq saisons.", by: '@julien_m' },
    clue5: { text: "Malotru, son vrai nom, et tout ce qu'il ment à ceux qu'il aime.", by: '@ana' } },
  { n: 5, title: 'Journey', media: 'Jeu vidéo', year: 2012, creator: 'thatgamecompany', emotion: 'apaisement', keyword: 'désert',
    blend: [['apaisement', 55], ['curiosite', 25], ['joie', 20]],
    clue4: { text: "Je ne connaissais pas l'autre joueur et on a fini la partie ensemble, sans un mot.", by: '@kev' },
    clue5: { text: 'Une écharpe, du sable, une montagne au loin.', by: '@margaux' } },
  { n: 6, title: 'Réparer les vivants', media: 'Livre', year: 2014, creator: 'Maylis de Kerangal', emotion: 'tristesse', keyword: 'cœur',
    blend: [['tristesse', 55], ['apaisement', 25], ['peur', 20]],
    clue4: { text: "J'ai lu la fin dans le métro et j'ai dû descendre une station plus tôt.", by: '@paul_d' },
    clue5: { text: "Vingt-quatre heures, un cœur qui passe d'un corps à un autre.", by: '@sarah.l' } },
  { n: 7, title: 'Parasite', media: 'Film', year: 2019, creator: 'Bong Joon-ho', emotion: 'colere', keyword: 'sous-sol',
    blend: [['colere', 50], ['peur', 30], ['joie', 20]],
    clue4: { text: "J'en suis sorti en colère contre tout le monde, moi compris.", by: '@yanis' },
    clue5: { text: 'Une famille pauvre s\'infiltre chez une famille riche, et l\'odeur les trahit.', by: '@lou' } },
  { n: 8, title: "L'Amant", media: 'Livre', year: 1984, creator: 'Marguerite Duras', emotion: 'desir', keyword: 'fleuve',
    blend: [['desir', 55], ['tristesse', 30], ['trouble', 15]],
    clue4: { text: "Je l'ai lu d'une traite, la fenêtre ouverte, en plein mois d'août.", by: '@hugo_p' },
    clue5: { text: "Quinze ans et demi, un chapeau d'homme, un bac sur le Mékong.", by: '@mathilde' } },
];

// The grid of each game: 15 works beside the answer, chosen by hand, each with the emotion it
// most evokes (invented, used to dose the grid; the player never sees it). Dosed so that:
// clue 1 (the fingerprint) leaves the answer + 3 works of the same emotion; clue 2 (media and
// decade) leaves the answer + 1 of those; the blend's secondary emotions and clue 3 tell them
// apart. A careful reader can find it at clue 1; luck alone finds it 1 time in 16.
// [title, media, year, emotion]
window.GRIDS = {
  1: [['Alice au pays des merveilles', 'Livre', 1865, 'curiosite'], ['Outer Wilds', 'Jeu vidéo', 2019, 'curiosite'], ['Le Château ambulant', 'Film', 2004, 'curiosite'],
      ['Le Tombeau des lucioles', 'Film', 1988, 'tristesse'], ["Le Fabuleux Destin d'Amélie Poulain", 'Film', 2001, 'joie'], ['Mon voisin Totoro', 'Film', 1988, 'apaisement'],
      ['Le Labyrinthe de Pan', 'Film', 2006, 'peur'], ['Stranger Things', 'Série', 2016, 'peur'], ['Titanic', 'Film', 1997, 'desir'],
      ['Joker', 'Film', 2019, 'colere'], ['Mulholland Drive', 'Film', 2001, 'trouble'], ['Big Fish', 'Film', 2003, 'joie'],
      ['La Haine', 'Film', 1995, 'colere'], ['Flower', 'Jeu vidéo', 2009, 'apaisement'], ['Le Roi lion', 'Film', 1994, 'tristesse']],
  2: [['La Nausée', 'Livre', 1938, 'trouble'], ['Le Procès', 'Livre', 1925, 'trouble'], ['La Peste', 'Livre', 1947, 'trouble'],
      ["L'Écume des jours", 'Livre', 1947, 'tristesse'], ['Exercices de style', 'Livre', 1947, 'joie'], ['Germinal', 'Livre', 1885, 'colere'],
      ['Madame Bovary', 'Livre', 1857, 'desir'], ['Le Petit Nicolas', 'Livre', 1959, 'joie'], ['Shining', 'Film', 1980, 'peur'],
      ['Dracula', 'Livre', 1897, 'peur'], ['Belle du Seigneur', 'Livre', 1968, 'desir'], ['Vingt mille lieues sous les mers', 'Livre', 1870, 'curiosite'],
      ['Les Trois Mousquetaires', 'Livre', 1844, 'joie'], ['Le Grand Meaulnes', 'Livre', 1913, 'tristesse'], ['Le Comte de Monte-Cristo', 'Livre', 1844, 'colere']],
  3: [['Chantons sous la pluie', 'Film', 1952, 'joie'], ['Mary Poppins', 'Film', 1964, 'joie'], ['Mamma Mia!', 'Film', 2008, 'joie'],
      ['Les Parapluies de Cherbourg', 'Film', 1964, 'tristesse'], ['West Side Story', 'Film', 1961, 'tristesse'], ['Psychose', 'Film', 1960, 'peur'],
      ['Le Mépris', 'Film', 1963, 'trouble'], ["2001 : l'Odyssée de l'espace", 'Film', 1968, 'curiosite'], ['Dirty Dancing', 'Film', 1987, 'desir'],
      ['Le Grand Bleu', 'Film', 1988, 'apaisement'], ['Les Dents de la mer', 'Film', 1975, 'peur'], ['La Haine', 'Film', 1995, 'colere'],
      ['Mon voisin Totoro', 'Film', 1988, 'apaisement'], ['Titanic', 'Film', 1997, 'desir'], ['Le Labyrinthe de Pan', 'Film', 2006, 'peur']],
  4: [['Homeland', 'Série', 2011, 'peur'], ['Le Silence des agneaux', 'Film', 1991, 'peur'], ['Alien: Isolation', 'Jeu vidéo', 2014, 'peur'],
      ['The Office', 'Série', 2005, 'joie'], ['Ted Lasso', 'Série', 2020, 'joie'], ['Normal People', 'Série', 2020, 'desir'],
      ['Chernobyl', 'Série', 2019, 'tristesse'], ['This Is Us', 'Série', 2016, 'tristesse'], ['Baron noir', 'Série', 2016, 'colere'],
      ['Succession', 'Série', 2018, 'colere'], ['Dix pour cent', 'Série', 2015, 'joie'], ['Twin Peaks', 'Série', 1990, 'trouble'],
      ['Dark', 'Série', 2017, 'curiosite'], ['Kaamelott', 'Série', 2005, 'joie'], ['Le Grand Bleu', 'Film', 1988, 'apaisement']],
  5: [['Flower', 'Jeu vidéo', 2009, 'apaisement'], ['Abzû', 'Jeu vidéo', 2016, 'apaisement'], ['Mon voisin Totoro', 'Film', 1988, 'apaisement'],
      ['Dune', 'Livre', 1965, 'curiosite'], ['Le Petit Prince', 'Livre', 1943, 'tristesse'], ['The Last of Us', 'Jeu vidéo', 2013, 'tristesse'],
      ['Celeste', 'Jeu vidéo', 2018, 'joie'], ['Outer Wilds', 'Jeu vidéo', 2019, 'curiosite'], ['Inside', 'Jeu vidéo', 2016, 'peur'],
      ['Papers, Please', 'Jeu vidéo', 2013, 'colere'], ['Silent Hill 2', 'Jeu vidéo', 2001, 'peur'], ['Shadow of the Colossus', 'Jeu vidéo', 2005, 'tristesse'],
      ['Gris', 'Jeu vidéo', 2018, 'tristesse'], ['Mario Kart 8', 'Jeu vidéo', 2014, 'joie'], ["Lawrence d'Arabie", 'Film', 1962, 'curiosite']],
  6: [['Petit Pays', 'Livre', 2016, 'tristesse'], ['Le Tombeau des lucioles', 'Film', 1988, 'tristesse'], ['Une vie', 'Livre', 1883, 'tristesse'],
      ['Chanson douce', 'Livre', 2016, 'peur'], ["Naissance d'un pont", 'Livre', 2010, 'curiosite'], ["L'Amie prodigieuse", 'Livre', 2011, 'desir'],
      ['Vernon Subutex', 'Livre', 2015, 'colere'], ['Les Années', 'Livre', 2008, 'trouble'], ['La Tresse', 'Livre', 2017, 'joie'],
      ["Grey's Anatomy", 'Série', 2005, 'desir'], ['Le Petit Nicolas', 'Livre', 1959, 'joie'], ['Dracula', 'Livre', 1897, 'peur'],
      ['Dirty Dancing', 'Film', 1987, 'desir'], ['Stardew Valley', 'Jeu vidéo', 2016, 'apaisement'], ['Corniche Kennedy', 'Livre', 2008, 'desir']],
  7: [['Joker', 'Film', 2019, 'colere'], ['La Haine', 'Film', 1995, 'colere'], ['Les Raisins de la colère', 'Livre', 1939, 'colere'],
      ['Us', 'Film', 2019, 'peur'], ['Une affaire de famille', 'Film', 2018, 'tristesse'], ['Portrait de la jeune fille en feu', 'Film', 2019, 'desir'],
      ['La La Land', 'Film', 2016, 'joie'], ['Get Out', 'Film', 2017, 'peur'], ['Inception', 'Film', 2010, 'curiosite'],
      ["Le Fabuleux Destin d'Amélie Poulain", 'Film', 2001, 'joie'], ['Mulholland Drive', 'Film', 2001, 'trouble'], ['Titanic', 'Film', 1997, 'desir'],
      ['Le Grand Bleu', 'Film', 1988, 'apaisement'], ['Stranger Things', 'Série', 2016, 'peur'], ['Le Roi lion', 'Film', 1994, 'tristesse']],
  8: [["L'Insoutenable Légèreté de l'être", 'Livre', 1984, 'desir'], ['Belle du Seigneur', 'Livre', 1968, 'desir'], ['Call Me by Your Name', 'Film', 2017, 'desir'],
      ['Le Barrage contre le Pacifique', 'Livre', 1950, 'tristesse'], ['Le Parfum', 'Livre', 1985, 'peur'], ['Le Nom de la rose', 'Livre', 1980, 'curiosite'],
      ['La Vie devant soi', 'Livre', 1975, 'tristesse'], ['Le Petit Nicolas', 'Livre', 1959, 'joie'], ['Dune', 'Livre', 1965, 'curiosite'],
      ['Germinal', 'Livre', 1885, 'colere'], ['Les Années', 'Livre', 2008, 'trouble'], ['Moderato cantabile', 'Livre', 1958, 'trouble'],
      ['Indochine', 'Film', 1992, 'tristesse'], ['Le Grand Bleu', 'Film', 1988, 'apaisement'], ['Ça', 'Livre', 1986, 'peur']],
};
