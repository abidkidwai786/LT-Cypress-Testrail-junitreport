# Cypress code-first sample project

This project is using a code-first workflow. This is the approach you should use if you want your test cases to be automatically created in TestRail and not worry about mapping them manually. Using this approach, you don't need to do any modifications to the way you usually write your automated test cases. You can see sample tests in the `cypress/e2e/todo_app` folder. 

## How to use the project

Before executing the script, replace the placeholders in `trcli-config.yml` with your TestRail instance details.

Notice the `-y` option on the script below. This will allow all test entities to be automatically created.

```sh
# Install TR CLI
pip install trcli

# Install JUnit parser
pip install junitparser

# Install test project
npm install

# Run tests
npx cypress run

# Merge reports
junitparser merge --glob "reports/my-test-output-*" "reports/junit-report.xml"

# Upload test results
trcli -y -c "trcli-config.yml" parse_junit -f "reports/junit-report.xml"


LAMBDATEST STEPS:-

# Create lambdatest-config.json file
lambdatest-cypress init

# Run tests on LambdaTest
lambdatest-cypress run --sync=true

# Merge reports
junitparser merge --glob "lambdatest-artefacts\e7932d3d-d74f-4b08-add0-73b489fd55e4\Chrome\110.0\**\reports\my-test-*.xml" "reports/junit-report.xml"

# Upload test results
trcli -y -c "trcli-config.yml" parse_junit -f "reports/junit-report.xml"
```
