// https://www.terraform.io/docs/providers/tfe/r/oauth_client
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OauthClientConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/oauth_client#api_url OauthClient#api_url}
  */
  readonly apiUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/oauth_client#http_url OauthClient#http_url}
  */
  readonly httpUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/oauth_client#id OauthClient#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/oauth_client#key OauthClient#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/oauth_client#name OauthClient#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/oauth_client#oauth_token OauthClient#oauth_token}
  */
  readonly oauthToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/oauth_client#organization OauthClient#organization}
  */
  readonly organization: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/oauth_client#private_key OauthClient#private_key}
  */
  readonly privateKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/oauth_client#rsa_public_key OauthClient#rsa_public_key}
  */
  readonly rsaPublicKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/oauth_client#secret OauthClient#secret}
  */
  readonly secret?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/oauth_client#service_provider OauthClient#service_provider}
  */
  readonly serviceProvider: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/tfe/r/oauth_client tfe_oauth_client}
*/
export class OauthClient extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tfe_oauth_client";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/tfe/r/oauth_client tfe_oauth_client} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OauthClientConfig
  */
  public constructor(scope: Construct, id: string, config: OauthClientConfig) {
    super(scope, id, {
      terraformResourceType: 'tfe_oauth_client',
      terraformGeneratorMetadata: {
        providerName: 'tfe',
        providerVersion: '0.36.0',
        providerVersionConstraint: '~> 0.33'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apiUrl = config.apiUrl;
    this._httpUrl = config.httpUrl;
    this._id = config.id;
    this._key = config.key;
    this._name = config.name;
    this._oauthToken = config.oauthToken;
    this._organization = config.organization;
    this._privateKey = config.privateKey;
    this._rsaPublicKey = config.rsaPublicKey;
    this._secret = config.secret;
    this._serviceProvider = config.serviceProvider;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_url - computed: false, optional: false, required: true
  private _apiUrl?: string; 
  public get apiUrl() {
    return this.getStringAttribute('api_url');
  }
  public set apiUrl(value: string) {
    this._apiUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiUrlInput() {
    return this._apiUrl;
  }

  // http_url - computed: false, optional: false, required: true
  private _httpUrl?: string; 
  public get httpUrl() {
    return this.getStringAttribute('http_url');
  }
  public set httpUrl(value: string) {
    this._httpUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get httpUrlInput() {
    return this._httpUrl;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // oauth_token - computed: false, optional: true, required: false
  private _oauthToken?: string; 
  public get oauthToken() {
    return this.getStringAttribute('oauth_token');
  }
  public set oauthToken(value: string) {
    this._oauthToken = value;
  }
  public resetOauthToken() {
    this._oauthToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthTokenInput() {
    return this._oauthToken;
  }

  // oauth_token_id - computed: true, optional: false, required: false
  public get oauthTokenId() {
    return this.getStringAttribute('oauth_token_id');
  }

  // organization - computed: false, optional: false, required: true
  private _organization?: string; 
  public get organization() {
    return this.getStringAttribute('organization');
  }
  public set organization(value: string) {
    this._organization = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization;
  }

  // private_key - computed: false, optional: true, required: false
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  public resetPrivateKey() {
    this._privateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // rsa_public_key - computed: false, optional: true, required: false
  private _rsaPublicKey?: string; 
  public get rsaPublicKey() {
    return this.getStringAttribute('rsa_public_key');
  }
  public set rsaPublicKey(value: string) {
    this._rsaPublicKey = value;
  }
  public resetRsaPublicKey() {
    this._rsaPublicKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rsaPublicKeyInput() {
    return this._rsaPublicKey;
  }

  // secret - computed: false, optional: true, required: false
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }

  // service_provider - computed: false, optional: false, required: true
  private _serviceProvider?: string; 
  public get serviceProvider() {
    return this.getStringAttribute('service_provider');
  }
  public set serviceProvider(value: string) {
    this._serviceProvider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceProviderInput() {
    return this._serviceProvider;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_url: cdktf.stringToTerraform(this._apiUrl),
      http_url: cdktf.stringToTerraform(this._httpUrl),
      id: cdktf.stringToTerraform(this._id),
      key: cdktf.stringToTerraform(this._key),
      name: cdktf.stringToTerraform(this._name),
      oauth_token: cdktf.stringToTerraform(this._oauthToken),
      organization: cdktf.stringToTerraform(this._organization),
      private_key: cdktf.stringToTerraform(this._privateKey),
      rsa_public_key: cdktf.stringToTerraform(this._rsaPublicKey),
      secret: cdktf.stringToTerraform(this._secret),
      service_provider: cdktf.stringToTerraform(this._serviceProvider),
    };
  }
}
