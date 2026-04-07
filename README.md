# playwright-cli-load

## Dependencies

### Playwright Test
Playwright assumes the role of user testing the application, and it inspects and interacts with the HTML DOM elements using browser engines like Chromium, WebKit, and Firefox

    > Install VS Code extension for Playwright
    > npm init playwright@latest

Playwright codegen helps record workflows and automatically generate code for interactions. Codegen analyzes the rendered page and recommends the best locator, prioritizing role, text, and test id locators. 

### GitHub Copilot
GitHub Copilot is an AI pair programmer that works alongside the editor, suggesting entire lines or functions.
It supports creating, executing, and debugging Playwright Test code.

    > Install VS Code extension for GitHub Copilot

### Playwright CLI
Microsoft playwright-cli with skills provides a platform for coding agents like GitHub Copilot to use context-based commands to inspect the application.
It's suitable for high-throughput coding for browser automation tests and reasoning within limited context windows.

    > npm i -g @playwright/cli@latest
    > playwright-cli install --skills
    > Requires Node.js 18 or newer (https://nodejs.org/en/download)
    > Requires Claude Code, GitHub Copilot, or any other coding agent.

 ### Azure App Testing
 Azure Load Testing uses AI-powered actionable insights to identify and troubleshoot performance issues in the application. It analyzes the test run data using  
 AI to highlight key issues—such as latency spikes, throughput drops, or backend resource bottlenecks—and provides recommended next steps.
    > Requires an Azure account with a subscription
    > Create Azure Load Testing resource by running Load Testing: Open Walkthrough in VS Code
    > Specify the web application endpoint and basic load configuration parameters

    > Install VS Code extension for Azure Load Testing 
    > brew install jmeter (dependency on brew installation) 
    

## playwright-cli demo

### Example 1
> Use playwright skills to test https://demo.playwright.dev/todomvc/.
  Take screenshots for all successful and failing scenarios.
Your agent will be running commands, but it does not mean you can't play with it manually:

    playwright-cli open https://demo.playwright.dev/todomvc/ --headed
    playwright-cli type "Buy groceries"
    playwright-cli press Enter
    playwright-cli type "Water flowers"
    playwright-cli press Enter
    playwright-cli check e21
    playwright-cli check e35
    playwright-cli screenshot

### Example 2
    > playwright-cli open https://www.howdens.com/kitchens --headed
    > playwright-cli click 'button#onetrust-accept-btn-handler'
    > playwright-cli snapshot 

### Example 3
    > jmeter -n -t "/path to script locally/playwright-cli-load/jmeter-script.jmx" -l "/path to results locally/playwright-cli-load/results.jtl"
