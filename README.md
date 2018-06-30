# Yet [Lebla]

#### Description
Yet-lebla's REST API and web client implemented for SE project.

#### Developed by
S.E (Regular, Section 2)

**Natnael Sisay** 

**Robel Ephraim** 

**Yosef Worku** 

**Tibebeselasie Mehari** 




#### Implementation details & Dependencies
The REST API uses "**express** as a back-end framework since it provides ease of making **middlewares** (that we have used for authentication & other useful features) and handling **routing**.

As for the persistance tier, we have used **mongoose library**. This is because it introduces the idea of using **schema** into the schema-less world of the document based database MongoDB**. Also, it serves as an ODM. (lets us interact with high-level models and it 
takes care of making a connections and interacting with the database).

We have also used passport.js for a token authentication with Bearer Token Scheme. 

All the 3-rd party dependencies can easily be installed by running:

`$ root@local: npm install`

#### Environment
latest version of **node.js** (8+ at the time of development)

#### Usage
###### To start the API
first spin up a MongoDB instance on your machine (must be running port 27017)

goto the `bin` folder. (use `cd` command in terminal or CMD)

then run

`$ root@local: node www`

the server will be running on PORT 3001 unless specified in command line arguments.
