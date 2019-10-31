// for lists
function makeListContent (data) {
  var listContent = '';

  for (var i in data) {
    listContent += makeListItem(data[i].name, data[i].products);
  }

  return listContent;

  // alternative way
  // return data.map(function (obj, i) {
  //   return '<div class="dropdown-title">' + obj.name + '</div><div class="dropdown-content">' + obj.products + '</div>';
  // }).join('');
}

function makeListItem (title, content) {
  return '<div class="dropdown-title">' + title + '</div><div class="dropdown-content">' + content + '</div>';
}

// for tabs
function makeTabs (data) {
  var btns = '<div class="tab-btn-container">',
    cnts = '<div class="tab-cnt-container">';

  for (var i in data) {
    btns += makeTabBtns(data[i].name);
    cnts += makeTabCnts(data[i].products);
  }

  btns += '</div>';
  cnts += '</div>';

  return btns + cnts;
}

function makeTabBtns (title) {
  return '<div class="tab-btn">' + title + '</div>';
}

function makeTabCnts (cnt) {
  return '<div class="tab-cnt">' + cnt + '</div>';
}
