# playwright-cli-load
## Dependencies 
    > npm i -g @playwright/cli@latest
    > playwright-cli install --skills
    > Azure Load Testing extention
    > brew install jmeter
    Create Load Testing by running Load Testing: Open Walkthrough in VS Code

## Demo

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
