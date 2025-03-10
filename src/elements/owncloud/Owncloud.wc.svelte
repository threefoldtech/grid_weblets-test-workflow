<svelte:options tag="tf-owncloud" />

<script lang="ts">
  // Types
  import { IFormField, IPackage, ITab, SelectCapacityUpdate } from "../../types";
  import type { IProfile } from "../../types/Profile";
  import { Disk, Env } from "../../types/vm";
  import Owncloud from "../../types/owncloud";
  // Modules
  import deployOwncloud from "../../utils/deployOwncloud";
  // Components
  import SelectProfile from "../../components/SelectProfile.svelte";
  import Input from "../../components/Input.svelte";
  import Tabs from "../../components/Tabs.svelte";
  import SelectNodeId from "../../components/SelectNodeId.svelte";
  import DeployBtn from "../../components/DeployBtn.svelte";
  import Alert from "../../components/Alert.svelte";
  import Modal from "../../components/DeploymentModal.svelte";
  import hasEnoughBalance from "../../utils/hasEnoughBalance";
  import validateName, {
    isInvalid,
    validateRequiredPassword,
    validateRequiredEmail,
    validateRequiredPortNumber,
  } from "../../utils/validateName";
  import { validateRequiredHostName } from "../../utils/validateDomainName";

  import { noActiveProfile } from "../../utils/message";
  import SelectCapacity from "../../components/SelectCapacity.svelte";
  import type { GatewayNodes } from "../../utils/gatewayHelpers";
  import SelectGatewayNode from "../../components/SelectGatewayNode.svelte";
  import { display } from "../../utils/display";

  let data = new Owncloud();
  let gateway: GatewayNodes;
  let invalid = true;
  let editable: boolean;
  data.disks = [new Disk()];
  let profile: IProfile;
  let active = "base";
  let loading = false;
  let success = false;
  let failed = false;

  const tabs: ITab[] = [
    { label: "Base", value: "base" },
    { label: "Mail Server", value: "mail" },
  ];

  // define this solution packages
  const packages: IPackage[] = [
    { name: "Minimum", cpu: 2, memory: 1024 * 16, diskSize: 250 },
    { name: "Standard", cpu: 2, memory: 1024 * 16, diskSize: 500 },
    { name: "Recommended", cpu: 4, memory: 1024 * 16, diskSize: 1000 },
  ];
  let selectCapacity = new SelectCapacityUpdate();

  const nameField: IFormField = { label: "Name", placeholder: "Owncloud Instance Name", symbol: "name", type: "text", validator: validateName, invalid: false }; // prettier-ignore

  let adminFields: IFormField[] = [
    {
      label: "Username",
      symbol: "adminUsername",
      placeholder: "Admin Username",
      type: "text",
      validator: validateName,
      invalid: false,
    },
    {
      label: "Password",
      symbol: "adminPassword",
      placeholder: "Admin Password",
      type: "password",
      validator: validateRequiredPassword,
      invalid: false,
    },
  ];

  let mailFields: IFormField[] = [
    {
      label: "From Email Address",
      symbol: "smtpFromEmail",
      placeholder: "support@example.com",
      type: "text",
      validator: validateRequiredEmail,
      invalid: true,
    },
    {
      label: "Port",
      symbol: "smtpPort",
      placeholder: "587",
      type: "text",
      validator: validateRequiredPortNumber,
      invalid: true,
    },
    {
      label: "Host Name",
      symbol: "smtpHost",
      placeholder: "smtp.example.com",
      type: "text",
      validator: validateRequiredHostName,
      invalid: true,
    },
    {
      label: "Username",
      symbol: "smtpHostUser",
      placeholder: "user@example.com",
      type: "text",
      validator: validateRequiredEmail,
      invalid: true,
    },
    {
      label: "Password",
      symbol: "smtpHostPassword",
      placeholder: "password",
      type: "password",
      validator: validateRequiredPassword,
      invalid: true,
    },
    { label: "Use TLS", symbol: "smtpUseTLS", type: "checkbox" },
    { label: "Use SSL", symbol: "smtpUseSSL", type: "checkbox" },
  ];

  let message: string;
  let modalData: object;
  let status: "valid" | "invalid";

  const deploymentStore = window.configs?.deploymentStore;

  $: disabled = 
  editable && isInvalid([...mailFields]) ||
  ((loading || !data.valid) && !(success || failed)) || 
  invalid || 
  !profile || 
  status !== "valid" || 
  isInvalid([...adminFields, nameField]); // prettier-ignore
  const currentDeployment = window.configs?.currentDeploymentStore;

  async function onDeployVM() {
    loading = true;
    success = false;
    failed = false;
    message = undefined;

    if (!hasEnoughBalance()) {
      failed = true;
      loading = false;
      message = "No enough balance to execute! Transaction requires 2 TFT at least in your wallet.";
      return;
    }
    deployOwncloud(data, profile, gateway)
      .then(data => {
        deploymentStore.set(0);
        success = true;
        modalData = data.deploymentInfo;
      })
      .catch((err: Error) => {
        failed = true;
        message = typeof err === "string" ? err : err.message;
      })
      .finally(() => {
        loading = false;
      });
  }

  $: logs = $currentDeployment;
