[w1]: https://raw.github.com/vmware-applicationdirector/solutions-import-beta/AD-ADFS-WIFApp-Blueprint/AD-ADFS-WIFApp-Blueprint.png
[w2]: https://raw.github.com/vmware-applicationdirector/solutions-import-beta/AD-ADFS-WIFApp-Blueprint/AD-ADFS-WIFApp_ActiveDirectory.png
[w3]: https://raw.github.com/vmware-applicationdirector/solutions-import-beta/AD-ADFS-WIFApp-Blueprint/AD-ADFS-WIFApp_ExecutionPlan.png
[w4]: https://raw.github.com/vmware-applicationdirector/solutions-import-beta/AD-ADFS-WIFApp-Blueprint/AD-ADFS-WIFApp_Properties-Deploy.png
[w5]: https://raw.github.com/vmware-applicationdirector/solutions-import-beta/AD-ADFS-WIFApp-Blueprint/AD-ADFS-WIFApp_WIFSampleApp.png
[w6]: https://raw.github.com/vmware-applicationdirector/solutions-import-beta/AD-ADFS-WIFApp-Blueprint/AD-ADFS-WIFApp_ADFS.png
[w7]: https://raw.github.com/vmware-applicationdirector/solutions-import-beta/AD-ADFS-WIFApp-Blueprint/ActiveDirectoryUsersandComputers.png
[w8]: https://raw.github.com/vmware-applicationdirector/solutions-import-beta/AD-ADFS-WIFApp-Blueprint/ADFS-WIF-Console.png
[w9]: https://raw.github.com/vmware-applicationdirector/solutions-import-beta/AD-ADFS-WIFApp-Blueprint/WIFSampleApp-On-Browser.png

## Prerequisites:  
Install and configure VMware vFabric Application Director 5.0 with vCloud Director. See the product documentation for information about installing and configuring Application Director.  
1.	Get the ADFS 2.0 installer and copy it to downloadable location
http://www.microsoft.com/en-in/download/details.aspx?id=10909&hash=VrATgGfA8ZnXqoooj1Xqtr0uVhlPvHeSKKlmgVKbg7rsytvNjndrF%2fzelBesONw7N6%2fiUvPD9Ps0k3ds6sR8jw%3d%3d  
2.	Get User Certificates in .pfx and .p7b format and copy it to downloadable location
Please note that user certificate name should match with DNS name of adfs host. e.g. If you have specified ADFS host name as ADFSHost and DNS name as testad.com, then certificate name should be ADFSHost.testad.com  
Steps to export in *.pfx format:  
a.	Open Server Manager, Click on Roles.  
b.	On IIS Manager, click Server Certificates  
c.	Select the certificate and click on export  
d.	Browse and select location to export and type for export as *.pfx. Enter password and click ok  
e.	User needs to enter the location and the password for the same in the export dialog    
f.	Certificate gets exported  
Steps to export in *.p7b format  
a.	Open Management Console. Go to Start, type MMC and enter.  
b.	Click File->Add/Remove Snap-in.  
c.	Select Certificates and click Add.  
d.	Select Computer Account and click next.  
e.	Click Finish. Click Ok on Add/Remove Snap-in dialog.  
f.	Now go to Personal Certificates, select the certificate to be exported, right click -> All tasks ->    Export.  
g.	On Certificate export wizard click next.  
h.	On Export Private Key step, select ‘No, do not export private key’, select next.  
i.	Select .P7B format and select checkbox ‘Include all certificates in the certification path if possible’ click next.  
j.	Enter path and filename and click next.  
k.	Click Finish and certificate gets exported.

3.Get the WIF SDK installer and copy it to downloadable location
http://www.microsoft.com/en-us/download/details.aspx?id=4451
4.Create the vApp Template with OS Windows 2008 R2 Enterprise having application director agent.  See application director documentation for how to create vApp Template for windows.
 
### Set Up:  
Click on the "Try" link of this solution to import the blueprint.  Update the Application Director URL and password. Click on Import File button. It will import the blueprint in your application director. Once blueprint is imported, it will show you the page which explains the steps to be done after import.
Following are the steps to be done after import:
Create the vApp Template with OS Windows 2008 R2 Enterprise having application director agent and map it to logical template 'W2K8 R2 Ent SP1 For AD' that is used in blueprint. 
Once blueprint is imported, login to Application Director and check application with name ‘AD ADFS and WIF Sample App’. Click on Application name and go to blueprint. It will show following.


