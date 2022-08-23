import { Construct } from "constructs"
import { App, TerraformStack } from "cdktf"
import * as tfe from "@cdktf/provider-tfe"
import * as fs from "fs"



class MyStack extends TerraformStack {
  constructor(scope: Construct, name: string) {
    super(scope, name)
    // https://gist.github.com/markchristopherwest/f722264908390c0d16ca94387bef069e
    const token = fs.readFileSync('/tmp/admin.txt','utf8');
    new tfe.TfeProvider(this, 'kind', {
      hostname: 'localhost',
      sslSkipVerify: true,
      token: token
    })

    new tfe.Organization(this, "aloha", {
      email: "admin@aloha.com",
      name: "my-org-aloha",
    });

    
  }
}

const app = new App()
new MyStack(app, 'app')
app.synth()