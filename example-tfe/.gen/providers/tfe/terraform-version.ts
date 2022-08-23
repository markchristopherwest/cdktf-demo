// https://www.terraform.io/docs/providers/tfe/r/terraform_version
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TerraformVersionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/terraform_version#beta TerraformVersion#beta}
  */
  readonly beta?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/terraform_version#deprecated TerraformVersion#deprecated}
  */
  readonly deprecated?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/terraform_version#deprecated_reason TerraformVersion#deprecated_reason}
  */
  readonly deprecatedReason?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/terraform_version#enabled TerraformVersion#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/terraform_version#id TerraformVersion#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/terraform_version#official TerraformVersion#official}
  */
  readonly official?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/terraform_version#sha TerraformVersion#sha}
  */
  readonly sha: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/terraform_version#url TerraformVersion#url}
  */
  readonly url: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/terraform_version#version TerraformVersion#version}
  */
  readonly version: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/tfe/r/terraform_version tfe_terraform_version}
*/
export class TerraformVersion extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tfe_terraform_version";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/tfe/r/terraform_version tfe_terraform_version} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TerraformVersionConfig
  */
  public constructor(scope: Construct, id: string, config: TerraformVersionConfig) {
    super(scope, id, {
      terraformResourceType: 'tfe_terraform_version',
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
    this._beta = config.beta;
    this._deprecated = config.deprecated;
    this._deprecatedReason = config.deprecatedReason;
    this._enabled = config.enabled;
    this._id = config.id;
    this._official = config.official;
    this._sha = config.sha;
    this._url = config.url;
    this._version = config.version;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // beta - computed: false, optional: true, required: false
  private _beta?: boolean | cdktf.IResolvable; 
  public get beta() {
    return this.getBooleanAttribute('beta');
  }
  public set beta(value: boolean | cdktf.IResolvable) {
    this._beta = value;
  }
  public resetBeta() {
    this._beta = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get betaInput() {
    return this._beta;
  }

  // deprecated - computed: false, optional: true, required: false
  private _deprecated?: boolean | cdktf.IResolvable; 
  public get deprecated() {
    return this.getBooleanAttribute('deprecated');
  }
  public set deprecated(value: boolean | cdktf.IResolvable) {
    this._deprecated = value;
  }
  public resetDeprecated() {
    this._deprecated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deprecatedInput() {
    return this._deprecated;
  }

  // deprecated_reason - computed: false, optional: true, required: false
  private _deprecatedReason?: string; 
  public get deprecatedReason() {
    return this.getStringAttribute('deprecated_reason');
  }
  public set deprecatedReason(value: string) {
    this._deprecatedReason = value;
  }
  public resetDeprecatedReason() {
    this._deprecatedReason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deprecatedReasonInput() {
    return this._deprecatedReason;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // official - computed: false, optional: true, required: false
  private _official?: boolean | cdktf.IResolvable; 
  public get official() {
    return this.getBooleanAttribute('official');
  }
  public set official(value: boolean | cdktf.IResolvable) {
    this._official = value;
  }
  public resetOfficial() {
    this._official = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get officialInput() {
    return this._official;
  }

  // sha - computed: false, optional: false, required: true
  private _sha?: string; 
  public get sha() {
    return this.getStringAttribute('sha');
  }
  public set sha(value: string) {
    this._sha = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shaInput() {
    return this._sha;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      beta: cdktf.booleanToTerraform(this._beta),
      deprecated: cdktf.booleanToTerraform(this._deprecated),
      deprecated_reason: cdktf.stringToTerraform(this._deprecatedReason),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      official: cdktf.booleanToTerraform(this._official),
      sha: cdktf.stringToTerraform(this._sha),
      url: cdktf.stringToTerraform(this._url),
      version: cdktf.stringToTerraform(this._version),
    };
  }
}
