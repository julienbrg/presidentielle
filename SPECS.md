---
title: presidentielle.wtf — Structure du site
date: 2026-08-20
---

# presidentielle.wtf — Structure du site

> **Présidentielle 2027. Pas de bullshit, juste ce qu'il faut pour voter.**

Document de cadrage : structure, sections et contenus. Deux fonctionnalités IA au cœur du projet (le **matcher** et le **comparateur**), un socle de données sourcées commun, et une couche civique autour (compte à rebours, anti-bullshit, mode d'emploi).

---

## Principe directeur

Le site repose sur **une seule base de données de positions sourcées**, exploitée par deux IA aux philosophies opposées :

- **Le matcher** : _subjectif et personnalisé_. Il classe les candidats selon ce que **vous** dites vouloir.
- **Le comparateur** : _neutre et symétrique_. Il ne classe rien, il met les positions côte à côte.

Ce contraste assumé est l'argument de crédibilité du site : on suggère selon **vos** priorités, **et** on donne les faits bruts pour qu'on puisse nous vérifier.

Toute affirmation IA est **sourcée** (programmes officiels, déclarations publiques vérifiables) et, à terme, **validée par des partenaires presse** indépendants.

### Positionnement (acté)

- **Infrastructure civique neutre.** Le site n'est pas un projet militant. Le matcher suggère selon les priorités de l'utilisateur·rice, jamais selon une opinion du site.
- **Cible 2027 uniquement.** Pas de plateforme générique multi-élections à ce stade ; tout est calibré pour la présidentielle 2027.
- **Conformité intégrée en amont** : équité Arcom (traitement égal des candidats), RGPD (pas de collecte superflue), mentions légales, et **période de silence** (pas de contenu de campagne la veille ni le jour du scrutin — prévoir un mode « silence » qui bascule le site sur l'info pratique de vote uniquement).

---

## 0\. Hero / page d'accueil

Une seule décision à l'écran.

- **Compte à rebours** en évidence : d'abord la **date limite d'inscription**, puis le **1er tour**.
- **Accroche** : « Présidentielle 2027. Pas de bullshit, juste ce qu'il faut pour voter. »
- **Appel à l'action unique** : « Suis-je inscrit·e ? » → lien vers le service officiel.
- Deux portes d'entrée secondaires : « Trouve tes candidats » (matcher) et « Compare-les » (comparateur).

---

## 1\. Le matcher — _« Dis-nous ce qui compte pour toi »_

**Pour qui :** les indécis·es. « Qui me correspond ? »

### Fonctionnement

- Champ d'expression **libre** : la personne écrit avec ses mots ce qui lui tient à cœur (pouvoir d'achat, climat, sécurité, services publics…).
- L'IA (intégration Claude) analyse ces priorités, les confronte aux programmes en contexte, et renvoie un **top 3** de candidats.
- Chaque résultat affiche :

  - une **justification courte** par candidat,
  - les **sources citées** pour chaque correspondance,
  - une ligne **« désaccords »** : là où un candidat bien classé contredit pourtant ce que vous avez dit.

### Règles de confiance

- Sources **visibles** sur chaque affirmation.
- Même **panel de candidats** à chaque fois ; le classement reflète **uniquement vos priorités**, jamais notre opinion.
- **Avertissement permanent** : « Aide à la décision, pas une recommandation de vote. »
- Bouton de bascule : **« Comparer ces 3 côte à côte »** → ouvre le comparateur pré-rempli.

---

## 2\. Le comparateur — _« Les positions, côte à côte »_

**Pour qui :** ceux qui ont déjà des candidats en tête et veulent vérifier eux-mêmes.

### Interface

- Deux **sélecteurs avec photo** des candidats, séparés par un **« VS »** au centre.
- Un sélecteur de **thème** (un seul thème à la fois).
- Un bouton **« Comparer »**.
- Résultat : les deux positions **côte à côte** sur le thème choisi, chacune sourcée et horodatée.

### Fonctionnement (cache d'abord, génération ensuite)

1. À la validation, on construit la **clé** de la combinaison : `candidat A × candidat B × thème`.
2. **Si la combinaison existe en base** → on affiche le résultat **mis en cache** (instantané, stable, déjà revu).
3. **Sinon** → génération **via Claude API** à partir des sources, puis **mise en cache** de la réponse pour les prochaines demandes.

> ⚠️ Une cellule générée à la volée ne doit **pas** être publiée brute sans garde-fou. Prévoir soit une **revue humaine avant publication**, soit un statut **« généré, en cours de vérification »** affiché clairement tant qu'un·e relecteur·rice (ou un partenaire presse) n'a pas validé. Une fois validée, la cellule est **figée** en base — on ne régénère pas à chaque visite (plus stable, moins cher, et défendable si une équipe de campagne conteste un résumé).

### Thèmes (axes de comparaison)

Économie & emploi · Pouvoir d'achat & fiscalité · Climat & énergie · Immigration · Santé · Sécurité & justice · Éducation · Institutions & démocratie · Europe & international.

### Règles de neutralité (non négociables)

- **Traitement identique** pour chaque candidat qualifié : mêmes thèmes, même profondeur, même format.
- Langage **neutre**, aucun éditorial.
- **Source visible** sur chaque position + horodatage **« dernière mise à jour »**.
- Position absente → le dire explicitement : _« Pas de position publique sur ce thème »_ (jamais d'inférence).

---

## 3\. Le compte à rebours

Calendrier civique complet, chaque date reliée à l'action officielle correspondante.

- **Date limite d'inscription** sur les listes électorales _(visuellement alarmante à l'approche)_.
- Fenêtre de mise en place d'une **procuration**.
- **1er tour** · **2nd tour**.

---

## 4\. Anti-bullshit — _« Démontage d'excuses »_

Flux de fact-checking contre les excuses d'abstention. Format : **excuse → réalité → source**. Entrées courtes, percutantes, partageables individuellement.

- _« Ça change rien. »_
- _« Ils sont tous pareils. »_
- _« Mon vote compte pas. »_
- _« J'ai pas le temps. »_
- _« Je suis pas inscrit·e, donc tant pis. »_
- _« Le président peut rien faire de toute façon. »_

---

## 5\. Comment ça marche — _« Le minimum vital »_

Explicateur compact, sans jargon, survolable.

- Le **scrutin à deux tours**, concrètement.
- Ce que le président **contrôle** vs. ce qu'il **ne contrôle pas**.
- Comment voter **par procuration**.

---

## 6\. Voter quand on est loin

Section courte mais à forte valeur : **Français·es de l'étranger** (inscription via les consulats) et personnes **hors de leur commune** le jour du vote — leurs règles diffèrent.

---

## 7\. Pied de page — couche légale & confiance

Fait un vrai travail juridique et de crédibilité, à ne pas négliger.

- **Mentions légales** (obligatoires).
- **Qui est derrière le site.**
- **Déclaration de neutralité.**
- **Sources & méthodologie.**
- **Partenaires presse.**
- **Contact** conforme **RGPD**.

---

## 8\. Maîtrise des coûts API

**Principe directeur : générer une fois, servir un million de fois.** La quasi-totalité du contenu du site est **finie et répétitive** (nombre borné de candidats, thèmes, combinaisons). On **pré-génère** au lieu de générer à la demande, pour **découpler le coût du nombre de visiteurs**.

### Leviers, du plus impactant au moins impactant

1. **Pré-générer tout le comparateur, hors ligne.** Avec ~10-12 candidats × 9 thèmes, le nombre de combinaisons 1v1×thème est borné (quelques centaines de cellules). On génère **tout en batch une fois** (puis à chaque mise à jour de programme), on valide, on **fige en base**. En production, le comparateur ne fait **aucun appel API** : il sert du cache.
2. **Batch API** pour ces pré-générations : les traitements groupés non urgents sont nettement moins chers que le temps réel. Pas de contrainte de latence ici → cas d'usage idéal.
3. **Prompt caching.** Les sources et instructions système (programmes, règles de neutralité) sont volumineuses et **identiques** d'un appel à l'autre. Le prompt caching fait payer cette partie commune une fraction du prix sur les appels suivants.
4. **Le bon modèle par tâche.** Un résumé de position ou un quiz tourne très bien sur un modèle léger (Haiku/Sonnet). Réserver le modèle le plus puissant aux tâches qui le justifient vraiment.

### Le matcher : seul vrai temps réel

L'input est libre, donc imprévisible. On le cadre :

- **Longueur d'input limitée** + **rate limit** par visiteur.
- Le matcher **raisonne sur la base déjà résumée** (positions courtes et structurées), **pas sur les PDF bruts** → contexte plus court = coût plus bas.
- **Cache des inputs fréquents** (beaucoup écriront des choses proches : « pouvoir d'achat et climat »).

### Features fun = contenu statique

Quiz, « budget dont tu es le boss », anti-bullshit : générés **une fois** et servis en dur. Affiches / cartes partageables assemblées **côté client** à partir de templates. Aucun appel API en direct.

### Garde-fous de coût

- **Plafond de dépense + alerte de budget** côté API.
- **Rate limit global.**
- **Fallback gracieux** (« reviens dans un instant ») en cas de saturation, pour éviter la mauvaise surprise un jour de pic.

> ⚠️ Tarifs, Batch API, prompt caching et modèles disponibles **évoluent vite** : vérifier la doc Anthropic à jour avant de dimensionner le budget.

Matcher et comparateur dépendent tous deux de la **même base de positions** :

**Table** `positions` (source de vérité, par candidat × thème)

| Champ               | Description                            |
| ------------------- | -------------------------------------- |
| `theme`             | Axe de comparaison (économie, climat…) |
| `candidat`          | Candidat qualifié                      |
| `position_resume`   | Résumé neutre de la position           |
| `citation`          | Extrait de programme / déclaration     |
| `source_url`        | Lien vers la source officielle         |
| `derniere_maj`      | Horodatage de la position              |
| `validation_presse` | Statut de vérification par partenaire  |

**Table** `comparaisons_cache` (résultats du comparateur, par combinaison)

| Champ       | Description                                               |
| ----------- | --------------------------------------------------------- |
| `cle`       | `candidat_A × candidat_B × theme` (clé de la combinaison) |
| `contenu`   | Comparaison côte à côte générée                           |
| `statut`    | `validé` / `généré, en cours de vérification`             |
| `genere_le` | Horodatage de génération                                  |
| `valide_le` | Horodatage de validation humaine                          |

> Logique : on cherche d'abord la `cle` dans le cache ; absente → génération Claude API → écriture en cache. Une fois `validé`, le contenu est **figé** (pas de régénération à chaque visite).

> La qualité de la base `positions` conditionne **tout**. C'est le vrai chantier de fond.

---

## Décisions actées

1. **Infrastructure civique neutre** ✅ (pas un projet militant).
2. **2027 uniquement** ✅ (pas de plateforme multi-élections à ce stade).
3. **Conformité intégrée en amont** ✅ : équité Arcom, RGPD, mentions légales, période de silence (mode « silence » la veille et le jour du scrutin).

[https://claude.ai/chat/3c5482f5-f263-420b-8dda-c53d9bc0d19e](https://claude.ai/chat/3c5482f5-f263-420b-8dda-c53d9bc0d19e)
