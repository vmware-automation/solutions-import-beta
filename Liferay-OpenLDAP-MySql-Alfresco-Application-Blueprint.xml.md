#Success
Blueprint has been successfully imported in your local vFabric Application Director. 

There are  few final steps you need to follow before performing this deployment.

###Prerequisites:

Download  "Alfresco_enterprise-4.1.5_installer.bin" ,"mysql-connector-java-5.0.8.tar.gz" , "liferay-portal-tomcat-6.1.1-ce-ga2-20120731132656558.zip" and "alfresco_share.war"  files from following link and keep them in your local webserver folder.


1. **Alfresco_enterprise-4.1.5_installer.bin** : 
    *ftp://10.44.50.7/AppDirector/applications/*


2. **Share.war** : 
    *ftp://10.44.50.7/AppDirector/applications/LifeRay/share.war*


3. **mysql-connector-java-5.0.8.tar.gz** :
    *ftp://10.44.50.7/AppDirector/applications/LifeRay/mysql-connector-java-5.0.8.tar.gz*

4. **liferay-portal-tomcat-6.1.1-ce-ga2-20120731132656558.zip** :
    *http://sourceforge.net/projects/lportal/files/latest/download/liferay-portal-tomcat-6.1.1-ce-ga2-20120731132656558.zip*


###Deployment steps:
1.Now click on deploy to deploy the application.

2.Enter name for deployment profile.

Step1: Deployment Environment tab will be displayed. Enter proper values as per your environment and click next.


Step2: Application Properties -> Service tab -> OpenLDAP

	i. rootpw: Enter OpenLDAP root password

![alt tag](https://raw.github.com/vmware-applicationdirector/solutions-import-beta/Liferay-OpenLDAP-MySql-Alfresco-App-Blueprint-50/Service-property-OpenLdap.png) 

Step3: Application Properties -> Service tab -> MYSQL
	
	i. db_root_password: Enter the database root password

![alt tag](https://raw.github.com/vmware-applicationdirector/solutions-import-beta/Liferay-OpenLDAP-MySql-Alfresco-App-Blueprint-50/Service-property-Mysql.png) 
	    
	    
Step4: Application Properties -> Service tab -> Liferay

	    i. mysql_connector: Enter path of  mysql-connector-java-5.0.8.tar.gz for MySql connectivity with tomcat application server 
	
	    ii.installer_url: Enter path for liferay-portal-tomcat application (liferay-portal-tomcat-6.1.1-ce-ga2-20120731132656558.zip)
	
	    iii.alfresco_share_war_url: Enter path for  Share.war
	    
![alt tag](https://raw.github.com/vmware-applicationdirector/solutions-import-beta/Liferay-OpenLDAP-MySql-Alfresco-App-Blueprint-50/Service-property-Liferay.png) 
	    
Step5: Application Properties -> Service tab -> Alfresco

	    i. installer_url : Enter path of Alfresco_enterprise-4.1.5_installer.bin
	    ii. mysql_connector: Enter path of  mysql-connector-java-5.0.8.tar.gz
	    iii. alfresco_admin_password: Enter alfresco admin password 

![alt tag](https://raw.github.com/vmware-applicationdirector/solutions-import-beta/Liferay-OpenLDAP-MySql-Alfresco-App-Blueprint-50/Service-property-Alfresco.png)
	
##Blueprint Canvas diagram for your reference: 

![alt tag](https://raw.github.com/vmware-applicationdirector/solutions-import-beta/Liferay-OpenLDAP-MySql-Alfresco-App-Blueprint-50/Blueprint-Canvas.png)

##Ready to go for deployment

#####Smoke Test
		
Go to browser and type: http ://< WebPortal IP >:8080/

User is redirected to Liferay home page. 

![alt tag](https://raw.github.com/vmware-applicationdirector/solutions-import-beta/Liferay-OpenLDAP-MySql-Alfresco-App-Blueprint-50/Smoke-test.png)



 








