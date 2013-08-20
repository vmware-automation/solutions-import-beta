#Success
Blueprint has been successfully imported in your local vFabric Application Director. 

There are  few final steps you need to follow before perform this deployment.

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


Step2: Application Properties -> Service tab -> Liferay
	
	i. mysql_connector: Enter mysql-connector-java Tarball path for MySql connectivity with tomcat application server 

    ii.installer_url: Enter URL for liferay-portal-tomcat application 

    iii.alfresco_share_war_url:Enter URL for alfresco application deployment on tomcat server
 
	

![alt tag](https://raw.github.com/vmware-applicationdirector/solutions-import-beta/appd-Clustere-Apache-Hadoop-50-blueprint/AfterDeployment-Step2.jpg) 

Step3: Application Properties -> Service tab -> OpenLDAP

	i. rootpw: root password


![alt tag](https://raw.github.com/vmware-applicationdirector/solutions-import-beta/appd-Clustere-Apache-Hadoop-50-blueprint/AfterDeployment-Step2.jpg)
	
##Blueprint Canvas diagram for your reference: 

![alt tag](https://raw.github.com/vmware-applicationdirector/solutions-import-beta/appd-Clustere-Apache-Hadoop-50-blueprint/Hadoop-Canvas-Diagram.png)

##Ready to go for deployment

#####Smoke Test
		
Go to browser and type: http ://< WebPortal IP >:8080/

User is redirected to Liferay home page. Liferay + OpenLDAP + MySQL + Alfresco blueprint is deployed.



 








