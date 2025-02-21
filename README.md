Detailed Comments & Explanation
Check for Redundancy:

The checkWaterSourceBeforeAdding function queries the Firestore database to check if a water source with the same name, latitude, and longitude already exists. If it does, it shows a toast message indicating that the water source already exists.
Ensure Category Consistency:

The addWaterSource function includes a validation check to ensure that the name of the water source matches the selected category. For example, if the category is "River," the name should contain "River." If there is a mismatch, it shows a toast message indicating the mismatch.
Uploads Images and Adds Water Source:

The uploadImagesAndCheckWaterSource function uploads the selected images to Firebase Storage and then calls the checkWaterSourceBeforeAdding function to verify redundancy before adding the new water source.
Ensure Correct Implementation:
Make sure to sync your project with Gradle files after making changes to the dependencies.
Ensure that your Firestore rules allow reading and writing for the operations you are performing.
If you still encounter issues, debug by checking the logs to see if the redundancy check query is being executed correctly.
On The Add Water Source Module
1 - Initializing UI Components: Initialize 'EditText','Button', 'Linear Layout' and 'Spinner' for user inputs and actions
2 - Initializing Firebase components: Initialize Firestore and Firebase Storage.
3 - Set up category spinner: Populate the spinner with predefined categories and set an onItemSelectedListener to show the otherInput field when "Other" is selected.
4 - Image selection: Allow users to select multiple images from their device and display selected images in the UI.
5 - Upload images and add water source: Upload the selected images to Firebase Storage, get their URLs, and add the water source details (including the category) to Firestore.
6 - Pass data back to MainActivity: Pass the added water source data back to MainActivity to update the map with a new marker.
