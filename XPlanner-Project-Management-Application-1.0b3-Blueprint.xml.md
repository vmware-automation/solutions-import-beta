#Success
Blueprint has been successfully imported in your local vFabric Application Director. 

There are  few final steps you need to follow before performing this deployment.

###Prerequisites:

Download "xplanner-plus.war" file from the following link and keep it in your local web server folder.


1. **Xplanner-plus.war** : 
    *http://sourceforge.net/projects/xplanner-plus/files/v1.0b3/xplanner-plus.war/download*


###Deployment steps:
1.Now click on deploy to deploy the application.

2.Enter name for deployment profile.

Step1: Deployment Environment tab will be displayed. Enter proper values as per your environment and click next.

Step2: Application Properties -> Service tab -> Preinstalled_MySql_server

			a. db_root_password : Enter the Database password 

![alt tag](https://raw.github.com/vmware-applicationdirector/solutions-import-beta/appd-Clustere-Apache-Hadoop-50-blueprint/AfterDeployment-Step2.jpg)

		ii. Application Properties -> Service tab -> Apache

			No changes in properties value

![alt tag](https://raw.github.com/vmware-applicationdirector/solutions-import-beta/appd-Clustere-Apache-Hadoop-50-blueprint/AfterDeployment-Step2.jpg)
    	
       ii. Application Properties -> Service tab -> vFabric_tc_Server

	    a. install_path : Enter the installation directory path for tcserver 
	    b. jobsh        : Enter the path of job.sh file 
		c. nfs_path		: Enter the path of tc server
	    d. war          : Enter the path of war 

![alt tag](https://raw.github.com/vmware-applicationdirector/solutions-import-beta/appd-Clustere-Apache-Hadoop-50-blueprint/AfterDeployment-Step2.jpg)
    
Step3: Application Properties
		
		i. XPlanner_Webapp :	 
	
    	        war_file : Enter path of "xplanner-plus.war" file 

   	    ii. Application Properties -> Application tab -> xplanner_db 

              xplanner_db_pass : Enter the xplanner database password  

	
![alt tag](https://raw.github.com/vmware-applicationdirector/solutions-import-beta/appd-Clustere-Apache-Hadoop-50-blueprint/AfterDeployment-Step2.jpg)
	
##Blueprint Canvas diagram for your reference: 

![alt tag](https://raw.github.com/vmware-applicationdirector/solutions-import-beta/appd-Clustere-Apache-Hadoop-50-blueprint/Hadoop-Canvas-Diagram.png)

##Ready to go for deployment

###Smoke test after deployment:

Verify deployment by accessing URL http://WebPortal_IP:8081/


![alt tag](https://raw.github.com/vmware-applicationdirector/solutions-import-beta/appd-Clustere-Apache-Hadoop-50-blueprint/Hadoop-Canvas-Diagram.png)




 








