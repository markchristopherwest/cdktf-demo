// https://www.terraform.io/docs/providers/tfe/r/policy_set_parameter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicySetParameterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/policy_set_parameter#id PolicySetParameter#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/policy_set_parameter#key PolicySetParameter#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/policy_set_parameter#policy_set_id PolicySetParameter#policy_set_id}
  */
  readonly policySetId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/policy_set_parameter#sensitive PolicySetParameter#sensitive}
  */
  readonly sensitive?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/policy_set_parameter#value PolicySetParameter#value}
  */
  readonly value?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/tfe/r/policy_set_parameter tfe_policy_set_parameter}
*/
export class PolicySetParameter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tfe_policy_set_parameter";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/tfe/r/policy_set_parameter tfe_policy_set_parameter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicySetParameterConfig
  */
  public constructor(scope: Construct, id: string, config: PolicySetParameterConfig) {
    super(scope, id, {
      terraformResourceType: 'tfe_policy_set_parameter',
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
    this._key = config.key;
    this._policySetId = config.policySetId;
    this._sensitive = config.sensitive;
    this._value = config.value;
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

  // policy_set_id - computed: false, optional: false, required: true
  private _policySetId?: string; 
  public get policySetId() {
    return this.getStringAttribute('policy_set_id');
  }
  public set policySetId(value: string) {
    this._policySetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policySetIdInput() {
    return this._policySetId;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      key: cdktf.stringToTerraform(this._key),
      policy_set_id: cdktf.stringToTerraform(this._policySetId),
      sensitive: cdktf.booleanToTerraform(this._sensitive),
      value: cdktf.stringToTerraform(this._value),
    };
  }
}
