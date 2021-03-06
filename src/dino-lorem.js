export class DinoLorem {
  generateDino(paragraph, number) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
       let url = `http://dinoipsum.herokuapp.com/api/?format=json&words=${number}&paragraphs=${paragraph}`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      };
      request.open("GET", url, true);
      request.send();
    });
  }
}
