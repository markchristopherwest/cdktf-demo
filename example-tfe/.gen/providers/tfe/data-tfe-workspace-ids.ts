// https://www.terraform.io/docs/providers/tfe/d/workspace_ids
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTfeWorkspaceIdsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/d/workspace_ids#exclude_tags DataTfeWorkspaceIds#exclude_tags}
  */
  readonly excludeTags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/d/workspace_ids#id DataTfeWorkspaceIds#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/d/workspace_ids#names DataTfeWorkspaceIds#names}
  */
  readonly names?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/d/workspace_ids#organization DataTfeWorkspaceIds#organization}
  */
  readonly organization: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/d/workspace_ids#tag_names DataTfeWorkspaceIds#tag_names}
  */
  readonly tagNames?: string[];
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/tfe/d/workspace_ids tfe_workspace_ids}
*/
export class DataTfeWorkspaceIds extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tfe_workspace_ids";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/tfe/d/workspace_ids tfe_workspace_ids} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTfeWorkspaceIdsConfig
  */
  public constructor(scope: Construct, id: string, config: DataTfeWorkspaceIdsConfig) {
    super(scope, id, {
      terraformResourceType: 'tfe_workspace_ids',
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
    this._excludeTags = config.excludeTags;
    this._id = config.id;
    this._names = config.names;
    this._organization = config.organization;
    this._tagNames = config.tagNames;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // exclude_tags - computed: false, optional: true, required: false
  private _excludeTags?: string[]; 
  public get excludeTags() {
    return cdktf.Fn.tolist(this.getListAttribute('exclude_tags'));
  }
  public set excludeTags(value: string[]) {
    this._excludeTags = value;
  }
  public resetExcludeTags() {
    this._excludeTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeTagsInput() {
    return this._excludeTags;
  }

  // full_names - computed: true, optional: false, required: false
  private _fullNames = new cdktf.StringMap(this, "full_names");
  public get fullNames() {
    return this._fullNames;
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

  // ids - computed: true, optional: false, required: false
  private _ids = new cdktf.StringMap(this, "ids");
  public get ids() {
    return this._ids;
  }

  // names - computed: false, optional: true, required: false
  private _names?: string[]; 
  public get names() {
    return this.getListAttribute('names');
  }
  public set names(value: string[]) {
    this._names = value;
  }
  public resetNames() {
    this._names = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namesInput() {
    return this._names;
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

  // tag_names - computed: false, optional: true, required: false
  private _tagNames?: string[]; 
  public get tagNames() {
    return this.getListAttribute('tag_names');
  }
  public set tagNames(value: string[]) {
    this._tagNames = value;
  }
  public resetTagNames() {
    this._tagNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagNamesInput() {
    return this._tagNames;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      exclude_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._excludeTags),
      id: cdktf.stringToTerraform(this._id),
      names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._names),
      organization: cdktf.stringToTerraform(this._organization),
      tag_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tagNames),
    };
  }
}
