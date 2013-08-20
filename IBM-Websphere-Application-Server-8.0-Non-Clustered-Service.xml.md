#Success
Service has been successfully imported in your local vFabric Application Director. 

There are few final steps you need to follow before performing deployment.

###Prerequisites:

none

###Deployment steps:

After importing Service in Application Director, you can start using it to deploy applications. The basic steps are as follows:

Step 1:

	1. Create a new Application.
	 
    2. On the Blueprint canvas, drag and drop the supported OS template from the Logical Templates menu.

    3. From the Services menu, drag and drop this service to OS template.

    4. Save the Application.
    
Step 2: Deployment Environment tab will be displayed. Enter proper property values as per your environment and click next.

Step 3: Application Properties -> Service tab -> WebSphereAppServer

			a. ibm_username: Enter the user name for ibm download center 
			b. ibm_password: Enter the password for ibm download center
			c. admin_password: Enter the admin password
   
![alt tag](https://raw.github.com/vmware-applicationdirector/solutions-import-beta/IBM-Websphere-App-Server-8_0-Non-Clustered-Service-50/IBM-Websphere-Application-Server-8.0-Non-Clustered-Service-properties.png)

##Blueprint Canvas diagram for your reference: 

![alt tag](https://raw.github.com/vmware-applicationdirector/solutions-import-beta/IBM-Websphere-App-Server-8_0-Non-Clustered-Service-50/IBM-Websphere-Application-Server-8.0-Non-Clustered-Service-Canvas.png)

##Ready to go for deployment


No smoke test




 








