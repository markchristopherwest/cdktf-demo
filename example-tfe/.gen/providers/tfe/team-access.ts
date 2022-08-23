// https://www.terraform.io/docs/providers/tfe/r/team_access
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TeamAccessConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/team_access#access TeamAccess#access}
  */
  readonly access?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/team_access#id TeamAccess#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/team_access#team_id TeamAccess#team_id}
  */
  readonly teamId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/team_access#workspace_id TeamAccess#workspace_id}
  */
  readonly workspaceId: string;
  /**
  * permissions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/team_access#permissions TeamAccess#permissions}
  */
  readonly permissions?: TeamAccessPermissions[] | cdktf.IResolvable;
}
export interface TeamAccessPermissions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/team_access#run_tasks TeamAccess#run_tasks}
  */
  readonly runTasks: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/team_access#runs TeamAccess#runs}
  */
  readonly runs: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/team_access#sentinel_mocks TeamAccess#sentinel_mocks}
  */
  readonly sentinelMocks: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/team_access#state_versions TeamAccess#state_versions}
  */
  readonly stateVersions: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/team_access#variables TeamAccess#variables}
  */
  readonly variables: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/team_access#workspace_locking TeamAccess#workspace_locking}
  */
  readonly workspaceLocking: boolean | cdktf.IResolvable;
}

export function teamAccessPermissionsToTerraform(struct?: TeamAccessPermissions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    run_tasks: cdktf.booleanToTerraform(struct!.runTasks),
    runs: cdktf.stringToTerraform(struct!.runs),
    sentinel_mocks: cdktf.stringToTerraform(struct!.sentinelMocks),
    state_versions: cdktf.stringToTerraform(struct!.stateVersions),
    variables: cdktf.stringToTerraform(struct!.variables),
    workspace_locking: cdktf.booleanToTerraform(struct!.workspaceLocking),
  }
}

export class TeamAccessPermissionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): TeamAccessPermissions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._runTasks !== undefined) {
      hasAnyValues = true;
      internalValueResult.runTasks = this._runTasks;
    }
    if (this._runs !== undefined) {
      hasAnyValues = true;
      internalValueResult.runs = this._runs;
    }
    if (this._sentinelMocks !== undefined) {
      hasAnyValues = true;
      internalValueResult.sentinelMocks = this._sentinelMocks;
    }
    if (this._stateVersions !== undefined) {
      hasAnyValues = true;
      internalValueResult.stateVersions = this._stateVersions;
    }
    if (this._variables !== undefined) {
      hasAnyValues = true;
      internalValueResult.variables = this._variables;
    }
    if (this._workspaceLocking !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceLocking = this._workspaceLocking;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeamAccessPermissions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._runTasks = undefined;
      this._runs = undefined;
      this._sentinelMocks = undefined;
      this._stateVersions = undefined;
      this._variables = undefined;
      this._workspaceLocking = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._runTasks = value.runTasks;
      this._runs = value.runs;
      this._sentinelMocks = value.sentinelMocks;
      this._stateVersions = value.stateVersions;
      this._variables = value.variables;
      this._workspaceLocking = value.workspaceLocking;
    }
  }

  // run_tasks - computed: false, optional: false, required: true
  private _runTasks?: boolean | cdktf.IResolvable; 
  public get runTasks() {
    return this.getBooleanAttribute('run_tasks');
  }
  public set runTasks(value: boolean | cdktf.IResolvable) {
    this._runTasks = value;
  }
  // Temporarily expose input value. Use with caution.
  public get runTasksInput() {
    return this._runTasks;
  }

  // runs - computed: false, optional: false, required: true
  private _runs?: string; 
  public get runs() {
    return this.getStringAttribute('runs');
  }
  public set runs(value: string) {
    this._runs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get runsInput() {
    return this._runs;
  }

  // sentinel_mocks - computed: false, optional: false, required: true
  private _sentinelMocks?: string; 
  public get sentinelMocks() {
    return this.getStringAttribute('sentinel_mocks');
  }
  public set sentinelMocks(value: string) {
    this._sentinelMocks = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sentinelMocksInput() {
    return this._sentinelMocks;
  }

  // state_versions - computed: false, optional: false, required: true
  private _stateVersions?: string; 
  public get stateVersions() {
    return this.getStringAttribute('state_versions');
  }
  public set stateVersions(value: string) {
    this._stateVersions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stateVersionsInput() {
    return this._stateVersions;
  }

  // variables - computed: false, optional: false, required: true
  private _variables?: string; 
  public get variables() {
    return this.getStringAttribute('variables');
  }
  public set variables(value: string) {
    this._variables = value;
  }
  // Temporarily expose input value. Use with caution.
  public get variablesInput() {
    return this._variables;
  }

  // workspace_locking - computed: false, optional: false, required: true
  private _workspaceLocking?: boolean | cdktf.IResolvable; 
  public get workspaceLocking() {
    return this.getBooleanAttribute('workspace_locking');
  }
  public set workspaceLocking(value: boolean | cdktf.IResolvable) {
    this._workspaceLocking = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceLockingInput() {
    return this._workspaceLocking;
  }
}

export class TeamAccessPermissionsList extends cdktf.ComplexList {
  public internalValue? : TeamAccessPermissions[] | cdktf.IResolvable

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
  public get(index: number): TeamAccessPermissionsOutputReference {
    return new TeamAccessPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/tfe/r/team_access tfe_team_access}
*/
export class TeamAccess extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tfe_team_access";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/tfe/r/team_access tfe_team_access} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TeamAccessConfig
  */
  public constructor(scope: Construct, id: string, config: TeamAccessConfig) {
    super(scope, id, {
      terraformResourceType: 'tfe_team_access',
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
    this._access = config.access;
    this._id = config.id;
    this._teamId = config.teamId;
    this._workspaceId = config.workspaceId;
    this._permissions.internalValue = config.permissions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access - computed: true, optional: true, required: false
  private _access?: string; 
  public get access() {
    return this.getStringAttribute('access');
  }
  public set access(value: string) {
    this._access = value;
  }
  public resetAccess() {
    this._access = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessInput() {
    return this._access;
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

  // team_id - computed: false, optional: false, required: true
  private _teamId?: string; 
  public get teamId() {
    return this.getStringAttribute('team_id');
  }
  public set teamId(value: string) {
    this._teamId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get teamIdInput() {
    return this._teamId;
  }

  // workspace_id - computed: false, optional: false, required: true
  private _workspaceId?: string; 
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId;
  }

  // permissions - computed: false, optional: true, required: false
  private _permissions = new TeamAccessPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }
  public putPermissions(value: TeamAccessPermissions[] | cdktf.IResolvable) {
    this._permissions.internalValue = value;
  }
  public resetPermissions() {
    this._permissions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access: cdktf.stringToTerraform(this._access),
      id: cdktf.stringToTerraform(this._id),
      team_id: cdktf.stringToTerraform(this._teamId),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
      permissions: cdktf.listMapper(teamAccessPermissionsToTerraform, true)(this._permissions.internalValue),
    };
  }
}
