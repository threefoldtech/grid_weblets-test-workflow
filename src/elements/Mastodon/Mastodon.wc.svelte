<svelte:options tag="tf-mastodon" />

<script lang="ts">
  import DeployBtn from "../../components/DeployBtn.svelte";
  import Input from "../../components/Input.svelte";
  import SelectProfile from "../../components/SelectProfile.svelte";
  import { IFormField, IPackage, ITab, SelectCapacityUpdate } from "../../types";
  import type { IProfile } from "../../types/Profile";

  import Modal from "../../components/DeploymentModal.svelte";
  import Mastodon from "../../types/mastodon";
  import Alert from "../../components/Alert.svelte";
  import { noActiveProfile } from "../../utils/message";
  import SelectNodeId from "../../components/SelectNodeId.svelte";
  import deployMastodon from "../../utils/deployMastodon";
  import validateName, {
    isInvalid,
    validateRequiredEmail,
    validateRequiredPortNumber,
    validateRequiredPassword,
    validateMastodonAdminEmail,
    validateMastodonAdminUsername,
  } from "../../utils/validateName";
  import { validateRequiredHostName } from "../../utils/validateDomainName";
  import SelectCapacity from "../../components/SelectCapacity.svelte";
  import rootFs from "../../utils/rootFs";
  import Tabs from "../../components/Tabs.svelte";
  import type { GatewayNodes } from "../../utils/gatewayHelpers";
  import SelectGatewayNode from "../../components/SelectGatewayNode.svelte";

  const currentDeployment = window.configs?.currentDeploymentStore;
  const deploymentStore = window.configs?.deploymentStore;
  const data = new Mastodon();
  // const validator = (x: string) => x.trim().length === 0 ? "Value can't be empty." : null; // prettier-ignore
  let gateway: GatewayNodes;
  let invalid = true;
  let editable = false;

  const tabs: ITab[] = [
    { label: "Base", value: "base" },
    { label: "Admin Credentials", value: "admin_credentials" },
    { label: "SMTP Server", value: "smtp" },
  ];
  let active = "base";

  // prettier-ignore
  const baseFields: IFormField[] = [
    { label: "Name", symbol: "name", type: "text", placeholder: "Mastodon Instance Name", validator: validateName, invalid: false },
  ];

  const smtpFields: IFormField[] = [
    {
      label: "SMTP Email",
      symbol: "email",
      type: "text",
      placeholder: "SMTP Email",
      validator: validateRequiredEmail,
      invalid: false,
    },
    {
      label: "SMTP Password",
      symbol: "smtpPassword",
      type: "password",
      validator: validateRequiredPassword,
      placeholder: "SMTP Password",
      invalid: false,
    },
    {
      label: "SMTP Server",
      symbol: "server",
      type: "text",
      placeholder: "SMTP server",
      validator: validateRequiredHostName,
      invalid: false,
    },
    {
      label: "SMTP Port",
      symbol: "port",
      type: "text",
      placeholder: "SMTP Port",
      validator: validateRequiredPortNumber,
      invalid: false,
    },
  ];

  const adminFields: IFormField[] = [
    {
      label: "Admin Email",
      symbol: "adminEmail",
      type: "text",
      placeholder: "Admin Email",
      validator: validateMastodonAdminEmail,
      invalid: false,
    },
    {
      label: "Admin Username",
      symbol: "adminUsername",
      type: "text",
      placeholder: "Admin Username",
      validator: validateMastodonAdminUsername,
      invalid: false,
    },
    {
      label: "Admin Password",
      symbol: "adminPassword",
      type: "password",
      placeholder: "Admin Password",
      validator: validateRequiredPassword,
      invalid: false,
    },
    {
      label: "Login via Threefold connect",
      symbol: "tfConnect",
      invalid: false,
      type: "checkbox",
    },
  ];

  // define this solution packages
  const packages: IPackage[] = [
    { name: "Minimum", cpu: 1, memory: 1024 * 2, diskSize: 10 },
    { name: "Standard", cpu: 2, memory: 1024 * 4, diskSize: 50 },
    { name: "Recommended", cpu: 4, memory: 1024 * 4, diskSize: 100 },
  ];
  let selectCapacity = new SelectCapacityUpdate();

  let profile: IProfile;
  let loading = false;
  let failed = false;
  let success = false;
  let message: string;

  let modalData: object;

  $: disabled =
    (editable && isInvalid([...smtpFields])) ||
    invalid ||
    data.invalid ||
    data.status !== "valid" ||
    selectCapacity.invalid ||
    isInvalid([...adminFields]) ||
    isInvalid([...baseFields]);

  function onDeployMastodon() {
    loading = true;
    deployMastodon(profile, data, gateway)
      .then(data => {
        modalData = data;
        deploymentStore.set(0);
        success = true;
      })
      .catch(err => {
        console.log("Error", err);
        failed = true;
        message = err.message || err;
      })
      .finally(() => {
        loading = false;
      });
  }

  $: logs = $currentDeployment;
</script>

<SelectProfile on:profile={({ detail }) => (profile = detail)} />

<div style="padding: 15px;">
  <form class="box" on:submit|preventDefault={onDeployMastodon}>
    <h4 class="is-size-4">Deploy a Mastodon Instance</h4>
    <p>
      Mastodon is free and open-source software for running self-hosted social networking services. It has microblogging
      features similar to the Twitter service, which are offered by a large number of independently run nodes, known as
      instances, each with its own code of conduct, terms of service, privacy options, and moderation policies.
      <a target="_blank" href="https://library.threefold.me/info/manual/#/manual__weblets_mastodon">
        Quick start documentation</a
      >
    </p>
    <hr />

    {#if loading || (logs !== null && logs.type === "VM")}
      <Alert type="info" message={logs?.message ?? "Loading..."} />
    {:else if !profile}
      <Alert type="info" message={noActiveProfile} />
    {:else if success}
      <Alert type="success" message="Successfully deployed Mastodon." deployed={true} />
    {:else if failed}
      <Alert type="danger" message={message || "Failed to deploy Mastodon."} />
    {:else}
      <Tabs {tabs} bind:active />

      <section style:display={active === "base" ? null : "none"}>
        {#each baseFields as field (field.symbol)}
          <Input bind:data={data[field.symbol]} bind:invalid={field.invalid} {field} />
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
          bind:data={data.nodeId}
          bind:status={data.status}
          bind:nodeSelection={data.selection.type}
          {profile}
          cpu={data.cpu}
          ssd={data.disks.reduce((total, disk) => total + disk.size, rootFs(data.cpu, data.memory))}
          memory={data.memory}
          publicIp={data.publicIp}
          nodes={data.selection.nodes}
          filters={data.selection.filters}
          on:fetch={({ detail }) => (data.selection.nodes = detail)}
        />
      </section>
      <section style:display={active === "admin_credentials" ? null : "none"}>
        <div class="notification is-warning is-light">
          <p>
            Mastodon requires admin credentials to set up your admin account which is all mastodon functionality depends
            on, so you can configure it, Enable the checkbox below to log in via threefold connect.
          </p>
        </div>
        {#each adminFields as field (field.symbol)}
          <Input bind:data={data[field.symbol]} bind:invalid={field.invalid} {field} />
        {/each}
      </section>

      <section style:display={active === "smtp" ? null : "none"}>
        <div class="notification is-warning is-light">
          <p>Mastodon does not require an SMTP server. If you want to use an SMTP server, you can configure it.</p>
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
        {#each smtpFields as field (field.symbol)}
          <Input
            bind:data={data[field.symbol]}
            bind:invalid={field.invalid}
            field={{ ...field, disabled: !editable }}
          />
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
