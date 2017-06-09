const RESTFULHOST = "192.168.1.15";

export const RESTURI = {
    AUTH:{
        VUSER: RESTFULHOST + "/uaa/oauth/token?grant_type=password&username={username}&password={password}&client_id=ui&client_secret=12345&login_type=frontend"
    },
    OPENSTACK:{
        OPENSTACKINSLIST: RESTFULHOST + "/openstack/instances",
        OPENSTACKITEMLIST: RESTFULHOST + "/openstack/deployments/page/{page}/size/{size}"
    },
    VMWARE:{
        VMWAREINSLIST: RESTFULHOST + "/vmware/instances",
        VMWAREITEMLIST: RESTFULHOST + "/vmware/deployments/page/{page}/size/{size}"
    }
}