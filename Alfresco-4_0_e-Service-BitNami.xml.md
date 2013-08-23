#Success
Service with sample blueprint have been successfully imported in vFabric Application Director. 

Sample Blueprint is with Service and one of the supported operating system. User can use any of supported Operating Systems listed in Service. 

There are few final steps you need to follow before performing deployment.

###Prerequisites:

Download the following files and keep these in local web server folder.  

	
	1. Alfresco_enterprise-4.0.1_installer.bin
	2. mysql-connector-java.tar.gz

###Deployment steps:

After importing Blueprint in vFabric Application Director, you can proceed with application deployment. The basic steps are as follows:

Step 1: Map the logical template with Cloud  template (Physical Template).

Step 2: Navigate to Applications Tab and open the imported Application.

Step 3: Enter required property values appropriate to your environment.

 	a. Application Properties -> Service tab ->MySQL
 
			 i. db_root_username: Enter the database username as root
	         	ii.db_root_password: Enter the database password    
	
![alt tag](https://raw.github.com/vmware-applicationdirector/solutions-import-beta/Alfresco-4_0_e-Service-BitNami-50/Service-Property-MySQL.png) 

	b. Application Properties -> Service tab ->Alfresco

		    i. installer_url: Enter path for Alfresco_enterprise-4.0.1_installer.bin
			
		    ii. mysql_connector: Enter path for mysql-connector-java.tar.gz
		
		    iii. alfresco_admin_password : Enter alfresco admin password 
 
 
![alt tag](https://raw.github.com/vmware-applicationdirector/solutions-import-beta/Alfresco-4_0_e-Service-BitNami-50/Service-Property-Alfresco.png)

Step 4: Save the Application and proceed for deployment

###Blueprint Canvas diagram for your reference: 

![alt tag](https://raw.github.com/vmware-applicationdirector/solutions-import-beta/Alfresco-4_0_e-Service-BitNami-50/Blueprint-Canvas.png)

###Ready to go for deployment

###Smoke test after deployment:

Verify deployment by accessing URL: http://< WebPortal IP >:8080/alfresco 

![alt tag](https://raw.github.com/vmware-applicationdirector/solutions-import-beta/Alfresco-4_0_e-Service-BitNami-50/Alfresco_Login.jpg)

![alt tag](https://raw.github.com/vmware-applicationdirector/solutions-import-beta/Alfresco-4_0_e-Service-BitNami-50/Alfresco2.jpg)

 
