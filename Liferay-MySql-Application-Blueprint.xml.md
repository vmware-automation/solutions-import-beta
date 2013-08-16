#Success
Blueprint has been successfully imported in your local vFabric Application Director. 

There are  few final steps you need to follow before perform this deployment.

###Prerequisites:

Download liferay installer "liferay-portal-tomcat-6.1.0-ce-ga1-20120106155615760.zip" ,"mysql-connector-java-5.0.8.tar.gz" and "alfresco_share.war" file from following link and keep it in your local webserver folder.
 
1. **liferay-portal-tomcat-6.1.1-ce-ga2-20120731132656558.zip** :
    *http://sourceforge.net/projects/lportal/files/latest/download/liferay-portal-tomcat-6.1.1-ce-ga2-20120731132656558.zip*

2. **Share.war** : 
    *ftp://10.44.50.7/AppDirector/applications/LifeRay/share.war*


3. **mysql-connector-java-5.0.8.tar.gz** :
    *ftp://10.44.50.7/AppDirector/applications/LifeRay/mysql-connector-java-5.0.8.tar.gz


###Deployment steps:
1.Now click on deploy to deploy the application.

2.Enter name for deployment profile.

Step1: Deployment Environment tab will be displayed. Enter proper values as per your environment and click next.


Step2: Application Properties -> Service tab

		i. Application Properties -> Service tab -> Liferay
	
			a. mysql_connector: Enter the local web server path of mysql_connector_java_tar.gz 
            b. installer_url: Enter the local web server path of Liferay portal application    
            c. alfresco_share_war_url: Enter the local web server path of alfresco web archiver deployment  


![alt tag](https://raw.github.com/vmware-applicationdirector/solutions-import-beta/
Liferay-MySql-Application-Blueprint-50/Service_property_Liferay.png)

		
		ii. Application Properties -> Service tab -> MySQL  
	
		a. db_root_password: Enter database root password 
        
![alt tag](https://raw.github.com/vmware-applicationdirector/solutions-import-beta/
Liferay-MySql-Application-Blueprint-50/Service_property_Mysql.png)
	
###Blueprint Canvas diagram for your reference: 

![alt tag](https://raw.github.com/vmware-applicationdirector/solutions-import-beta/
Liferay-MySql-Application-Blueprint-50/Liferay-MySql-Application-Blueprint-Canvas.png)

###Ready to go for deployment

###Smoke test after deployment:

Verify deployment by accessing URL http://WebPortal_IP:8080/

![alt tag](https://raw.github.com/vmware-applicationdirector/solutions-import-beta/
Liferay-MySql-Application-Blueprint-50/Smoke-Test.png)



