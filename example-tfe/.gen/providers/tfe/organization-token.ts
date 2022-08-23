// https://www.terraform.io/docs/providers/tfe/r/organization_token
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrganizationTokenConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/organization_token#force_regenerate OrganizationToken#force_regenerate}
  */
  readonly forceRegenerate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/organization_token#id OrganizationToken#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/organization_token#organization OrganizationToken#organization}
  */
  readonly organization: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/tfe/r/organization_token tfe_organization_token}
*/
export class OrganizationToken extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tfe_organization_token";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/tfe/r/organization_token tfe_organization_token} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrganizationTokenConfig
  */
  public constructor(scope: Construct, id: string, config: OrganizationTokenConfig) {
    super(scope, id, {
      terraformResourceType: 'tfe_organization_token',
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
    this._forceRegenerate = config.forceRegenerate;
    this._id = config.id;
    this._organization = config.organization;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // force_regenerate - computed: false, optional: true, required: false
  private _forceRegenerate?: boolean | cdktf.IResolvable; 
  public get forceRegenerate() {
    return this.getBooleanAttribute('force_regenerate');
  }
  public set forceRegenerate(value: boolean | cdktf.IResolvable) {
    this._forceRegenerate = value;
  }
  public resetForceRegenerate() {
    this._forceRegenerate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceRegenerateInput() {
    return this._forceRegenerate;
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

  // token - computed: true, optional: false, required: false
  public get token() {
    return this.getStringAttribute('token');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      force_regenerate: cdktf.booleanToTerraform(this._forceRegenerate),
      id: cdktf.stringToTerraform(this._id),
      organization: cdktf.stringToTerraform(this._organization),
    };
  }
}
