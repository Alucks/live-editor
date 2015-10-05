#IGN Live Graphics Editor

The new Live Graphics Editor allows for quick editing of graphics for life events, provides animations entrance and exit animations and allows the import of spreadsheet data. All of these features combined provide a streamlined workflow to produce high quality graphics with minimal effort.


##Spreadsheet guide
Never include double or single quotes in the spreadsheet.
Columns Marked Yellow  only accept specially formatted entries. Icons can only accept the outlined icon values listed in the available icons chart. The Full Social Background image only can have links to image assets.

The first row in each sheet is marked Red and CANNOT be edited, as it assigns the input values to the correct database entries. The tab of the spreadsheet CANNOT be edited for the same reason.       
Exporting your spreadsheet as JSON
Once your spreadsheet data is ready to be placed in the live editor press the ‘Export JSON’ button at the top of the spreadsheet and select ‘Export JSON for all sheets’.  You can then copy the exported all the exported text and paste it into the Show Data text area at the bottom of the editor. Pressing import will then take of the data and add it as saves in the live editor.

If you are not seeing the Export JSON button refer to this guide to add it to a spreadsheet.
http://blog.pamelafox.org/2013/06/exporting-google-spreadsheet-as-json.html

##Local Machine Setup
Below you will find the instructions for getting your machine ready to run the IGN Live Graphics Editor. While a machine is being used for a live stream, no other applications Chrome and a note app should be used to insure minimal notifications. A second display that is 1080p is required to render the live output on.
System Setup
Ensure that your second screen does not have a menu bar when the window is fullscreened.
  1. Open System Preferences > Mission Control
  2. Uncheck ‘Displays have separate Spaces’
  3. Logout of your mac and back in for the change to take effect.

##Editor Setup
Download the following GitHub Code: https://github.com/Alucks/live-editor  with ‘Download Zip’ button.
Extract the zip file and place the live-editor-master folder in your documents folder.
Open Terminal and  run the following 2 commands:
1. > cd documents/live-editor-master     
2. > python -m SimpleHTTPServer 8080
3. Install the two fonts available here: https://drive.google.com/a/ziffdavis.com/folderview?id=0B7htGoGow2ZcbXpYWm91Y2w0Xzg&usp=sharing
4. Open http://localhost:8080/editor.html in chrome on your main display.
5. Open http://localhost:8080/live.html in chrome on your secondary 1080p display. Double Click on the Browser to enter a full screen display.
6. Controlling The Graphics
7. Push Live Button: Take the current preview display and push it to the live view.
8. Clear Button: Remove all graphics from preview and the live view.

Editing Live Modules When you make text changes or icon changes to a module that is currently live, and press ‘push live’ again the module will immediately update. You can use this to make correction on currently live graphics without taking them down.

This also mean that if you want to use a module that is currently live with different information it must be taken down before new content is loaded in. If you load a new data into a module and take it down at the same time, the text in the module will update before the exit animation is run.  
