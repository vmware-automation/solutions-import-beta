#Success
Service has been successfully imported in your local vFabric Application Director. 

There are few final steps you need to follow before performing deployment.

###Prerequisites:

Download the following files and keep them in your local web server folder.  


1. **Alfresco_enterprise-4.0.1_installer.bin** : 
     *ftp://10.44.50.7/AppDirector/applications/alfresco/alfresco-enterprise-4.0.1-installer-linux-x64.bin*


2. **mysql-connector-java.tar.gz** : 
     *http://mysql.ntu.edu.tw/Downloads/Connector-J/mysql-connector-java-5.0.8.tar.gz*


###Deployment steps:
1.Now click on deploy to deploy the application.

2.Enter name for deployment profile.

Step1: Deployment Environment tab will be displayed. Enter proper values as per your environment and click next.


Step2: Application Properties -> Service tab ->Alfresco
	

     i.installer_url: Enter URL for Alfresco application installation 
	
    ii.mysql_connector: Enter mysql-connector-java Tarball path for MySql installtion and connectivity with tomcat application server 

    iii.alfresco_admin_password : Enter the password for alfresco application login
 
	
![alt tag](https://raw.github.com/vmware-applicationdirector/solutions-import-beta/Alfresco-Service-50/Service-Property-Alfresco.png) 

Step3: Application Properties -> Service tab -> MySQL

	 i.  db_root_username: Enter the database username as root
         ii. db_root_password: Enter the database password 
  

![alt tag](https://raw.github.com/vmware-applicationdirector/solutions-import-beta/Alfresco-Service-50/Service-Property-MySql.png)
	
##Blueprint Canvas diagram for your reference: 

![alt tag](https://raw.github.com/vmware-applicationdirector/solutions-import-beta/Alfresco-Service-50/Blueprint-Canvas.png)

##Ready to go for deployment

###Smoke test after deployment:

Verify deployment by accessing URL: http ://< WebPortal IP >:8080/alfresco 

![alt tag](https://raw.github.com/vmware-applicationdirector/solutions-import-beta/Alfresco-Service-50/Smoke-Test.png)



 
