export class OpenStackItem{
    openStackId: String;
    openStackName: String;
    openStackInsType: String;
    openStackAddr: String;
    openStackSpace: String;
    description?: String;
    accessMode: String;
    accessUserName: String;
    accessPWD: String;
}

export class OpenStackInstance{
    instanceId: String;
    instanceName: String;
    description?: String;
}