[![AD-ADFS-WIFApp-Blueprint_WIFAppProperties][w1]][w1]

Following properties to be updated in blueprint or in deployment profile:  
For ActiveDirectory Service:  
1. netbios and dnsname: Netbios name will be part of DNS name e.g. if DNS name is adtest.com then netbios name should be adtest  
2. password: Password that should be set for local admin  
3. safepass: Safe mode recovery password, it should be complex password having at least on1 uppercase letter, one lowercase letter, number and special characters


[![AD-ADFS-WIFApp-Blueprint_WIFAppProperties][w2]][w2]  
For ADFS service:  
1. adfsinstalller: Downloadable path of ADFS 2.0 installer from where application can download the installer  
2. local_admin_pass: Local admin password of ADFS machine:  
3. usercertpb: Downloadable path of User Certificate in .p7b format  
4. usercert: Downloadable path of User Certificate in .pfx format  
5. usercert_password: Password of user certificate
[![AD-ADFS-WIFApp-Blueprint_ADFSProperties][w6]][w6]

For WIFSampleApp:  
1. wifinstaller: Downloadable path of WIF installer
[![AD-ADFS-WIFApp-Blueprint_ADFSProperties][w5]][w5]

#### Deployment:
1.	Now click on deploy to deploy the application. 
2.	Enter name for deployment profile
3.	Step1: Deployment Environment tab will be displayed. Enter proper values as per your environment and click next
4.	Step2: Application Properties
Node tab: Enter/Update proper values for nodes i.e. CPU, Memory, Hostname
Service tab: As mentioned above property values for each service can be updated directly in blueprint or in deployment profile. Enter/Update property values for each service i.e. AD, ADFS and WIFSampleApp service
[![AD-ADFS-WIFApp-Blueprint_ADFSProperties][w4]][w4]

5.	Step3: Execution plan: It will show following screenshot
[![AD-ADFS-WIFApp-Blueprint_ADFSProperties][w3]][w3]

6.	Step 4: Review: Click Deploy
It’ll start the deployment. Wait till deployment completes.

#####Deployment Verification:  
Once deployment is complete, you can use following steps to verify the deployment:  
1.	For AD Setup:  
a.Login to the AD machine with Active Directory domain credentials which were used while deployment  
b.	Click on Start > Administrative Tools. Following entities associated the AD setup will be displayed:  
1.	Active Directory Administrative Center  
2.	Active Directory Sites and Services.  
3.	Active Directory Users and Computers  
4.	Active Directory Domains and Trusts.  
Click on ‘Active Directory Users and Computers’ > Computers It will display the computers in the AD domain
[![AD-ADFS-WIFApp-Blueprint_ADFSProperties][w7]][w7]

c.	You can also check Server Manager to verify that the machine is added to domain that is created. Click on Start > Administrative Tools. Open the Server Manager. User can see that machine is added to domain.  
2.	For ADFS Setup:  
a.	Login to the ADFS machine with AD domain credentials  
b.	Go to Start > Administrative Tools. User can see ADFS server (‘AD FS 2.0 Management) installed. On the machine.  
c.	Click on ADFS 2.0 Management to view the console. User will see the below screen after ADFS is successfully deployed. 
[![AD-ADFS-WIFApp-Blueprint_ADFSProperties][w8]][w8]  

3.	For WIF Setup:    
a.	Login to ADFS machine    
b.	To verify ADFS with Sample application, access the sample application in browser.Open a browser window, and then go to https://$computername.$dnsname/ClaimsAwareWebAppWithManagedSTS/default.aspx
e.g.
https://ADFSHost.testad.com/ClaimsAwareWebAppWithManagedSTS/default.aspx 
It’ll ask for credentials. Enter the AD domain credentials. 
This will automatically redirect the request the sample application with claims. For reference please see the below screenshot:
[![AD-ADFS-WIFApp-Blueprint_ADFSProperties][w9]][w9]

