# Grid Weblets

![Version: 1.0.0](https://img.shields.io/github/v/release/threefoldtech/grid_weblets?style=flat-square)

## Introduction

Weblets are a UI tool helps to deploy solutions on TF Grid v3. A weblet is a compiled javascript web component which can be embedded in HTML page of a web app. The backend for the weblets is introduced with [grid client](../manual3_iac/grid3_javascript/grid3_javascript_home) which communicate to TF Chain and TF Grid over RMB.

Weblets is a svelte project for creating web components - which are reusable custom elements with their functionality encapsulated away from the rest of the code — that interact with TF Grid 3 and could be utilized from other web apps.
It solves such problem where you had to write complex HTML (and associated style and script) to render custom UI controls (eg, to deploy some workload on the TF Grid 3), and how using them multiple times in different projects can be a miss if you are not careful.

## Installation

- **Get the code**

  Clone the repository:

    ````bash
    git clone https://github.com/threefoldtech/grid_weblets.git
    ````

- [**Prepare the environment**](./docs/config.md)

## Getting Started

> For detailed information you can read the [Getting Started](./docs/getting_started.md) documentation.

Before run Weblets, in your terminal move to the project directory.

- **Run Weblets in Development**

```bash
yarn serve:app
```

- **Run Weblets in Production**

```bash
yarn serve:app
```

## Related Documentations

- [Prepare the environment](./docs/config.md)
- [Getting Started](./docs/getting_started.md)
- [Contributing Guide](./docs/contributing.md)
- [How to run tests](./docs/cypress.md)
- [Weblets documentation](https://library.threefold.me/info/manual/#/manual__weblets_profile_manager)
- [Pipelines documentation](./docs/workflows.md)
