# Book Library MERN Application

Une application complète MERN (MongoDB, Express.js, React, Node.js) pour gérer votre bibliothèque personnelle, avec prise en charge de la conteneurisation, des déploiements Kubernetes, de l'intégration continue (CI) via Jenkins, et de la surveillance avec Grafana.

## Fonctionnalités

- Authentification utilisateur (inscription/connexion)
- Opérations CRUD pour les livres
- Routes protégées
- Design responsive avec Tailwind CSS
- Authentification basée sur JWT
- Conteneurisation avec Docker
- Déploiements orchestrés avec Kubernetes (K8s)
- Surveillance des performances avec Prometheus et Grafana
- Intégration et déploiement continus (CI/CD) avec Jenkins

---

## Prérequis

- **Node.js** (v14 ou plus)
- **MongoDB** installé et en cours d'exécution localement ou via Kubernetes
- **Docker** et **Docker Compose**
- **Kubectl** et un cluster Kubernetes fonctionnel
- **Helm** (pour la gestion des charts Kubernetes)
- **Jenkins** installé et configuré
- **Grafana** et **Prometheus** (configurés dans Kubernetes)

---

## Installation et Configuration

### 1. Cloner le dépôt


git clone <repository-url>
cd project
2. Backend
Naviguez dans le dossier backend et installez les dépendances :

bash
Copier le code
cd backend
npm install
Configurer les variables d'environnement en créant un fichier .env dans le dossier backend :

env
Copier le code
PORT=5000
MONGODB_URL=mongodb://localhost:27017/book-library
JWT_SECRET=your_jwt_secret_key
Lancer le serveur :

# Book Library MERN Application

A full-stack MERN (MongoDB, Express.js, React, Node.js) application for managing your personal book library.

## Features

- User authentication (signup/login)
- CRUD operations for books
- Protected routes
- Responsive design with Tailwind CSS
- JWT-based authentication

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14 or higher)
- **MongoDB** installed and running locally
- **Git** (optional, for version control)

## Installation

### 1. Clone the Repository

Clone the project to your local machine using Git. Open your terminal and run the following command:

