pipeline {
    agent any

    environment {
        DOCKER_IMAGE_BACKEND = 'alaakhedhiri/backend'
        DOCKER_IMAGE_FRONTEND = 'alaakhedhiri/frontend'
        DOCKER_HUB_CREDENTIALS = credentials('dockerhub') // Reference your Docker Hub credentials in Jenkins
    }

    stages {
        stage('Login to Docker Hub') {
            steps {
                script {
                    try {
                        echo "Logging in to Docker Hub..."
                        powershell """
                        docker login -u ${DOCKER_HUB_CREDENTIALS_USR} -p ${DOCKER_HUB_CREDENTIALS_PSW}
                        """
                    } catch (Exception e) {
                        echo "Error during Docker Hub login: ${e.getMessage()}"
                        error("Login to Docker Hub failed.")
                    }
                }
            }
        }

<<<<<<< HEAD

=======
>>>>>>> 23f7b9a9f7d49e229ccdfc2b8c6d673360065c82
        stage('Build and Push Backend Docker Image') {
            steps {
                script {
                    try {
                        echo "Building backend Docker image..."
                        powershell "docker build -t ${DOCKER_IMAGE_BACKEND}:${BUILD_NUMBER} ./backend"
                        
                        echo "Pushing backend Docker image to Docker Hub..."
                        powershell "docker push ${DOCKER_IMAGE_BACKEND}:${BUILD_NUMBER}"
                    } catch (Exception e) {
                        echo "Error during backend Docker image build or push: ${e.getMessage()}"
                        error("Build and push of backend Docker image failed.")
                    }
                }
            }
        }

        stage('Build and Push Frontend Docker Image') {
            steps {
                script {
                    try {
                        echo "Building frontend Docker image..."
                        powershell "docker build -t ${DOCKER_IMAGE_FRONTEND}:${BUILD_NUMBER} ./frontend"
                        
                        echo "Pushing frontend Docker image to Docker Hub..."
                        powershell "docker push ${DOCKER_IMAGE_FRONTEND}:${BUILD_NUMBER}"
                    } catch (Exception e) {
                        echo "Error during frontend Docker image build or push: ${e.getMessage()}"
                        error("Build and push of frontend Docker image failed.")
                    }
                }
            }
        }
    }

    post {
        always {
            echo "Cleaning up..."
            powershell "docker logout"
        }
        success {
            echo "Pipeline completed successfully!"
        }
        failure {
            echo "Pipeline failed. Check logs for details."
        }
    }
}
