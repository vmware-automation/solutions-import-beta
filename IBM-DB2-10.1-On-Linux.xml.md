#Success
Blueprint has been successfully imported in your local vFabric Application Director. 

There are  few final steps you need to follow before perform this deployment.

###Prerequisites:

Download the IBM DB2 tar ball and keep it in your local webserver folder.

No url link
###Deployment steps:
1.Now click on deploy to deploy the application.

2.Enter name for deployment profile.

Step1: Deployment Environment tab will be displayed. Enter proper values as per your environment and click next.


Step2: Application Properties -> Service tab 

		i. DB2:
	
			a. download_url: Enter the url to download the DB2 tar ball
			b. database_password: Enter the database password
			c. instance_password: Enter the password of the DB2 instance name

![alt tag](https://raw.github.com/vmware-applicationdirector/solutions-import-beta/appd-Clustere-Apache-Hadoop-50-blueprint/AfterDeployment-Step1.jpg)

		
##Blueprint Canvas diagram for your reference: 

![alt tag](https://raw.github.com/vmware-applicationdirector/solutions-import-beta/appd-Clustere-Apache-Hadoop-50-blueprint/Hadoop-Canvas-Diagram.png)

##Smoke Test Plan

Create JDBC connection to access the DB. URL to be used:
String url = "jdbc:db2://<db_machine_ip>:50000/<db_name>";

	no screen shot

##Ready to go for deployment







 








