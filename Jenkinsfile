pipeline {
    agent any

    environment {
        DOCKER_IMAGE_BACKEND = 'alaakhedhiri/backend'
        DOCKER_IMAGE_FRONTEND = 'alaakhedhiri/frontend'
    }

    stages {
        stage('Login to Docker Hub') {
            steps {
                echo "Logging in to Docker Hub..."
                script {
                    try {
                        // Use withCredentials block to securely handle the credentials
                        withCredentials([usernamePassword(credentialsId: 'docker', usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {
                            echo "Attempting Docker login..."
                            powershell """
                            docker login -u $DOCKER_USERNAME -p '$DOCKER_PASSWORD'
                            """
                        }
                    } catch (Exception e) {
                        echo "Docker login failed: ${e.getMessage()}"
                        currentBuild.result = 'FAILURE'
                        throw e
                    }
                }
            }
        }

        stage('Build and Push Backend Docker Image') {
            steps {
                echo "Building backend Docker image..."
                powershell "docker build -t ${DOCKER_IMAGE_BACKEND}:${BUILD_NUMBER} ./backend"
                
                echo "Pushing backend Docker image to Docker Hub..."
                powershell "docker push ${DOCKER_IMAGE_BACKEND}:${BUILD_NUMBER}"
            }
        }

        stage('Build and Push Frontend Docker Image') {
            steps {
                echo "Building frontend Docker image..."
                powershell "docker build -t ${DOCKER_IMAGE_FRONTEND}:${BUILD_NUMBER} ./frontend"
                
                echo "Pushing frontend Docker image to Docker Hub..."
                powershell "docker push ${DOCKER_IMAGE_FRONTEND}:${BUILD_NUMBER}"
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
