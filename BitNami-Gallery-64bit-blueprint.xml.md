[BitNami Applications for VMware]: http://bitnami.org/vmware "BitNami Applications for VMware"
[BitNami Gallery for VMware]: http://bitnami.org/vmware/gallery "BitNami Gallery for VMware"


## Success
Your BitNami Gallery application blueprint and service have been successfully imported and ready to go.

For more information about this application visit [BitNami Gallery for VMware].

Additional information about BitNami solutions is available at [BitNami Applications for VMware].

Please do the following steps once blueprint/services imports successfully, if deployment environment is behind the proxy:

a. Add following lines in darwin_global.conf of VMware application director

global_http_proxy= proxy_IP:proxy_port

global_https_proxy= proxy_IP:proxy_port

global_ftp_proxy= proxy_IP:proxy_port

b. Edit to BitNami services : Add new property

Property name :global_conf

Description : URL to download Darwin global configuration for each node

Type: content

Value : https://${darwin.server.ip}:8443/darwin/conf/darwin_global.conf

Required and overridable in the Blueprint tab : Yes (Right mark)

c. Add following lines in each action scripts

 # Import global conf

 . $global_conf
