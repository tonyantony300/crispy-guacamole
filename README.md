<br /><br />
<p align="center">
<a href="https://osvauld.com">
  <img src="https://raw.githubusercontent.com/tonyantony300/crispy-guacamole/master/assets/logo.png" alt="Osvauld Logo" width="70">
</a>
</p>

<p align="center"><b>Credential management for teams in the most secure way</b></p>


<p>
   <a href="https://app.osvauld.com/#gh-light-mode-only" target="_blank">
      <img
        src="https://raw.githubusercontent.com/tonyantony300/crispy-guacamole/master/assets/Credential_Single_Card.png"
        alt="Osvauld Screens"
        width="100%"
      />
    </a>
        <a href="https://osvauld.com" target="_blank">
      <img
        src="https://raw.githubusercontent.com/tonyantony300/crispy-guacamole/master/assets/Add_new_user_to_group.png"
        alt="Osvauld Issue Details"
        width="100%"
      />
    </a>

</p>

<p>
    <a href="https://app.plane.so/#gh-light-mode-only" target="_blank">
      <img
        src="https://plane-marketing.s3.ap-south-1.amazonaws.com/plane-readme/plane_screen.webp"
        alt="Plane Screens"
        width="100%"
      />
    </a>
    <a href="https://app.plane.so/#gh-dark-mode-only" target="_blank">
      <img
        src="https://plane-marketing.s3.ap-south-1.amazonaws.com/plane-readme/plane_screens_dark_mode.webp"
        alt="Plane Screens"
        width="100%"
      />
    </a>
</p>

Meet [Osvauld](https://osvauld.com). An open-source credential management tool intended to solve password-mess teams face. Osvauld helps to enforce password/token hygiene and visibilty across your team thus resulting in better overall security.

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

- **Open-PGP sharing**: Quickly share credentials with your team with open-PGP sharing mechanism, It is a 40-year old battle tested cryptography protocol suit.
- **Share credential to groups of members**: Collaborate effectively by creating groups, share credentials exclusively with HR group or marketing group.
- **Arrange credentials as folders**: Folders are a great way to arrange tokens/keys which can be shared to groups or individuals in your team.
- **Intutive sharing mechanism**: Allocate access to credentials in simple steps, Read/Write/Owner access formats provide a shallow learning curve.
- **Credential assist**: Access corresponding credentials allocated and tied to URLs you visit with the popup easily.
- **Audit logs**: Admin can view which credentials are being accessed at what frequency.
- **Easy Password rotation**: Credentials can be tied to an expiray date as per company policies admin has the transparency to view and change production keys when required.


## 📸 Screenshots

<p>
    <a href="https://app.osvauld.com/#gh-dark-mode-only" target="_blank">
      <img
        src="https://raw.githubusercontent.com/tonyantony300/crispy-guacamole/master/assets/Add_Login_Credential.png"
        alt="Osvauld Screens"
        width="100%"
      />
    </a>
    <a href="https://osvauld.com" target="_blank">
      <img
        src="https://raw.githubusercontent.com/tonyantony300/crispy-guacamole/master/assets/Editing_Permissions.png"
        alt="Osvauld Views"
        width="100%"
      />
    </a>
</p>
<p>
    <a href="https://osvauld.com" target="_blank">
      <img
        src="https://raw.githubusercontent.com/tonyantony300/crispy-guacamole/master/assets/Add_new_user_to_group.png"
        alt="Osvauld Issue Details"
        width="100%"
      />
    </a>
</p>
<p>
    <a href="https://osvauld.com" target="_blank">
      <img
        src="https://raw.githubusercontent.com/tonyantony300/crispy-guacamole/master/assets/Group_Access_selected.png"
        alt="Osvauld Cycles and Modules"
        width="100%"
      />
    </a>
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