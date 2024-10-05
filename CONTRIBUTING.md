# Contributing to India Dev Stack

First off, thank you for considering contributing to India Dev Stack! It's people like you that make India Dev Stack such a great tool for showcasing Indian-made developer tools.

## Table of Contents

1. [Code of Conduct](#code-of-conduct)
2. [How Can I Contribute?](#how-can-i-contribute)
3. [Adding a New Software Tool](#adding-a-new-software-tool)
4. [Submitting Changes](#submitting-changes)
5. [Style Guide](#style-guide)
6. [Community](#community)

## Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code. Please report unacceptable behavior to [ankit.jain@beeceptor.com](mailto:ankit.jain@beeceptor.com).

## How Can I Contribute?

There are many ways you can contribute to India Dev Stack:

- Add new software tools created by Indian founders
- Improve existing software listings
- Enhance the website's functionality
- Fix bugs
- Improve documentation

## Adding a New Software Tool

To add a new software tool to India Dev Stack, follow these steps:

1. Fork the repository
2. Create a new YAML file for your software in the `content/software` directory
3. Add a logo for your software in the `public/logos` directory
4. Add some pictures for your software in the `public/software` directory
5. Make sure your YAML file includes all necessary details (name, description, features, pricing, maker information, etc.) check the [schema](schema.json) here .
6. Submit a pull request

Here's an example of how your YAML file should be structured:

```yaml
Name: "Beeceptor"
Tagline: "Crafting API Magic, One Request At A Time"
Description: "Beeceptor is a comprehensive HTTP toolkit designed to streamline the API integration process for developers and QA professionals. It offers features like mock servers, local tunnels, and HTTP debugging to facilitate rapid development and efficient testing. A no-code & no-dependencies Service Virtualization tool."
Website: "https://beeceptor.com"
Features:
  - "Instant API mock server setup."
  - "Local tunnel for direct internet exposure of local services."
  - "OpenAPI Specification hosting for effortless API mock creation."
  - "HTTP request inspection and debugging."
  - "Build CRUD APIs for your development, testing, "
  - "No-code interface with CORS support and templating for responses."
Logo: "/logos/beeceptor_logo.jpeg"
Demo: "https://www.youtube.com/watch?v=eauSgng86ac"
pricing: "Freemium"
Images:
  - "/thumbnails/beeceptor-main.webp"
  - "/thumbnails/beeceptor-local-tunnel.png"
  - "/thumbnails/beeceptor-placement.png"

Makers:
  - Profile: "https://www.linkedin.com/in/ankitjaininfo/"
    Name: Ankit Jain
  - Profile: "https://www.linkedin.com/in/artibandi/"
    Name: Arti Bandi
Category: "Testing"
Tags:
  - "API"
  - "Mocking"
  - "Service Virtualization"
  - "Testing"
  - "AI"
Stage: "Active Customers"
HQ:
  - City: "Hyderabad"
    Country: "India"
Customers:
  - "Broadridge"
  - "New Relic"
  - "Freshworks"
  - "Salesforce"
  - "Twilio"
```

## Submitting Changes

1. Create a new branch in your fork for your changes
2. Make your changes in your branch
3. Ensure your code follows our [Style Guide](#style-guide)
4. Submit a pull request to the `main` branch of the India Dev Stack repository
5. Describe your changes in detail in the pull request description

## Style Guide

- Use consistent indentation
- Follow the existing code style in the project
- Write clear, descriptive commit messages
- Keep pull requests focused on a single change
- Add comments to your code where necessary

Again, thank you for your interest in contributing to India Dev Stack.✨🌸
Your efforts help make this project better for everyone! 
