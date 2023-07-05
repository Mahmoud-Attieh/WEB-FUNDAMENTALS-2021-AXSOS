function increment() {
    let like = document.querySelector(".likes-time");
    var likeNumber = parseInt(like.innerText)
    likeNumber++ ; 
    like.innerText = likeNumber; 

}