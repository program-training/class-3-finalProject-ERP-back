pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                script {
                    def pullRequestBranch = env.GITHUB_PR_SOURCE_BRANCH
                    checkout([$class: 'GitSCM', branches: [[name: "*/${pullRequestBranch}"]], userRemoteConfigs: [[url: 'https://github.com/program-training/class-3-finalProject-ERP-back.git']]])
                }
            }
        }
        stage('clean work space'){
            steps{
                script {
                    sh 'npm cache clean --force'
                }
            }
        }
         stage('Install Dependencies') {
            steps {
                script {
                    echo 'Installing dependencies...'
                    sh 'npm i -D @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint'
                }
            }
        }
        stage('server lint') {
            steps {
                script {
                        sh 'echo "Linting.."'
                        sh 'npm run lint'
                }
            }
        }
    }
    post {
        success {
            script {
                echo 'Linting passed. You may now merge.'
                setGitHubPullRequestStatus(
                    state: 'SUCCESS',
                    context: 'claas3-erp-back',
                    message: 'Lint passed',
                )
            }
        }
        failure {
            script {
                echo 'Pipeline failed. Blocking pull request merge.'
                setGitHubPullRequestStatus(
                    state: 'FAILURE',
                    context: 'claas3-erp-back',
                    message: 'Lint failed  run npm run lint to see errors',
                )
            }
        }
    }
}
