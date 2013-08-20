#Success
Blueprint has been successfully imported in your local vFabric Application Director. 

There are few final steps you need to follow before performing this deployment.

###Prerequisites:

Download the "alfresco-enterprise-4.0.1-installer-linux-x64.bin" file from following link and keep it in your local webserver folder.

http://sourceforge.net/projects/alfresco/files/Alfresco%204.0.c%20Community/alfresco-community-4.0.c-installer-linux-x64.bin.MD5/download


###Deployment steps:
1.Now click on deploy to deploy the application.

2.Enter name for deployment profile.

Step1: Deployment Environment tab will be displayed. Enter proper values as per your environment and click next.


Step2: Application Properties -> Service tab 

	i. Application Properties -> Service tab -> Alfresco
	
		a. mysql_connector: Enter the path of NFS server where mysql-connector-java-5.0.8.tar.gz file is located 
        b. installer_url: Enter the installer URL to install Alfresco Enterprise application    
        c.alfresco_admin_password: Enter the password 

![alt tag](https://raw.github.com/vmware-applicationdirector/solutions-import-beta/appd-Clustere-Apache-Hadoop-50-blueprint/AfterDeployment-Step1.jpg)
             
	ii. Application Properties -> Service tab -> MySQL  
	
		a. db_root_username: Enter database username 
		b. db_root_password: Enter database password

        
![alt tag](https://raw.github.com/vmware-applicationdirector/solutions-import-beta/appd-Clustere-Apache-Hadoop-50-blueprint/AfterDeployment-Step1.jpg)

				
	
##Blueprint Canvas diagram for your reference: 

![alt tag](https://raw.github.com/vmware-applicationdirector/solutions-import-beta/appd-Clustere-Apache-Hadoop-50-blueprint/Hadoop-Canvas-Diagram.png)

###Ready to go for deployment


###Smoke test after deployment:

Verify deployment by accessing URL http://WebPortal_IP:8080/alfresco




 








