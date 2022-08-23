// https://www.terraform.io/docs/providers/tfe/d/organization
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTfeOrganizationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/d/organization#id DataTfeOrganization#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/d/organization#name DataTfeOrganization#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/tfe/d/organization tfe_organization}
*/
export class DataTfeOrganization extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tfe_organization";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/tfe/d/organization tfe_organization} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTfeOrganizationConfig
  */
  public constructor(scope: Construct, id: string, config: DataTfeOrganizationConfig) {
    super(scope, id, {
      terraformResourceType: 'tfe_organization',
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
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // collaborator_auth_policy - computed: true, optional: false, required: false
  public get collaboratorAuthPolicy() {
    return this.getStringAttribute('collaborator_auth_policy');
  }

  // cost_estimation_enabled - computed: true, optional: false, required: false
  public get costEstimationEnabled() {
    return this.getBooleanAttribute('cost_estimation_enabled');
  }

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getStringAttribute('email');
  }

  // external_id - computed: true, optional: false, required: false
  public get externalId() {
    return this.getStringAttribute('external_id');
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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // owners_team_saml_role_id - computed: true, optional: false, required: false
  public get ownersTeamSamlRoleId() {
    return this.getStringAttribute('owners_team_saml_role_id');
  }

  // send_passing_statuses_for_untriggered_speculative_plans - computed: true, optional: false, required: false
  public get sendPassingStatusesForUntriggeredSpeculativePlans() {
    return this.getBooleanAttribute('send_passing_statuses_for_untriggered_speculative_plans');
  }

  // two_factor_conformant - computed: true, optional: false, required: false
  public get twoFactorConformant() {
    return this.getBooleanAttribute('two_factor_conformant');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }
}
