# Blog-article-cybase API


| REQUEST | URL | Description |
| ---- | ----| ----|
| GET | /api/article/listall | listing of all articles |
| GET | /api/article/list/:category | listing of articles based on a category ```/:category => string``` |
| POST | /api/article/list | listing of articles based on multiple category ``` Request JSON => {"categories":["comedy","thriller"]}``` |
| POST | /api/article/add | add an article request required fields ```heading,readtime,description,categories,image,verified,newest,trending ```(requestbody-Json)|
| PUT | /api/article/update/:id | edit an article. Required : articlei(URL) ```heading,readtime,description,categories,image,verified,newest,trending ``` (requestbody-Json) |
| DELETE | /api/article/delete/:id | remove an article from the database. **@param Id** : the Id of the article need to be deleted |

