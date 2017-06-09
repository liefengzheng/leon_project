export class VmwareItem{
    vmwareId: String;
    vmwareName: String;
    vmwareInsType: String;
    vmwareAddr: String;
    vmwareSpace: String;
    description?: String;
    accessMode: String;
    accessUserName: String;
    accessPWD: String;
}

export class VmwareInstance{
    instanceId: String;
    instanceName: String;
    description?: String;
}
