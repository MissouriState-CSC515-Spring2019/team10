# Team 10
### Carmen Creswell, Kristopher Kvenvold, Hailey Martinelli, Tiffany Wortham

---
[Project Requirements](ProjectRequirements.md)  
[API Documentation](API-Documentation.md)  
[React READ ME](ReactREADME.md)

---
### Details

**API:** [Astronomical Applications API v2.2.0](https://aa.usno.navy.mil/data/docs/api.php)  
 * [Sun and Moon Data](https://aa.usno.navy.mil/data/docs/api.php#rstt)  
   * `https://api.usno.navy.mil/rstt/oneday?date=MM/DD/YYYY&loc=Springfield, Mo`
 * [Solar Eclipse Calculator](https://aa.usno.navy.mil/data/docs/api.php#soleclipse)  
   * `https://api.usno.navy.mil/eclipses/solar?year=YEAR`

**Framework:** React  
**Views:** 
1. Sunrise and sunset.
2. Moon rise, moon set, and phase.
3. List of solar eclipse for the year.

---
### How To Run
1. `npm install` (to install React)  
a. `npm audit fix` (if npm install finds vulnerabilities)
2. `npm start` (to run React)

---
### How To Run Tests
1. `nightwatch` (to run test suite)
Alternatively:
2. `nightwatch tests/e2e.js` (to run end to end test)
3. `nightwatch unit-test/e2e.js` (to run unit test (doesn't work, oops))

---
### Progress
- [X] April 12 - Teams finalized and project decided.
- [X] April 19 - Framework selected. Base project structure and tooling decided.
- [X] April 26 - Routing setup with static HTML/CSS views.
- [X] May 3 - 1 Unit and 1 E2E test working

---
### Work Distribution
- Carmen: API calls
- Kristopher: HTML/CSS (rewritten with React)
- Hailey: Routing
- Tiffany: Tests
