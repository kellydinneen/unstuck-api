## RESTful API for the [Rubberduck](https://github.com/kellydinneen/rubberduck) app
### Deployed on Heroku at https://unstuck-rubberduck-api.herokuapp.com

Recommendations for unsticking oneself are categorized as either **thinking** strategies or **rest and relaxation** strategies.

Under **thinking**, there are *oblique*, *scientific*, and *ideation* categories. Endpoints as follows:
- 'https://unstuck-rubberduck-api.herokuapp.com/api/v1/thinking/oblique'
- 'https://unstuck-rubberduck-api.herokuapp.com/api/v1/thinking/science'
- 'https://unstuck-rubberduck-api.herokuapp.com/api/v1/thinking/ideation'

Under **rest and relaxation**, there are *rest*, *nourishment*, and *movement* categories. Endpoints as follows:
- 'https://unstuck-rubberduck-api.herokuapp.com/api/v1/rr/rest'
- 'https://unstuck-rubberduck-api.herokuapp.com/api/v1/rr/nourishment'
- 'https://unstuck-rubberduck-api.herokuapp.com/api/v1/rr/movement'

Strategies in all categories are returned with the following structure:
```
  {
    "id": 7,
    "type": ["movement"],
    "name": "yoga",
    "content": "breathe in, breath out. Now...forward fold, halfway lift, downward dog, mountain pose x 3",
    "resource": "https://www.popsugar.com/fitness/Five-Minute-Yoga-Sequence-34770047",
    "contentMedium": "text",
  }
  ```
