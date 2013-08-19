#Success
Blueprint has been successfully imported in your local vFabric Application Director. 

There are  few final steps you need to follow before performing this deployment.

###Prerequisites:

Before starting with the steps, download the liferay installer "liferay-portal-tomcat-6.1.0-ce-ga1-20120106155615760.zip", "mysql-connector-java-5.0.8.tar.gz", "Share.war" files and keep it in your local webserver folder.


1. **liferay-portal-tomcat-6.1.0-ce-ga1-20120106155615760.zip** :
    http://sourceforge.net/projects/lportal/files/Liferay%20Portal/6.1.0%20GA1/liferay-portal-maven-6.1.0-ce-ga1-20120106155615760.zip/download

2. **Share.war** : 
    *ftp://10.44.50.7/AppDirector/applications/LifeRay/share.war*


3. **mysql-connector-java-5.0.8.tar.gz** :
    *ftp://10.44.50.7/AppDirector/applications/LifeRay/mysql-connector-java-5.0.8.tar.gz*


###Deployment steps:
1.Now click on deploy to deploy the application.

2.Enter name for deployment profile.

Step1: Deployment Environment tab will be displayed. Enter proper values as per your environment and click next.


Step2: Application Properties -> Service tab -> OpenLDAP	
	
 			i. rootpw: root password
	

![alt tag](https://raw.github.com/vmware-applicationdirector/solutions-import-beta/Liferay-OpenLDAP-Application-Blueprint-50/Service-property-OpenLdap.png) 

Step3: Application Properties -> Service tab -> Liferay

	
	i. mysql_connector: Enter the path for  *mysql-connector-java-5.0.8.tar.gz

    ii.installer_url: Enter the path for liferay-portal-tomcat-6.1.0-ce-ga1-20120106155615760.zip

    iii.alfresco_share_war_url:Enter the path for share.war 


![alt tag](https://raw.github.com/vmware-applicationdirector/solutions-import-beta/Liferay-OpenLDAP-Application-Blueprint-50/Service-property-Liferay.png)
	
##Blueprint Canvas diagram for your reference: 

![alt tag](https://raw.github.com/vmware-applicationdirector/solutions-import-beta/Liferay-OpenLDAP-Application-Blueprint-50/Liferay-OpenLDAP-Application-Blueprint-Canvas.png)

###Ready to go for deployment

###Smoke test after deployment:

Verify deployment by accessing URL http://WebPortal_IP:8080/

![alt tag](https://raw.github.com/vmware-applicationdirector/solutions-import-beta/Liferay-OpenLDAP-Application-Blueprint-50/Smoke-Test.png)






 








