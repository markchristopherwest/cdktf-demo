// https://www.terraform.io/docs/providers/tfe/r/registry_module
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RegistryModuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/registry_module#id RegistryModule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/registry_module#module_provider RegistryModule#module_provider}
  */
  readonly moduleProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/registry_module#name RegistryModule#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/registry_module#namespace RegistryModule#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/registry_module#organization RegistryModule#organization}
  */
  readonly organization?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/registry_module#registry_name RegistryModule#registry_name}
  */
  readonly registryName?: string;
  /**
  * vcs_repo block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/registry_module#vcs_repo RegistryModule#vcs_repo}
  */
  readonly vcsRepo?: RegistryModuleVcsRepo;
}
export interface RegistryModuleVcsRepo {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/registry_module#display_identifier RegistryModule#display_identifier}
  */
  readonly displayIdentifier: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/registry_module#identifier RegistryModule#identifier}
  */
  readonly identifier: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/registry_module#oauth_token_id RegistryModule#oauth_token_id}
  */
  readonly oauthTokenId: string;
}

export function registryModuleVcsRepoToTerraform(struct?: RegistryModuleVcsRepoOutputReference | RegistryModuleVcsRepo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_identifier: cdktf.stringToTerraform(struct!.displayIdentifier),
    identifier: cdktf.stringToTerraform(struct!.identifier),
    oauth_token_id: cdktf.stringToTerraform(struct!.oauthTokenId),
  }
}

export class RegistryModuleVcsRepoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RegistryModuleVcsRepo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayIdentifier = this._displayIdentifier;
    }
    if (this._identifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.identifier = this._identifier;
    }
    if (this._oauthTokenId !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauthTokenId = this._oauthTokenId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RegistryModuleVcsRepo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._displayIdentifier = undefined;
      this._identifier = undefined;
      this._oauthTokenId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._displayIdentifier = value.displayIdentifier;
      this._identifier = value.identifier;
      this._oauthTokenId = value.oauthTokenId;
    }
  }

  // display_identifier - computed: false, optional: false, required: true
  private _displayIdentifier?: string; 
  public get displayIdentifier() {
    return this.getStringAttribute('display_identifier');
  }
  public set displayIdentifier(value: string) {
    this._displayIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayIdentifierInput() {
    return this._displayIdentifier;
  }

  // identifier - computed: false, optional: false, required: true
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
  }

  // oauth_token_id - computed: false, optional: false, required: true
  private _oauthTokenId?: string; 
  public get oauthTokenId() {
    return this.getStringAttribute('oauth_token_id');
  }
  public set oauthTokenId(value: string) {
    this._oauthTokenId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthTokenIdInput() {
    return this._oauthTokenId;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/tfe/r/registry_module tfe_registry_module}
*/
export class RegistryModule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tfe_registry_module";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/tfe/r/registry_module tfe_registry_module} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RegistryModuleConfig = {}
  */
  public constructor(scope: Construct, id: string, config: RegistryModuleConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tfe_registry_module',
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
    this._moduleProvider = config.moduleProvider;
    this._name = config.name;
    this._namespace = config.namespace;
    this._organization = config.organization;
    this._registryName = config.registryName;
    this._vcsRepo.internalValue = config.vcsRepo;
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

  // module_provider - computed: true, optional: true, required: false
  private _moduleProvider?: string; 
  public get moduleProvider() {
    return this.getStringAttribute('module_provider');
  }
  public set moduleProvider(value: string) {
    this._moduleProvider = value;
  }
  public resetModuleProvider() {
    this._moduleProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moduleProviderInput() {
    return this._moduleProvider;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: true, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // organization - computed: true, optional: true, required: false
  private _organization?: string; 
  public get organization() {
    return this.getStringAttribute('organization');
  }
  public set organization(value: string) {
    this._organization = value;
  }
  public resetOrganization() {
    this._organization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization;
  }

  // registry_name - computed: true, optional: true, required: false
  private _registryName?: string; 
  public get registryName() {
    return this.getStringAttribute('registry_name');
  }
  public set registryName(value: string) {
    this._registryName = value;
  }
  public resetRegistryName() {
    this._registryName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryNameInput() {
    return this._registryName;
  }

  // vcs_repo - computed: false, optional: true, required: false
  private _vcsRepo = new RegistryModuleVcsRepoOutputReference(this, "vcs_repo");
  public get vcsRepo() {
    return this._vcsRepo;
  }
  public putVcsRepo(value: RegistryModuleVcsRepo) {
    this._vcsRepo.internalValue = value;
  }
  public resetVcsRepo() {
    this._vcsRepo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vcsRepoInput() {
    return this._vcsRepo.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      module_provider: cdktf.stringToTerraform(this._moduleProvider),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      organization: cdktf.stringToTerraform(this._organization),
      registry_name: cdktf.stringToTerraform(this._registryName),
      vcs_repo: registryModuleVcsRepoToTerraform(this._vcsRepo.internalValue),
    };
  }
}
