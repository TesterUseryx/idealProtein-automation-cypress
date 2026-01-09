Subject: Greptile PR Check Tool - Testing Session Feedback & Issues Report

Dear Greptile Team,

I hope this email finds you well. I recently completed a testing session for the Greptile PR check tool and would like to share my findings. While I appreciate the opportunity to test your product, I encountered several issues during setup and while using the PR check functionality that I believe need attention before wider release.

## Overview

During my testing, I identified multiple issues that fall into two main categories:
1. **PR Check Functionality Issues** - Problems specifically related to the PR check feature
2. **General Application Issues** - Setup, navigation, and system stability problems

These issues, if left unaddressed, could significantly impact user experience, customer trust, and the overall reliability of the tool.

## PR Check Functionality Issues

### Issue #1: PR Check Disappears
**Description:** The Greptile PR check disappeared from a pull request after being initially visible.
**Impact:** Users lose visibility into check status and results.
**Reference:** https://github.com/TesterUseryx/idealProtein-automation-cypress/pull/2

### Issue #2: Check Not Triggered on Additional Commits
**Description:** After pushing additional changes to an existing PR, the Greptile check is not automatically triggered.
**Impact:** New code changes are not being analyzed, defeating the purpose of continuous PR monitoring.
**Reference:** https://github.com/TesterUseryx/idealProtein-automation-cypress/pull/2

### Issue #3: Check Triggered on Status Changes Instead of Code Changes
**Description:** The Greptile check is triggered when changing PR status (draft to ready for review, etc.) rather than only on actual code changes.
**Impact:** Unnecessary check runs, potential confusion, and wasted resources.
**Expected Behavior:** Checks should only trigger on code changes (commits, pushes), not on status updates.

### Issue #4: Repository Stuck in Indexing State
**Description:** A small repository remains stuck in the "indexing" state, with checks running indefinitely without completion.
**Impact:** Users cannot use the tool for affected repositories, and checks never provide results.
**Repository:** https://github.com/TesterUseryx/idealProtein-automation-cypress

### Issue #5: Check Removed After Commit
**Description:** After the initial Greptile check runs, subsequent commits cause the check to disappear entirely from the PR.
**Impact:** Loss of check visibility and inability to track analysis results over time.

## General Application Issues

### Issue #6: Unable to Enable Greptile on Empty Repository
**Description:** Attempted to enable Greptile on an empty GitHub repository but was unable to complete the setup process.
**Impact:** Users cannot set up Greptile for new or empty repositories, limiting use cases.

### Issue #7: Navigation Flow Problem

**Title:** Unable to proceed after navigating back to repository selection step

**Description:** After selecting all repositories and proceeding to the next step, navigating back to unselect some repositories causes the user to become stuck in the setup flow. The "Next" button disappears, and attempting to re-select repositories results in an error message indicating the repositories are already selected, leaving no way to proceed forward.

**Steps to Reproduce:**
1. Navigate to the repository selection step in the Greptile setup flow
2. Select all available repositories
3. Click "Next" to proceed to the next step
4. Navigate back to the repository selection step
5. Attempt to unselect some repositories
6. Try to proceed forward

**Expected Result:** 
- User should be able to navigate back to the repository selection step
- User should be able to unselect previously selected repositories
- The "Next" button should remain visible and functional
- User should be able to re-select repositories if needed
- User should be able to proceed forward after making changes

**Actual Result:**
- The "Next" button disappears after navigating back
- User cannot unselect repositories
- Attempting to re-select repositories shows an error message: "already selected"
- User is unable to proceed forward in the setup flow
- User becomes stuck and cannot complete the configuration

**Impact:** Users get stuck in the setup flow and cannot complete configuration.

### Issue #8: Unnecessary Email Notifications
**Description:** Receiving email notifications even when no actions have been taken, and the email formatting appears incorrect.
**Impact:** Email fatigue, confusion, and potential perception of system instability.

### Issue #9: Settings Page Unavailable During PR Check
**Description:** The settings page becomes non-functional while a PR check is in progress.
**Impact:** Users cannot access or modify settings during active checks, limiting flexibility.

### Issue #10: Session Error After Tab Inactivity
**Description:** Leaving the repository page open in a browser tab and returning the next day results in an error message.
**Impact:** Poor user experience, potential data loss, and need to restart workflow.

### Issue #11: Repository Limit Clarification Needed
**Question:** Is there a restriction on how many repositories can have Greptile enabled? This information would be helpful for planning and understanding system limitations.

## Recommendations

Based on my testing experience, I strongly recommend:

1. **Comprehensive Testing from Scratch:** Conduct a full end-to-end test of all functionalities, as the issues I encountered span multiple areas of the application and could significantly impact customer trust.

2. **Focus on Core PR Check Reliability:** The PR check functionality appears to have stability issues (disappearing checks, not triggering on commits, indexing problems) that should be prioritized.

3. **Improve Error Handling:** Many issues seem related to edge cases or error states that aren't properly handled, leading to confusing user experiences.

4. **Enhanced Testing Coverage:** Consider implementing automated testing to prevent regressions and ensure checks work consistently across different scenarios.

## Offer to Help

I understand that building and maintaining a reliable tool requires thorough testing. I would be happy to help in the following ways:

1. **Comprehensive Testing Contract:** I can perform a complete end-to-end test of the entire application, documenting all issues, edge cases, and potential improvements.

2. **Ongoing Testing Support:** If you find my testing valuable, I'm open to a longer-term arrangement where I can jump in whenever you need testing support, especially before major releases or feature updates.

3. **Test Automation:** I can help set up automated testing frameworks that would ensure you don't break existing functionality as you continue to develop the product.

I believe that addressing these issues proactively will significantly improve the product quality and user experience. I'm committed to helping make Greptile a reliable and trusted tool for the developer community.

Please let me know if you'd like to discuss any of these issues in more detail or if you're interested in working together on improving the testing coverage.

Thank you for your time and consideration.

Best regards,
Deniz Kesten

---
**Attachments:** Screenshots and references for all issues mentioned above are available upon request.








