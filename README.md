<br /><br />
<p align="center">
<a href="https://osvauld.com">
  <img src="https://Osvauld-marketing.s3.ap-south-1.amazonaws.cosvauld-readme/plane_logo_.webp" alt="Osvauld Logo" width="70">
</a>
</p>

<h3 align="center"><b>Osvauld</b></h3>
<p align="center"><b>Credential management for teams in the most secure way</b></p>


<p>
    <a href="https://app.osvauld.com/#gh-light-mode-only" target="_blank">
      <img
        src="https://Osvauld-marketing.s3.ap-south-1.amazonaws.com/osvauld-readme/plane_screen.webp"
        alt="Osvauld Screens"
        width="100%"
      />
    </a>
    <a href="https://app.osvauld.com/#gh-dark-mode-only" target="_blank">
      <img
        src="https://Osvauld-marketing.s3.ap-south-1.amazonaws.com/osvauld-readme/plane_screens_dark_mode.webp"
        alt="Osvauld Screens"
        width="100%"
      />
    </a>
</p>

Meet [Osvauld](https://osvauld.com). An open-source software development tool to manage issues, sprints, and product roadmaps with peace of mind 🧘‍♀️.

> Osvauld is still in its early days, not everything will be perfect yet, and hiccups may happen. Please let us know of any suggestions, ideas, or bugs that you encounter on our [Discord](https://discord.gg/XU22FscZ) or GitHub issues, and we will use your feedback to improve on our upcoming releases.

The easiest way to get started with Osvauld is by creating a [Osvauld Cloud](https://app.osvauld.com) account. Osvauld Cloud offers a hosted solution for Osvauld. If you prefer to self-host Osvauld, please refer to our [deployment documentation](https://docs.Osvauld.so/docker-compose). 

## ⚡️ Contributors Quick Start

### Prerequisite

Development system must have docker engine installed and running.

### Steps

Setting up local environment is extremely easy and straight forward. Follow the below step and you will be ready to contribute

1. Clone the code locally using `git clone https://github.com/osvauld/web-client/Osvauld.git`
1. Switch to the code folder `cd Osvauld`
1. Create your feature or fix branch you plan to work on using `git checkout -b <feature-branch-name>`
1. Open terminal and run `./setup.sh`
1. Open the code on VSCode or similar equivalent IDE
1. Review the `.env` files available in various folders. Visit [Environment Setup](./ENV_SETUP.md) to know about various environment variables used in system
1. Run the docker command to initiate various services `docker compose -f docker-compose-local.yml up -d`

You are ready to make changes to the code. Do not forget to refresh the browser (in case id does not auto-reload)

Thats it!

## 🍙 Self Hosting

For self hosting environment setup, visit the [Self Hosting](https://docs.Osvauld.so/docker-compose) documentation page

## 🚀 Features

- **Issue Planning and Tracking**: Quickly create issues and add details using a powerful rich text editor that supports file uploads. Add sub-properties and references to issues for better organization and tracking.
- **Issue Attachments**: Collaborate effectively by attaching files to issues, making it easy for your team to find and share important project-related documents.
- **Layouts**: Customize your project view with your preferred layout - choose from List, Kanban, or Calendar to visualize your project in a way that makes sense to you.
- **Cycles**: Plan sprints with Cycles to keep your team on track and productive. Gain insights into your project's progress with burn-down charts and other useful features.
- **Modules**: Break down your large projects into smaller, more manageable modules. Assign modules between teams to easily track and plan your project's progress.
- **Views**: Create custom filters to display only the issues that matter to you. Save and share your filters in just a few clicks.
- **Pages**: Osvauld pages function as an AI-powered notepad, allowing you to easily document issues, cycle plans, and module details, and then synchronize them with your issues.
- **Command K**: Enjoy a better user experience with the new Command + K menu. Easily manage and navigate through your projects from one convenient location.
- **GitHub Sync**: Streamline your planning process by syncing your GitHub issues with Osvauld. Keep all your issues in one place for better tracking and collaboration.

## 📸 Screenshots

<p>
    <a href="https://osvauld.com" target="_blank">
      <img
        src="https://Osvauld-marketing.s3.ap-south-1.amazonaws.com/osvauld-readme/plane_views_dark_mode.webp"
        alt="Osvauld Views"
        width="100%"
      />
    </a>
  </p>
<p>
    <a href="https://osvauld.com" target="_blank">
      <img
        src="https://Osvauld-marketing.s3.ap-south-1.amazonaws.com/osvauld-readme/plane_issue_detail_dark_mode.webp"
        alt="Osvauld Issue Details"
        width="100%"
      />
    </a>
  </p>
  <p>
    <a href="https://osvauld.com" target="_blank">
      <img
        src="https://Osvauld-marketing.s3.ap-south-1.amazonaws.com/Osvauld-readme/plane_cycles_modules_dark_mode.webp"
        alt="Osvauld Cycles and Modules"
        width="100%"
      />
    </a>
  </p>
  <p>
    <a href="https://osvauld.com" target="_blank">
      <img
        src="https://Osvauld-marketing.s3.ap-south-1.amazonaws.com/Osvauld-readme/plane_analytics_dark_mode.webp"
        alt="Osvauld Analytics"
        width="100%"
      />
    </a>
  </p>
   <p>
    <a href="https://osvauld.com" target="_blank">
      <img
        src="https://Osvauld-marketing.s3.ap-south-1.amazonaws.com/Osvauld-readme/plane_pages_dark_mode.webp"
        alt="Osvauld Pages"
        width="100%"
      />
    </a>
  </p>
</p>
   <p>
    <a href="https://osvauld.com" target="_blank">
      <img
        src="https://Osvauld-marketing.s3.ap-south-1.amazonaws.com/Osvauld-readme/plane_commad_k_dark_mode.webp"
        alt="Osvauld Command Menu"
        width="100%"
      />
    </a>
  </p>
</p>

## 📚Documentation

For full documentation, visit [docs.osvauld.com](https://docs.osvauld.com/)

To see how to Contribute, visit [here](https://github.com/osvauld/web-client/Osvauld/blob/master/CONTRIBUTING.md).

## ❤️ Community

The Osvauld community can be found on GitHub Discussions, where you can ask questions, voice ideas, and share your projects.

To chat with other community members you can join the [Osvauld Discord](https://discord.gg/XU22FscZ).

Our [Code of Conduct](https://github.com/osvauld/web-client/Osvauld/blob/master/CODE_OF_CONDUCT.md) applies to all Osvauld community channels.

## ⛓️ Security

If you believe you have found a security vulnerability in Osvauld, we encourage you to responsibly disclose this and not open a public issue. We will investigate all legitimate reports. Email engineering@osvauld.com to disclose any security vulnerabilities.