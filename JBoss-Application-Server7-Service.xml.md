#Success
Blueprint has been successfully imported in your local vFabric Application Director. 

There are few final steps you need to follow before performing this deployment.

###Prerequisites:

Download the Jboss 7 Application Server file from following link and keep it in your local NFS Server folder.

1. **jboss-as-7.1.0.Final.zip** : 
    *http://www.jboss.org/jbossas/downloads/*


###Deployment steps:
1.Now click on deploy to deploy the application.

2.Enter name for deployment profile.

Step1: Deployment Environment tab will be displayed. Enter proper values as per your environment and click next.


Step2: Application Properties -> Service tab -> JBoss _ Application _ Server_7

  	 i) zip_url: Enter the URL to download the zip file 
 
    ii) JBOSS_MGMT_USER: Enter Jboss Management user(admin)  

    iii)JBOSS_MGMT_PWD: Enter Jboss password

![alt tag](https://raw.github.com/vmware-applicationdirector/solutions-import-beta/JBoss-Application-Server7-Service-50/Service-Property-Jboss.png)


###Blueprint Canvas diagram for your reference: 

![alt tag](https://raw.github.com/vmware-applicationdirector/solutions-import-beta/JBoss-Application-Server7-Service-50/JBoss-Application-Server7-Service-Blueprint-Canvas.png)

###Ready to go for deployment

###Smoke test after deployment:

Verify deployment by accessing URL http ://< WebPortal IP >:8080/
click on "Administrative Console"

![alt tag](https://raw.github.com/vmware-applicationdirector/solutions-import-beta/JBoss-Application-Server7-Service-50/Smoke-test-Login-page.png)


![alt tag](https://raw.github.com/vmware-applicationdirector/solutions-import-beta/JBoss-Application-Server7-Service-50/Smoke-test-Index-page.png)









 








