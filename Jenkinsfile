pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "node-docker"
        DOCKER_TAG = "latest"
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    docker.build("${DOCKER_IMAGE}:${DOCKER_TAG}")
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                script {
                    docker.image("${DOCKER_IMAGE}:${DOCKER_TAG}").run("-d -p 3000:3000 --name node-container")
                }
            }
        }

        stage('Test') {
            steps {
                script {
                    sh "curl http://host.docker.internal:3000"
                }
            }
        }

        stage('Cleanup') {
            steps {
                script {
                    sh "docker stop node-container"
                    sh "docker rm node-container"

                    sh "docker rmi ${DOCKER_IMAGE}:${DOCKER_TAG}"
                }
            }
        }
    }

    post {
        always {
            cleanWs();
        }
    }

}