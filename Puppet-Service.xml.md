#Success
Service has been successfully imported in your local vFabric Application Director. 

There are few final steps you need to follow before performing deployment.

###Prerequisites:

Download the puppet/Puppet Enterprise package for the corresponding Operating System and keep it in your local web server folder. Example: puppet-enterprise-2.5.3-el-5-x86_64.tar.gz for Ubuntu 32 bit (10.4).


puppet : https://pm.puppetlabs.com/puppet-enterprise 

###Deployment steps:

After importing Service in Application Director, you can start using it to deploy applications. The basic steps are as follows:

Step 1:

	1. Create a new Application.
	 
    2. On the Blueprint canvas, drag and drop the supported OS template from the Logical Templates menu.

    3. From the Services menu, drag and drop this service to OS template.

    4. Save the Application.
    
Step 2: Deployment Environment tab will be displayed. Enter proper property values as per your environment and click next.

Step 3: Application Properties -> Service tab ->Puppet_Enterprise

			a. agent_cert: Enter the systems certificate name
			b. installer_payload: Enter the appropriate package for the operating system (Path of Operating system webs server)
			c. puppet server: Enter appropriate puppet master name
			

![alt tag](https://raw.github.com/vmware-applicationdirector/solutions-import-beta/Puppet-Service-50/Puppet-Service-properties.png)
	
###Blueprint Canvas diagram for your reference: 

![alt tag](https://raw.github.com/vmware-applicationdirector/solutions-import-beta/Puppet-Service-50/Puppet-Service-Canvas.png)

###Ready to go for deployment




 








