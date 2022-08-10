 pipeline {
    agent any

environment {
		DOCKERHUB_CREDENTIALS=credentials('dockerhub')

        def prod = "cd /home/ubuntu/designerrs/frontend && \
            sudo docker-compose pull && sudo docker-compose up -d && sudo docker ps --latest && \
            pwd "
        def discordURL = 'https://discord.com/api/webhooks/1004024024764010637/1jsO0tO1mWijYV0MXfI1sOmyV8zG7S2pLLKP4OnpnKNMgVudUWFQ1ubayO7pYTOxt_Py'
        // URL of image png/jpg to place to right of Discord build notifications
        def discordTImage = 'http://assets.stickpng.com/images/58480984cef1014c0b5e4902.png'    
        def discordImage = 'https://www.nicepng.com/png/full/362-3624869_icon-success-circle-green-tick-png.png'
        def discordDesc = "description\n"
        def discordFooter = "footer desc with vars: ${JOB_BASE_NAME}` (build #${BUILD_NUMBER})`  (tag #${BUILD_TAG})"
        def discordTitle = "${BUILD_NAME} (devel)"
        def username = "Jenkins-Bot"
        def tag = "${BUILD_TAG}"
        def jobBaseName = "${env.JOB_NAME}".split('/').first()
    
	}


    post {
    always {
    // discordSend description: "Jenkins Pipeline Build $JOB_BASE_NAME",  footer: " Build Started for ${JOB_NAME} ", link: "$BUILD_URL", result: currentBuild.result, title: "${JOB_NAME}", webhookURL: "https://discord.com/api/webhooks/948167009454161940/1MxQQdk0W84GMMm0S4gaT8Gy8bLKfb-yf5yZluH9p1CxRO3szrWid3spmwZYwCaZCC7E"
        script{
            if ("$JOB_BASE_NAME" == 'dev' || "$JOB_BASE_NAME" == 'main') {
            
                    discordSend webhookURL: discordURL,
                    title: "${JOB_BASE_NAME} #${BUILD_NUMBER}",
                    // title: discordTitle,
                    link: "$BUILD_URL",
                    result: currentBuild.currentResult ,
                    description: "**Pipeline:** ${jobBaseName}  \n**Build:** ${env.BUILD_NUMBER}  \n**Status:** ${currentBuild.currentResult }\n\u2060",  /* word joiner character forces a blank line */
                    enableArtifactsList: true,
                    showChangeset: true,
                    thumbnail: discordTImage,
                    unstable: true,
                    customAvatarUrl: discordTImage,
                    customUsername: username,
                    notes: "Hello, <#936301377599184906> Team! \n**${jobBaseName}**  --> ${JOB_BASE_NAME}  is  Successfully Deployed.",
                    footer: discordFooter
                    // image: discordImage
                    }else {
                    
                }
        }
  
    }
  }
    stages {

        // Devlopment Stages

        stage('Building Docker image For Designerrs-FrontEnd') {
            when {
                branch 'main'
            }
            steps {


                script{           
                    discordSend webhookURL: discordURL,
                    color: 'green',
                    title: "Hello, **Designerrs** Team!",
                    // title: discordTitle,
                    link: "$BUILD_URL",
                    result: currentBuild.currentResult ,
                    description: "**Pipeline:** ${jobBaseName}  \n**Build:** ${env.BUILD_NUMBER}  \n**Status:** Started\n\u2060",  /* word joiner character forces a blank line */
                    // enableArtifactsList: false,
                    // showChangeset: true,
                    thumbnail: discordTImage,
                    unstable: true,
                    customAvatarUrl: discordTImage,
                    customUsername: username}

                sh """cat  Dockerfile"""
                
                sh """cat  docker-compose.yml"""

                sh """ docker-compose build && docker image prune -f  """

                sh """ echo "Build Succesfully" """

            }
        }


		stage('Login to Docker hub') {
            when {
                branch 'main'
            }

			steps {
				sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'

                sh """ echo "Login Succesfully" """

			}
		}

        stage('Push Docker image For Master') {
            when {
                branch 'main'
            }
            steps {

                sh """ docker push adminedal/designerrs-frontend:prod    """

                sh """ echo "Pushed image Succesfully" """


            }
        }

        stage('Building Master Container') {
            when {
                branch 'main'
            }
            steps {

             sshagent(['designerrs-aws']) {
                 sh "ssh -o StrictHostKeyChecking=no -l ubuntu 15.206.211.71 'whoami'"
                 sh "ssh -o StrictHostKeyChecking=no -l ubuntu 15.206.211.71  '${prod}'"


                    }
         }
        }



    }

}