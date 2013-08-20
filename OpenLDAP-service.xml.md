#Success
Service has been successfully imported in your local vFabric Application Director. 

There are few final steps you need to follow before performing deployment.

###Prerequisites:

Download the "OpenLDAP Directory Server 2.3.43 installer" and keep it in your shared location.

###Deployment steps:

After importing Service in Application Director, you can start using it to deploy applications. The basic steps are as follows:

Step 1:

	1. Create a new Application.
	 
    2. On the Blueprint canvas, drag and drop the supported OS template from the Logical Templates menu.

    3. From the Services menu, drag and drop this service to OS template.

    4. Save the Application.
    
Step 2: Deployment Environment tab will be displayed. Enter proper property values as per your environment and click next.

Step 3: Application Properties -> Service tab ->OpenLDAP

			a. rootpw: Enter the root password 
   

![alt tag](https://raw.github.com/vmware-applicationdirector/solutions-import-beta/OpenLDAP-service-50/OpenLDAP-service-Application-Properties.png)

###Blueprint Canvas diagram for your reference: 

![alt tag](https://raw.github.com/vmware-applicationdirector/solutions-import-beta/OpenLDAP-service-50/OpenLDAP-service-Canvas.png)

###Ready to go for deployment







 








