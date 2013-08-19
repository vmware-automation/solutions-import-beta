#Success
Blueprint has been successfully imported in your local vFabric Application Director. 

There are  few final steps you need to follow before perform this deployment.

###Prerequisites:

Download the "phpMyAdmin-3.5.2-all-languages.tar.gz" file from following link and keep it in your local webserver folder.

phpMyAdmin-3.5.2-all-languages.tar.gz: http://citylan.dl.sourceforge.net/project/phpmyadmin/phpMyAdmin/3.5.2/phpMyAdmin-3.5.2-all-languages.tar.gz


###Deployment steps:
1.Now click on deploy to deploy the application.

2.Enter name for deployment profile.

Step1: Deployment Environment tab will be displayed. Enter proper values as per your environment and click next.



Step2: Application Properties -> Service tab -> Lamp_Stack
	
		a. db_root_password : Enter the database password

	
![alt tag](https://raw.github.com/vmware-applicationdirector/solutions-import-beta/appd-Clustere-Apache-Hadoop-50-blueprint/AfterDeployment-Step2.jpg)
	
###Blueprint Canvas diagram for your reference: 

![alt tag](https://raw.github.com/vmware-applicationdirector/solutions-import-beta/appd-Clustere-Apache-Hadoop-50-blueprint/Hadoop-Canvas-Diagram.png)

###Ready to go for deployment

###Smoke test after deployment :
Verify deployment by accessing URL : http://<IP of your deployed system>/phpinfo.php