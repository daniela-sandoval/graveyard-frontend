class ApiAdapter {

  static setCurrentUser(name){
    let currentUser = {
      "name": name
    }
    let config = {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(currentUser)
    }
    return fetch("https://graveyard-app-api.herokuapp.com/users", config)
      .then(rsp => rsp.json())
  }

  static fetchStories() {
    return fetch("https://graveyard-app-api.herokuapp.com/stories")
  }

  static fetchOneStory(id) {
    return fetch(`https://graveyard-app-api.herokuapp.com/stories/${id}`)
      .then(rsp => rsp.json())
  }

  static searchStories(searchParams) {
    let search = {
      "search": searchParams
    }
    let config = {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(search)
    }
    return fetch("https://graveyard-app-api.herokuapp.com/search", config)
      .then(rsp => rsp.json())
  }
  static getTags(){
    return fetch(`https://graveyard-app-api.herokuapp.com/tags`)
      .then(rsp => rsp.json())
  }

  static createStory(title, content, checkedTags){
    let newStory = {
      "title": title,
      "content": content,
      "user_id": localStorage.userid,
      "tags": checkedTags
    }
    let config = {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newStory)
    }
    return fetch("https://graveyard-app-api.herokuapp.com/stories", config)
      .then(rsp => rsp.json())
  }
  static likeStory(){
    let newStory = {
      "user_id": localStorage.userid,
      "story_id": localStorage.storyid
    }
    let config = {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newStory)
    }
    return fetch("https://graveyard-app-api.herokuapp.com/likes", config)
      .then(rsp => rsp.json())
  }
  static commentStory(comment){
    let newStory = {
      "content": comment,
      "user_id": localStorage.userid,
      "story_id": localStorage.storyid
    }
    let config = {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newStory)
    }
    return fetch("https://graveyard-app-api.herokuapp.com/comments", config)
      .then(rsp => rsp.json())
  }
  static deleteStory(){
    // console.log("clicked");
    const id = localStorage.storyid
    let config = {
      method: "DELETE"
    }
    fetch(`https://graveyard-app-api.herokuapp.com/stories/${id}`, config)
      .then(rsp => rsp.json())
      .then(Utility.removeStone)
  }
  static filterStone(tags){
    let filter = {
      "tag_ids": tags
    }
    let config = {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(filter)
    }
    return fetch("https://graveyard-app-api.herokuapp.com/filter", config)
      .then(rsp => rsp.json())
  }
}