</script>

<SelectProfile
  on:profile={({ detail }) => {
    profile = detail;
    if (detail) {
      data.envs[0] = new Env(undefined, "SSH_KEY", detail?.sshKey);
    }
  }}
/>

<div style="padding: 15px;">
  <form on:submit|preventDefault={onDeployVM} class="box">
    <h4 class="is-size-4">Deploy an Owncloud Instance</h4>
    <p>
      Owncloud develops and provides open-source software for content collaboration, allowing teams to easily share and
      work on files seamlessly regardless of device or location.
      <a target="_blank" href="https://library.threefold.me/info/manual/#/manual__weblets_owncloud">
        Quick start documentation</a
      >
    </p>
    <hr />

    {#if loading || (logs !== null && logs.type === "VM")}
      <Alert type="info" message={logs?.message ?? "Loading..."} />
    {:else if !profile}
      <Alert type="info" message={noActiveProfile} />
    {:else if success}
      <Alert type="success" message="Successfully deployed owncloud." deployed={true} />
    {:else if failed}
      <Alert type="danger" message={message || "Failed to deploy owncloud."} />
    {:else}
      <Tabs bind:active {tabs} />

      <section style={display(active, "base")}>
        <Input bind:data={data.name} bind:invalid={nameField.invalid} field={nameField} />

        {#each adminFields as field (field.symbol)}
          {#if field.invalid !== undefined}
            <Input bind:data={data[field.symbol]} bind:invalid={field.invalid} {field} />
          {:else}
            <Input bind:data={data[field.symbol]} {field} />
          {/if}
        {/each}

        <SelectCapacity
          {packages}
          selectedPackage={selectCapacity.selectedPackage}
          cpu={data.cpu}
          memory={data.memory}
          diskSize={data.disks[0].size}
          on:update={({ detail }) => {
            selectCapacity = detail;
            if (!detail.invalid) {
              const { cpu, memory, diskSize } = detail.package;
              data.cpu = cpu;
              data.memory = memory;
              data.disks[0].size = diskSize;
            }
          }}
        />
        <SelectGatewayNode bind:gateway bind:invalid />

        <SelectNodeId
          publicIp={data.publicIp}
          cpu={data.cpu}
          memory={data.memory}
          ssd={data.disks.reduce((total, disk) => total + disk.size, 0)}
          bind:nodeSelection={data.selection.type}
          bind:data={data.nodeId}
          filters={data.selection.filters}
          bind:status
          {profile}
          on:fetch={({ detail }) => (data.selection.nodes = detail)}
          nodes={data.selection.nodes}
        />
      </section>

      <section style={display(active, "mail")}>
        <div class="notification is-warning is-light">
          <p>configure these settings only If you have an smtp service and you know what you’re doing.</p>
        </div>
        <div class="is-flex is-justify-content-flex-end">
          <div style="display: inline-block;">
            <Input
              bind:data={editable}
              field={{
                label: "",
                symbol: "editable",
                type: "checkbox",
              }}
            />
          </div>
        </div>
        {#each mailFields as field (field.symbol)}
          {#if field.invalid !== undefined}
            <Input
              bind:data={data[field.symbol]}
              bind:invalid={field.invalid}
              field={{ ...field, disabled: !editable }}
            />
          {:else}
            <Input bind:data={data[field.symbol]} field={{ ...field, disabled: !editable }} />
          {/if}
        {/each}
      </section>
    {/if}

    <DeployBtn
      {disabled}
      {loading}
      {failed}
      {success}
      on:click={e => {
        if (success || failed) {
          e.preventDefault();
          success = false;
          failed = false;
          loading = false;
        }
      }}
    />
  </form>
</div>
{#if modalData}
  <Modal data={modalData} on:closed={() => (modalData = null)} />
{/if}

<style lang="scss" scoped>
  @import url("https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css");
</style>
