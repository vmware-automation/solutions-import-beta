[wl]: https://raw.github.com/persistentsystems/solutions-import-beta/AD-ADFS-WIFApp-Blueprint/AD-ADFS-WIFApp-Blueprint_WIFAppProperties.png
[w2]: https://raw.github.com/persistentsystems/solutions-import-beta/AD-ADFS-WIFApp-Blueprint/AD-ADFS-WIFApp-Blueprint_ADFSProperties.png

## Success
Your application has been successfully imported and ready to go but first there are a few final steps you need to follow before you can perform a deployment.

### Next Steps

1.In the AD-ADFS-WIFApp-Blueprint, you need to ensure that you have configured the **adfsinstaller** content property to point to the location of your adfs installer.This can be obtained as a Microsoft download from their site 
http://www.microsoft.com/en-in/download/details.aspx?id=10909&hash=VrATgGfA8ZnXqoooj1Xqtr0uVhlPvHeSKKlmgVKbg7rsytvNjndrF%2fzelBesONw7N6%2fiUvPD9Ps0k3ds6sR8jw%3d%3d

2.In the AD-ADFS-WIFApp-Blueprint, **usercert**  is the  User Certificate in  *.pfx  format and usercertpb is the User Certificate in *.p7b format.

For Self Signed Certificates user need to export the certificate as *.pfx only. In case of the certificate signed by certification authority user need to export the certificate in *.pfx and .p7b format to include intermediate certificates.

Steps to export in *.pfx format
a. Open Server Manager, Click on Roles.
b. On IIS Manager, click Server Certificates.
c. Select the certificate and click on export.
d. Browse and select location to export and type for export as *.pfx. Enter password and click Ok.
e. User needs to enter the location and the password for the same in the export dialog.
f. Certificate gets exported.

Steps to export in *.p7b format
a. Open Management Console. Go to Start, type MMC and enter.
b. Click File->Add/Remove Snap-in.
c. Select Certificates and click Add.
d. Select Computer Account and click next.
e. Click Finish. Click Ok on Add/Remove Snap-in dialog
f. Now go to Personal Certificates, select the certificate to be exported, right click -> All tasks -> Export.
g. On Certificate export wizard click next.
h. On Export Private Key step, select ‘No, do not export private key’, select next.
i. Select .P7B format and select checkbox ‘Include all certificates in the certification path if possible’ click next.
j. Enter path and filename and click next.
k. Click Finish and certificate gets exported.

[![AD-ADFS-WIFApp-Blueprint_ADFSProperties][w2]][w2]

3.In the AD-ADFS-WIFApp-Blueprint, you need to ensure that you have configured the **wifinstaller** content property to point to the location of your WIF SDK installer.This can be obtained as a Microsoft download WindowsIdentityFoundation-SDK-3.5.msi from their site http://www.microsoft.com/en-us/download/details.aspx?id=4451

[![WIF Installer][wl]][wl]


##### After this you are good to go.

