// https://www.terraform.io/docs/providers/tfe/r/variable
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VariableConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/variable#category Variable#category}
  */
  readonly category: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/variable#description Variable#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/variable#hcl Variable#hcl}
  */
  readonly hcl?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/variable#id Variable#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/variable#key Variable#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/variable#sensitive Variable#sensitive}
  */
  readonly sensitive?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/variable#value Variable#value}
  */
  readonly value?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/variable#variable_set_id Variable#variable_set_id}
  */
  readonly variableSetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/variable#workspace_id Variable#workspace_id}
  */
  readonly workspaceId?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/tfe/r/variable tfe_variable}
*/
export class Variable extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tfe_variable";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/tfe/r/variable tfe_variable} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VariableConfig
  */
  public constructor(scope: Construct, id: string, config: VariableConfig) {
    super(scope, id, {
      terraformResourceType: 'tfe_variable',
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
    this._category = config.category;
    this._description = config.description;
    this._hcl = config.hcl;
    this._id = config.id;
    this._key = config.key;
    this._sensitive = config.sensitive;
    this._value = config.value;
    this._variableSetId = config.variableSetId;
    this._workspaceId = config.workspaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // category - computed: false, optional: false, required: true
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

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

  // hcl - computed: false, optional: true, required: false
  private _hcl?: boolean | cdktf.IResolvable; 
  public get hcl() {
    return this.getBooleanAttribute('hcl');
  }
  public set hcl(value: boolean | cdktf.IResolvable) {
    this._hcl = value;
  }
  public resetHcl() {
    this._hcl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hclInput() {
    return this._hcl;
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

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // sensitive - computed: false, optional: true, required: false
  private _sensitive?: boolean | cdktf.IResolvable; 
  public get sensitive() {
    return this.getBooleanAttribute('sensitive');
  }
  public set sensitive(value: boolean | cdktf.IResolvable) {
    this._sensitive = value;
  }
  public resetSensitive() {
    this._sensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveInput() {
    return this._sensitive;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // variable_set_id - computed: false, optional: true, required: false
  private _variableSetId?: string; 
  public get variableSetId() {
    return this.getStringAttribute('variable_set_id');
  }
  public set variableSetId(value: string) {
    this._variableSetId = value;
  }
  public resetVariableSetId() {
    this._variableSetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variableSetIdInput() {
    return this._variableSetId;
  }

  // workspace_id - computed: false, optional: true, required: false
  private _workspaceId?: string; 
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
  }
  public resetWorkspaceId() {
    this._workspaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      category: cdktf.stringToTerraform(this._category),
      description: cdktf.stringToTerraform(this._description),
      hcl: cdktf.booleanToTerraform(this._hcl),
      id: cdktf.stringToTerraform(this._id),
      key: cdktf.stringToTerraform(this._key),
      sensitive: cdktf.booleanToTerraform(this._sensitive),
      value: cdktf.stringToTerraform(this._value),
      variable_set_id: cdktf.stringToTerraform(this._variableSetId),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
    };
  }
}
