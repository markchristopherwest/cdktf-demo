// https://www.terraform.io/docs/providers/tfe/d/outputs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTfeOutputsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The organization to fetch the remote state from.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/d/outputs#organization DataTfeOutputs#organization}
  */
  readonly organization: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/d/outputs#values DataTfeOutputs#values}
  */
  readonly values?: { [key: string]: any };
  /**
  * The workspace to fetch the remote state from.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/d/outputs#workspace DataTfeOutputs#workspace}
  */
  readonly workspace: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/tfe/d/outputs tfe_outputs}
*/
export class DataTfeOutputs extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tfe_outputs";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/tfe/d/outputs tfe_outputs} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTfeOutputsConfig
  */
  public constructor(scope: Construct, id: string, config: DataTfeOutputsConfig) {
    super(scope, id, {
      terraformResourceType: 'tfe_outputs',
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
    this._organization = config.organization;
    this._values = config.values;
    this._workspace = config.workspace;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // values - computed: true, optional: true, required: false
  private _values?: { [key: string]: any }; 
  public get values() {
    return this.getAnyMapAttribute('values');
  }
  public set values(value: { [key: string]: any }) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }

  // workspace - computed: false, optional: false, required: true
  private _workspace?: string; 
  public get workspace() {
    return this.getStringAttribute('workspace');
  }
  public set workspace(value: string) {
    this._workspace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceInput() {
    return this._workspace;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      organization: cdktf.stringToTerraform(this._organization),
      values: cdktf.hashMapper(cdktf.anyToTerraform)(this._values),
      workspace: cdktf.stringToTerraform(this._workspace),
    };
  }
}
