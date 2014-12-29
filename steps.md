# Steps to create a Polymer reusable element

1.  Install Node.js and NPM
2.  Run npm install -g yo (yo, grunt, bower)
3.  Run npm install -g grunt-cli (command line for grunt)
5.  Run npm install -g generator-polymer
6.  Create the root folder inside which all your polymer elements
    will be created (E.g. WebComponents)
    1. mkdir -p WebComponents && cd WebComponents
7.  Run yo polymer:seed your-element-name
8.  Run npm init to initialize packages.json
    1. Enter data
9.  Run npm install grunt --save-dev
10. Run npm install grunt-contrib-jshint --save-dev
11. Run npm install grunt-vulcanize --save-dev
12. Run npm install grunt-usemin --save-dev
12. Run npm install grunt-contrib-concat grunt-contrib-uglify grunt-contrib-cssmin grunt-filerev --save-dev
13. Run npm install grunt-contrib-copy grunt-contrib-clean --save-dev
13. Run npm install load-grunt-tasks --save-dev
12. Create dist and css folders
13. Copy paste the basic Gruntfile --> I should create a ricardo seed-element template
    with the basic folder structure, package.json, bower.json and Gruntfile.js files.


N.B. vulcanizing a polymer-element along with its JS and CSS files, adds
HTML, HEAD and BODY tags and strips out the polymer HTML import, therefore
the whole vulcanization process breaks the component!
How can we simply create a polymer-element containing all the css and the js
code inside it, keeping the structure of the original polymer element?


9.  Run git init to initialize the git repository
