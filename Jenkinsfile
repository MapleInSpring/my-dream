pipeline {
    agent {
      docker {
        image 'node:10-jessie'
        args '-u 0:0'
      }
    }

    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
    }
}
