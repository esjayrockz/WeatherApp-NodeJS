Developed a Node.JS weather app. 
This is a Command line app which takes an address from the user. The app shows the address and the weather, 
rather the temperature and the apparent temperature of the location.

More details -- The address passed by the user is requested to Google's geocode APIs which responds with corresponding address
information, more importantly the latitude and longitude of the location. This information is then requested to 
Forecast.io's Dark Sky API which then responds with corresponding weather information which is displayed to the user.
Options:
  --version      Show version number                                   [boolean]
  -a, --address  Address to fetch weather for                [string] [required]
  --help, -h     Show help

App usage example -- After cloning the project, go to the root location of the directory on the command line
and enter the following.
node app.js -a '434 Barton Creek Drive'

Output by app --
Address: 434 Barton Creek Dr, Charlotte, NC 28262, USA
It's currently 82.7F. It feels like 86.65F.

