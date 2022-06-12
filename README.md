# EMTLibraryReactApp

EMTLibraryReactApp is a front-end application for EMTLibrary.

**Note: both of the apps need to be started at the same time for the Program to work**
link to EMTLibraryReactAPP: https://github.com/MarkoZoreski/EMTLibraryReactApp

---
## How to start the applications

1. Download both applications(EmtLibrary and EMTLibraryReactAPP)
2. Open EmtLibrary in an IDE and run the app
3. Open EMTLibraryReact in an IDE and use the terminal or navigate to EMTLibraryReact/libraryreactapp/ in command prompt and enter the following command:

### `npm install -g node-modules`

4. After the modules are installed successfully enter the following command:

### `npm start`

5. If all the above steps are done correctly you should be able to view the application in a browser at the following URL: http://localhost:3000/books

---
## Main Page

The Main Page contains a list of books devided into sets of 5 books per page. 
Each book shows the book title, category,	author and available copies. The books can be Edited, Deleted or Marked as taken.

![image](https://user-images.githubusercontent.com/83420035/173253870-5f22ab21-d80a-428b-820b-832a37dff37d.png)

---

## Add new Book

When clicking the "Add new Book" button you are given a form to enter information about a new book.

![image](https://user-images.githubusercontent.com/83420035/173253960-2cc0efd0-f89a-46d5-b9c6-6b6587c1e2b1.png)

After clicking the submit button,  your book will be added on the last page of the available books list.

![image](https://user-images.githubusercontent.com/83420035/173254024-387ee8df-9923-4e07-8d74-5246c04eecf0.png)

---

## Editing a Book

By clicking the "Edit" button you can change the information about the book and when you submit it will be updated in the books list.

![image](https://user-images.githubusercontent.com/83420035/173254100-03ef5237-a58b-494a-a512-b251862e1b38.png)

![image](https://user-images.githubusercontent.com/83420035/173254110-b1959fb7-cce2-494f-928c-cbb79ff8c3c1.png)

---
## Mark as Taken

By clicking the "Mark as Taken" button a book will be subtracted from the available copies.

![image](https://user-images.githubusercontent.com/83420035/173254226-ab09e32e-62fd-471e-96ea-6cadc14637c3.png)

When there are no available copies of a book the "Mark as Taken" button cannot be clicked anymore unless the books get restocked by editing them.

![image](https://user-images.githubusercontent.com/83420035/173254289-b6771427-4bfe-497a-ab84-9cb40f9cfa09.png)

---
## Deleting a Book

By clicking the "Delete" button the book gets removed from the books list.

![image](https://user-images.githubusercontent.com/83420035/173254608-b29f4ee1-9d45-4a26-a2c2-eb84b435392d.png)

---
## Where can i find the backend logic for this app?
Check out the Rest-Api backend app EMTLibrary at the following URL: https://github.com/MarkoZoreski/EmtLibrary
