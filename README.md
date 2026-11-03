# Ping / tableau

Application web statique en français pour un tournoi de tennis de table par équipes, de 2 à 64 équipes. Aucun serveur ni dépendance.

## Utilisation

Ouvrir `index.html` dans un navigateur, saisir une équipe par ligne et générer le tableau. L'ordre de la liste ou un tirage au sort est disponible. Saisir les scores globaux des rencontres : manches ou parties gagnées, selon le format choisi par l'organisateur. Les égalités ne sont pas acceptées.

Chaque groupe est divisé après ses matchs en un groupe de gagnants et un groupe de perdants. Cette opération se répète pour attribuer toutes les places. V et D indiquent le parcours des équipes. Les exemptions complètent le tableau à la puissance de deux supérieure et n'ajoutent pas d'équipe au classement final. Il s'agit d'un tournoi avec classement intégral, sans poules préliminaires.

Une correction d'un résultat invalide les résultats suivants dont les participants ont changé. Une confirmation est demandée lorsque des résultats seront perdus.

Les données sont sauvegardées dans le navigateur (localStorage), sans compte ni synchronisation. Un autre appareil ou navigateur n'a pas le même tournoi. Utiliser Sauvegarder / Importer pour transférer un tournoi ou conserver une copie. L'impression permet aussi d'enregistrer un PDF via le navigateur.

## Publication sur GitHub Pages

1. Créer un dépôt **public** nommé `ping-tableau` sur GitHub.
2. Ajouter les fichiers de ce dossier à la racine et les enregistrer sur `main`.
3. Dans **Settings → Pages → Build and deployment**, choisir **Deploy from a branch**, branche **main**, dossier **/ (root)**, puis **Save**.
4. GitHub affichera l'adresse publiée après la construction : `https://ybonnel.github.io/ping-tableau/` si ce nom de dépôt est utilisé sur ce compte.

Aucun secret et aucune configuration de compilation ne sont nécessaires. Le dépôt public contient le code ; les tournois restent dans le navigateur de chaque utilisateur.

## Validation

Avec Node.js : `node test.cjs`.

Les tests simulent cinq tournois pour chaque effectif de 2 à 64 équipes. Ils contrôlent la terminaison, le classement sans doublons, toutes les places, les exemptions et l'invalidation après correction. Le script vérifie également la syntaxe JavaScript de l'application. Les interactions visuelles n'ont pas été vérifiées dans un navigateur dans cet environnement.
