export default {

  getElementIndex(table, searched_id) {
    return table.findIndex(element => {
      return element.id === searched_id
    });
  },
  myMessageNotifer(s)
  {
    var e=document.createElement('audio');
    e.setAttribute('src', s);
    e.play();
    e.loop = false
  }

}