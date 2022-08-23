// https://www.terraform.io/docs/providers/tfe/d/slug
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTfeSlugConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/d/slug#id DataTfeSlug#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/d/slug#source_path DataTfeSlug#source_path}
  */
  readonly sourcePath: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/tfe/d/slug tfe_slug}
*/
export class DataTfeSlug extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tfe_slug";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/tfe/d/slug tfe_slug} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTfeSlugConfig
  */
  public constructor(scope: Construct, id: string, config: DataTfeSlugConfig) {
    super(scope, id, {
      terraformResourceType: 'tfe_slug',
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
    this._sourcePath = config.sourcePath;
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

  // source_path - computed: false, optional: false, required: true
  private _sourcePath?: string; 
  public get sourcePath() {
    return this.getStringAttribute('source_path');
  }
  public set sourcePath(value: string) {
    this._sourcePath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePathInput() {
    return this._sourcePath;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      source_path: cdktf.stringToTerraform(this._sourcePath),
    };
  }
}
