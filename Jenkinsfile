pipeline {
    agent { docker { image 'node:'10.11.0' } }
    stages {
        stage('build') {
            steps {
                sh 'npm --version'
            }
        }
    }
}
