# Using CDKTF with TFE 

The Cloud Development Kit for Terraform (CDKTF) allows you to manage Terraform configuration with code in your preferred programming language such as TypeScript, Python, Go, C#, and/or Java.

I build this repo based upon this [tutorial on HashiCorp
Learn](https://learn.hashicorp.com/tutorials/terraform/cdktf-applications?in=cdktf).


# Show Your Work

## Ready

```sh
mkdir example-tfe
cd example-tfe
cdktf init --template=typescript \
    --project-name=example-tfe \
    --project-description="Learn how to example CDKTF with TFE" \
    --local

npm install @cdktf/provider-tfe 
cdktf provider add "tfe@~>0.36.0"
cat ../tfe_organization.tf | cdktf convert --provider=tfe
```

## Set (main.ts)

```ts
import { Construct } from "constructs"
import { App, TerraformStack } from "cdktf"
import * as tfe from "@cdktf/provider-tfe"
import * as fs from "fs"

class MyStack extends TerraformStack {
  constructor(scope: Construct, name: string) {
    super(scope, name)
    // https://gist.github.com/markchristopherwest/f722264908390c0d16ca94387bef069e
    new tfe.TfeProvider(this, 'kind', {
      hostname: 'localhost',
      sslSkipVerify: true,
      token: fs.readFileSync('/tmp/initial_admin_token.txt','utf8')
    })

    new tfe.Organization(this, "hello", {
      email: "admin@hello.com",
      name: "my-org-hello",
    });

  }
}

const app = new App()
new MyStack(app, 'app')
app.synth()

```

## Go


```sh
cdktf get
cdktf synth
ckdtf plan
ckdtf apply
```