```bash
git clone <repository-url>
cd book-library
```
2. Install Backend Dependencies
Navigate to the backend directory and install the necessary dependencies using npm:
Copier le code
```bash
cd backend
npm install
````
3. Install Frontend Dependencies
Next, navigate to the frontend directory and install the frontend dependencies:

bash
Copier le code
cd ../frontend
npm install
4. Configure Environment Variables
In the backend folder, create a .env file to store your environment variables. You will need to configure the following:

PORT=5000 : The port the backend server will run on.
MONGODB_URL=mongodb://localhost:27017/book-library : The connection string for your MongoDB database.
JWT_SECRET=your_jwt_secret_key : A secret key used for JWT-based authentication.
Here is an example of what the .env file should look like:

txt
Copier le code
PORT=5000
MONGODB_URL=mongodb://localhost:27017/book-library
JWT_SECRET=your_jwt_secret_key
Running the Application
5.1 Start the Backend Server
Now, let's run the backend server. Navigate to the backend directory and run the following command to start the server in development mode:

bash
Copier le code
cd backend
npm run dev
5.2 Start the Frontend Development Server
Next, navigate to the frontend directory and run the following command to start the frontend development server:

bash
Copier le code
cd frontend
npm run dev
6. Access the Application
Once the backend and frontend servers are running, you can access the application through your browser:

Frontend: http://localhost:5173
Backend API: http://localhost:5000
API Endpoints
Authentication
POST /api/auth/signup - Register a new user
POST /api/auth/login - Login user
Books (Protected Routes)
GET /api/books - Get all books
GET /api/books/:id - Get a specific book
POST /api/books - Create a new book
PATCH /api/books/:id - Update a book
DELETE /api/books/:id - Delete a book
Project Structure
go
Copier le code
book-library/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── app.js
│   └── package.json
└── frontend/
    ├── src/
    │   ├── components/
    │   ├── context/
    │   ├── pages/
    │   ├── services/
    │   └── App.jsx
    └── package.json
Contributing
We welcome contributions to improve this project. To contribute:

Fork the repository to your own GitHub account.
Create a new feature branch:
bash
Copier le code
git checkout -b feature/amazing-feature
Commit your changes:
bash
Copier le code
git commit -m 'Add some amazing feature'
Push your changes to your forked repository:
bash
Copier le code
git push origin feature/amazing-feature
Open a Pull Request (PR) with a clear description of what your changes do.
Copier le code
npm run dev
3. Frontend
Naviguez dans le dossier frontend et installez les dépendances :

bash
Copier le code
cd ../frontend
npm install
Lancer le serveur de développement :

bash
Copier le code
npm run dev
L'application sera disponible sur : http://localhost:5173

4. Conteneurisation avec Docker
Utilisez les fichiers Docker pour conteneuriser les services.

Backend : Utilisez le fichier Dockerfile dans le dossier backend.
Frontend : Utilisez le fichier Dockerfile dans le dossier frontend.
Construire et lancer les conteneurs via docker-compose.yml :

```bash
docker-compose up --build
```
Déploiement avec Kubernetes
Les manifestes Kubernetes pour les déploiements et les services se trouvent dans le dossier k8s. Exemple pour appliquer tous les manifestes :
```bash
kubectl apply -f k8s/
```
Fichiers clés :

Déploiements :
backend-deployment.yaml
frontend-deployment.yaml
mongo-deployment.yaml
Services :
backend-service.yaml
frontend-service.yaml
Surveillance :
prometheus-deployment.yaml et grafana-deployment.yaml
Helm Chart
Le dossier my-app-chart contient les fichiers Helm pour une gestion simplifiée. Installez l'application avec :
```bash
helm install my-app ./my-app-chart
```
Intégration Continue avec Jenkins
Le fichier Jenkinsfile contient le pipeline CI/CD pour automatiser :

L'installation des dépendances
Les tests
La construction des conteneurs Docker
Le déploiement dans Kubernetes
Configurer Jenkins pour pointer vers ce fichier et déclencher des builds.

Surveillance avec Grafana et Prometheus
Les déploiements pour Prometheus et Grafana sont inclus dans le dossier k8s. Une fois déployés :

Accédez à Grafana à partir de son service exposé (par défaut sur le port 3000).
Configurez Prometheus comme source de données.
Créez des tableaux de bord pour surveiller les performances de l'application.

Structure du Projet
```bash
project/
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── app.js
│   ├── Dockerfile
│   ├── package.json
│   └── .env
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   └── services/
│   ├── Dockerfile
│   ├── tailwind.config.js
│   ├── vite.config.js
│   └── package.json
├── k8s/
│   ├── app-deployment.yaml
│   ├── backend-deployment.yaml
│   ├── backend-service.yaml
│   ├── frontend-deployment.yaml
│   ├── frontend-service.yaml
│   ├── prometheus-deployment.yaml
│   ├── prometheus-service.yaml
│   ├── grafana-deployment.yaml
│   ├── grafana-service.yaml
│   ├── mongo-deployment.yaml
│   └── mongo-pvc.yaml
├── my-app-chart/
│   ├── charts/
│   ├── templates/
│   ├── Chart.yaml
│   └── values.yaml
├── docker-compose.yml
└── Jenkinsfile
```
API Endpoints
Authentification
POST /api/auth/signup - Inscription utilisateur
POST /api/auth/login - Connexion utilisateur

Livres (Routes protégées)
GET /api/books - Récupérer tous les livres
GET /api/books/:id - Récupérer un livre spécifique
POST /api/books - Ajouter un livre
PATCH /api/books/:id - Mettre à jour un livre
DELETE /api/books/:id - Supprimer un livre
