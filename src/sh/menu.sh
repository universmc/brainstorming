#!/bin/bash
source export GROQ_API_KEY=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
# Affichage de l'heure et du mode de développement
echo "💻$(date "+%H:%M:%S") /dev mode"
#!/bin/bash

# Définition des variables utilisées dans le script:
hudTensor="╔╗╚╝═║╠╣╦╩╬"         # Caractères spéciaux utilisés pour le design du menu
SCRIPT_DIR="./Users/universmc/.module_zsh"  # Répertoire contenant les scripts à exécuter

# Définition de la fonction 'menu' pour afficher le menu avec les options:
menu() {
  printf "\n"
  printf "╔═══════════════Menu═══════════════╗\n"
  printf "║  1. [DevOps]---------------------║\n"
  printf "║  2. [✨About MC]-----------------║\n"
  printf "║  3. [💾.Projects]-[Crud]---------║\n"
  printf "║  4. [🔄Quantum.Makefile]---------║\n"
  printf "║  5. [📔.codex]-------------------║\n"
  printf "║  6. [🖲️.Map]---------------------║\n"
  printf "║  7. [📚.Archiviste]--------------║\n"
  printf "║  8. [🌌.systemDream]-------------║\n"
  printf "║  9. [💬.cloud]-------------------║\n"
  printf "║ 10. [🏗️.Factory]-----------------║\n"
  printf "║ 11. [🌴.Groq]--------------------║\n"
  printf "║ 12. [💻.pi [exit] -help -R}]-----║\n"  # Assurez-vous que la commande [exit] est ce que vous voulez montrer.
  printf "║ 13. [Clean]----------------------║\n"
  printf "╚══════════════════════════════════╝\n"
  printf "\n"
}

menu  # Appel de la fonction pour afficher le menu

  printf "\n"                     # Saut de ligne
  printf "${hudTensor:0:1}${hudTensor:1:1}"
  printf "${hudTensor:2:1}"
  printf " ╔ %s     \n" "═══════════Menu═══════════ ╗"
  printf " ╠${hudTensor:3:1}"
  printf "${hudTensor:6:1}"
  printf " ║ %2d.%s║\n" 1 "[DevOps]---------------"
  printf "${hudTensor:4:1}"
  printf "${hudTensor:6:1}"
  printf " ║ %2d. %s ║\n" 2 "[✨About_MC]-----------"
  printf "${hudTensor:4:1}"
  printf "${hudTensor:6:1}"
  printf " ║ %2d. %s ║\n" 3 "[💾.Projects]-[Crud]---"
  printf "${hudTensor:4:1}"
  printf "${hudTensor:6:1}"
  printf " ║ %2d. %s ║\n" 4 "[🔄Quantum.Makefile]---"
  printf "${hudTensor:4:1}"
  printf "${hudTensor:6:1}"
  printf " ║ %2d. %s ║\n" 5 "[📔.codex]-------------"
  printf "${hudTensor:4:1}"
  printf "${hudTensor:6:1}"
  printf " ║ %2d. %s ║\n" 6 "[🖲️ .Map]---------------"
  printf "${hudTensor:4:1}"
  printf "${hudTensor:6:1}"
  printf " ║ %2d. %s ║\n" 7 "[📚.Archiviste]--------"
  printf "${hudTensor:4:1}"
  printf "${hudTensor:6:1}"
  printf " ║ %2d. %s ║\n" 8 "[🌌.systemDream]......."
  printf "${hudTensor:4:1}"
  printf "${hudTensor:6:1}"
  printf " ║ %2d. %s ║\n" 9 "[💬.cloud]............."
  printf "${hudTensor:4:1}"
  printf "${hudTensor:6:1}"
  printf " ║ %2d. %s ║\n" 10 "[🏗️ .Factory]..........."
  printf "${hudTensor:4:1}"
  printf "${hudTensor:6:1}"
  printf " ║ %2d. %s ║\n" 11 "[🌴.Groq].............."
  printf "${hudTensor:4:1}"
  printf "${hudTensor:6:1}"
  printf " ║ %2d. %s ║\n" 12 "[💻.pi[exit] -help -R}]"
  printf "${hudTensor:4:1}"
  printf "${hudTensor:6:1}"
  printf " ║ %2d. %s ║\n" 13 "[Clean]________________"
  printf "${hudTensor:2:1}"
  printf "${hudTensor:1:1}"
  printf "${hudTensor:0:1}${hudTensor:1:1}"
  printf "\n"
  }

  menu