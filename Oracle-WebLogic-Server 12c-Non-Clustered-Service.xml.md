#Success
Service with sample blueprint have been successfully imported in vFabric Application Director. 

Sample Blueprint is with Service and one of the supported operating system. User can use any of supported Operating Systems listed in Service. 

There are few final steps you need to follow before performing deployment.

###Prerequisites:

Download the  "WebLogic Server installer"(Rename the WebLogic Server installer to webLogicInstaller.bin),"demoapp.war" and  keep it in  local web server folder.

###Deployment steps:
After importing Blueprint in vFabric Application Director, you can proceed with application deployment. The basic steps are as follows:

Step 1: Map the logical template with Cloud  template (Physical Template).

Step 2: Navigate to Applications Tab and open the imported Application.

Step 3: Enter required property values appropriate to your environment.

		a.Application Properties -> Service tab -> Weblogic

			i. nfs_path: Enter the nfs path for the WebLogic Server installer
			
![alt tag](https://raw.github.com/vmware-applicationdirector/solutions-import-beta/Oracle-WebLogic-Server-12c-Non-Clustered-Service-50/Oracle-WebLogic-Server-12c-Non-Clustered-Service-properties2.png)
			
		b. Application Properties -> Application Component tab -> DemoApp

			i. war_file: Enter the nfs path for the demoapp.war file

![alt tag](https://raw.github.com/vmware-applicationdirector/solutions-import-beta/Oracle-WebLogic-Server-12c-Non-Clustered-Service-50/Oracle-WebLogic-Server-12c-Non-Clustered-Service-properties1.png)

Step 4: Save the Application and proceed for deployment

###Blueprint Canvas diagram for your reference: 

![alt tag](https://raw.github.com/vmware-applicationdirector/solutions-import-beta/Oracle-WebLogic-Server-12c-Non-Clustered-Service-50/Oracle-WebLogic-Server-12c-Non-Clustered-Service-Canvas.png)

###Ready to go for deployment

###Smoke test after deployment:
	
Log into the WebLogic server console : http://<deployed IP>:7001/console/login/LoginForm.jsp
	
Log into the application  http://<deployed IP>:7001/TestWebApp/

![alt tag](https://raw.github.com/vmware-applicationdirector/solutions-import-beta/Oracle-WebLogic-Server-12c-Non-Clustered-Service-50/Oracle-WebLogic-Server-12c-Non-Clustered-Service-Smoke-Test.png)





 








