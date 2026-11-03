# Repères pour les modifications

- Application statique autonome dans index.html ; aucune dépendance de production.
- Conserver les chemins relatifs pour GitHub Pages et la compatibilité avec l'ouverture locale.
- Le moteur compute(teams, results) est pur. null représente une exemption ; undefined un résultat en attente. Ne jamais confondre ces deux valeurs.
- Les identifiants de matchs sont stables, liés au parcours. Un résultat n'est valide que si les participants correspondent encore.
- Tous les groupes sont subdivisés entre gagnants et perdants pour produire un classement intégral, pas seulement une finale et une petite finale.
- Les places du tableau virtuel sont compressées une fois le tournoi terminé pour supprimer les exemptions.
- Les noms saisis/importés doivent toujours être échappés dans les sorties HTML.
- Sauvegarde locale sous ping-tableau-v1, format version 1 ; préserver la compatibilité d'import.
- Exécuter node test.cjs après une modification du moteur. Tester manuellement saisie, export/import, correction, rechargement et affichage mobile lors d'un accès navigateur.
