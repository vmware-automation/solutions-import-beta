#Success
Blueprint has been successfully imported in your local vFabric Application Director. 

There are few final steps you need to follow before performing this deployment.

###Prerequisites:

Download the "latest.zip" file from following link and keep it in your local webserver folder.

http://piwik.org/latest.zip


###Deployment steps:
1.Now click on deploy to deploy the application.

2.Enter name for deployment profile.

  Step 1: Deployment Environment tab will be displayed. Enter proper values as per your environment and click next.


Step2: Application Properties -> Service tab 

	i. Application Properties -> Service tab -> Lamp_Stack
	
		a. db_root_password : Enter the database root Password 
        b. phpMyAdmin_url   : Enter the path of phpMyAdmin Application 

![alt tag](https://raw.github.com/vmware-applicationdirector/solutions-import-beta/appd-Clustere-Apache-Hadoop-50-blueprint/AfterDeployment-Step1.jpg) 
                      
	ii. Application Properties -> Service tab -> piwik-2  
	
		a. piwik_username: Enter piwik username 
        b. piwik_password: Enter piwik password


![alt tag](https://raw.github.com/vmware-applicationdirector/solutions-import-beta/appd-Clustere-Apache-Hadoop-50-blueprint/AfterDeployment-Step1.jpg)


###Blueprint Canvas diagram for your reference: 

![alt tag](https://raw.github.com/vmware-applicationdirector/solutions-import-beta/appd-Clustere-Apache-Hadoop-50-blueprint/Hadoop-Canvas-Diagram.png)

###Ready to go for deployment


###Smoke test after deployment:

Verify deployment by accessing URL http://{ip:port}/piwik

![alt tag](https://raw.github.com/vmware-applicationdirector/solutions-import-beta/appd-Clustere-Apache-Hadoop-50-blueprint/Hadoop-Canvas-Diagram.png)




 












 








