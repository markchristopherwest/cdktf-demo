// https://www.terraform.io/docs/providers/tfe/r/variable_set
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VariableSetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/variable_set#description VariableSet#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/variable_set#global VariableSet#global}
  */
  readonly global?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/variable_set#id VariableSet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/variable_set#name VariableSet#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/variable_set#organization VariableSet#organization}
  */
  readonly organization: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/variable_set#workspace_ids VariableSet#workspace_ids}
  */
  readonly workspaceIds?: string[];
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/tfe/r/variable_set tfe_variable_set}
*/
export class VariableSet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tfe_variable_set";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/tfe/r/variable_set tfe_variable_set} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VariableSetConfig
  */
  public constructor(scope: Construct, id: string, config: VariableSetConfig) {
    super(scope, id, {
      terraformResourceType: 'tfe_variable_set',
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
    this._description = config.description;
    this._global = config.global;
    this._id = config.id;
    this._name = config.name;
    this._organization = config.organization;
    this._workspaceIds = config.workspaceIds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // global - computed: false, optional: true, required: false
  private _global?: boolean | cdktf.IResolvable; 
  public get global() {
    return this.getBooleanAttribute('global');
  }
  public set global(value: boolean | cdktf.IResolvable) {
    this._global = value;
  }
  public resetGlobal() {
    this._global = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalInput() {
    return this._global;
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

  // workspace_ids - computed: true, optional: true, required: false
  private _workspaceIds?: string[]; 
  public get workspaceIds() {
    return cdktf.Fn.tolist(this.getListAttribute('workspace_ids'));
  }
  public set workspaceIds(value: string[]) {
    this._workspaceIds = value;
  }
  public resetWorkspaceIds() {
    this._workspaceIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdsInput() {
    return this._workspaceIds;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      global: cdktf.booleanToTerraform(this._global),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      organization: cdktf.stringToTerraform(this._organization),
      workspace_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._workspaceIds),
    };
  }
}
