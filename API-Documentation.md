# API Documentation

## CSS
If possible the `day.css` should be used for the sun page, and
`night.css` should be used for the moon and eclipse pages.
This is not required for the finally product, and is an extra.

## Header
`<span id="dateHeader">` The date for this should come from a global date variable.
If the date is added via the URL as a `localhost:####/MM-DD-YYYY` the global date should be updated 
to that date.

## Navigation
* `<button id="nav-left-button">` Should link to the sun page.
* `<button id="nav-center-button>` Should link to the moon page.
* `<button id="nav-right-button">` Should link to the eclipse page.

## Sun
#### Sunrise
* The targeted element is `<div id="sunrise">`.
* The sunrise time data comes from the API URL
`https://api.usno.navy.mil/rstt/oneday?date=MM/DD/YYYY&loc=Springfield, MO`.
* The data will be in the following section of the JSON.
`sundata":[{"phen":"R", "time":"HH:MM p.p. DT"},`. The DT at the end should be removed.
* The date used for the API call should be from the global date.
* The result should be concatenated with `"Sunrise: "`.

#### Sunset
* The target element is `<div id="sunset">`.
* The sunset time data comes from the API URL
`https://api.usno.navy.mil/rstt/oneday?date=MM/DD/YYYY&loc=Springfield, MO`.
* The data will be in the following section of the JSON
`sundata":[{"phen":"S", "time":"HH:MM p.p. DT"},`. The DT at the end should be removed.
* The date used for the API call should be from the global date.
* The result should be concatenated with `"Sunset: "`.

## Moon
#### Moon Rise
* The target is `<div id="moonRise">`.
* The moon rise data comes from the API URL
`https://api.usno.navy.mil/rstt/oneday?date=MM/DD/YYYY&loc=Springfield, MO`.
* The data will be in the following section of the JSON.
`moondata":[{"phen":"R", "time":"HH:MM p.p. DT"}`.
* The date used for the API call should be from the global date.
* The result should be concatenated with `"Moon Rise: "`.

#### Moon Set
* The target is `<div id="moonSet">`.
* The moon rise data comes from the API URL
`https://api.usno.navy.mil/rstt/oneday?date=MM/DD/YYYY&loc=Springfield, MO`.
* The data will be in the following section of the JSON.
`moondata":[{"phen":"S", "time":"HH:MM p.p. DT"}`.
* The date used for the API call should be from the global date.
* The result should be concatenated
with `"Moon Set: "`.

<u>**NOTE:**</u> The API does not take into account that the date changes at midnight. Add one day to a 
local date and concatenate to time.

#### Moon Phase
* The target element is `<div id="moonPhase">`.
* The moon phase data comes from the API URL
`https://api.usno.navy.mil/rstt/oneday?date=MM/DD/YYYY&loc=Springfield, MO`.
* The data will be in the following section of the JSON
`curphase":"PHASE`.
* The date used for the API call should be from the global date. The result is a the phase as is.

<u>**NOTE:**</u> I just noticed that `curphase":"PHASE` disappears when the moon reaches its "closest phase."
There might need to be an IF statement to check for `curphase":"PHASE` and replace it with
`closestphase":{"phase":"PHASE","date":"Month DD, YYYY","time":"HH:MM p.p. DT"},`.

* The target element is `<div id="moonImage">`.
* The moon phase data comes from the API URL
`https://api.usno.navy.mil/rstt/oneday?date=MM/DD/YYYY&loc=Springfield, MO`.
* The data will be in the following section of the JSON
`curphase":"PHASE` or `"fracillum":"##%",`.

<u>**NOTE:**</u> At this time I am not sure how to handle this. We can can an image from a set (easier?).
Or we can use CSS to change a gradient over a default image (as is currently in template). There might need to 
be an IF statement to check for `curphase":"PHASE` and replace it with
`closestphase":{"phase":"PHASE","date":"Month DD, YYYY","time":"HH:MM p.p. DT"},`.


## Eclipse
* The target element is `<div id="eclipseInYear">`. It should concatenated with `"Eclipses in "` 
and the year from the global date.
* The target element is `<ul id="eclipseData">`. The eclipse data comes from the API using
`https://api.usno.navy.mil/eclipses/solar?year=YYYY`.
The data will be in the following section of the JSON
`"eclipses_in_year":[{data},{data}...]`
The date used for the API call should be from the global date. It should return an unordered list.