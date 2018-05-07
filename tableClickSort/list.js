const table = document.getElementsByTagName('table')[0];
const title = table.getElementsByTagName('thead')[0].getElementsByTagName('th');
const obody = table.getElementsByTagName('tbody')[0];
const list = obody.getElementsByTagName('tr');
let tag = null;
let trArr = [];

for (let i = 0; i < title.length; i++) {
  title[i].onclick = function () {
    tag = this.innerHTML;
    listSort();
  }
}

function listSort() {
  let flag = -1;
  for (let i = 0; i < title.length; i++) {
    if (title[i].innerHTML === tag) {
      flag = i;
    }
  }
  
  for (let i = 0; i < list.length; i++) {
    trArr[i] = list[i];
  }

  (function() {
    let valueArr = [];
    for (let i = 0; i < trArr.length; i++) {
      valueArr[i] = +trArr[i].getElementsByTagName('td')[flag].innerHTML;
    }

    let str = valueArr.toString();
    if (str == valueArr.sort().toString()) {
      valueArr.reverse();
    }

    let fragment = document.createDocumentFragment();
    for (let i = 0; i < valueArr.length; i++) {
      for (let j = 0; i < trArr.length; j++) {
        if (valueArr[i] == +trArr[j].getElementsByTagName('td')[flag].innerHTML) {
          fragment.appendChild(trArr[j]);
          break;
        }
      }
    }
    obody.appendChild(fragment);
  })()

}