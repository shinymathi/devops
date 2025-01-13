# Étape 1 : Utiliser une image de base Node.js
FROM node:21-alpine

# Étape 2 : Définir le répertoire de travail
WORKDIR /app

# Étape 3 : Copier les fichiers de dépendances
COPY package*.json ./

# Étape 4 : Installer les dépendances
RUN npm install

# Étape 5 : Copier le reste des fichiers
COPY . .

# Étape 6 : Exposer le port sur lequel l'application sera exécutée
EXPOSE 5000

# Étape 7 : Définir la commande par défaut pour démarrer l'application
CMD ["npm", "start"]
