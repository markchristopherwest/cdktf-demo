// https://www.terraform.io/docs/providers/tfe/r/organization_module_sharing
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrganizationModuleSharingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/organization_module_sharing#id OrganizationModuleSharing#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/organization_module_sharing#module_consumers OrganizationModuleSharing#module_consumers}
  */
  readonly moduleConsumers: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/organization_module_sharing#organization OrganizationModuleSharing#organization}
  */
  readonly organization: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/tfe/r/organization_module_sharing tfe_organization_module_sharing}
*/
export class OrganizationModuleSharing extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tfe_organization_module_sharing";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/tfe/r/organization_module_sharing tfe_organization_module_sharing} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrganizationModuleSharingConfig
  */
  public constructor(scope: Construct, id: string, config: OrganizationModuleSharingConfig) {
    super(scope, id, {
      terraformResourceType: 'tfe_organization_module_sharing',
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
    this._moduleConsumers = config.moduleConsumers;
    this._organization = config.organization;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // module_consumers - computed: false, optional: false, required: true
  private _moduleConsumers?: string[]; 
  public get moduleConsumers() {
    return this.getListAttribute('module_consumers');
  }
  public set moduleConsumers(value: string[]) {
    this._moduleConsumers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get moduleConsumersInput() {
    return this._moduleConsumers;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      module_consumers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._moduleConsumers),
      organization: cdktf.stringToTerraform(this._organization),
    };
  }
}
