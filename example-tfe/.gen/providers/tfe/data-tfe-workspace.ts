// https://www.terraform.io/docs/providers/tfe/d/workspace
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTfeWorkspaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/d/workspace#id DataTfeWorkspace#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/d/workspace#name DataTfeWorkspace#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/d/workspace#organization DataTfeWorkspace#organization}
  */
  readonly organization: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/d/workspace#tag_names DataTfeWorkspace#tag_names}
  */
  readonly tagNames?: string[];
}
export interface DataTfeWorkspaceVcsRepo {
}

export function dataTfeWorkspaceVcsRepoToTerraform(struct?: DataTfeWorkspaceVcsRepo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataTfeWorkspaceVcsRepoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTfeWorkspaceVcsRepo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTfeWorkspaceVcsRepo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // branch - computed: true, optional: false, required: false
  public get branch() {
    return this.getStringAttribute('branch');
  }

  // identifier - computed: true, optional: false, required: false
  public get identifier() {
    return this.getStringAttribute('identifier');
  }

  // ingress_submodules - computed: true, optional: false, required: false
  public get ingressSubmodules() {
    return this.getBooleanAttribute('ingress_submodules');
  }

  // oauth_token_id - computed: true, optional: false, required: false
  public get oauthTokenId() {
    return this.getStringAttribute('oauth_token_id');
  }

  // tags_regex - computed: true, optional: false, required: false
  public get tagsRegex() {
    return this.getStringAttribute('tags_regex');
  }
}

export class DataTfeWorkspaceVcsRepoList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataTfeWorkspaceVcsRepoOutputReference {
    return new DataTfeWorkspaceVcsRepoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/tfe/d/workspace tfe_workspace}
*/
export class DataTfeWorkspace extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tfe_workspace";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/tfe/d/workspace tfe_workspace} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTfeWorkspaceConfig
  */
  public constructor(scope: Construct, id: string, config: DataTfeWorkspaceConfig) {
    super(scope, id, {
      terraformResourceType: 'tfe_workspace',
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
    this._organization = config.organization;
    this._tagNames = config.tagNames;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_destroy_plan - computed: true, optional: false, required: false
  public get allowDestroyPlan() {
    return this.getBooleanAttribute('allow_destroy_plan');
  }

  // auto_apply - computed: true, optional: false, required: false
  public get autoApply() {
    return this.getBooleanAttribute('auto_apply');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // file_triggers_enabled - computed: true, optional: false, required: false
  public get fileTriggersEnabled() {
    return this.getBooleanAttribute('file_triggers_enabled');
  }

  // global_remote_state - computed: true, optional: false, required: false
  public get globalRemoteState() {
    return this.getBooleanAttribute('global_remote_state');
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

  // operations - computed: true, optional: false, required: false
  public get operations() {
    return this.getBooleanAttribute('operations');
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

  // policy_check_failures - computed: true, optional: false, required: false
  public get policyCheckFailures() {
    return this.getNumberAttribute('policy_check_failures');
  }

  // queue_all_runs - computed: true, optional: false, required: false
  public get queueAllRuns() {
    return this.getBooleanAttribute('queue_all_runs');
  }

  // remote_state_consumer_ids - computed: true, optional: false, required: false
  public get remoteStateConsumerIds() {
    return cdktf.Fn.tolist(this.getListAttribute('remote_state_consumer_ids'));
  }

  // resource_count - computed: true, optional: false, required: false
  public get resourceCount() {
    return this.getNumberAttribute('resource_count');
  }

  // run_failures - computed: true, optional: false, required: false
  public get runFailures() {
    return this.getNumberAttribute('run_failures');
  }

  // runs_count - computed: true, optional: false, required: false
  public get runsCount() {
    return this.getNumberAttribute('runs_count');
  }

  // speculative_enabled - computed: true, optional: false, required: false
  public get speculativeEnabled() {
    return this.getBooleanAttribute('speculative_enabled');
  }

  // ssh_key_id - computed: true, optional: false, required: false
  public get sshKeyId() {
    return this.getStringAttribute('ssh_key_id');
  }

  // structured_run_output_enabled - computed: true, optional: false, required: false
  public get structuredRunOutputEnabled() {
    return this.getBooleanAttribute('structured_run_output_enabled');
  }

  // tag_names - computed: true, optional: true, required: false
  private _tagNames?: string[]; 
  public get tagNames() {
    return cdktf.Fn.tolist(this.getListAttribute('tag_names'));
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

  // terraform_version - computed: true, optional: false, required: false
  public get terraformVersion() {
    return this.getStringAttribute('terraform_version');
  }

  // trigger_patterns - computed: true, optional: false, required: false
  public get triggerPatterns() {
    return this.getListAttribute('trigger_patterns');
  }

  // trigger_prefixes - computed: true, optional: false, required: false
  public get triggerPrefixes() {
    return this.getListAttribute('trigger_prefixes');
  }

  // vcs_repo - computed: true, optional: false, required: false
  private _vcsRepo = new DataTfeWorkspaceVcsRepoList(this, "vcs_repo", false);
  public get vcsRepo() {
    return this._vcsRepo;
  }

  // working_directory - computed: true, optional: false, required: false
  public get workingDirectory() {
    return this.getStringAttribute('working_directory');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      organization: cdktf.stringToTerraform(this._organization),
      tag_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tagNames),
    };
  }
}
