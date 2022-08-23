// https://www.terraform.io/docs/providers/tfe/d/ip_ranges
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTfeIpRangesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/d/ip_ranges#id DataTfeIpRanges#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/tfe/d/ip_ranges tfe_ip_ranges}
*/
export class DataTfeIpRanges extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tfe_ip_ranges";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/tfe/d/ip_ranges tfe_ip_ranges} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTfeIpRangesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataTfeIpRangesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tfe_ip_ranges',
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api - computed: true, optional: false, required: false
  public get api() {
    return this.getListAttribute('api');
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

  // notifications - computed: true, optional: false, required: false
  public get notifications() {
    return this.getListAttribute('notifications');
  }

  // sentinel - computed: true, optional: false, required: false
  public get sentinel() {
    return this.getListAttribute('sentinel');
  }

  // vcs - computed: true, optional: false, required: false
  public get vcs() {
    return this.getListAttribute('vcs');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
    };
  }
}
