# Linker-v1.0
Chrome Extension/Plugin made for simplifying browser experience. 

Every day user open similar websites which he can open by
1) Typing URL
2) Creating Bookmark
3) Opening Website From History

but imagine if we have 10-15 websites opened in different chrome window that we need to open on regular basis , then opening them by following those steps will be time consuming and need to remember what was opened what need to be opened ?

This plugin Creates Group Of All Opened Webpages Under Opened Window Into One Named Group , We Can Create Unlimited Groups with Unlimited Webpages, 

This plugin will help you to
1) Save All Opened URL's Of Opened Window In One Group
2) Open All Unopened URL's Under Particular Group
3) Delete Group
4) Update Group

To Save Webpages / Create Group - 
click on  "Save Opened Pages" , it will ask to enter "Group Name" in text field, click "Save" . This will collect all opened webpage 
urls and store them in localStorage with key as Entered Group Name. You can cancel process , by clicking "Cancel"

To open saved webpage URL -
Click on "Open Saved Pages" , select specific "Group Name" from the dropdown , click "Open" . It will open will the webpages one by one,
but it will not open webpage which is already opened , If all URL's are opened then it will show " All URL's Are Opened".
You can cancel process , by clicking "Cancel".

To delete group -
Click on "Delete Saved Pages" , select specific "Group Name" from the dropdown , click "Delete" . It will search for selected 
"Group Name" and it will remove it from localStorage.
You can cancel process , by clicking "Cancel".

To update group -
close/open webpages that you need to remove/add in the specific already created group , follow " To Save Webpages / Create Group " ,
in place of "Group Name" add same "Group Name" that you want to update.
You can cancel process , by clicking "Cancel".

All crud operations implemented using javascript and jquery library.


How to Install In Chrome :
step 1 : Clone/download zip of this project.

step 1.1 : Unzip downloaded file.

step 2 : Open chrome browser.

step 3 : Click 3 dots icon from top right hand side corner.

step 4 : Select "More Tools".

step 5 : Select "Extension".

step 6 : Check "Developer Mode" from top right hand side.

step 7 : Click "Load Unpacked" from top left hand side corner.

step 8 : Locate Cloned/Unzipped Parent FOlder.

step 9 : Click "OK".

step 10 : Now Your "Linker" Plugin Is Ready To Rock !!!.


