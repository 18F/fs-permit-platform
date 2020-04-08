def jobnameparts = JOB_NAME.tokenize('/') as String[]



def jobconsolename = jobnameparts[0]







pipeline {



    agent {



    node {


    label 'linuxworker1'



        }



    }







    environment {



        CURRENTBUILD_DISPLAYNAME = "fs-open-forest-platform Build #$BUILD_NUMBER"



        CURRENT_BUILDDESCRIPTION = "fs-open-forest-platform Build #$BUILD_NUMBER"



        SONAR_HOST = credentials('SONAR_HOST')



	SONAR_TOKEN = credentials('SONAR_TOKEN_FSOPENFOREST')



        GITHUB_TOKEN = credentials('GITHUB_TOKEN')



        GITHUB_PROJECT_NAME = "USDAForestService/fs-open-forest-platform"



        SONAR_PROJECT_NAME = "fs-openforest-platform"



        MAILING_LIST = 'ikumarasamy@techtrend.us'







	CHECKOUT_STATUS = 'Pending'



        INSTALL_DEPENDENCIES_STATUS= 'Pending'



	RUN_LINT_STATUS = 'Pending'



	RUN_UNIT_TESTS_STATUS = 'Pending'



	RUN_E2E_STATUS = 'Pending'



	RUN_PA11Y_STATUS = 'Pending'



	DEPLOY_STATUS = 'Pending'



	RUN_SONARQUBE_STATUS = 'Pending'



	AUTHOR = 'kilara77'



	BASIC_AUTH_PASS=credentials('BASIC_AUTH_PASS')



	BASIC_AUTH_USER=credentials('BASIC_AUTH_USER')



	CF_USERNAME = credentials('CF_USERNAME')



        CF_PASSWORD = credentials('CF_PASSWORD')



        JENKINS_URL="https://jenkins.fedgovcloud.us"



        SONARQUBE_URL="https://sca.fedgovcloud.us/dashboard?id=fs-openforest-platform"



    }







    options {



        timestamps()



        disableConcurrentBuilds()



        ansiColor('xterm')



    }







 stages {







    stage('Checkout Code'){



       steps {



                script {



                  currentBuild.displayName = "${env.CURRENTBUILD_DISPLAYNAME}"



                  currentBuild.description = "${env.CURRENT_BUILDDESCRIPTION}"



     sh '''



      curl -XPOST -H "Authorization: token $GITHUB_TOKEN" https://api.github.com/repos/USDAForestService/fs-open-forest-platform/statuses/$(git rev-parse HEAD) -d '{"state": "success","context":"ci/jenkins: checkout-code", "target_url": "https://jenkins.fedgovcloud.us/blue/organizations/jenkins/fs-open-forest-platform/activity","description": "Your tests passed on Jenkins!"}'



      '''



  		  CHECKOUT_STATUS= 'Success'



                }



	}



	 post {



                failure {



			script {



        		CHECKOUT_STATUS= 'Failed'



 sh '''



      curl -XPOST -H "Authorization: token $GITHUB_TOKEN" https://api.github.com/repos/USDAForestService/fs-open-forest-platform/statuses/$(git rev-parse HEAD) -d '{"state": "failure","context":"ci/jenkins: checkout-code", "target_url": "https://jenkins.fedgovcloud.us/blue/organizations/jenkins/fs-open-forest-platform/activity","description": "Your tests failed on Jenkins!"}'



      '''



                }



            }



    }



    }







    stage('install-dependencies'){



    steps {



	    script {



      sh '''



      curl -XPOST -H "Authorization: token $GITHUB_TOKEN" https://api.github.com/repos/USDAForestService/fs-open-forest-platform/statuses/$(git rev-parse HEAD) -d '{"state": "pending","context":"ci/jenkins: install-dependencies", "target_url": "https://jenkins.fedgovcloud.us/blue/organizations/jenkins/fs-open-forest-platform/activity","description": "Your tests are queued behind your running builds!"}'



      '''



		    sh '''



	pwd



	cd frontend



	pwd



	rm package-lock.json && rm -rf node_modules && rm -rf ~/.node-gyp



	npm install



	npm i typescript@3.1.6 --save-dev --save-exact



	cd ../server



	pwd



	rm package-lock.json && rm -rf node_modules && rm -rf ~/.node-gyp



	npm install



	'''



      sh '''



      curl -XPOST -H "Authorization: token $GITHUB_TOKEN" https://api.github.com/repos/USDAForestService/fs-open-forest-platform/statuses/$(git rev-parse HEAD) -d '{"state": "success","context":"ci/jenkins: install-dependencies", "target_url": "https://jenkins.fedgovcloud.us/blue/organizations/jenkins/fs-open-forest-platform/activity","description": "Your tests passed on Jenkins!"}'



      '''



		    INSTALL_DEPENDENCIES_STATUS= 'Success'



    		}



        }



		post {



                failure {



			script {



        		INSTALL_DEPENDENCIES_STATUS= 'Failed'







sh '''



      curl -XPOST -H "Authorization: token $GITHUB_TOKEN" https://api.github.com/repos/USDAForestService/fs-open-forest-platform/statuses/$(git rev-parse HEAD) -d '{"state": "failure","context":"ci/jenkins: install-dependencies", "target_url": "https://jenkins.fedgovcloud.us/blue/organizations/jenkins/fs-open-forest-platform/activity","description": "Your tests failed on Jenkins!"}'



      '''



    		}



                }



            }



    }











 stage('dev-deploy'){



    steps {



        script {



	sh '''



      		curl -XPOST -H "Authorization: token $GITHUB_TOKEN" https://api.github.com/repos/USDAForestService/fs-open-forest-platform/statuses/$(git rev-parse HEAD) -d '{"state": "pending","context":"ci/jenkins: build-deploy", "target_url": "https://jenkins.fedgovcloud.us/blue/organizations/jenkins/fs-open-forest-platform/activity","description": "Your tests are queued behind your running builds!"}'



      	'''



	sh '''



	pwd



	chmod 765 deploydev.sh



	./deploydev.sh ${WORKSPACE}



	'''



	sh '''



      		curl -XPOST -H "Authorization: token $GITHUB_TOKEN" https://api.github.com/repos/USDAForestService/fs-open-forest-platform/statuses/$(git rev-parse HEAD) -d '{"state": "success","context":"ci/jenkins: build-deploy", "target_url": "https://jenkins.fedgovcloud.us/blue/organizations/jenkins/fs-open-forest-platform/activity","description": "Your tests passed on Jenkins!"}'



      	'''



        DEPLOY_STATUS= 'Success'



        }



        }



		post {



                failure {



                     script {



        		DEPLOY_STATUS= 'Failed'



sh '''



      curl -XPOST -H "Authorization: token $GITHUB_TOKEN" https://api.github.com/repos/USDAForestService/fs-open-forest-platform/statuses/$(git rev-parse HEAD) -d '{"state": "failure","context":"ci/jenkins: build-deploy", "target_url": "https://jenkins.fedgovcloud.us/blue/organizations/jenkins/fs-open-forest-platform/activity","description": "Your tests failed on Jenkins!"}'



      '''



    		}



                }



            }



    }



 }







post{



    success {



	    script



	    {



	    	env.LCHECKOUT_STATUS = "${CHECKOUT_STATUS}"



 	    	env.LINSTALL_DEPENDENCIES_STATUS = "${INSTALL_DEPENDENCIES_STATUS}"



		env.LRUN_LINT_STATUS = "${RUN_LINT_STATUS}"



		env.LRUN_UNIT_TESTS_STATUS = "${RUN_UNIT_TESTS_STATUS}"



		env.LRUN_E2E_STATUS = "${RUN_E2E_STATUS}"



		env.LRUN_PA11Y_STATUS = "${RUN_PA11Y_STATUS}"



		env.LRUN_SONARQUBE_STATUS = "${RUN_SONARQUBE_STATUS}"



  	        env.LDEPLOY_STATUS = "${DEPLOY_STATUS}"



		env.LGIT_BRANCH = "${GIT_BRANCH}"



		env.LGIT_AUTHOR = "${AUTHOR}"



  		env.BLUE_OCEAN_URL="${env.JENKINS_URL}/blue/organizations/jenkins/${jobconsolename}/detail/${GIT_BRANCH}/${BUILD_NUMBER}/pipeline"



	    	env.BLUE_OCEAN_URL_SQ_DOCX="${env.BUILD_URL}artifact/sonarqubereports/sonarqubeanalysisreport.docx"



		env.BLUE_OCEAN_URL_SQ_XLSX="${env.BUILD_URL}artifact/sonarqubereports/sonarqubeissuesreport.xlsx"



		env.LSONARQUBE_URL="${SONARQUBE_URL}"



      		emailext attachLog: false, attachmentsPattern: '', body: '''${SCRIPT, template="openforest.template"}''', mimeType: 'text/html', replyTo: 'notifications@usda.gov', subject: '$PROJECT_NAME - Build # $BUILD_NUMBER - $BUILD_STATUS!', to: "${MAILING_LIST}"



	    }



        }







    failure {



	        script



	    {



	    	env.LCHECKOUT_STATUS = "${CHECKOUT_STATUS}"



 	    	env.LINSTALL_DEPENDENCIES_STATUS = "${INSTALL_DEPENDENCIES_STATUS}"



  		env.LRUN_LINT_STATUS = "${RUN_LINT_STATUS}"



		env.LRUN_UNIT_TESTS_STATUS = "${RUN_UNIT_TESTS_STATUS}"



		env.LRUN_E2E_STATUS = "${RUN_E2E_STATUS}"



		env.LRUN_PA11Y_STATUS = "${RUN_PA11Y_STATUS}"



		env.LRUN_SONARQUBE_STATUS = "${RUN_SONARQUBE_STATUS}"



		env.LDEPLOY_STATUS = "${DEPLOY_STATUS}"



		env.LGIT_BRANCH = "${GIT_BRANCH}"



		env.LGIT_AUTHOR = "${AUTHOR}"



  		env.BLUE_OCEAN_URL="${env.JENKINS_URL}/blue/organizations/jenkins/${jobconsolename}/detail/${GIT_BRANCH}/${BUILD_NUMBER}/pipeline"



		env.BLUE_OCEAN_URL_SQ_DOCX="${env.BUILD_URL}artifact/sonarqubereports/sonarqubeanalysisreport.docx"



		env.BLUE_OCEAN_URL_SQ_XLSX="${env.BUILD_URL}artifact/sonarqubereports/sonarqubeissuesreport.xlsx"



		env.LSONARQUBE_URL="${SONARQUBE_URL}"



	        emailext attachLog: false, attachmentsPattern: '', body: '''${SCRIPT, template="openforest.template"}''', mimeType: 'text/html', replyTo: 'notifications@usda.gov', subject: '$PROJECT_NAME - Build # $BUILD_NUMBER - $BUILD_STATUS!', to: "${MAILING_LIST}"



	    }



        }



    }



 }
