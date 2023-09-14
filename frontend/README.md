# my-recipe-app

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### Stuff I need from back-end

- API Endpoint: A single endpoint /api/searchRecipes

- HTTP Method: POST

- Request Format: A JSON object containing an array of ingredients. For example:
    {
    "ingredients": ["tomato", "cheese", "basil"]
    }

- Response Format: A JSON object containing an array of recipes. For example:
    {
    "recipes": [
        {
        "id": 1,
        "name": "Tomato Basil Pasta",
        "description": "A simple yet tasty dish",
        "imageURL": "some_url_here"
        },
        // ... more recipes
    ]
    }

- Error Cases: what happens if no recipes are found?
