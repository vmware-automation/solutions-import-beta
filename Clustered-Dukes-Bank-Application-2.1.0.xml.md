#Success
Blueprint has been successfully imported in your local vFabric Application Director. 

There are  few final steps you need to follow before performing this deployment.

###Prerequisites:

Download "Stingray" , "cheetah-2.4.4.tar.gz" and "Jboss-5.1.0.GA.zip" package from following link and keep it in your local webserver folder. 


1. **ZeusTM_93_Linux-x86_64/** :

    *https://support.riverbed.com/download.htm?sid=qbr1k45ualc3gijn0qavnjaei7*


2. **Cheetah-2.4.4.tar.gz** : 
    *https://pypi.python.org/packages/source/C/Cheetah/Cheetah-1.0.tar.gz*


3. **Jboss-5.1-0.GA.zip** : 
    *http://sourceforge.net/projects/jboss/files/JBoss/JBoss-5.1.0.GA/jboss-5.1.0.GA.zip/download*


###Deployment steps:
1.Now click on deploy to deploy the application.

2.Enter name for deployment profile.

Step1: Deployment Environment tab will be displayed. Enter proper values as per your environment and click next.

Step2: Application Properties -> Service tab

		i. Application Properties -> Service tab -> JbossAppServer  
			
	        a. Stingray_traffic_Manager: No changes in value


![alt tag](https://raw.github.com/vmware-applicationdirector/solutions-import-beta/appd-Clustere-Apache-Hadoop-50-blueprint/AfterDeployment-Step1.jpg)


		ii. Application Properties -> Service tab -> MySQL
	
	        a. db_root_password : Enter the database root password


![alt tag](https://raw.github.com/vmware-applicationdirector/solutions-import-beta/appd-Clustere-Apache-Hadoop-50-blueprint/AfterDeployment-Step1.jpg)
	
		iii.  Application Properties -> Service tab -> JbossAppServer 

			a. JBOSS_JMX_PWD   : Enter the jboss JMX password


![alt tag](https://raw.github.com/vmware-applicationdirector/solutions-import-beta/appd-Clustere-Apache-Hadoop-50-blueprint/AfterDeployment-Step1.jpg)

      
      
Step3: Application Properties -> Application Component tab

       i. Application Properties -> Application tab -> initialize_db_script 

	    a. db_password : Enter database password 
    
    
![alt tag](https://raw.github.com/vmware-applicationdirector/solutions-import-beta/appd-Clustere-Apache-Hadoop-50-blueprint/AfterDeployment-Step1.jpg)

	ii. Application Properties -> Application tab ->Dukes_Bank_App
		
		 No changes in value

![alt tag](https://raw.github.com/vmware-applicationdirector/solutions-import-beta/appd-Clustere-Apache-Hadoop-50-blueprint/Hadoop-Canvas-Diagram.png)

	
##Blueprint Canvas diagram for your reference: 

![alt tag](https://raw.github.com/vmware-applicationdirector/solutions-import-beta/appd-Clustere-Apache-Hadoop-50-blueprint/Hadoop-Canvas-Diagram.png)

##Ready to go for deployment

###Smoke test after deployment:

Verify deployment by accessing URLe http://WebPortal_IP/bank/main.faces

![alt tag](https://raw.github.com/vmware-applicationdirector/solutions-import-beta/appd-Clustere-Apache-Hadoop-50-blueprint/Hadoop-Canvas-Diagram.png)

![alt tag](https://raw.github.com/vmware-applicationdirector/solutions-import-beta/appd-Clustere-Apache-Hadoop-50-blueprint/Hadoop-Canvas-Diagram.png)





 








