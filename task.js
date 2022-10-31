class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
      this.name = name;
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
      this.state = 100;
      this.type = null;
}

fix() {
   this.state *= 1.5; 
}

set state(number) {
  if(number < 0) {
    this._state = 0;
} else if (number > 100) {
    this._state = 100;
} else {
    this._state = number;
}   
} 
get state() {
    return this._state;
}  
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.type = "magazine";
} 
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.author = author;
      this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author,name, releaseDate, pagesCount) {
      super(author,name, releaseDate, pagesCount);
      this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author,name, releaseDate, pagesCount) {
      super(author,name, releaseDate, pagesCount);
      this.type = "detective";
    }
}


class Library {
    constructor(name, books) {
      this.name = name;
      this.books = [];
    }

    addBook(book) {
    if(book.state > 30) {
    this.books.push(book);
    }
    }

    findBookBy(type, value) {
      for(let element in this.books) {
      if(this.books[element][type] === value) {
      return this.books[element];
    } else {
    } 
    }
      return null;
    }

    giveBookByName(bookName) {
      for(let element of this.books) {
      if(element.name === bookName) {
      return  this.books.splice(element, 1)[0];
    } else {
    }  
    }
      return null; 
    }
}


class Student{
    constructor(name) {
      this.name = name;
      this.subjects = [];
    }
    
    addMark(mark, subjectName) {
      this.subjects[subjectName];
      if (mark < 1 || mark > 5) 
      return 'Ошибка, оценка должна быть числом от 1 до 5';
     (this.subjects[subjectName] === undefined) ? this.subjects[subjectName] = [mark] : 
      this.subjects[subjectName].push(mark);
    }
    
    getAverageBySubject(subjectName) {
      let marks = this.subjects[subjectName];
      if (marks === undefined) 
      return "Предмета не существует";
      let sum = 0;
      marks.forEach(element => sum += element) 
      return sum / marks.length;
    }
    
    getAverage() {
      let sum = 0;
      let marks = Object.keys(this.subjects);
      marks.forEach(element => sum += this.getAverageBySubject(element))
      return sum / marks.length;
    }
    
    exclude(reason) {
      delete this.subjects;
      this.excluded = reason;
    }
  }