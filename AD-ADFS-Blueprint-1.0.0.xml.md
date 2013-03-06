[wl]: https://raw.github.com/persistentsystems/solutions-import-beta/AD-ADFS-Blueprint/AD-ADFS-Properties.png

## Success
Your application has been successfully imported and ready to go but first there are a few final steps you need to follow before you can perform a deployment.

### Next Steps
1.In the AD-ADFS-Blueprint Application, you need to ensure that you have configured the **adfsinstaller** content property to point to the location of your adfs installer.

[![ADFS Installer][wl]][wl]

2. User Certificates: 
    usercert   is the  User Certificate in  *.pfx  format.
    usercertpb  is the User Certificate in *.p7b format.

For Self Signed Certificates user need to export the certificate as *.pfx only.   In case of the certificate signed by certification authority user need to export the certificate in *.pfx and .p7b format to include intermediate certificates.

Steps to export in *.pfx format
1. Open Server Manager, Click on Roles
2. On IIS Manager, click Server Certificates.
3. Select the certificate and click on export.
4. Browse and select location to export and type for export as *.pfx. Enter password and click Ok.
5. User needs to enter the location and the password for the same in the export dialog.
6. Certificate gets exported.

Steps to export in *.p7b format
1. Open Management Console. Go to Start, type MMC and enter.
2. Click File->Add/Remove Snap-in.
3. Select Certificates and click Add.
4. Select Computer Account and click next.
5. Click Finish. Click Ok on Add/Remove Snap-in dialog
6. Now go to Personal Certificates, select the certificate to be exported, right click -> All tasks -> Export.
7. On Certificate export wizard click next.
8. On Export Private Key step, select ‘No, do not export private key’, select next.
9. Select .P7B format and select checkbox ‘Include all certificates in the certification path if possible’ click next.
10. Enter path and filename and click next
11. Click Finish and certificate gets exported.

##### After this you are good to go.

