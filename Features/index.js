var reporter = require('cucumber-html-reporter');

var options = {
        theme: 'bootstrap',
        brandTitle:'Amazon.com',
        jsonFile: 'cucumber-report.json',
        output: 'cucumber_report.html',
        reportSuiteAsScenarios: true,
        scenarioTimestamp: true,
        launchReport: true,
        metadata: {
            "App Version":"1",
            "Test Environment": "Test",
            "Author": "Chromium 101.0.4950.0",
            "Platform": "Windows 10",
            "Parallel": "Scenarios",
            "Executed": "Remote"
        }
    };

reporter.generate(options);