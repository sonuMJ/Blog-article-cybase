
# Blog-article-cybase API


| REQUEST | URL | Description |
| ---- | ----| ----|
| GET | /api/article/listall | listing of all articles |
| GET | /api/article/list/:category | listing of articles based on a category ```/:category => string``` |
| POST | /api/article/list | listing of articles based on multiple category ``` Request JSON => {"categories":["comedy","thriller"]}``` |
| POST | /api/article/add | add an article request required fields ```heading,readtime,description,categories,image,verified,newest,trending ```(requestbody-Json)|
| PUT | /api/article/update/:id | edit an article. Required : articlei(URL) ```heading,readtime,description,categories,image,verified,newest,trending ``` (requestbody-Json) |
| DELETE | /api/article/delete/:id | remove an article from the database. **@param Id** : the Id of the article need to be deleted |



## POST Request demo
![1](https://user-images.githubusercontent.com/29366799/127739692-281def63-7ca0-4316-8985-2ea85c5a80d8.PNG)

## PUT Request demo
![2](https://user-images.githubusercontent.com/29366799/127739728-87723b89-c251-4b7f-b37d-51009d9b132f.PNG)

## List all Article by multple category
![3](https://user-images.githubusercontent.com/29366799/127739750-ab608e24-d10e-4f3d-a734-06e0929bb32a.PNG)
